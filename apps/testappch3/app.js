// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {

// xtype config object
var myPanel = {
  xtype: 'panel',
  height: 100,
  width: 100,
  html: "hello"
}


// Registering a new xtype for a custom class
Ext.define("MyApp.CustomClass",{
  extend: "Ext.panel.Panel",
  alias: "widget.myCustomComponent"
});



// example
var panel1 = {
  xtype: "panel",
  title: "Plain Panel",
  html: "Panel with an xtype specified"
};
var panel2 = {
  title: "Plain Panel 2",
  html: "Panel with <b>no</b> xtype specified"
};

// next create a window
// make sure spelling is correct
Ext.create("Ext.window.Window",{
  width: 200,
  height: 150,
  title: "Accordion window",
  border: false,
  layout: {
    type: "accordion",
    animate:true
  },
  items: [
    panel1,
    panel2
  ]
}).show();


});
