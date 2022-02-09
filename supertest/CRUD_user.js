// // import supertest from "supertest";
// const request = require('supertest');
// const { expect } = require('chai'); 

// let userName = 'Test123';
// it('POST create user && async/callback', async () => {
//     let response = await request('https://petstore.swagger.io/v2').post('/user').send({
//         "id": 0,
//         "username": userName,
//         "firstName": "Test123",
//         "lastName": "Test123",
//         "email": "Test123",
//         "password": "Test123",
//         "phone": "Test123",
//         "userStatus": 0
//     }).then(($response) => {
//         expect($response.statusCode).to.eql(200);
//         // expect($response.body.userName).to.have.property(userName)
//         console.log($response.body)

//     });
//     // expect(response.status).to.eql(200);
//     // expect(response.status).to.eql('1cmbn')
// });

// // it('GET user by name', () => {
// //     request('https://petstore.swagger.io/v2').get('/user/' + userName).then(($response) => {
// //         console.log($response.body)
        
// //     })
// //     // .set('Accept', 'application/json').expect('Content-Type', /json/).expect(200)
// // })