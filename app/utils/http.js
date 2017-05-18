const baseUrl = 'xxx';

function apiHandler (method) {
    switch (method) {
        case 'GET':
            return get;
        case 'POST':
            return post;
        default:
            return get;
    }
}

function get (url, accesstoken) {
    return fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers: {
            'Authorization': `JWT ${accesstoken}`,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return response.json();
        } else {
            console.info("Oops, we haven't got JSON!", response);
            if (response.status === 200) {
                return {};
            }
        }
    });
}

function post (url, accesstoken, data) {
    const headers = {
        'Content-Type': 'application/json'
    };
    if (accesstoken) {
        headers['Authorization'] = `JWT ${accesstoken}`;
    }
    console.info('JSON.stringify(data)', JSON.stringify(data));
    return fetch(`${baseUrl}${url}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    }).then(response => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return response.json();
        } else {
            console.info("Oops, we haven't got JSON!", response);
            if (response.status === 200) {
                return {};
            }
        }
    });
}

export default {
    apiHandler
};
