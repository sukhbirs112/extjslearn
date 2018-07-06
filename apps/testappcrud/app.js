// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {


  Ext.define("People", {
    extend: Ext.data.Model,
    fields: [
      {
        name: "name",
        type: "string"
      },
      {
        name: "id",
        type: "int"
      }
    ]
  });

  var Jstore = Ext.create("Ext.data.JsonStore", {
    storeId: "peopleStore",
    model: "People",
    proxy: {
      type: "ajax",
      /*api: {
        create: "CREATE",
        read: "READ",
        update: "UPDATE",
        destroy: "DESTROY"
      },*/
      url: "/testappcrud/data.json",
      reader: {
        type: "json",
        root: "people",
        idProperty: "id",
        successProperty: "success"
      },
      /*writer: {
        type: "json",
        encode: true,
        writeAllFields: true,
        root: ""
      }*/
    },
    autoLoad: true // need to load for any data to load
  });

  var cellEdit = Ext.create("Ext.grid.plugin.CellEditing", {
    clicksToEdit: 1
  });


  //buttons for New Rows, Delete Rows
  var newRowBtn = Ext.create("Ext.Button", {
    text: "New Row",
    renderTo: Ext.getBody(),
    handler: () => {
      let store = Ext.data.StoreManager.lookup("peopleStore");
      let max = 0;
      for (let i = 1; i < store.count(); i++) {
        if (store.getAt(max).raw.id < store.getAt(i).raw.id) {
          max = i;
        }
      }
      let person = Ext.create("People",{name: "new person", id: parseInt(store.getAt(max).raw.id) + 1 });
      store.add(person);
    }
  });

  var deleteRowBtn = Ext.create("Ext.Button", {
    text: "Delete Selected Row",
    renderTo: Ext.getBody(),
    handler: () => {
      let selectionModel = Ext.getCmp("myGrid").getSelectionModel();
      if (selectionModel.hasSelection()) {
        let store = Ext.data.StoreManager.lookup("peopleStore");
        let row = selectionModel.getSelection()[0].index;//need to fix to get correct id, not index
        store.removeAt(row);
      }
    }

  });




  var myGrid = Ext.create("Ext.grid.Panel", {
    id: "myGrid",
    renderTo: Ext.getBody(),
    store: Ext.data.StoreManager.lookup("peopleStore"),
    selType: "cellmodel",
    plugins: [
      cellEdit
    ],
    columns: [
      {
        header: "Name",
        dataIndex: "name",
        editor: "textfield"
      },
      {
        header: "id",
        dataIndex: "id"
      }
    ],
    height: 400,
    
    autoScroll: true
  });



  myGrid.on("edit", (editor, e) => {
    var store = Ext.data.StoreManager.lookup("peopleStore");
    console.log(store);
    e.record.commit() //gets rid of red arrow.
  });


});// end of onReady()
