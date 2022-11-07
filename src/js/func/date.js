export function toYYYYMMDD(date) {
    let d = new Date(date),
        year = d.getFullYear(),
        month = d.getMonth() + 1,
        day = d.getDate();
    return year + "-" + month + "-" + day;
}

export function getEndSeason() {
    let d = new Date();
    return d.getFullYear()+1 + '-' + '07-01'; // supposition fotsiny
}
