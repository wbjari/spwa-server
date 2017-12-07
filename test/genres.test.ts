import * as assert from 'assert';
import 'mocha';
import * as request from 'supertest';
import { Genre } from '../src/model/genre.model';
import { DeejaySchema } from '../src/model/schemas/deejay.schema';
import { IGenreDocument } from '../src/model/schemas/genre.schema';
const app = require('../src/index').default;

describe('Genres routes', () => {
    let genre: IGenreDocument;

    beforeEach((done) => {
        genre = new Genre({
            name: 'Hardstyle',
            description: 'This is to test the description of a genre',
            deejays: [
                {
                    name: 'Headhunterz',
                    age: 30
                }
            ]
        } as IGenreDocument);

        genre.save().then(() => done());
    });

    it('Gets to /api/v1/genres get all genres', (done) => {
        request(app)
            .get('/api/v1/genres')
            .expect(200)
            .then((response) => {
                const responseBody = response.body;

                assert(responseBody != null);
                assert(responseBody.length > 0);
                assert(responseBody[0].name === 'Hardstyle');
                done();
            });
    });
});
