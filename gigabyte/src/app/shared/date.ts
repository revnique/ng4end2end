declare interface Date {
    addMilliseconds(m: number): Date;
    addSeconds(s: number): Date;
    addMinutes(m: number): Date;
    addHours(h: number): Date;
    addDays(d: number): Date;
    formatSmallDateTime(useSlashNotation: boolean): string;
    formatSmallDate(useSlashNotation: boolean): string;
    formatTime(): string;
    formatAMPM(): string;
    getMonthName(): string;
    dateDiff(endDateObject:Date):any; 
}

Date.prototype.addMilliseconds = function (m:number) {
    this.setMilliseconds(this.getSeconds() + m);
    return this;
};
Date.prototype.addSeconds = function (s:number) {
    this.setMilliseconds(this.getSeconds() + (s*1000));
    return this;
};
Date.prototype.addMinutes = function (m:number) {
    this.setMinutes(this.getMinutes() + m);
    return this;
};

Date.prototype.addHours = function (h:number) {
    this.setHours(this.getHours() + h);
    return this;
};

Date.prototype.addDays = function (d:number) {
    this.setHours(this.getHours() + (d * 24));
    return this;
};
Date.prototype.formatSmallDateTime = function (useSlashNotation:boolean) {
    function addZero(number:any) {
        var rtn = "";
        if (number < 10) {
            rtn = "0" + number;
        } else {
            rtn = number;
        }
        return rtn;
    };

    var day = this.getDate(); // yields dayofmonth
    day = addZero(day);
    var month = this.getMonth() + 1; // yields month
    month = addZero(month);
    var year = this.getFullYear(); // yields year
    var hour = this.getHours(); // yields hours
    var minute = this.getMinutes(); // yields minutes
    var second = this.getSeconds(); // yields seconds


    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    var rtn = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    if (useSlashNotation) {
        rtn = month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second;
    }
    // After this construct a string with the above results as below
    return rtn;
};
Date.prototype.formatSmallDate = function (useSlashNotation:boolean) {
    function addZero(number:any) {
        var rtn = "";
        if (number < 10) {
            rtn = "0" + number;
        } else {
            rtn = number;
        }
        return rtn;
    };

    var day = this.getDate(); // yields dayofmonth
    day = addZero(day);
    var month = this.getMonth() + 1; // yields month
    month = addZero(month);
    var year = this.getFullYear(); // yields year

    var rtn = year + "-" + month + "-" + day;
    if (useSlashNotation) {
        rtn = month + "/" + day + "/" + year;
    }
    // After this construct a string with the above results as below
    return rtn;
};

Date.prototype.formatTime = function () {
    function addZero(number:any) {
        var rtn = "";
        if (number < 10) {
            rtn = "0" + number;
        } else {
            rtn = number;
        }
        return rtn;
    };

    var hour = this.getHours(); // yields hours
    var minute = this.getMinutes(); // yields minutes
    var second = this.getSeconds(); // yields seconds


    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    var rtn = hour + ":" + minute + ":" + second;
    // After this construct a string with the above results as below
    return rtn;
};



Date.prototype.dateDiff = function (endDateObject:Date) {

    var addZero = function (i:any) {
        if (i < 10) {
            i = "0" + i;
        }; // add zero in front of numbers < 10
        return i;
    }
    var days, hours, minutes, seconds, totalMilliseconds, displayString = "", numberDisplayString = "", hoursMinSec = "";

    totalMilliseconds = (endDateObject.getTime() - this);
    days = Math.floor(totalMilliseconds / 86400000); // days
    hours = Math.floor((totalMilliseconds % 86400000) / 3600000); // hours

    minutes = Math.floor((totalMilliseconds % 3600000) / 60000); // minutes
    seconds = Math.floor((totalMilliseconds % 60000) / 1000); // secs

    if (days > 0) {
        displayString = days + " days";
        numberDisplayString = addZero(days) + "";
    }
    if (hours > 0 || days > 0) {
        if (displayString !== "") {
            displayString += ", ";
            numberDisplayString += ":";
        }
        displayString += hours + " hours";
        numberDisplayString += addZero(hours);
    }
    if (minutes > 0 || days > 0 || hours > 0) {
        if (displayString !== "") {
            displayString += ", ";
            numberDisplayString += ":";
        }
        displayString += minutes + " minutes";
        numberDisplayString += addZero(minutes);
    }
    if (seconds > 0 || days > 0 || hours > 0 || minutes > 0) {
        if (displayString !== "") {
            displayString += ", ";
            numberDisplayString += ":";
        }
        displayString += seconds + " seconds";
        numberDisplayString += addZero(seconds);
    }
    if (seconds === 0) {
        if (displayString === "") {
            displayString = "less than 1 second";
            numberDisplayString = "00";
        }
    }

    if (seconds > 0 || hours > 0 || minutes > 0) {
        hoursMinSec = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    }

    var rtn = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        totalMilliseconds: totalMilliseconds,
        displayString: displayString,
        numberDisplayString: numberDisplayString,
        hoursMinSec: hoursMinSec
    };

    //console.log("rtn", rtn);
    return rtn;
};

Date.prototype.formatAMPM = function () {
    var hours = this.getHours();
    var minutes = this.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};

Date.prototype.getMonthName = function () {
    var m = this.getMonth();
    var rtn = "";
    switch (m) {
        case 0:
            rtn = "January";
            break;
        case 1:
            rtn = "February";
            break;
        case 2:
            rtn = "March";
            break;
        case 3:
            rtn = "April";
            break;
        case 4:
            rtn = "May";
            break;
        case 5:
            rtn = "June";
            break;
        case 6:
            rtn = "July";
            break;
        case 7:
            rtn = "August";
            break;
        case 8:
            rtn = "September";
            break;
        case 9:
            rtn = "October";
            break;
        case 10:
            rtn = "November";
            break;
        case 11:
            rtn = "December";
            break;
    }
    return rtn;
};