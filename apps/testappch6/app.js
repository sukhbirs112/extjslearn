// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {

 /* basic form
  Ext.QuickTips.init();
  var fpItems = [
    {
      fieldLabel: "Alpha only",
      allowBlank: false,
      emptyText: "This field is empty",
      maskRe: /[a-z]/i,
      msgTarget: "side"
    },
    {
      fieldLabel: "Simple 3 to 7 Chars",
      allowBlank: "false",
      msgTarget: "under",
      minLength: 3,
      maxLength:7
    },
    {
      fieldLabel: "Special Chars Only",
      msgTarget: "qtip",
      stripCharsRe: /[a-zA-Z0-9]/ig
    },
    {
      fieldLabel: "Web Only with VType",
      vtype: "url",
      msgTarget: "side"
    },
    {
      fieldLabel : 'Password',
      allowBlank : false,
      inputType : 'password',
      },
      {
      fieldLabel : 'File',
      allowBlank : false,
      xtype : 'filefield'
      },
      {
        xtype : 'textarea',
        fieldLabel : 'My TextArea',
        name : 'myTextArea',
        anchor : '100%',
        height : 100
        },
        {
          xtype : 'numberfield',
          fieldLabel : 'Numbers only',
          allowBlank : false,
          emptyText : 'This field is empty!',
          decimalPrecision : 3,
          minValue : 0.001,
          maxValue : 2
          }

  ];


var fp = Ext.create("Ext.form.Panel", {
  renderTo: Ext.getBody(),
  width: 400,
  height: 500,
  title: "Exercising textfields",
  frame: true,
  bodyStyle: "padding: 6px",
  labelWidth: 126,
  defaultType: "textfield",
  defaults: {
    msgTarget: "side",
    anchor: "-20"
  },
  items: fpItems
});

*/


// ComboBox Local
/*
var mySimpleStore = ({
  type: "array",
  fields: ["name"],
  data: [
    ["Jack Slocum"],
    ["Abe Elias"],
    ["Aaron Conran"],
    ["Evan Trimboli"]
  ]
});

var combo = {
  xtype: "combo",
  fieldLabel: "Select a name",
  store: mySimpleStore,
  displayField: "name",
  typeAhead: true,
  minChars: 1, // set minChars for typeAhead to work.
  mode: "local"
};

var fp = Ext.create("Ext.form.Panel", {
  renderTo: Ext.getBody(),
  height:400,
  width:400,
  bodyStyle: "padding: 6px",
  title: "EXT ComboBox",
  frame: true,
  defaultType: "textfield",
  items: [combo]
});

*/


// ComboBox Remote
/*
var remoteJsonStore = Ext.create("Ext.data.JsonStore", {
  storeId: "people",
  fields: [
    "fullName",
    "id"
  ],
  proxy: {
    type: "ajax",
    url: "/testappch6/data.json",
    reader: {
      type: "json",
      root: "records",
      totalProperty: "totalCount"
    }
  }
});


var combo = {
  xtype: "combo",
  queryMode: "remote",
  fieldLabel: "Search by name",
  width: 320,
  forceSelection: true,
  displayField: "fullName",
  valueField: "id",
  minChars: 1,
  triggerAction: "all",
  store: remoteJsonStore,
  pageSize: 2,
  limit:4
};

var fp = Ext.create("Ext.form.Panel", {
  renderTo: Ext.getBody(),
  height: 400,
  width: 400,
  bodyStyle: "padding: 6px",
  title: "Ext ComboBox",
  frame: true,
  defaultType: "textfield",
  items: [combo]
});
*/


// html editor

var htmlEditor = {
  xtype: "htmleditor",
  fieldLabel: "Enter in any text.",
  anchor: "100% 100%"
};

var fp = Ext.create("Ext.form.Panel", {
  renderTo: Ext.getBody(),
  height: 400,
  width: 400,
  title: "Ext html editor",
  frame: true,
  defaultType: "textfield",
  items: [htmlEditor]
});

});// end of onReady()
