/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString)
{  
  let timeString1 = timeString.split(":")
  let hours= timeString1[0];
  let min =timeString1[1];
  let hour1=parseInt(hours);
  let min1=parseInt(min);
  
  if (hour1<12){
    return"Good Morning";
  }
  else if ((hour1>=12) && (hour1<=17 ))
    { return "Good Afternoon";
  
  }
  else if(hour1>17){
   return "Good Evening";
  }
  
}
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
