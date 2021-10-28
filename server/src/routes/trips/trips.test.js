const request = require('supertest');
const app = require('../../app');
const { 
    mongoConnect,
    mongoDisconnect,
 } = require('../../services/mongo');

const {
    loadBoatsData,
} = require('../../models/boats.model');


describe('Trips API', () => {
    beforeAll( async () => {
        await mongoConnect();
        await loadBoatsData();
    });

    afterAll( async () => {
        await mongoDisconnect();
    });

    describe('Test GET /boats', () => {
        test('It should respond with 200 success', async () => {
            const response = await request(app)
            .get('/v1/boats')
            .expect('Content-Type', /json/)
            .expect(200);
        });
    });
    
    describe('Test POST /trips', () => {
        const tripTestData = {
            tripName: 'test trip',
            tripVolume: '08',
            tripBoat: 'Yacht',
            tripDate: 'January 01, 2022'
        };

        test('It should respond with 403 Unauthorized', async () => {
            const response = await request(app)
                .post('/v1/trips')
                .send(tripTestData)
                .expect('Content-Type', /json/)
                .expect(403);
            
            expect(response.body).toStrictEqual({
                error: 'NOT AUTHORIZED',
            })
        });
    });
});