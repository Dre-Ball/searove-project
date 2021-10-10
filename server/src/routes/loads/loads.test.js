const request = require('supertest');
const app = require('../../app');
const { 
    mongoConnect,
    mongoDisconnect,
 } = require('../../services/mongo');

describe('Loads API', () => {
    beforeAll( async () => {
        await mongoConnect();
    });

    afterAll( async () => {
        await mongoDisconnect();
    });

    describe('Test GET /loads', () => {
        test('It should respond with 200 success', async () => {
            const response = await request(app)
            .get('/v1/loads')
            .expect('Content-Type', /json/)
            .expect(200);
        });
    });
    
    describe('Test POST /loads', () => {
        test('It should respond with 200 success', () => {
    
        });
    
        test('It should catch missing required properties', () => {});
        test('It should catch invalid dates', () => {});
    });
});