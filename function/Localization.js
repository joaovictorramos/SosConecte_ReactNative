import { findByLatitudeAndLongitude } from "./Service"

export const getDestination = (userLatitude, userLongitude, azimuth, distance) =>{
    let radius = 6371
    let delta = Number(distance) / radius
    let theta = Number(azimuth) * Math.PI / 180

    let phi1 = userLatitude * Math.PI / 180
    let lambda1 = userLongitude * Math.PI / 180

    let phi2 = Math.asin(Math.sin(phi1) * Math.cos(delta) + Math.cos(phi1) * Math.sin(delta) * Math.cos(theta))
    let lambda2 = lambda1 + Math.atan2(Math.sin(theta) * Math.sin(delta) * Math.cos(phi1), Math.cos(delta) - Math.sin(phi1) * Math.sin(phi2))

    lambda2 = (lambda2 + 3 * Math.PI) % (2 * Math.PI) - Math.PI
    return [phi2 * 180 / Math.PI, lambda2 * 180 / Math.PI]
}

export const setCoordinates = (location) =>{
    let userLatitude = location.coords.latitude
    let userLongitude = location.coords.longitude
    let distance = 10    // Raio de 10Km

    let latlist = []
    let lonlist = []
    for(let azimuth = 0; azimuth <= 360; azimuth+=10){
        let coord = getDestination(userLatitude, userLongitude, azimuth, distance)
        latlist.push(coord[0])
        lonlist.push(coord[1])
    }

    let minLat = Math.min(...latlist)
    let minLon = Math.min(...lonlist)

    let maxLat = Math.max(...latlist)
    let maxLon = Math.max(...lonlist)

    let cnesList = findByLatitudeAndLongitude(minLat, minLon, maxLat, maxLon, '10 Km')
    let cnesJson = JSON.stringify(cnesList)
    return cnesJson
}