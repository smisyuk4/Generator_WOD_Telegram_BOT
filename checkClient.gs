function checkClient(sheet1, dotID, idChatWBot, idChatWCoach, nameClient, dateUnix, today){ 
   //проверка на наличие клиента в базе       
    var listUser = sheet1.getSheetByName("Клиент");
    var lastR = listUser.getLastRow();   
    var userArr = listUser.getRange(2, 1, lastR, 1).getValues();   
    var newUserArr = userArr.map(function(r){return r[0];});    
  
    if (newUserArr.includes(nameClient)){
      var curentRow = (newUserArr.indexOf(nameClient))+2;         
      
      //проверка на наличие оплаты от клиента
      var paymentStatus = listUser.getRange(curentRow, 2).isChecked();         
      if(paymentStatus == true){         
        //проверка действительности подписки
        subscriptionControl(sheet1, listUser, curentRow, today, dotID, idChatWBot, idChatWCoach, nameClient);        
        if(subscribeStatus == true){ 
          //проверка суточного разрешения на тренировку    
          checkDate(sheet1, listUser, curentRow, dateUnix, dotID, idChatWBot);
         }        
      } else {        
        sendSMS('Вы хотели получить тренировку, но нет оплаты. Обратитесь к Балакиреву С. @Balakirev_Sergey87', dotID, idChatWBot); //отправить клиенту        
        sendSMS(nameClient + ' - хотел(а) получить тренировки, но нет оплаты.', dotID, idChatWCoach); //отправить тренеру    
      }      
    } else {
      //записать внизу списка
      listUser.getRange(lastR+1, 1).setValue(nameClient);
      listUser.getRange(lastR+1, 2).insertCheckboxes();  
      listUser.getRange(lastR+1, 3).setValue(idChatWBot);      
      sendSMS('Вы хотели получить тренировку, но нет оплаты. Обратитесь к Балакиреву С. @Balakirev_Sergey87', dotID, idChatWBot); //отправить клиенту   
      sendSMS(nameClient + ' - хотел(а) получить тренировки, но нет оплаты.', dotID, idChatWCoach); //отправить тренеру    
    }    
}
