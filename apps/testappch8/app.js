// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {


  var arrayData = [
    ["Jay Garcia", "MD"],
    ["Aaron Baker", "VA"],
    ["Susan Smith", "DC"],
    ["Mary Stein", "DE"],
    ["Bryan Shanley", "NJ"],
    ["Nyri Selgado", "CA"]
  ];

  var store = Ext.create("Ext.data.ArrayStore", {
    data: arrayData,
    fields: ["fullName", "state"]
  });


  var doMsgBoxAlert = function () {
    var record = grid.selModel.getSelection()[0];
    var fullName = record.get("fullName");
    var state = record.get("state");
    var msg = `The record you chose <br /> ${fullName},${state}`;
    Ext.MessageBox.alert("Grid",msg);
  };

  var doRowDblClick = function () {
    doMsgBoxAlert();
  };

var rowEditing = Ext.create("Ext.grid.plugin.RowEditing",{
  clicksToEdit: 2,
  autoCancel: false
});

var textField = {
  xtype: "textfield"
};

var Editor = {
  xtype: "combo",
  triggerAction: "all",
  displayField: "Full Name",
  valueField: "fullName",
  store: store
};



  var grid = Ext.create("Ext.grid.Panel", {
    title: "Our first grid",
    renderTo: Ext.getBody(),
    autoHeight: true,
    width: 250,
    store: store,
    selType: "rowmodel",
    plugins: [],
    singleSelect: true,
    columns: [
      {
        header: "Full Name",
        sortable: true, //true by default
        dataIndex: "fullName",
        editor: Editor
      },
      {
        header: "State",
        dataIndex: "state",
        sortable: false,
        editor: textField
      }
    ],
    listeners: {
      //itemdblclick:doRowDblClick
    }

  });





});// end of onReady()
