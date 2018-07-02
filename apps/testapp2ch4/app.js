// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {

  /*
var win;
var newWindow = function(btn) {
  if (!win) {
    win = Ext.create("Ext.window.Window", {
      animateTarget: btn.el,
      html: "My first vanilla Window",
      closeAction: "hide",
      id: "myWin",
      height: 200,
      width: 300,
      constrain: true
    });
  }
  win.show();
};


new Ext.Button({
  renderTo: Ext.getBody(),
  text: "Open my Window",
  style: "margin: 100px",
  handler: newWindow
});

*/

var win = Ext.create("Ext.window.Window", {
  height: 75,
  width: 200,
  modal: true,
  title: "This is one rigid window",
  html: "Try to move or resize me, I dare you",
  plain: true,
  border: false,
  resizable: false,
  draggable: false,
  closable: false,
  buttonAlign: "center",
  buttons: [
    {
      text: "I give up!",
      handler: function() {
      win.close();
      }
    }
  ]
});

win.show();

});// end of onReady()
