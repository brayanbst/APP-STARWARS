const { db } = require('../../infraestructure/repositories/connections');
const planetQuery = require('../../infraestructure/repositories/planets-query');
const planetDto = require('../helpers/planet-dto');

const findPlanets = async (event) => {
    const data = await planetQuery.findPlanets(event.queryStringParameters || {});
    return planetDto.getPlanetsFromDBArray(data);
}

const findOnePlanet = async (id) => {
    const data = await planetQuery.findOnePlanet(id);
    return (data == null || data.length == 0)
     ? null
     : planetDto.getPlanetFromDBDto(data[0]);
}

const createPlanet = async ({
    nombre,
    periodoRotacion,
    periodoOrbital,
    diametro,
    clima,
    gravedad,
    terreno,
    aguaSuperficial,
    poblacion,
    residentes,
    peliculas,
    url
}) => {
    await planetQuery.createPlanet({
        nombre,
        periodoRotacion,
        periodoOrbital,
        diametro,
        clima,
        gravedad,
        terreno,
        aguaSuperficial,
        poblacion,
        residentes, 
        peliculas,
        url
    })
}

const updatePlanet = async ({
    nombre,
    periodo_rotacion,
    periodo_orbital,
    diametro,
    clima,
    gravedad,
    terreno,
    agua_superficial,
    poblacion,
    residentes,
    peliculas,
    url
}, id) => {
    await planetQuery.updatePlanet({
        nombre,
        periodo_rotacion,
        periodo_orbital,
        diametro,
        clima,
        gravedad,
        terreno,
        agua_superficial,
        poblacion,
        residentes, 
        peliculas,
        url
    }, id)
}


const deletePlanet = async (id) => {
    await planetQuery.deletePlanet(id);
}

const getPlanetByTipoNumeroIdentificacion = async (
    orbitalPeriod,
    id = null
) => {
    const result = await planetQuery.getPlanetByPeriodoOrbital(
        orbitalPeriod,
        id
    );

    return (result == null || result.length == 0) 
        ? []
        : planetDto.getPlanetsFromDBArray(result);
}

module.exports = {
    findPlanets,
    findOnePlanet,
    createPlanet,
    updatePlanet,
    deletePlanet,
    getPlanetByTipoNumeroIdentificacion,
}