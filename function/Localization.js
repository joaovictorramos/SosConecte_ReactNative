import { findByLatitudeAndLongitude } from "./Service"

export const toRadians = (degrees) => {
    return degrees * Math.PI / 180
}

export const metersToDegreesLatitude = (meters) => {
    return meters / 111111
}

export const setCoordinates2 = (location) => {
    let userLatitude = location.coords.latitude
    let userLongitude = location.coords.longitude

    console.log('Latitude Atual: '+userLatitude)
    console.log('Longitude Atual: '+userLongitude)

    let latitudeMeters = userLatitude * 111111
    let longitudeMeters = userLongitude * (111111 * Math.cos(toRadians(userLatitude)))

    let radiusInMeters = 20000

    // + 20Km
    let newMaxLatitudeMeters = latitudeMeters + metersToDegreesLatitude(radiusInMeters)
    let newMaxLongitudeMeters = longitudeMeters + (radiusInMeters / (111111 * Math.cos(toRadians(userLatitude))))

    let maxLatitude = newMaxLatitudeMeters / 111111
    let maxLongitude = newMaxLongitudeMeters / (111111 * Math.cos(toRadians(userLatitude)))

    // - 20Km
    let newMinLatitudeMeters = latitudeMeters - metersToDegreesLatitude(radiusInMeters)
    let newMinLongitudeMeters = longitudeMeters - (radiusInMeters / (111111 * Math.cos(toRadians(userLatitude))))

    let minLatitude = newMinLatitudeMeters / 111111
    let minLongitude = newMinLongitudeMeters / (111111 * Math.cos(toRadians(userLatitude)))

    console.log()
    console.log('Latitude Máxima: '+maxLatitude)
    console.log('Longitude Máxima: '+maxLongitude)
    console.log()
    console.log('Latitude Mínima: '+minLatitude)
    console.log('Longitude Mínima: '+minLongitude)

    let cnesList = findByLatitudeAndLongitude(minLatitude, minLongitude, maxLatitude, maxLongitude)
 
    /*if(cnesList.length == 0){
        cnesList.push({ 'listing': '' })
    }*/
    let cnesJson = JSON.stringify(cnesList)
    return cnesJson
}

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
    //let distance = 3    // Raio de 3Km
    let distance = 5    // Raio de 5Km
    //let distance = 10    // Raio de 10Km

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

    console.log('Latitude mínima: '+minLat)
    console.log('Latitude atual: ', userLatitude)
    console.log('Latitude máxima: '+maxLat)
    console.log()
    console.log('Longitude mínima: '+minLon)
    console.log('Longitude atual: ', userLongitude)
    console.log('Longitude máxima: '+maxLon)
    console.log()

    let cnesList = findByLatitudeAndLongitude(minLat, minLon, maxLat, maxLon, '5 Km')
    let cnesJson = JSON.stringify(cnesList)
    return cnesJson
}