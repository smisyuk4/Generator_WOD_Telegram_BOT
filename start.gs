function start(sheet1, dotID, idChatWBot){  
   var list = [
    'Разминка', 
    'Верх', 
    'Пресс', 
    'Низ'
  ]
  
  for (var i=0; i<list.length; i++){      
     createrWod (sheet1, list[i]); 
     sendSMS(wodArr, dotID, idChatWBot)      
     Utilities.sleep(1*1000); //задержка отправки блока сообщения в 1 секунду
  }  
}
