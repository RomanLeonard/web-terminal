// $%^L
$(document).ready(function(){

  $('.terminal-title').on({
    mouseover: function(e){
      e.preventDefault();
      $('.terminal-body').draggable()
    },
    mouseout: function(e){
      e.preventDefault();
      $('.terminal-body').draggable('destroy')
    }
  });


  var session_active = null;
  $('.terminal').terminal(
    {
      start: function(){
        
        if(session_active){
          this.echo('Session is curently running.')
        }
        else{
          var start_intro = $(`<span>Session starting, please wait</span>`)
          this.echo(start_intro)

          var starting = setInterval(()=>{
            this.echo('......');
          }, 500);

          setTimeout(() => {
            clearInterval(starting);
            var start_end = $(`<span>Session started, you can start by typing <span style="color: yellow">help</span></span>`)
            this.echo(start_end);
            session_active = true;
          }, 2000);

        }
      },
      stop: function(){

        if(session_active){
          var session_intro = $(`<span><b>Closing session.</b></span>`)
          this.echo(session_intro);

          var starting = setInterval(()=>{
            this.echo('......');
          }, 500);

          setTimeout(() => {
            clearInterval(starting);
            var start_end = $(`<span>Session ended. You can use <span style="color: yellow">clear</span> to clear terminal.</span>`)
            this.echo(start_end);
            session_active = false;
          }, 2000)
        } else{
          this.echo('First you must start a session.')
        }
      },
      help: function(){
        var list_functions = $(`<span>You curently have this commands to use:</span><br><span style="color: red; padding-right: 50px"><b>stop</b></span><span><b>help2</b></span>`)
        
        if(session_active){
          this.echo(list_functions)
        }
        else{
          this.echo('First you must start a session.')
        }
        
      },
      egg: function(){
        var egg_txt = $(`<pre>

             OOOOOOOO         ......
           O          O          ...
         O             O         ...
        O               O        ...
       O       OOO       O         .
      O      O    O       O        .
      O      O    O        O       .
      O       OOO          O       .
      O                    O       .
      O                   O        .
       O                 O        ..
        O               O       ....
          O           O        .....
            O       O           ....
             OOOOOO          .......
OOOOOOOOOOOOOOOOOOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOOOOOOOOOOO</pre>`)

        this.echo(egg_txt)
      },
      help2: function(){
        var list = $(`<pre>
        
        
        <span style="color:green">START</span>             <span style="color:red">STOP</span>             <span style="color:orange">EGG</span>             <span>HELP</span>             <span>LIST</span>             <span>RESTART</span>             


        </pre>`);

        if(session_active){
          this.echo(list)
        }
        else{
          this.echo('First you must start a session.')
        }
      },
      restart: function (){
        location.reload();
      },
      color: function (color){
          let colors = $(`<pre>
    
          <span class="red" style="color: red">RED</span>
          <span id="green" style="color: green">GREEN</span>
          <span id="orange" style="color: orange">ORANGE</span>
          <span id="brown" style="color: brown">BROWN</span>
          <span id="blue" style="color: blue">BLUE</span>
          <span id="cyan" style="color: cyan">CYAN</span>
  
          </pre>`);

          this.echo(colors)
          document.documentElement.style.setProperty("--hue", "50")
          document.documentElement.style.setProperty("--saturation", "100%")
          document.documentElement.style.setProperty("--light", "100%")

      },
     list: function(){
        var list = $(`<pre>
        
        <span style="color:green">START</span>.........................<span>Start current session</span>
        <span style="color:red">STOP</span>..........................<span>Stop current session</span>
        <span style="color:orange">EGG</span>...........................<span>Show easter-egg</span>
        <span>HELP</span>..........................<span>List available commands</span>
        <span>HELP2</span>.........................<span>List all available commands (also hidden ones)</span>
        <span>LIST</span>..........................<span>Shows a list with details</span>
        <span style="color: yellow;">RESTART</span>.......................<span>Reload window</span>
        
        </pre>`)

        if(session_active){
          this.echo(list)
        }
        else{
          this.echo('First you must start a session.')
        }
      }
      // add code here

    },
    {
      greetings: function (){
        var leo_char = $(`<pre>

        000--000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
        00----00 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 0---0000 00000000 0---0000
        00----00 00000000 -----000 0000---0 00000000 00000000 00000000 00000000 00000000 ----0000 00000000 ----0000
        00----00 000000-- 00---000 000---00 00000000 00000000 00000000 00000000 0000000- -0--0000 0000000- -0--0000
        000---00 0000---0 0------0 00----00 0000000- -----000 00000000 00000000 000000-- 00--0000 000000-- 00--0000
        0000--00 00-----0 00------ 0-----00 000000-- 0------0 00000000 00000000 00000--0 00--0000 00000--0 00--0000
        00000--0 0-----00 0000---- ----0000 0000---- 0000---- -0000000 00000000 0000--00 00--0000 0000--00 00--0000
        000000-- -------- 00000--- ---00000 000----- 0000000- --000000 00000000 000--000 00--0000 000--000 00--0000
        00000000 00000000 00000000 00000000 00----00 00000000 ---00000 00000000 00000000 00--0000 00000000 00--0000
        00000000 00000000 00000000 00000000 -----000 00000000 -----000 00000000 00000000 00--0000 00000000 00--0000 
        00000000 00000000 00000000 00000000 -------- 00000000 ---00000 00000000 00000000 00--0000 00000000 00000000
        00000000 00000000 00000000 000000-- -0000--- --000--- ---00000 00000000 00000000 00--0000 00000000 00000000
        00000000 00000000 00000000 00000--- 00000000 0------0 00000000 00000000 00000000 00--0000 00000000 00000000
        00000000 00000000 00000000 0000---0 00000000 00----00 00000000 00000000 00000000 00--0000 00000000 00000000
        00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 0000000- -------0 00000000 00000000
        00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 0LEONARD ROMAN000
        
        </pre>`);
        this.echo(leo_char);


        var hello = $(`<span>HELLO</span>`);
        var message = $('<span>`--Type <span style="color: green"><b>start</b></span> to start this session </span>');

        this.echo(hello);
        this.echo(message);
      }
    },
  );

  // egg $%^L
  $('.termbtn').on('click', function(){
    $('#pict').css('display', 'block');
    $('#pict').on('click', function(){
      $('#pict').css('display', 'none');
    });
  });

  //terminal variables
  let maximize_btn = $('.maximizebtn');
  let minimize_btn = $('.minimizebtn');
  let background = $('.background');
  let terminal_body = $('.terminal-body');

  // maximize btn
  maximize_btn.on('click', function(){
    maximize_btn.css('display', 'none');
    minimize_btn.css('display', 'inline-block');
    background.addClass('extend');
    terminal_body.addClass('center');
  });
  // minimize btn
  minimize_btn.on('click', function(){
    minimize_btn.css('display', 'none');
    maximize_btn.css('display', 'inline-block');
    background.removeClass('extend');
    terminal_body.removeClass('center');
  });
  // double click
  $('.title').on('dblclick',function(){
    if(background.hasClass('extend')){
      maximize_btn.css('display', 'inline-block');
      minimize_btn.css('display', 'none');
      background.removeClass('extend');
      terminal_body.removeClass('center');

    } else{
      background.addClass('extend');
      terminal_body.addClass('center');
      maximize_btn.css('display', 'none');
      minimize_btn.css('display', 'inline-block');
    }
  });


  //listen for color changes
  let color_red = $('.red');

  color_red.on('click', function (e){
    e.preventDefault()

    console.log("red")
  });


});

