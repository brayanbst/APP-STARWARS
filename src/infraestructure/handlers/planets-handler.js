'use strict';
const responseHttp = require('../helpers/response')
const { 
  getPlanets: getPlanetsController,
  createPlanet: createPlanetController,
  updatePlanet: updatePlanetController,
  deletePlanet: deletePlanetController,
  getDetailPlanet: getDetailPlanetController,
} = require('../../application/controllers/planets-controller')

const createPlanet = async (event) => {
  const { success, data, message, statusCode } = await createPlanetController(JSON.parse(event.body));
  return responseHttp(success, data, message, statusCode);
};

const getPlanets = async (event) => {
  const { success, data, message, statusCode } = await getPlanetsController(event);
  return responseHttp(success, data, message, statusCode);
};

const updatePlanet = async (event) => {
  const { success, data, message, statusCode } = 
    await updatePlanetController(
      JSON.parse(event.body),
      event.pathParameters.id
    );
  return responseHttp(success, data, message, statusCode);
}

const deletePlanet = async (event) => {
  const { success, data, message, statusCode } =
    await deletePlanetController(event.pathParameters.id);
  return responseHttp(success, data, message, statusCode);
}

const getDetailPlanet = async (event) => {
  const { success, data, message, statusCode } = 
    await getDetailPlanetController(event.pathParameters.id);
  return responseHttp(success, data, message, statusCode);
}


module.exports = {
  createPlanet,
  getPlanets,
  updatePlanet,
  deletePlanet,
  getDetailPlanet
}
