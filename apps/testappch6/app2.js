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

  var fieldset2 = Ext.apply({}, {
    flex: 1,
    labelWidth: 30,
    title: 'Address Information',
    defaults: {
      layout: 'column',
      anchor: '100%'
    },
    items: [
      {
        fieldLabel: 'Address',
        name: 'address'
      },
      {
        fieldLabel: 'Street',
        name: 'street'
      },
      {
        xtype: 'container',
        items: [
          {
            xtype: 'fieldcontainer',
            columnWidth: .5,
            items: [
              {
                xtype: 'textfield',
                fieldLabel: 'State',
                name: 'state',
                labelWidth: 100,
                width: 150
              }
            ]
          },
          {
            xtype: 'fieldcontainer',
            columnWidth: .5,
            items: [
              {
                xtype: 'textfield',
                fieldLabel: 'Zip',
                name: 'zip',
                labelWidth: 30,
                width: 106
              }
            ]
          }
        ]
      }
    ]
  }, fieldset1);

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

  var myFormPanel = Ext.create('Ext.form.Panel', {
    renderTo: Ext.getBody(),
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