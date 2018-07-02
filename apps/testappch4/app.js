// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {

var myBtnHandler = function(btn) {
  Ext.MessageBox.alert("You Clicked", btn.text);
};

var fileBtn = Ext.create("Ext.button.Button", {
  text: "File",
  handler: myBtnHandler
});

var editBtn = Ext.create("Ext.button.Button",{
  text: "Edit",
  handler: myBtnHandler
});

var tbFill = new Ext.toolbar.Fill();

var myTopToolbar = Ext.create("Ext.toolbar.Toolbar",{
  items: [
    fileBtn,
    tbFill,
    editBtn
]
});

var myBottomToolBar = [
  {
    text: "Save",
    handler: myBtnHandler
  },
  "-",
  {
    text: "Cancel",
    handler: myBtnHandler
  },
  "->",
  "<b>Items open: 1</b>"
];


/*
var myPanel = Ext.create("Ext.panel.Panel", {
  width: 200,
  height: 150,
  title: "Ext Panel rock!",
  collapsible: true,
  renderTo: Ext.getBody(),
  tbar: myTopToolbar,
  bbar: myBottomToolBar,
  html: "My first Toolbar Panel!"
});
*/

var myPanel2 = Ext.create("Ext.panel.Panel", {
  height: 150,
  width: 200,
  renderTo: Ext.getBody(),
  buttonAlign: "left",
  buttons: [
    {
      text: "Press me!",
      handler: myBtnHandler
    }
  ],
  tools: [
    {
      type: "gear",
      handler: function(evt, toolE1, panel) {
        var toolClassName = toolE1.className.split(" ");
        var toolClass = toolClassName[1];
        var toolId = toolClass.split("-")[2];
        Ext.MessageBox.alert("You Clicked", "Tool " + toolId);
      }
    },
    {
      type: "help",
      handler: function(){
        Ext.MessageBox.alert("You Clicked","The help tool");
      }
    }
  ],
  collapsible: true,
  tbar: myTopToolbar,
  bbar: myBottomToolBar,
  html: "My first Toolbar Panel!"
});


//--------------------

var buttons = [
  { text: "Btn 1"},
  { text: "Btn 2"},
  { text: "Btn 3"}
];

var topDockedToolbar = {
  xtype: "toolbar",
  dock: "top",
  items: buttons
};

var bottomDockedToolbar = {
  xtype : 'toolbar',
  dock : 'bottom',
  items : buttons
  };
  var leftDockedToolbar = {
  xtype : 'toolbar',
  vertical : true,
  dock : 'left',
  items : buttons,
  weight: 10
  };
  var rightDockedToolbar = {
  xtype : 'toolbar',
  vertical : true,
  dock : 'right',
  items : buttons,
  weight: 10
  };

var myPanel3 = Ext.create("Ext.panel.Panel", {
  width: 350,
  height: 250,
  title: "Ext Panels rock!",
  renderTo: Ext.getBody(),
  html: "Content body",
  buttons: {
    weight: -1, // controls placement, see docs 
    items: buttons
  },
  dockedItems: [
    topDockedToolbar,
    bottomDockedToolbar,
    leftDockedToolbar,
    rightDockedToolbar
  ]
});


});// end of onReady()
