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
  


  // html editor
  /*
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
  */



  // Date Field
  /*
  var dateField = {
    xtype : 'datefield',
    fieldLabel : 'Please select a date',
    anchor : '100%'
    }
  
  
  var fp = Ext.create("Ext.form.Panel", {
    renderTo: Ext.getBody(),
    width: 400,
    height: 150,
    title: "Ext date field form",
    frame: true,
    defaultType: "textfield",
    items: [dateField]
  });
  */

  // Check Boxes and Radio Buttons
  /*
  var checkboxes = [
    {
      xtype: "checkbox",
      fieldLabel: "Which do you own",
      boxLabel: "Cat",
      inputValues: "cat"
    },
    {
      xtype: "checkbox",
      fieldLabel: " ",
      labelSeparator: " ",
      boxLabel: "Dog",
      inputValue: "dog"
    },
    {
      xtype: "checkbox",
      fieldLabel: " ",
      labelSeparator:  " ",
      boxLabel: "Fish",
      inputValue: "fish"
    },
    {
      xtype: "checkbox",
      fieldLabel: " ",
      labelSeparator: " ",
      boxLabel: "Bird",
      inputValue: "bird"
    }
  ];
  */
  /*
  var checkboxes = {
    xtype: 'checkboxgroup',
    fieldLabel: 'Which do you own',
    anchor: '100%',
    items: [
      {
        boxLabel: 'Cat',
        inputValue: 'cat'
      }, {
  
        boxLabel: 'Dog',
        inputValue: 'dog'
      },
      {
        boxLabel: 'Fish',
        inputValue: 'fish'
      },
      {
        boxLabel: 'Bird',
        inputValue: 'bird'
      }
    ]
  };
  
  var fp = Ext.create("Ext.form.Panel", {
    renderTo: Ext.getBody(),
    title: "CheckBoxes",
    height: 200,
    width: 400,
    frame: true,
    items: checkboxes
  });
  */

  // complex form, not working correctly,. The code in the book does not work correctly either. 
  //Need to trouble shoot 
/*
  var fieldset1 = {
    xtype: "fieldset",
    title: "Name",
    flex: 1,
    stretch: 1,
    border: false,
    labelWidth: 60,
    defaultType: "field",
    defaults: {
      anchor: "-10",
      allowBlank: true
    },
    items: [
      {
        fieldLabel: "First",
        name: "firstName"
      },
      {
        fieldLabel: "Middle",
        name: "middle"
      },
      {
        fieldLabel: "Last",
        name: "lastName"
      }
    ]
  };


  var fieldset2 = Ext.apply({}, {
    flex: 1,
    stretch: 1,
    labelWidth: 30,
    title: "Address Information",
    defaults: {
      layout: "column",
      anchor: "100%"
    },
    items: [
      {
        fieldLabel: "Address",
        name: "address"
      },
      {
        fieldLabel: "Street",
        name: "street"
      },
      {
        xtype: "container",
        items: [
          {
            xtype: "fieldcontainer",
            columnWidth: 0.5,
            items: [
              {
                xtype: "textfield",
                fieldLabel: "State",
                name: "state",
                labelWidth: 100,
                width: 150
              }
            ]
          },
          {
            xtype: "fieldcontainer",
            columnWidth: 0.5,
            items: [
              {
                xtype: "textfield",
                fieldLabel: "Zip",
                name: "zip",
                labelWidth: 30,
                width: 162
              }
            ]
          }
        ]
      }
    ]
  }, fieldset1);


  var fieldsetContainer = {
    xtype: "container",
    layout: "hbox",
    layoutConfig: {
      align: "stretch"
    },
    items: [
      fieldset1,
      fieldset2
    ]
  };

  var tabs = [
    {
      xtype: "fieldcontainer",
      title: "Phone Numbers",
      layout: "form",
      bodyStyle: "padding: 6px 6px 0",
      defaults: {
        xtype: "textfield",
        width: 230
      },
      items: [
        {
          fieldLabel: "Home",
          name: "home"
        },
        {
          fieldLabel: "Business",
          name: "business"
        },
        {
          fieldLabel: "Mobile",
          name: "mobile"
        },
        {
          fieldLabel: "Fax",
          name: "fax"
        }
      ]
    },
    {
      title: "Resume",
      xtype: "htmleditor",
      name: "resume"
    },
    {
      title: "Bio",
      xtype: "htmleditor",
      name: "bio"
    }
  ];

  var tabPanel = {
    xtype: "tabpanel",
    activeTab: 0,
    deferredRender: false,
    layoutOnTabChange: true,
    border: false,
    flex: 1,
    plain: true,
    items: tabs
  }

  var myFormPanel = Ext.create("Ext.form.Panel", {
    renderTo: Ext.getBody(),
    width: 700,
    title: "Our complex form",
    frame: true,
    id: "myFormPanel",
    layout: "vbox",
    layoutConfig: {
      align: "stretch"
    },
    items: [
      fieldsetContainer,
      tabPanel
    ]
  });






*/







});// end of onReady()
