/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       01 Dec 2015     user
 *
 */

/**
 * @param {Object} dataIn Parameter object
 * @returns {Object} Output object
 */
function getRESTlet(dataIn) {
	
	return getItemList();
}


function getItemList() {
	
	var columns = [
	     new nlobjSearchColumn('created'),
	     new nlobjSearchColumn('itemid')
	];
	
	return nlapiSearchRecord('item', null, null, columns);
}