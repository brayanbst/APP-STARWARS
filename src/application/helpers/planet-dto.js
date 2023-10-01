const getPlanetFromDBDto = ({
    id,
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
    creado,
    editado,
    url
}) => ({
    id: id,
    nombre: nombre,
    periodoRotacion: periodo_rotacion,
    periodoOrbital: periodo_orbital,
    diametro: diametro,
    clima: clima,
    gravedad: gravedad,
    terreno: terreno,
    aguaSuperficial: agua_superficial,
    poblacion: poblacion,
    residentes: JSON.parse(residentes),
    peliculas: JSON.parse(peliculas),
    creado: creado,
    editado: editado,
    url: url
});

const getPlanetsFromDBArray = (planetasDB) => planetasDB.map(getPlanetFromDBDto);

const getDBFromPlanetDto = ({
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
}) => ({
    nombre: nombre,
    periodo_rotacion: periodoRotacion,
    periodo_orbital: periodoOrbital,
    diametro: diametro,
    clima: clima,
    gravedad: gravedad,
    terreno: terreno,
    agua_superficial: aguaSuperficial,
    poblacion: poblacion,
    residentes: JSON.stringify(residentes),
    peliculas: JSON.stringify(peliculas),
    creado: creado,
    editado: editado,
    url: url
});

module.exports = {
    getPlanetFromDBDto,
    getPlanetsFromDBArray,
    getDBFromPlanetDto,
}
