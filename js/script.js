setInterval(timer, 1000);

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

function timer() {
  const time = new Date();
  $("#clock").text(
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
  );
  $("#date").text(
    days[time.getDay()] +
      "," +
      time.getDate() +
      " " +
      months[time.getMonth()] +
      " " +
      time.getFullYear()
  );
}
