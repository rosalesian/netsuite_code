/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       16 Nov 2015     user
 *
 */

/**
 * @param {nlobjRequest} request Request object
 * @param {nlobjResponse} response Response object
 * @returns {Void} Any output is written via response object
 */
function suitelet(request, response){
	
	var html =  '<html><body><h1>Hello World</h1></body></html>';
    response.write( html ); 
   //prefix header with Custom-Header. See nlobjResponse.setHeader(name, value)
    response.setHeader('Custom-Header-Demo', 'Demo');

}
