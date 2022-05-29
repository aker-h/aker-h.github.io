$(async() => {
    let hourLeft     = document.getElementById('hoursLeft'),
        hourRight    = document.getElementById('hoursRight'),
        minutesLeft  = document.getElementById('minutesLeft'),
        minutesRight = document.getElementById('minutesRight'),
        secondsLeft  = document.getElementById('secondsLeft'),
        secondsRight = document.getElementById('secondsRight');
    
    const fix = (num) => {
        return (`0${num}`).slice(-2);
    }

    const getStartLag = () => {
        let now = new Date();

        let ms = now.getMilliseconds();

        return 1000 - ms;
    }

    const set = () => {
        let now = new Date();

        let hours = fix(now.getHours()),
            minutes = fix(now.getMinutes()),
            seconds = fix(now.getSeconds());
        
        let hLeft  = hours.charAt(0),
            hRight = hours.charAt(1),
            mLeft  = minutes.charAt(0),
            mRight = minutes.charAt(1),
            sLeft  = seconds.charAt(0),
            sRight = seconds.charAt(1);

        if (hours === '23') {
            hRight = '23';
        }

        hourLeft.className     = `hours-inner left outer${hLeft}`;
        hourRight.className    = `hours-inner right outer${hRight}`;
        minutesLeft.className  = `minutes-inner left outer${mLeft}`;
        minutesRight.className = `minutes-inner right outer${mRight}`;
        secondsLeft.className  = `seconds-inner left outer${sLeft}`;
        secondsRight.className = `seconods-inner right outer${sRight}`;

        console.log(`${hours} : ${minutes} : ${seconds}`);
    }

    const loop = () => {
        setInterval(set, 1000);
    };

    let startLag = getStartLag();

    set();

    setTimeout(loop, startLag)
});
