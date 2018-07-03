// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {

  /* //Auto Layout
var childPnl1 = {
  frame: true,
  height: 50,
  html: "My First Child Panel",
  title: "First children are fun"
};
var childPnl2 = {
  width: 150,
  html: "Second child",
  title: "Second children have all the fun"
};
var myWin = Ext.create("Ext.Window", {
  height: 300,
  width: 300,
  title: "A window with a container layout",
  autoScroll: true,
  items: [
    childPnl1,
    childPnl2
  ],
  tbar: [
    {
      text: "Add child",
      handler: () => {
        var numItems = myWin.items.getCount() + 1;
        myWin.add({
          title: "Child number " + numItems,
          height: 60,
          frame: true,
          collapsible: true,
          collapsed: true,
          html: "Yay, another child!"
        });
      }
    }
  ]
});
*/

  /* // Anchor Layout
  var myWin = Ext.create("Ext.window.Window",{
    height: 300,
    width: 300,
    layout: "anchor",
    border: false,
    anchorSize: "400",
    autoScroll:true,
    items: [
      {
        title: "Panel1",
        anchor: "100%, 25%",
        frame: true
      },
      {
        title: "Panel2",
        anchor: "0, 50%",
        frame: true
      },
      {
        title: "Panel3",
        anchor: "50%, 25%",
        frame: true
      },
      {
        title: "Panel4",
        anchor: "-50 -150",
        frame: true
      },
      {
        title: "Panel5",
        anchor: "-10, -150",
        frame: true
      }
    ]
  });
  */

  // Absolute Layout
  /*
  var myWin = Ext.create("Ext.window.Window", {
    height: 300,
    width: 300,
    layout: "absolute",
    autoScroll: true,
    border: false,
    items: [
      {
        title: "Panel1",
        x: 50,
        y: 50,
        height: 100,
        width: 100,
        html: "x: 50, y: 50",
        frame: true,
      },
      {
        title: "Panel2",
        x: 90,
        y: 120,
        height: 75,
        width: 100,
        html: "x: 90, y: 120",
        frame: true
      }
    ]
  });
  */

  /*// Fit layout
  var myWin = Ext.create("Ext.window.Window",{
    height: 200,
    width: 200,
    layout: "fit",
    border: false,
    items: [
      {
        title: "Panel1",
        html: "I fit in my parent!",
        frame: true
      }
    ]
  });
  */

  /*// The Accordion layout
  
  var myWin = Ext.create("Ext.Window", {
    height: 200,
    width: 300,
    border: false,
    title: "A Window with an Accordion Layout",
    layout: "accordion",
    layoutConfig: {
      animate: true // true by default, animates collapsing of child items
    },
    items: [
      {
        xtype: "form",
        title: "General info",
        bodyStyle: "padding: 5px",
        defaultType: "field",
        fieldDefaults: {
          labelWidth: 50,
        },
        labelWidth: 50,
        items: [
          {
            fieldLabel: "Name",
            anchor: "-10",
          },
          {
            xtype: "field",
            fieldLabel: "Age",
            size: 3
          },
          {
            xtype: "combo",
            fieldLabel: "Location",
            anchor: "-10",
            store: ["Here", "There", "Anywhere"]
          }
        ]
      },
      {
        xtype: "panel",
        title: "Bio",
        layout: "fit",
        items: {
          xtype: "textarea",
          value: "Tell us about yourself"
        }
      },
      {
        title: "Instructions",
        html: "Please enter information",
        tools: [
          { id: "gear" }, {id: "help"}
        ]
      }
    ]
  
  });
  */

  /* //The Card Layout
  
  //handles navigation for card layout when forward and 
  //back buttons are pressed.
  var handleNav = function(btn) {
    var activeItem = myWin.layout.activeItem;
    var index = myWin.items.indexOf(activeItem);
    var numItems = myWin.items.getCount();
    var indicatorEl = Ext.getCmp("indicator").el;
  
    if (btn.text === "Forward" && index < numItems - 1) {
      index++;
      myWin.layout.setActiveItem(index);
      index++;
      indicatorEl.update(index + " of " + numItems);
    }
    else if (btn.text === "Back" && index > 0) {
      myWin.layout.setActiveItem(index - 1);
      indicatorEl.update(index + " of " + numItems);
    }
  };
  
  
  var myWin = Ext.create("Ext.Window", {
    height: 200,
    width: 300,
    border: false,
    title: "A Window with a Card layout",
    layout: "card",
    activeItem: 0,
    defaults: { border: false },
    items: [
      {
        xtype: "form",
        title: "General info",
        bodyStyle: "padding: 5px",
        defaultType: "field",
        labelWidth: 50,
        items: [
          {
            fieldLabel: "Name",
            anchor: "-10"
          },
          {
            xtype: "numberfield",
            fieldLabel: "Age",
            size: 3
          },
          {
            xtype: "combo",
            fieldLabel: "Location",
            anchor: "-10",
            store: ["Here", "There", "Anywhere"]
          }
        ]
  
      },
      {
        xtype: "panel",
        title: "Bio",
        layout: "fit",
        items: {
          xtype: "textarea",
          value: "Tell us about yourself"
        }
      },
      {
        title: "Congratulations",
        html: "Thank you for filling out our form!"
      }
    ],
    dockedItems: [
      {
        xtype: "toolbar",
        dock: "bottom",
        items: [
          {
            text: "Back",
            handler: handleNav
          },
          "-",
          {
            text: "Forward",
            handler: handleNav
          },
          "->",
          {
            type: "component",
            id: "indicator",
            style: "margin-right: 5px",
            html: "1 of 3"
          }
        ]
      }
    ]
  });
  */



  /*// The Column layout
  
  var myWin = Ext.create("Ext.Window", {
    height: 200,
    width: 400,
    autoScroll: true,
    id: "myWin",
    title: "A Window with a Column layout",
    layout: "column",
    defaults: {
      frame: true
    },
    items: [
      {
        title: "Col 1",
        id: "col1",
        columnWidth: 0.3
      },
      {
        title: "Col 2",
        html: "20% relative width",
        columnWidth: 0.2
      },
      {
        title: "Col 3",
        html: "100px fixed width",
        width: 100
      },
      {
        title: "Col 4",
        frame: true,
        html: "50% relative width",
        columnWidth: 0.5
      }
    ]
  });
  
  Ext.getCmp("col1").add({
    height: 250,
    title: "New Panel",
    frame: true
  });
  */


  /* //HBox
  var myWin = Ext.create("Ext.Window", {
    layout: "hbox",
    height: 300,
    width: 300,
    title: "A Container with an HBox layout",
    layoutConfig: {
      pack: "start" // or center and end
      //also takes align parameter e.g. align:"top"/"middle"/"stretch"/"stretchmax"
    },
    defaults: {
      frame: true,
      width: 75
    },
    items: [
      {
        title: "Panel1",
        width: 75
      },
      {
        title: "Panel 2",
        height: 75,
        width: 100
      },
      {
        title: "Panel 3",
        height: 200
      }
    ]
  });
  
  */

  /* // HBox with flex
  var myWin = Ext.create("Ext.Window", {
    layout: "hbox",
    height: 300,
    width: 300,
    title: "A Container with an HBox layout",
    layoutConfig: {
      pack: "start" // or center and end
      //also takes align parameter e.g. align:"top"/"middle"/"stretch"/"stretchmax"
    },
    defaults: {
      frame: true,
      width: 75
    },
    items: [
      {
        title: "Panel1",
        flex: 1
      },
      {
        title: "Panel 2",
        height: 75,
        width: 100,
        flex: 1
      },
      {
        title: "Panel 3",
        height: 200,
        flex: 2
      }
    ]
  });
  */



  /*// VBox layout
  var myWin = Ext.create("Ext.Window", {
    layout: "vbox",
    height: 300,
    width: 300,
    title: "A Container with an HBox layout",
    layoutConfig: {
      pack: "start" // or center and end
      //also takes align parameter e.g. align:"top"/"middle"/"stretch"/"stretchmax"
    },
    defaults: {
      frame: true,
      width: 75
    },
    items: [
      {
        title: "Panel1",
        flex: 1
      },
      {
        title: "Panel 2",
        height: 75,
        width: 100,
        flex: 1
      },
      {
        title: "Panel 3",
        height: 200,
        flex: 2
      }
    ]
  });
  
  */

  /* // Table layout
  // use rowspan and colspan to change table layout, make sure to set height and width accordingly
  var myWin = Ext.create("Ext.Window", {
    height: 300,
    width: 300,
    border: false,
    autoScroll: true,
    title: "A Window with a Table layout",
    layout: {
      type: "table",
      columns: 3
    },
    defaults: {
      height: 50,
      width: 50
    },
    items: [
      {
        html: "1"
      },
      {
        html: "2"
      },
      {
        html: "3"
      },
      {
        html: "4"
      },
      {
        html: "5"
      },
      {
        html: "6"
      },
      {
        html: "7"
      },
      {
        html: "8"
      },
      {
        html: "9"
      }
    ]
  });
  */

  // Border Layout

  var myWin = Ext.create("Ext.Viewport", {
    layout: "border",
    defaults: {
      frame: true,
      split: true
    },
    items: [
      {
        title: "North Panel",
        region: "north",
        height: 100,
        minHeight: 100,
        maxHeight: 150,
        collapsible: true
      },
      {
        title: "South Panel",
        region: "south",
        height: 75,
        split: false,
        margins: {
          top: 5
        }
      },
      {
        title: "East Panel",
        region: "east",
        width: 100,
        minWidth: 75,
        maxWidth: 150,
        collapsible: true
      },
      {
        title: "West Panel",
        region: "west",
        collapsible: true,
        collapseMode: "mini",
        width: 100
      },
      {
        xtype: 'container',
        region: 'center',
        layout: 'fit',
        id: 'centerRegion',
        items: {
          title: 'Center Region',
          id: 'centerPanel',
          html: 'I am disposable',
          frame: true
        }
      }
    ]
  });

  var centerPanel = Ext.getCmp('centerPanel'),
    centerRegion = Ext.getCmp('centerRegion');
  centerRegion.remove(centerPanel, true);
  centerRegion.add({
    xtype: 'form',
    frame: true,
    bodyStyle: 'padding: 5px',
    defaultType: 'field',
    title: 'Please enter some information',
    defaults: {
      anchor: '-10'
    },
    items: [
      {
        fieldLabel: 'First Name'
      },
      {
        fieldLabel: 'Last Name'
      },
      {
        xtype: 'textarea',
        fieldLabel: 'Bio'
      }
    ]
  });

  myWin.show();

});// end of onReady()
