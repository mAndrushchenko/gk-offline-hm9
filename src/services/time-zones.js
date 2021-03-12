export const timeZones = {
    KIEV: "Europe/Kiev",
    NY: "America/New_York",
    LONDON: "Europe/London",
    TOKYO: "Asia/Tokyo",
    MOSCOW: "Europe/Moscow",
    SWITCHER: "12|24"
}

let timeZonesArray = []
let citiesArray = []

const getCity = (city) => {
    city = city.replace('_', ' ').split(/\//)
    return city[1]
}

for (let key in timeZones) {
    timeZonesArray = [...timeZonesArray, timeZones[key]]
    const city = getCity(timeZones[key])
    if (city) {
        citiesArray = [...citiesArray, city]
    }
}

export { timeZonesArray, citiesArray }