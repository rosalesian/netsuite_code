/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       09 Nov 2015     user
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

var EMP_FIRSTNAME  = 'custrecord_emp_firstname';
var EMP_LASTNAME = 'custrecord_emp_lastname';

function userEventBeforeLoad(type, form, request){


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
 
	
	var first_name = nlapiGetFieldValue('custrecord_emp_firstname');
	var last_name = nlapiGetFieldValue('custrecord_emp_lastname');
	//search_employee(first_name,last_name); 
	
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
	
	/*var record = nlapiCreateRecord('customrecord_employe_record');
	record.setFieldValue('custrecord_emp_firstname', VALUE);
	
	var record = nlapiGetNewRecord();
	record.getId();
	record.getType();
	record.getFieldValue('custrecord_emp_firstname');u
	record.getLineItemCount('recmachcustrecord885');
	record.getLineItemValue('recmachcustrecord885', 'custrecord_item_sublist', 1);
	Log('adding emplyee ', nlapiGetFieldId());	*/
	
	var record = nlapiGetNewRecord();
	var id = record.getId();
	var first_name = record.getFieldValue('custrecord_emp_firstname');
	var department = record.getLineItemValue('recmachcustrecord885','custrecord_dept_name', 1);
	Log('firstname', first_name);
	Log('lineItem id', 7);
	Log('firstname', department);
}
