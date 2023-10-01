const planetAdapter = require('../../application/model_adapters/planet-adapter');
const { HttpError } = require('../../application/exceptions/http-error')
const { StatusCodes } = require('http-status-codes')

const getPlanets = async (event) => {
    return planetAdapter.findPlanets(event);
}
const createPlanet = async (planetData) => {
    await validarFechaHoy(planetData.creado);
    await validarIdentificacionDuplicada(
        planetData.periodoOrbital,
    );
    await planetAdapter.createPlanet(planetData);
}

const updatePlanet = async (planetData, id) => {
    await validarFechaHoy(planetData.creado);
    await validarExistePlanet(id);

    await planetAdapter.updatePlanet(planetData, id);

}

const deletePlanet = async (id) => {

    await validarExistePlanet(id);

    await planetAdapter.deletePlanet(id);

}
const getDetailPlanet = async (id) => {
    const planet = await planetAdapter.findOnePlanet(id);

    if(planet == null)
        throw new HttpError("Planet no existe", StatusCodes.NOT_FOUND);

    return planet;
}

const validarIdentificacionDuplicada = async (
    periodoOrbital,
    id = null
) => {
    const planets = 
        await planetAdapter.getPlanetByTipoNumeroIdentificacion(
            periodoOrbital,
            id
        );

    if(planets.length)
        throw new HttpError("El periodo de orbital ya existe", StatusCodes.BAD_REQUEST);
}

const validarExistePlanet = async (id) => {
    const planet = await planetAdapter.findOnePlanet(id);

    if(planet == null)
        throw new HttpError("El Planeta no existe", StatusCodes.NOT_FOUND);
}

const validarFechaHoy = async (fechaNac) => {
    const fechaNacimiento = new Date(fechaNac);
    const today = new Date();
    if ( fechaNacimiento > today )
        throw new HttpError("La fecha es incorrecta", StatusCodes.BAD_REQUEST);
}

module.exports = {
    getPlanets,
    createPlanet,
    updatePlanet,
    deletePlanet,
    getDetailPlanet,
}