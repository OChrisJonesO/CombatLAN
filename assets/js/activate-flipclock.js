// Grab the current date
var currentDate = new Date();

// Set some date in the future. In this case, it's always Jan 1
var futureDate  = new Date(2016, 4, 30)

// Calculate the difference in seconds between the future and current date
var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
var clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
});
