const responseList = ({ event, data, message }, statusCode = 200) => {
    const page = parseInt(event.queryStringParameters['page']);
    return {
        success: true,
        data: {
            count: data.length,
            next: `http://localhost:3000/dev/planets?page=${page + 1}`,
            previous: page === 1 ? null : `http://localhost:3000/dev/planets?page=${page-1}`,
            results: data,
        },
        message,
        statusCode
    };
}


const responseSuccess = ({ data, message }, statusCode = 200) => {
    return {
        success: true,
        data,
        message,
        statusCode
    };
}

const responseFail = (error) => {
    
    let response = null;

    if (error == null){
        response = structureFail({ message: "Error inesperado" });
    } else if ( error.message && !error.statusCode ){
        response = structureFail({ message: error.message });
    } else if ( error.message && error.statusCode ){
        response = structureFail({ message: error.message }, error.statusCode);
    }

    return response;

}

const structureFail = ({ data, message }, statusCode = 500) => {
    return {
        success: false,
        data,
        message,
        statusCode
    };
}

module.exports = {
    responseSuccess,
    responseFail,
    responseList
}