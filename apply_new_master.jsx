// Target document
var myDocument = app.open(File("/Users/Lucy/Dropbox/1_Action/Indesign_Javascript/iphone_6_files/34-37_iP6_Settings[Control] Folder/34-37_iP6_Settings[Control].indd"));

// Source document (with the 'correct' Master page)
var myMasterDocument = app.open(File("/Users/Lucy/Dropbox/1_Action/Indesign_Javascript/new_master.indd"))

// Copy Master Page B (items(1)) from myMaster to myDocument
myMasterDocument.masterSpreads.item(1).duplicate(LocationOptions.AT_END, myDocument)

// Adds copied B-Master to all pages in Target document 
for(var myCounter = 0; myCounter < myDocument.pages.length; myCounter++) {
     myDocument.pages.item(myCounter).appliedMaster = myDocument.masterSpreads.item("B-Master");
}

// Saves file
//myDocument.save(File("/Users/Lucy/Desktop/iphone_6_files/28-33_iP6_Settings[Settings] Folder/28-33_iP6_Settings[Settings]_updated.indd"));

//app.documents.item(0).close(SaveOptions.no);