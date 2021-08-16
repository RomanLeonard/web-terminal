// $('.terminal').terminal({
//   hello: function(what) {
//     this.echo('Hello, ' + what + '. Wellcome to this terminal.');
//   }
// }, {
//   greetings: 'My First Web Terminal'
// });

$(document).ready(function(){
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
        
        
        <span style="color:green">START</span>             <span style="color:red">STOP</span>             <span style="color:orange">EGG</span>             <span>HELP</span>             <span>LIST</span>             


        </pre>`);

        if(session_active){
          this.echo(list)
        }
        else{
          this.echo('First you must start a session.')
        }
      },
     list: function(){
        var list = $(`<pre>
        
        <span style="color:green">START</span>.........................<span>Start current session</span>
        <span style="color:red">STOP</span>..........................<span>Stop current session</span>
        <span style="color:orange">EGG</span>...........................<span>Show easter-egg</span>
        <span>HELP</span>..........................<span>List available commands</span>
        <span>HELP2</span>.........................<span>List all available commands (also hidden ones)</span>
        <span>LIST</span>..........................<span>Shows a list with details</span>
        
        </pre>`)

        if(session_active){
          this.echo(list)
        }
        else{
          this.echo('First you must start a session.')
        }
      }


    },
    {
      greetings: function (){
        var hello = $(`<span>HELLO</span>`);
        var message = $('<span>`--Type <span style="color: green"><b>start</b></span> to start this session </span>');

        this.echo(hello);
        this.echo(message);
      }
    },
  );

  // eg
  $('.termbtn').on('click', function(){
    $('#pict').css('display', 'block');
    $('#pict').on('click', function(){
      $('#pict').css('display', 'none');
    });
  });



  //minimize/maximize window

  // maximize btn
  var window_maximized = false;
  $('.maximizebtn').on('click', function(){
    $('.maximizebtn').css('display', 'none');
    $('.minimizebtn').css('display', 'inline-block');

    $('.background').addClass('extend');
    window_maximized = true;
  });
  // minimize btn
  $('.minimizebtn').on('click', function(){
    $('.minimizebtn').css('display', 'none');
    $('.maximizebtn').css('display', 'inline-block');

    $('.background').removeClass('extend');
    window_maximized = false;
  });
  // double click
  $('.title').on('dblclick',function(){
    if(window_maximized == true){
      $('.maximizebtn').css('display', 'inline-block');
      $('.minimizebtn').css('display', 'none');
      $('.background').removeClass('extend');
      window_maximized = false;
    } else{
      $('.background').addClass('extend');
      $('.maximizebtn').css('display', 'none');
      $('.minimizebtn').css('display', 'inline-block');
      window_maximized = true;
    }
  });

});

