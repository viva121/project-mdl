/*function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img-rplce").src = images[x];
          }

function startTimer() {
              setInterval(displayNextImage, 2000);
          }

          var images = [], x = -1;
          images[0] = "images/250X110668568400.jpg";
          images[1] = "images/paz_250x110103131473.jpg";
*/

 
function displayNextImage() {    
    var i = 0;
    var images = [];
          images[0] = "images/250X110668568400.jpg";
          images[1] = "images/paz_250x110103131473.jpg";
    var el = document.getElementById('img-rplce');  
	
function toggle() {
        el.src = images[i];           // set the image
		i++;
		if(i===images.length){i=0;}
		
    }
    setInterval(toggle, 2000);
}