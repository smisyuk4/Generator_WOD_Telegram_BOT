function doPost(e) {
  var sheet1 = SpreadsheetApp.openById("");   
  var dotID = '';    
  var idChatWCoach = ''; //Балакирев
  //var idChatWCoach = ''; //Мисюк
  
  // получаем сигнал от бота
  var update = JSON.parse(e.postData.contents);  
  
  // проверяем тип полученного, нам нужен только тип "сообщение"
  if (update.hasOwnProperty('message')) {
    var msg = update.message;
    var idChatWBot = msg.chat.id;    
    var firstNameUser = msg.chat.first_name;    
    var lastNameUser = msg.chat.last_name;
    var nameClient = firstNameUser + ' ' + lastNameUser;
    
    var dateUnix = msg.date; //Unix time (время в секундах)  
    var today = new Date(dateUnix * 1000);
    var todayDay = today.getDate();
    var todayMonth = today.getMonth()+1;
    var todayYear = today.getYear();
  
    
   //вызов проверки клиента
    checkClient(sheet1, dotID, idChatWBot, idChatWCoach, nameClient, dateUnix, today);
    
    
   /* // проверяем, является ли сообщение командой к боту
    if (msg.hasOwnProperty('entities') && msg.entities[0].type == 'bot_command') {
      
      // проверяем на название команды
      if (msg.text == '/wod') {  
        start(sheet1, dotID, idChatWBot);      
      } else if(msg.text == '/sps'){             
        var loadLink = UrlFetchApp.fetch("https://api.telegram.org/bot" + dotID + "/sendMessage?chat_id=" + idChatWBot + "&text=" + "Обращайся!");   
      }
    }*/
  }
}
