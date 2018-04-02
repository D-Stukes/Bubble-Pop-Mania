$(document).ready(function(){

    let playerName = $('.inputTxt');
    let playNow = $('.startBtn2');
    let newBody = $('body');
    let bubbleCount = 0;
    $('.gameIntro').show();
        //change background from Landing Page to First Game Level
    $('.player1').text(playerName);
    // $('.scoreTally').hide();
    playNow.on('click', function(){
        $('.gameIntro').hide();
        $('.scoreTally').show();
        $('.scoreTally').text('Bubbles Popped: ' + ' Current Score: ');
            //sets a timing interval of 1 second, counting down from 60 to display a game timer
        let i = 60;
        let time = setInterval(function() {
            // selects timer div and adds value of i to it
          $('.timer').text("GAME TIMER: " + i);
          i--;
          if(i === 0) {
            clearInterval(time);
          }
         }, 1000);
        newBody.addClass('bodyBub');
        // console.log((playerName).val());
        setTimeout(function(){newBody.removeClass('bodyStart')},500);
        blowNewBubbles();
            for(let y = 1; y <= 100; y++){
            blowNewBubbles();
            }
    });

        //create bubble div with bubble class and a random position, then append to body.
    function blowNewBubbles() {
    let bub = $('<div>');
    // let bub2 = $('<div>');
    bub.addClass('bubble');
    // bub2.addClass('bubble2');
    bub.css("left", Math.random() * window.innerWidth);
    $('body').append(bub);
    // bub2.css("top", Math.random() * window.innerWidth);
        //change bubble to appear popped when clicked
    bub.on('click',function(){
    bubbleCount += 1;
    bub.addClass('splash');
    setTimeout(function(){bub.removeClass('bubble splash')},200);
        //displays BubbleCount, and Score
    $('.scoreTally').text('Bubbles Popped: ' + bubbleCount + ' Current Score: ' + 10 * bubbleCount);

    });
  }

 });

      // setInterval(function() {$('div').toggleClass('bubble')}, 1000)
      //     setInterval(function() {
      //       $('div').css("top", Math.random() * window.innerHeight),
      //       $('div').css("left", Math.random() * window.innerWidth)
      //       // $css.css("left", Math.random() * window.innerWidth)
      //     }, 1000);





      //PSUEDO CODE

      // MVP

      // LANDING PAGE
      // Includes welcome, input box for user to enter initials and start button.


      // First Level of GAME

      // 1. A bunch of translucent bubbles begin floating down.
      //    Using keyframe animation, bubbles will animate downward at varying angles.

      // 2. User clicks to pop each button. Each pop has an pop noise audio played.
      //    Event handler on click will remove div and replace it with a popped image div and then an empty div.
      //    Also could use keyframes transform.

      // 3. The user's score increases by 1 with each pop.
      //    A counter setup in a for loop with an if statement can increment each time a div is clicked
      //    A separate counter can keep track of the total bubble divs remaining.

      // 4. If the user clears the screen, the user wins.
      //    An alert message will pop announcing if the user won.
      //    If the divs reach total popped - this can trigger the background change and alert.
      //    The screen will change to show the final score and will include a reset button.
