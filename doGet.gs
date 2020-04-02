function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile("index");  
}
