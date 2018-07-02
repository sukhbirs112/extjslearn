// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {

var simpleTab = {
  title: "Simple tab",
  html: "This is a simple tab."
};

var closableTab = {
  title: "I am closable",
  html: "Please close when done reading.",
  closable: true
};

var disabledTab = {
  title: "Disabled tab",
  itemId: "disabledTab",
  html: "Peekaboo!",
  disabled: true,
  closable: true
};

var tabPanel = Ext.create("Ext.tab.Panel", {
  activeTab: 0,
  itemId: "myTPanel",
  items: [
    simpleTab,
    closableTab,
    disabledTab
  ]
});

Ext.create("Ext.window.Window", {
  height: 300,
  width: 400,
  layout: "fit",
  items: [
    tabPanel
  ]
}).show();


var tPanel = Ext.ComponentQuery.query("#myTPanel")[0];
tPanel.add({
  title: "The New tab",
  itemId: "myNewTab",
  html: "I am a new Tab"
});

setTimeout(()=>{tPanel.setActiveTab("myNewTab")},5000);

});// end of onReady()
