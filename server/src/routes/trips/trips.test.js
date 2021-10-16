const request = require('supertest');
const app = require('../../app');
const { 
    mongoConnect,
    mongoDisconnect,
 } = require('../../services/mongo');

describe('Trips API', () => {
    beforeAll( async () => {
        await mongoConnect();
    });

    afterAll( async () => {
        await mongoDisconnect();
    });

    describe('Test GET /trips', () => {
        test('It should respond with 200 success', async () => {
            const response = await request(app)
            .get('/v1/trips')
            .expect('Content-Type', /json/)
            .expect(200);
        });
    });
    
    describe('Test POST /trips', () => {
        test('It should respond with 200 success', () => {
    
        });
    
        test('It should catch missing required properties', () => {});
        test('It should catch invalid dates', () => {});
    });
});