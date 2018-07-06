// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {




  var Jstore = Ext.create("Ext.data.JsonStore", {
    storeId: "peopleStore",
    fields: ["name", "id"],
    proxy: {
      type: "ajax",
      url: "/testappcrud/data.json",
      reader: {
        type: "json",
        root: "people",
        totalProperty: "totalCount"
      }
    },
    autoLoad: true // need to load for any data to load
  });


  Ext.create("Ext.grid.Panel", {
    renderTo: Ext.getBody(),
    store: Ext.data.StoreManager.lookup("peopleStore"),
    columns: [
      {
        header: "Name",
        dataIndex: "name"
      },
      {
        header: "id",
        dataIndex: "id"
      }
    ],
    height: 200,
    width: 205,
    autoScroll: true
  });

});// end of onReady()
