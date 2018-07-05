Ext.onReady(() => {

  var fieldset1 = {
    xtype: 'fieldset',
    title: 'Name',
    flex: 1,
    
    //border: false,
    labelWidth: 60,
    defaultType: 'field',
    defaults: {
      anchor: '-10',
      allowBlank: false
    },
    items: [
      {
        fieldLabel: 'First',
        name: 'firstName'
      },
      {
        fieldLabel: 'Middle',
        name: 'middle'
      },
      {
        fieldLabel: 'Last',
        name: 'lastName'
      }
    ]
  };

  var fieldset2 =  {
    xtype: "fieldset",
    flex: 1,
    labelWidth: 30,
    title: 'Address Information',
    defaultType: 'field',
    defaults: {
      layout: 'column',
      anchor: "-10"
    },
    items: [
      {
        fieldLabel: 'Address',
        name: 'address',
        anchor: "-10"
      },
      {
        fieldLabel: 'Street',
        name: 'street'
      },
      {
        fieldLabel: 'State',
        name: 'state'
      },
      {
        fieldLabel: 'Zip',
        name: 'zip'
      }, 
    ]
  };

  var fieldsetContainer = {
    xtype: 'container',
    layout: 'hbox',
    layoutConfig: {
      align: 'stretch'
    },
    items: [
      fieldset1,
      fieldset2
    ]
  };


  var tabs = [
    {
      xtype: 'fieldcontainer',
      title: 'Phone Numbers',
      layout: 'form',
      bodyStyle: 'padding:6px 6px 0',
      defaults: {
        xtype: 'textfield',
        width: 230
      },
      items: [
        {
          fieldLabel: 'Home',
          name: 'home'
        },
        {
          fieldLabel: 'Business',
          name: 'business'
        },
        {
          fieldLabel: 'Mobile',
          name: 'mobile'
        },
        {
          fieldLabel: 'Fax',
          name: 'fax'
        }
      ]
    },
    {
      title: 'Resume',
      xtype: 'htmleditor',
      name: 'resume'
    },
    {
      title: 'Bio',
      xtype: 'htmleditor',
      name: 'bio'
    }
  ];

  var tabPanel = {
    xtype: 'tabpanel',
    activeTab: 0,
    deferredRender: false,
    layoutOnTabChange: true,
    border: false,
    flex: 1,
    plain: true,
    items: tabs
  }

  var myFormPanel = Ext.create('Ext.form.Panel', {
    renderTo: Ext.getBody(),
    //height: 700,
    width: 700,
    title: 'Our complex form',
    frame: true,
    id: 'myFormPanel',
    layout: 'vbox',
    layoutConfig: {
      align: 'stretch'
    },
    items: [
      fieldsetContainer,
      //tabPanel
    ]
  });




});