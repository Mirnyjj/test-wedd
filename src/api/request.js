export const request = async (method, data) => {
    const url = 'http://localhost:3000/message'
    const response = await fetch(url, {
        headers: {
            'content-type': 'application/json'
        },
        method: method || 'GET',
        body: data ? JSON.stringify(data) : undefined,
    });
    
    return response
}