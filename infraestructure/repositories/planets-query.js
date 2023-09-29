const { db } = require('./connections');
const TableName = 'planetas';

const findPlanets = async (event) => {
    const query = event
    const offset = (query['page'] - 1) * query['limit'];
    return db.select().from(TableName).limit(query['limit']).offset(offset);
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
        creado: new Date().toISOString(),
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
            editado: new Date().toISOString(),
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
