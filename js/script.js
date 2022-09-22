$("#clockAnalog").hide();
$("#clockDigital").show();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

$("#setDigital").click(function () {
  $("#clockAnalog").hide();
  $("#clockDigital").show();
});

$("#setAnalog").click(function () {
  $("#clockDigital").hide();
  $("#clockAnalog").show();
});

window.timeInterval = setInterval(setTime, 1000);

function setTime() {
  const time = new Date();

  timeDigital(time);
  timeAnalog(time);

  $("#date").text(
    days[time.getDay()] +
      ", " +
      time.getDate() +
      " " +
      months[time.getMonth()] +
      " " +
      time.getFullYear()
  );
}

function timeAnalog(time) {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let secondsDegrees = (seconds / 60) * 360 + 90;
  let minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  let hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  $("#handSeconds").css({ transform: "rotate(" + secondsDegrees + "deg)" });
  $("#handMinutes").css({ transform: "rotate(" + minutesDegrees + "deg)" });
  $("#handHours").css({ transform: "rotate(" + hourDegrees + "deg)" });
}

function timeDigital(time) {
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  if (hours.length == 1) {
    hours = "0" + hours;
  }
  if (minutes.length == 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length == 1) {
    seconds = "0" + seconds;
  }

  $("#clockDigital").text(hours + ":" + minutes + ":" + seconds);

  if (!time) {
    return;
  }
}
