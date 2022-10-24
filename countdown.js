const countDown = () => {
 const countDate = new Date('Oct 3, 2022 00:00:00').getTime();
 //getting the diffrence between the current time and the future time
 const now = new Date().getTime();
 const gap = countDate - now;

 //How does time work?
 const second = 1000; /*miliseconds in a second*/
 const minute = second * 60;
 const hour = minute * 60;
 const day = hour * 24;

 //Calculate the countdown
 const textDay = Math.floor(gap / day);
 const textHour = Math.floor((gap % day) / hour);
 const textMinute = Math.floor((gap % hour) / minute);
 const textSecond = Math.floor((gap % minute) / second); 

 document.querySelector(".day").innerHTML = textDay;
 document.querySelector(".hour").innerHTML = textHour;
 document.querySelector(".minute").innerHTML = textMinute;
 document.querySelector(".second").innerHTML = textSecond;

 /*if(gap === 0){
  launchthebullshit();
 }*/
}

setInterval(countDown, 1000);