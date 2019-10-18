
export function match(list) {
    return fetch('/api/match', {
        method: 'POST',
        body: JSON.stringify(list),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    })
    .then(r => r.json())
}
