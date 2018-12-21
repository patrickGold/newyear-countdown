window.onload = function(){
    // define references to elements
    var elements = {
        cd: document.getElementById("cd"),
        cd_title: document.getElementById("cd-title"),
        cd_days: document.getElementById("cd-days"),
        cd_hours: document.getElementById("cd-hours"),
        cd_mins: document.getElementById("cd-mins"),
        cd_secs: document.getElementById("cd-secs"),
        cd_timetil: document.getElementById("cd-timetil")
    };

    elements.cd_title.innerHTML += " " + ((new Date()).getFullYear()+1);

    // Current year + 1, Jan, 1st
    var endDate = new Date((new Date()).getFullYear() + 1 + "/1/1"),
        _sec = 1000,
        _min = _sec*60,
        _hour = _min*60,
        _day = _hour*24;

    elements.cd_timetil.innerHTML = "Time until " + endDate.toDateString();

    var cdInterval = setInterval(function(){
        var nowDate = new Date(),
            dif = endDate.getTime() - nowDate.getTime();
        if (dif <= 0) {
            elements.cd_title.classList.add("cd__title--newyear");
            elements.cd_title.innerHTML = "Happy New Year!";
            return clearInterval(cdInterval);
        }
        var days = Math.floor(dif/_day),
            hours = Math.floor(dif%_day/_hour),
            mins = Math.floor(dif%_hour/_min);
            secs = Math.floor(dif%_min/_sec);
        elements.cd_days.innerHTML = ("000" + days).slice(-3);
        elements.cd_days.nextElementSibling.innerHTML = "Day" + (days == 1 ? "" : "s");
        elements.cd_hours.innerHTML = ("00" + hours).slice(-2);
        elements.cd_hours.nextElementSibling.innerHTML = "Hour" + (hours == 1 ? "" : "s");
        elements.cd_mins.innerHTML = ("00" + mins).slice(-2);
        elements.cd_mins.nextElementSibling.innerHTML = "Minute" + (mins == 1 ? "" : "s");
        elements.cd_secs.innerHTML = ("00" + secs).slice(-2);
        elements.cd_secs.nextElementSibling.innerHTML = "Second" + (secs == 1 ? "" : "s");
    }, 1000);
}
