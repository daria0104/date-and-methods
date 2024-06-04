export function getFullDaysBeforeNewYear(date, month) {

    if(date == null || month == null || date <=0 || month < 0
        || !isFinite(date) || !isFinite(month)) { return null; }

    let newYear = new Date(2024, 0, 1);
    let day = new Date(2023, month-1, date);
    return Math.round((newYear - day) / (1000 * 3600 * 24));
}

export function formatWithWeekday(date) {
if(date == null || date == undefined || !isFinite(date)){
    return '';
}

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = date.getDate();
    let weekday = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let formatter = `${weekday}, ${day}, ${month} ${year}`;
    return formatter;
}

export function isValidDate(date) {
    return (date instanceof (Date) && !isNaN(date)) ? true : false;
}

export function isAfter(date, dateToCompare) {
    if(dateToCompare < date){
        return true;
    }
    return false;
}

export function formatDistanceToNow(date) {
    if(!date || date == undefined){
        return 'Date is unknown';
    }
    let now = new Date();
    let diff = now - date;
    console.log(diff);
    if(diff < 30 * 1000){
        return 'less than a minute';
    }
    else if(30 * 1000 <= diff && diff < 90 * 1000){
        return '1 minute';
    }
    else if(90 * 1000 <= diff && diff < (44.5 * 60 * 1000)){
        return Math.round(diff / 1000 / 60) + " minutes";
    }
    else if(diff >= (44 * 60 * 1000) + (30 * 1000) && diff < (89.5 * 60 * 1000)){
        return 'about 1 hour';
    }
    else{
        return `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth()+1)).slice(-2)}.${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
    }
}