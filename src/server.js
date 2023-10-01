const testInterceptor = async (handler, event) => {
	const response = await handler(event);
  console.log('Response:', response);

	if (!response.statusCode || response.statusCode !== 200) {
	  console.error('Test Error: Invalid Status Code', response);
	}
	return response;
  };

  const modifyObject = async (obj) => {
	let modifiedObj = { 
        httpMethod: obj.httpMethod, 
        path: obj.path.split('?')[0], 
        queryStringParameters: {} 
    };
    
    let queryString = obj.path.split('?')[1];
    
    if (queryString) {
        let queryParams = queryString.split('&');
        queryParams.forEach(param => {
            let [key, value] = param.split('=');
            modifiedObj.queryStringParameters[key] = value; 
        });
    }
    
    return modifiedObj;
  };



  

  const methods = {
	testInterceptor,
	modifyObject,
};

module.exports = methods;
