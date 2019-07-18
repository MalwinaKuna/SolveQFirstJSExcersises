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
test('POSTxxxx', () => {
    var res = request('POST', 'http://localhost:43000/numbers', {
        json: {
            a: 1,
            b: 2,
            c: 4
        },
    });
    let payload = JSON.parse(res.body);
    expect(payload.sum).toEqual(7);
})
test('isValid', () => {
    var res = request('POST', 'http://localhost:43000/numbers', {
        json: {
            a: 1,
            b: "2b",
            c: 3
        },
    });
    expect(res.statusCode).toEqual(400);
    let payload = JSON.parse(res.body);
    expect(payload.error).toContain('be jest złe');
})
test('a jest fe', () => {
    var res = request('POST', 'http://localhost:43000/numbers', {
        json: {
            a: "1a",
            b: 2,
            c: 1

        },
    });
    expect(res.statusCode).toEqual(400);
    let payload = JSON.parse(res.body);
    expect(payload.error).toContain('a jest złe');
})
test('c jest złe', () => {
    var res = request('POST', 'http://localhost:43000/numbers', {
        json: {
            a: 2,
            b: 4,
            c: "2c"
        },
       
    });
    expect(res.statusCode).toEqual(400);
    let payload= JSON.parse(res.body);
    expect(payload.error).toContain('c jest złe');
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