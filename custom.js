//Wrap everything in a function because... well them's the rules!
function glenToDo() {

  //Make a call to the mighty Google Sheets API and pray for a response
  /*The way this call works is really cool! You can check out the details of what each bit of the URL-thing below is doing at: https://developers.google.com/sheets/api/guides/concepts 
  Sidenote: if you copy + paste the URL below into your browser you can see the array in a totally useless but kinda interesting way (no viruses, pinky swear!)*/
  var json = $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1ZDI3TOYKbliJxHWt76d_-ay6sz0e2OpA6LB63vuKKlk/values/'To Do'/?key=AIzaSyA1T4CcA8nnxMfxShN7Blrinr9y7LL5CzY", function(json) {
  
  //Reset card values on each run of the function
  $('.card').remove();

    //Response granted, no need to light any more incense!
    /*Got the whole JSON object from the API call in a single variable called 'json'. Below we are setting up some ground rules for what I'll be keen to know about going forward, in specific I'll be needing to know how many rows are in the sheet which I get from json.values.length so I hook that value to the variable 'y' */
    for (var x = 0, y = json.values.length; x < y; x++) {

      //Now we iterate things based on the idea we should do something based on the number of rows
      for (var i = 0; i < y; i++) {

        /*Below we are setting one array "coordinate" to change each time we run this little loop (variable i is saying switch which sub-array is being looked at ever iteration but always look at the same value within the new sub-array), and another that swaps each time we do a larger loop rotation (variable x is saying to look at a new value within each sub-array we cycle through)*/
        var valList = json.values[i][x];

        //Loop the JSON values till you run out of stuff to spit out but don't add any HTML if you're just adding blank HTML elements
        if (valList != '' && valList != null && valList != ' ') {

          //On first loop iteration, make a new card with an unordered list in it
          if (i == 1) {
            $('.card-columns').append('<div class="card '+ valList +'"><ul></ul></div>');

            //Make the first value an H2 header
            $('.card:last-of-type ul').append('<h2>' + valList + '</h2>');
          } else {

            //Make all values other than the first in a column basic list objects
            $('.card:last-of-type ul').append('<li>' + valList + '</li>');
          }
        }
      }
    }
  });
}

//Equivalent to hitting the play button on my big ol' music box!
glenToDo();

//Refresh the page every 15 minutes
setInterval(glenToDo, 900*1000);

//Just one look n' feel is SO LAME-- this segment gives our script a sudden urge to switch it up once every 8 hours
function skinToggle(){

//Nix the old class running the show before assuming our fresh new look
  $("body").removeClass();

//A cleverly named variable array that alludes to the array position right in the name of each variable
var classes = ["one", "two", "three", "four", "five", "six"];

//Literally saying each object defined as a body will have this function performed on it, probably not an idea statement but it does the trick
    $("body").each(function(){

      //Finally the good bit where we pick a class at random from our array and stick it on the body object(s)
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
    
}

//Trigger function on main script load
skinToggle();

//Every 8 hours switch look n' feel
setInterval(skinToggle, 288*10000);
