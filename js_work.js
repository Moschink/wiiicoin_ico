var countDownDate = new Date("May 30, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;



    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
  }
}, 1000);


// When the user clicks on div, open the popup

        


    function myFunction() {
     
      const button = document.getElementById('toggleButton');
      const x = document.getElementById("PopUp");
      if (button.textContent === 'READ WHITEPAPER'&& x.style.display === "none") {
        button.textContent = 'CLOSE WHITEPAPER';
        x.style.display = "block";
    } else {
        button.textContent = 'READ WHITEPAPER';
        x.style.display = "none";
    } 
      
     
     
    }
