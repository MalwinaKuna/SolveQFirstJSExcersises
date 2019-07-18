var request = require('sync-request');
test('GET', () => {
    var res = request('GET', 'http://localhost:43000');
    expect(res.getBody('utf8')).toEqual('GET request to the homepage');
});
// {name: "Kuna"}
// {greetings: "Hello Kuna"}
test('POST', () => {
    var res = request('POST', 'http://localhost:43000/user', {
        json: {
            name: "Damian"
        },
    });
    let payload = JSON.parse(res.getBody('utf8'));
    expect(payload.greetings).toEqual('Hello Damian');
});

test('POST', () => {
    var res = request('POST', 'http://localhost:43000/numbers', {
        json: {
            a: 1,
            b: 2
        },
    });
    let payload = JSON.parse(res.getBody('utf8'));
    expect(payload.sum).toEqual(3);
})

test('isValid', () => {
    var res = request('POST', 'http://localhost:43000/numbers', {
        json: {
            a: 1,
            b: "2b"
        },
    });
    expect(res.statusCode).toEqual(400);
    let payload= JSON.parse(res.body);
    expect(payload.error).toEqual('a i bbbe jest bardzo złe');
})

//{error: : "b jest zle"}




























// test('isValid', () => {
//     var res = request('POST', 'http://localhost:43000/numbers', {
//         json: {
//             a: 1,
//             b: "2b"
//         },
//     });
//     expect(res.statusCode).toEqual(400);
//     let payload= res.body.toString();
//     expect(payload).toEqual('');
// })