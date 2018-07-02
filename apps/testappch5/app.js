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


myWin.show();

});// end of onReady()
