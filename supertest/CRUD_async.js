const request = require('supertest');
const { expect } = require('chai');

let userName = 'Test123';
let updatedUserName = 'Test123_updated';
it('POST create user && async/callback', async () => {
    await request('https://petstore.swagger.io/v2').post('/user').send({
        "id": 0,
        "username": userName,
        "firstName": "Test123",
        "lastName": "Test123",
        "email": "Test123",
        "password": "Test123",
        "phone": "Test123",
        "userStatus": 0
    }).then(($response) => {
        expect($response.statusCode).to.eql(200);
        expect($response.body).to.haveOwnProperty('type');
    });
});

it('GET user by name', async () => {
    await request('https://petstore.swagger.io/v2').get('/user/' + userName).then(($response) => {
        expect($response.statusCode).to.eq(200);
        expect($response.body).to.not.empty;
        expect($response.body).to.have.property('username', userName);
    });
});

it('UPDATE user by name', async () => {
    await request('https://petstore.swagger.io/v2').put('/user/' + userName).send({
        "id": 0,
        "username": updatedUserName,
        "firstName": "Test123",
        "lastName": "Test123",
        "email": "Test123",
        "password": "Test123",
        "phone": "Test123",
        "userStatus": 0
    }).then(($response) => {
        expect($response.statusCode).to.eq(200);
        expect($response.body).to.not.empty;
    });
});

it('DELETE user by name', async () => {
    await request('https://petstore.swagger.io/v2').delete('/user/' + updatedUserName).then(($response) => {
        expect($response.statusCode).to.eq(200);
        expect($response.body).to.not.empty;
        expect($response.body).to.property('message', updatedUserName);
        console.log($response.body);
    });
});