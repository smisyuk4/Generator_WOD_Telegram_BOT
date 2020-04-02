function createrWod (sheet1, list){  
  var accessToList = sheet1.getSheetByName(list);
  var lastRow = accessToList.getLastRow();
  var wod = accessToList.getRange(2, 1, lastRow, 1); 
  return wodArr = wod.randomize().getValue();  
}
