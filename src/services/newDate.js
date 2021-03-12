import moment from "moment-timezone"

export const newDate = (nameOfTimeZone, timeFrame) => {
    const zone = moment.tz(nameOfTimeZone)
    const frame = timeFrame === 24 ? 'HH' : 'hh'
    return [
        ...zone.format(frame).split('').map(str => Number(str)),           //hours
        ...zone.format('mm').split('').map(str => Number(str)),     //minutes
        ...zone.format('ss').split('').map(str => Number(str))      //seconds
    ]
}