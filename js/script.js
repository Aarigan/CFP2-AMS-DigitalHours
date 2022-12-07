//Time 12h
setInterval( () => {
  let dayTime12 = new Date();
  
  let hour = dayTime12.getHours();
  let minutes = dayTime12.getMinutes();
  let seconds = dayTime12.getSeconds();
  //time 12h and AM-PM
  let amPm = hour < 12  ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour === 0 ? hour = 12 : hour;
  //add digit 0
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("num12-hr").textContent = hour;
  document.getElementById("num12-mn").textContent = minutes;
  document.getElementById("num12-sc").textContent = seconds;
  document.querySelector(".am-pm").textContent = amPm;

}, 1000); //1000 milliseconds  = 1s

// Time 24h
setInterval( () => {
  let dayTime24 = new Date();

  let hour = dayTime24.getHours();
  let minutes = dayTime24.getMinutes();
  let seconds = dayTime24.getSeconds();
  //add digit 0
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("num24-hr").innerHTML = hour;
  document.getElementById("num24-mn").innerHTML = minutes;
  document.getElementById("num24-sc").innerHTML = seconds;

}, 1000);

