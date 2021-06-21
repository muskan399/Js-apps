console.log("Welcome to Alarm App")
let name=document.getElementById('name');
let hour=document.getElementById('hour');
let minute=document.getElementById('minute');
let btn=document.getElementById('btn');
let msg=document.getElementById('msg');
let wakeup=document.getElementById('wakeup')
wakeup.classList.remove('show');
btn.addEventListener("click", setAlarm);

function setAlarm(event)
{
    msg.classList.add('show');
    event.preventDefault();
    let currentDate=new Date();
    let date=currentDate.getFullYear()+"-"+currentDate.getMonth()+"-"+currentDate.getDate()+" "+hour.value+":"+minute.value+":"+"00"
    let userDate=new Date();
    userDate.setHours(hour.value,minute.value,0);
    let diff=userDate-currentDate;
    diff=Math.abs(diff);
    setTimeout(() => {
    msg.classList.remove('show');
    wakeup.classList.add('show');
    console.log("Timer set");
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();

   }, diff);
   
}