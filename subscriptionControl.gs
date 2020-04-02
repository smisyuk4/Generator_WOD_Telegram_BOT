function subscriptionControl(sheet1, listUser, curentRow, today, dotID, idChatWBot, idChatWCoach, nameClient) {   
   var subscribeTime = 7;  
   var dateFirstWod = listUser.getRange(curentRow, 4).getValue(); 
  
  if (dateFirstWod == ''){
    dateFirstWod = today;             
  } 
  
  var dateFirstWodDay = today.getDate();
  var dateFirstWodMonth = today.getMonth()+1;
  var dateFirstWodYear = today.getYear();   
      
  var dateFinishPay = new Date(dateFirstWod.setDate(dateFirstWod.getDate() + subscribeTime));      
  var dateFinishPayDay = dateFinishPay.getDate();
  var dateFinishPayMonth = dateFinishPay.getMonth() + 1;
  var dateFinishPayYear = dateFinishPay.getYear();  
  
  if ((dateFirstWodDay == dateFinishPayDay) && (dateFirstWodMonth == dateFinishPayMonth) && (dateFirstWodYear == dateFinishPayYear)){
    listUser.getRange(curentRow, 2).uncheck();     // снять галочку с оплаты
    sendSMS('Ваша подписка закончилась, прошло 7 дней. Обратитесь за новой к Балакиреву С. @Balakirev_Sergey87', dotID, idChatWBot);    
    sendSMS(nameClient + ' - хотел(а) получить тренировки, но уже закончилась подписка на ' + subscribeTime + ' дней.', dotID, idChatWCoach); //отправить тренеру 
    return subscribeStatus = false;
  } else {   
    // сравнить даты    
    return subscribeStatus = true;
  }   
}
