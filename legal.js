var deadlinePST = '2022-3-28 GMT-8';
var deadlineMST = '2022-3-28 GMT-7';
var deadlineCST = '2022-3-28 GMT-6';
var deadlineEST = '2022-3-28 GMT-5';



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes, 
    'seconds': seconds
  };
}


function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = 'Days: ' + t.days + '<br>' +
                      'Hours: '+ t.hours + '<br>' +
                      'Minutes: ' + t.minutes + '<br>' +
                      'Seconds: ' + t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

initializeClock('clockOne', deadlinePST);
initializeClock('clockTwo', deadlineMST);
initializeClock('clockThree', deadlineCST);
initializeClock('clockFour', deadlineEST);


