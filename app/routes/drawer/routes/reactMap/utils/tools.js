export function prepareMarkers (data) {
    return {
        title: data.name || data.title,
        description: data.description,
        coordinate: {
            latitude: data.lat,
            longitude: data.lng
        }
    };
}
