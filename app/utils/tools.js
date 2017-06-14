export default function getDomain (url) {
    let hostname;
    if (url.indexOf('://') > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    let domain = hostname;
    const splitArr = domain.split('.');
    const arrLen = splitArr.length;
    if (arrLen > 2) {
        return (domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1]);
    }
    return domain;
}
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
