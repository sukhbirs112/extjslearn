Ext.onReady(() => {
  //Ext.Msg.alert("Hello","The DOM is ready");
  var myDiv1 = Ext.get("div1");
  myDiv1.setHeight(150);
  //myDiv1.setWidth(150);
  //myDiv1.setSize(350,350);

  Ext.create("Ext.fx.Animator", {
    target: myDiv1,
    duration:1000, //5 sec
    keyframes: {
      0: {},
      100: {
        height: 350,
        width: 350
      }
    },
    easing:"bounceOut"
  });


  Ext.getBody().load({
    url:"htmlFragment.html",
    scripts:true
  });



  /*
  myDiv1.createChild(
  {
    tag:"div",
    html:"The inner HTML"
  });
  */




});
