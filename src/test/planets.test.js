const test = require('tape');
const handler = require('../infraestructure/handlers/planets-handler'); 
const { testInterceptor, modifyObject } = require('../server');
const { createPlanet } = require('../infraestructure/handlers/planets-handler'); 

test('GET /dev/planets/1 should return correct planet data', async (assert) => {
    let event = {
        httpMethod: 'GET',
        path: '/dev/planets?page=2&limit=10',
    };
    
    try {
        const result = await testInterceptor(handler.getPlanets, await modifyObject(event)); 
        assert.ok(result.statusCode === 200, 'Should return a 200 status code');
    } catch (error) {
        assert.fail(`Test failed with error: ${error.message}`);
    } finally {
        assert.end();
    }
});

test('createPlanet should create a new planet', async (assert) => {
    const event = {
        body: JSON.stringify({
            "nombre": "TESTPRUEBNA",
            "periodoRotacion": "233",
            "periodoOrbital": "333353346bh",
            "diametro": "10465",
            "clima": "árido",
            "gravedad": "1 estándar",
            "terreno": "desierto",
            "aguaSuperficial": "1",
            "poblacion": "200000",
            "residentes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/11/",
                "https://swapi.py4e.com/api/people/43/",
                "https://swapi.py4e.com/api/people/62/"
            ],
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "creado": "2014-12-09T13:50:49.641000Z",
            "editado": "2014-12-20T20:58:18.411000Z",
            "url": "https://swapi.py4e.com/api/planets/2/"
        }),
    };

        const result = await createPlanet(event)
        const body = JSON.parse(result.body);
        
            const actual = Number(result.statusCode);
            const expected = 200;
            const message = body.message;
            assert.equal(actual, expected, message);

        assert.end();
});
