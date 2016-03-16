/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       07 Nov 2015     user
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

var EMP_FIRSTNAME;
var EMP_LASTNAME;

function userEventBeforeLoad(type, form, request){
	//nlapiLogExecution('DEBUG', 'User Event Sample', 'value sample');/nlapiLogExecution('DEBUG', 'User Event Sample', 'value sample');
	//nlapiSetFieldValue('memo', 'User Event value data');
	EMP_FIRSTNAME  = 'custrecord_emp_firstname';
	EMP_LASTNAME = 'custrecord_emp_lastname';
	
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
	
	//if(EMP_FIRSTNAME == nlapiGetFieldValue('custrecord_emp_firstname')) {
	//	nlapiLogExecution('DEBUG', 'RESULT FOR EQUAL FIRSTNAME ', nlapiGetFieldValue('custrecord_emp_firstname'));
	//}
	
	var count = 0;
	var filters = new Array (
			new nlobjSearchFilter(EMP_FIRSTNAME, null, 'is', 'ian'),	
			//new nlobjSearchFilter('custrecord_emp_lastname', null, 'is', location),
			new nlobjSearchFilter(EMP_LASTNAME, null, 'is', 'rosales')
	);
	
	var column = new nlobjSearchColumn('custrecord_emp_firstname');
 
	var employee = nlapiSearchRecord('customrecord_employe_record', null, filters, column);
	
	//for(count; count<employee)
	//nlapiLogExecution('DEBUG', 'Result for save search', employee[0].getValue('custrecord_emp_firstname'));
	
	
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
