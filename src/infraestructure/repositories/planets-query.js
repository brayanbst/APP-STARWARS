const config = require('../../../knexfile');
const db = require('knex')(config);
const TableName = 'planetas'

const findPlanets = async (event) => {
    const query = event
    const offset = (query['page'] - 1) * query['limit'];
    const  data = db.select().from(TableName).limit(query['limit']).offset(offset);
    return data;
}

const findOnePlanet = async (id) => {
    return db.select().where('id', id).table(TableName);
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
    creado,
    editado,
    url
}) => {
    const date = new Date();
    const formattedDate = date.toISOString().split('.')[0].replace('T', ' ');
    await db(TableName).insert({
        nombre,
        periodo_rotacion: periodoRotacion,
        periodo_orbital: periodoOrbital,
        diametro,
        clima,
        gravedad,
        terreno,
        agua_superficial: aguaSuperficial,
        poblacion,
        residentes: JSON.stringify(residentes), 
        peliculas: JSON.stringify(peliculas), 
        creado: formattedDate,
        editado: null,
        url
    });
}


const updatePlanet = async ({
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
    creado,
    editado,
    url
}, id) => {
    const date = new Date();
    const formattedDate = date.toISOString().split('.')[0].replace('T', ' ');
    await db(TableName)
        .where('id', '=', id)
        .update({
            nombre,
            periodo_rotacion: periodoRotacion,
            periodo_orbital: periodoOrbital,
            diametro,
            clima,
            gravedad,
            terreno,
            agua_superficial: aguaSuperficial,
            poblacion,
            residentes: JSON.stringify(residentes),
            peliculas: JSON.stringify(peliculas), 
            creado,
            editado: formattedDate,
            url
        });
}


const deletePlanet = async (id) => {
    await db(TableName)
        .where('id', id)
        .del();
}

const getPlanetByPeriodoOrbital = async (periodoOrbital, id = null) => {
    
    let query = db.select().where('periodo_orbital', periodoOrbital);
    if (id)
        query.whereNot('id', id);
    return query.table(TableName);
}

module.exports = {
    findPlanets,
    findOnePlanet,
    createPlanet,
    updatePlanet,
    deletePlanet,
    getPlanetByPeriodoOrbital
}
