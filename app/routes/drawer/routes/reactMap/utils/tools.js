export function prepareUsersMarkers (data) {
    return {
        title: data.name || data.title,
        description: data.description,
        coordinate: {
            latitude: data.lat,
            longitude: data.lng
        }
    };
}
export function prepareEventsMarkers (data) {
    return {
        title: data.title,
        description: data.date + '  ' + data.description,
        coordinate: {
            latitude: data.lat,
            longitude: data.lng
        }
    };
}
