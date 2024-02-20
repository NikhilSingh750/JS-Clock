let clock = setInterval(() => {
    let hour, minute, second, millesecond, date
    date = new Date()
    hour = date.getHours()-12
    minute = date.getMinutes()
    second = date.getSeconds()
    millesecond = date.getMilliseconds()
    document.getElementById('hour').innerHTML = hour
    document.getElementById('minutes').innerHTML = minute
    document.getElementById('second').innerHTML = second
    document.getElementById('millesecond').innerHTML = millesecond
})
let sound = new Audio('alarm.mp3')
let button = document.getElementById('button');
let stop1 = document.getElementById('stop');
let alarm;
stop1.style.opacity = '0'
button.addEventListener('click', () => {
    let inputhour = document.getElementById('hr').value;
    let inputminute = document.getElementById('min').value;

    if((parseInt(inputhour)> 12) && (parseInt(inputminute)>60)){
        alert('invalid input')
    }
    else{

        alarm = setInterval(() => {
            let newdate = new Date()
            let newhour = newdate.getHours()-12
            let newmnute = newdate.getMinutes()
            console.log(newhour)
            if (inputminute == newmnute && inputhour == newhour) {
                sound.play()
                stop1.style.opacity = '1'
            }
        }, 1000);
        document.getElementById('hr').value = ''
        document.getElementById('min').value = ''
    }
})
stop1.addEventListener('click', () => {
    stop1.style.opacity = '0'
    sound.pause()
    clearInterval(alarm)
})