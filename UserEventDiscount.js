/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       03 Dec 2015     user
 *
 */

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @param {String} type Operation types: create, edit, view, copy, print, email
 * @param {nlobjForm} form Current form
 * @param {nlobjRequest} request Request object
 * @returns {Void}
 */
function userEventBeforeLoad(type, form, request)
{
	
	//nlapiSetFieldValue('itemid', 'this i item');
 
}

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 * 
 * @param {String} type Operation types: create, edit, delete, xedit
 *                      approve, reject, cancel (SO, ER, Time Bill, PO & RMA only)
 *                      pack, ship (IF)
 *                      markcomplete (Call, Task)
 *                      reassign (Case)
 *                      editforecast (Opp, Estimate)
 * @returns {Void}
 */
function userEventBeforeSubmit(type){
	
	/*var item_name = nlapiGetFieldValue('itemid');
	var internal_id = nlapiGetFieldValue('displayname');
	var url = baseUrl(item_name, internal_id);
	var headers = getHeaders();
	
	var response = nlapiRequestURL('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2de143494c0b295cca9337e1e96b00e0', null, headers );
	 var responsebody = JSON.parse(response.getBody());
	Log('main', responsebody['main']['temp']);
	Log('error', responsebody);
	Log('message', responsebody['message']);*/
	//Log('item name', internal_id);
 
}

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 * 
 * @param {String} type Operation types: create, edit, delete, xedit,
 *                      approve, cancel, reject (SO, ER, Time Bill, PO & RMA only)
 *                      pack, ship (IF only)
 *                      dropship, specialorder, orderitems (PO only) 
 *                      paybills (vendor payments)
 * @returns {Void}
 */
function userEventAfterSubmit(type){
  
}

/*function baseUrl(name, internal) {
	
	return 'http://www.discount.dev/api/items/finalitem/66666';
	Log('test', '2');
}

function getHeaders(){
	var headers = new Array();
		headers['User-Agent-x'] = 'SuiteScript-Call';
		headers['Content-Type'] = 'application/json';
		
		return headers;
}


function Log(id, value) 
{
	nlapiLogExecution('DEBUG', id, value);
}
*/