const { responseSuccess, responseFail, responseList } = require('../helpers/responses');
const { StatusCodes } = require('http-status-codes');
const planetsUseCase = require('../../domain/usecase/planets-usecase');

const getPlanets = async (event) => {

    let response = null

    try {

        const result = await planetsUseCase.getPlanets(event);
        response = responseList({ event, data: result });
        
    } catch (error) {

        console.log(error)
        response = responseFail(error);
        
    }

    return response;

}

const createPlanet = async (planetData) => {

    let response = null

    try {
        await planetsUseCase.createPlanet(planetData);
        response = responseSuccess({ 
            message: "Planeta creado!!"
         }, '200');
        
    } catch (error) {

        response = responseFail(error);
        
    }

    return response;

}

const updatePlanet = async (planetData, id) => {

    let response = null

    try {
        await planetsUseCase.updatePlanet(planetData, id);
        response = responseSuccess({ 
            message: "Planet actualizado!!"
         }, StatusCodes.OK);
        
    } catch (error) {

        response = responseFail(error);
        
    }

    return response;

}

const deletePlanet = async (id) => {

    let response = null

    try {
        await planetsUseCase.deletePlanet(id);
        response = responseSuccess({
            message: "Planet eliminado"
        }, StatusCodes.OK);
        
    } catch (error) {

        response = responseFail(error);
        
    }

    return response;

}

const getDetailPlanet = async (id) => {

    let response = null

    try {
        const planet = await planetsUseCase.getDetailPlanet(id);
        response = responseSuccess({
            data: planet
        }, StatusCodes.OK);
        
    } catch (error) {
        console.log('getDeattailPlanet', error)
        
        response = responseFail(error);
        
    }

    return response;

}

module.exports = {
    getPlanets,
    createPlanet,
    updatePlanet,
    deletePlanet,
    getDetailPlanet,
}