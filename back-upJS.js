$(document).ready(function(){
    let playerName = $('.inputTxt');
    console.log(playerName);
    let playNow = $('.startBtn2');
    let newBody = $('body');
    let bubbleCount = 0;
    let score;

        //change background from Landing Page to First Game Level
        // $('.player1').text(playerName);
        // console.log(playerName)
        // $('.scoreTally').hide();
    $('.gameStart').hide();
    $('.gameEnd').hide();

    playNow.on('click', function(){
            //sending Player's name to the div Player1 to display
        $('.player1').text(playerName.val());
            // console.log(playerName.val())
        $('.gameIntro').hide();
        $('.scoreTally').show();
        $('.gameStart').show();
        $('.scoreTally').text('BUBBLES POPPED:_______' + '    CURRENT SCORE:______');

        //removing intro background, adding background scene of first level to the body - "newbody"
        newBody.addClass('bodyBub');
        setTimeout(function(){newBody.removeClass('bodyStart')},500);

        // calling function to create 100 bubbles
        // blowNewBubbles();
            for(let y = 1; y <= 100; y++){
            blowNewBubbles();
            }


     let i = 60;
        let time = setInterval(function() {
            // selects timer div and adds value of i, which will count down to 0.
          $('.timer').text("GAME TIMER: " + i);
          i--;
          if( (score === 200) && (i !== 0) ) {

        //removing first level background, adding background scene of end  to the body - "newbody"
        newBody.addClass('bodyEndFirstGame');
        setTimeout(function(){newBody.removeClass('bodybub')},500);
        // $('.congrats').show();
        // $('.replay').show();
          clearInterval(time);
          }
          else if( (i===0) && (score < 200) ) {
        //removing first level background, adding background scene of end  to the body - "newbody"
        newBody.addClass('bodyEndFirstGame');
        setTimeout(function(){newBody.removeClass('bodybub')},500);
          }
         }, 1000);
        // $('.congrats').show();
        // $('.replay').show();
    });

        //create bubble divs, each with bubble class and a random position, then append to body.
    function blowNewBubbles() {
        let bub = $('<div>');
        // let popSound = $('#popSound')[0];
        //styling div with bubble class
        bub.addClass('bubble');

        //randomizing position of bubbles and appending them to the body
        bub.css("left", Math.random() * window.innerWidth);
        $('body').append(bub);

        //change bubble to appear popped when clicked and add Pop sound effect
        bub.on('click',function(){
        // popSound.play();
        bubbleCount += 1;
        score = bubbleCount * 10;
        bub.addClass('splash');



        // Delay appearance of Splash image to ensure bubble is clicked and bubble class removed first.
        setTimeout(function(){
            bub.removeClass('bubble splash')
        },100); //chg'd from 200ms


        //sets a timing interval of 1 second, counting down from 60 using a loop, to display a game timer

            //displays BubbleCount, and Score
        $('.scoreTally').text('BUBBLES POPPED:____' + bubbleCount + ' YOUR SCORE:____' + score);

            // I wanted more bubbles. The following 3 lines are about that. Will revisit as post MVP
            // let bub2 = $('<div>');
            // bub2.addClass('bubble2');
            // bub2.css("top", Math.random() * window.innerWidth);

        });
      }

 });

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
