function checkDate(sheet1, listUser, curentRow, dateUnix, dotID, idChatWBot){
  //проверка количества запросов на тренировку   
  var column = 4;
  
    var today = new Date(dateUnix * 1000);
    var todayDay = today.getDate();
    var todayMonth = today.getMonth()+1;
    var todayYear = today.getYear();
  
  
  while (column < 11){
       var oldDate = listUser.getRange(curentRow, column).getValue();
       if (oldDate == ''){
         listUser.getRange(curentRow, column).setValue(today);  
         sendSMS('Получи свою шикарную тренировку!', dotID, idChatWBot); //отправить клиенту         
         //выдать тренировку клиенту
         start(sheet1, dotID, idChatWBot);
         break;
       } else {         
           var oldDateDay = oldDate.getDate();
           var oldDateMonth = oldDate.getMonth()+1;
           var oldDateYear = oldDate.getYear();     
    
             if((todayDay == oldDateDay) && (todayMonth == oldDateMonth) && (todayYear == oldDateYear)){      
               sendSMS('Извини, тренировку можно получить 1 раз в день. Сделай запрос завтра.', dotID, idChatWBot); //отправить клиенту                   
               break;
             } else {
               column++;                           
             }              
       }
  }
}
