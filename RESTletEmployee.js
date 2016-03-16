/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       13 Nov 2015     user
 *
 */

/**
 * @param {Object} dataIn Parameter object
 * @returns {Object} Output object
 */
function getRESTlet(dataIn) {
	
	var data = searchRecord(dataIn.first_name, dataIn.last_name);
	var error = {};
	if(data == null) {
		error.error = true;
		nlapiLogExecution('DEBUG','response '+error);
	}
	return data;
}

/**
 * @param {Object} dataIn Parameter object
 * @returns {Object} Output object
 */
function postRESTlet(dataIn) {
	
	return {};
}

/**
 * @param {Object} dataIn Parameter object
 * @returns {Void} 
 */
function deleteRESTlet(dataIn) {
	
}

/**
 * @param {Object} dataIn Parameter object
 * @returns {Object} Output object 
 */
function putRESTlet(dataIn) {
	
	return {};
}


function getRecord() {
	
	
}

function searchRecord(first_name, last_name) {
	
	var EMP_FIRSTNAME  = 'custrecord_emp_firstname';
	var EMP_LASTNAME = 'custrecord_emp_lastname';
	
	var filters = [
	   			new nlobjSearchFilter(EMP_FIRSTNAME, null, 'is', first_name),
	   			new nlobjSearchFilter(EMP_LASTNAME, null, 'is', last_name)
	   		];
	
	var columns = [
	            new nlobjSearchColumn(EMP_FIRSTNAME),
	            new nlobjSearchColumn(EMP_LASTNAME)
	        ];
	
	return nlapiSearchRecord('customrecord_employe_record', null, filters, columns)
}

function getEmployee() {
	
}
