

  const flightPath = {
      curviness : 1.25,
      autoRotate : true,
      values : [
        {x : 0, y : 0},
        {x : window.innerWidth / 4 , y : 30},
        {x : window.innerWidth / 3 , y : 60},
        {x : window.innerWidth / 2 , y : 90},
        {x : window.innerWidth / 3 , y : 200},
        {x : window.innerWidth / 4 , y : 200},
        {x : window.innerWidth / 2 , y : 100},
        {x : window.innerWidth , y : 100},

        ]
  }

  const tween = new TimelineLite();

  tween.add(
      TweenLite.to(".paperPlain" , 1 , {
         bezier : flightPath,
         ease : Power3.easeInOut,
      })
  )

 const controller = new ScrollMagic.Controller();
 const scene = new ScrollMagic.Scene({
     triggerElement : ".palinContainer",
     duration  : 15000,
     triggerHook : 0,
 })

 .setTween(tween)
 .setPin('.palinContainer')
 .addTo(controller)


