const request = require('supertest');
const { app } = require('./app');

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toEqual(3);
});

test('Supertest test', (done) => {
    request(app)
        .get('/test')
        .expect((body) => {
            expect(body.test).toEqual('Hello world');
            console.log(body);
        })
        .expect(200, done);

});

afterAll(() => {
    console.log('xd');
    app.close();
});