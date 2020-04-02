function sendSMS(wodArr, dotID, idChatWBot){
    var createLink = "https://api.telegram.org/bot" + dotID + "/sendMessage?chat_id=" + idChatWBot + "&text=" + wodArr;        
    var loadLink = UrlFetchApp.fetch(createLink);   
}
