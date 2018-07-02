// Always use Ext,onReady, otherwise there will be errors.
Ext.onReady(() => {

var myCallback = function(btn, text) {
  console.info("You pressed " + btn);
  if (text) {
    console.info("You entered : " + text);
  }
};

/*
Ext.Msg.show({
  title: "Input required:",
  msg: "Please tell us a little about yourself",
  width: 300,
  buttons: Ext.Msg.OKCANCEL,
  multiline: true,
  fn: myCallback,
  icon: Ext.MessageBox.INFO
});
*/

/*
Ext.Msg.show({
  title: "Hold on there cowboy!",
  msg: "Are you sure you want to reboot the internet?",
  width: 300,
  buttons: Ext.Msg.YESNOCANCEL,
  fn: myCallback,
  icon: Ext.MessageBox.ERROR
});
*/

Ext.MessageBox.show({
  title: "Hold on there cowboy!",
  msg: "We're doing something",
  progressText: "Initializing...",
  width: 300,
  progress: true,
  closable: false
});

var updateFn = function(num) {
  return function() {
    if (num === 6) {
      Ext.MessageBox.updateProgress(100, "All items Saved!");
      Ext.Function.defer(Ext.MessageBox.hide, 1500, Ext.MessageBox);
    }
    else {
      var i = num/6;
      var pct = Math.round(100 * i);
      Ext.MessageBox.updateProgress(i, pct + "% completed");
    }
  };
};

for (var i = 1; i<7; i++) {
  setTimeout(updateFn(i),i*500);
}

});// end of onReady()
