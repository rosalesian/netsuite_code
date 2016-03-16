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
 * @param {String} type Access mode: create, copy, edit
 * @returns {Void}
 */



function clientPageInit(type){
	TYPE = type;
}
/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @returns {Boolean} True to continue save, false to abort save
 */
function clientSaveRecord(){
	var first_name = nlapiGetFieldValue('custrecord_emp_firstname');
	var last_name = nlapiGetFieldValue('custrecord_emp_lastname');
	
	//alert(type);
	//return false;	
	//alert(TYPE);
	//return false;
	
	if(first_name === '') {
		Alert('Please Input Employee First name');
		return false;
	}
	else if(last_name === '') {
		Alert('Please Input Employee Last name');
		return false;
	}
	
	if(TYPE == 'create') {
		var result = search_employee(first_name, last_name);
		if(result) {
			Alert('Employee Exist');
			return false;
		}
	}
	else if(TYPE == 'edit') {
		return true;
	}
	
	/*
	if(first_name === '') {
		Alert('Please Input Employee First name');
		return false;
	}
	else if(last_name === '') {
		Alert('Please Input Employee Last name');
		return false;
	}
	//else if()
	var result = search_employee(first_name, last_name);
	
	if(result) {
		Alert('Employee Exist');
		return false;
	}
    return true;*/
	return true;
    
}

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @param {String} type Sublist internal id
 * @param {String} name Field internal id
 * @param {Number} linenum Optional line item number, starts from 1
 * @returns {Boolean} True to continue changing field value, false to abort value change
 */
function clientValidateField(type, name, linenum){
	 
    return true;
}

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 * 
 * @param {String} type Sublist internal id
 * @param {String} name Field internal id
 * @param {Number} linenum Optional line item number, starts from 1
 * @returns {Void}
 */
function clientFieldChanged(type, name, linenum){
	
}

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 * 
 * @param {String} type Sublist internal id
 * @param {String} name Field internal id
 * @returns {Void}
 */
function clientPostSourcing(type, name) {
   
}

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @param {String} type Sublist internal id
 * @returns {Void}
 */
function clientLineInit(type) {
	
}

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @param {String} type Sublist internal id
 * @returns {Boolean} True to save line item, false to abort save
 */
function clientValidateLine(type){
	var department = nlapiGetCurrentLineItemValue('recmachcustrecord885', 'custrecord_dept_name');
	var description = nlapiGetCurrentLineItemValue('recmachcustrecord885', 'custrecord_dept_description');
	if(department === '') {
		alert('Please Input department');
		return false;
	}
	else if(description === '') {
		alert('Please Input description');
		return false;
	}
    return true;
}

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @param {String} type Sublist internal id
 * @returns {Boolean} True to continue line item insert, false to abort insert
 */
function clientValidateInsert(type){

    return true;
}

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @param {String} type Sublist internal id
 * @returns {Boolean} True to continue line item delete, false to abort delete
 */
function clientValidateDelete(type){
   
    return true;
}


