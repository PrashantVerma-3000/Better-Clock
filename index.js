let time = new Date();
let angle_sec = time.getSeconds() * (360 / 60);
let angle_min =
  time.getMinutes() * (360 / 60) + time.getSeconds() * (360 / (60 * 60));
let angle_hour =
  time.getHours() * 30 +
  time.getMinutes() * (360 / (12 * 60)) +
  time.getSeconds() * (360 / (60 * 60 * 12));
function rotate() {
  let second = document.querySelector(".second");
  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  angle_sec += 360 / 60;
  angle_min += 360 / (60 * 60);
  angle_hour += 360 / (60 * 60 * 12);
  second.style.transform = `rotate(${angle_sec}deg)`;
  minute.style.transform = `rotate(${angle_min}deg)`;
  hour.style.transform = `rotate(${angle_hour}deg)`;
  console.log(new Date());
}
setInterval(rotate, 1000);
