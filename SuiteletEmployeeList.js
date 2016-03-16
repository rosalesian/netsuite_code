/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       10 Nov 2015     user
 *
 */

/**
 * @param {nlobjRequest} request Request object
 * @param {nlobjResponse} response Response object
 * @returns {Void} Any output is written via response object
 */
function suitelet(request, response){
	
	var list = nlapiCreateList('Emplyee List');
	list.setStyle('normal');


	list.addColumn('companyname', 'text', 'Firstname', 'left');
	//list.addColumn('vatregnumber', 'text', 'Lastname', 'left');
	//list.addColumn('phone', 'phone', 'Phone', 'left');


	//var filter = new nlobjSearchFilter('phone', null, 'contains', '111-1111');

	var columns = new Array(); //result
	columns[0] = new nlobjSearchColumn('custrecord_emp_firstname');
	//columns[1] = new nlobjSearchColumn('custrecord_emp_lastname');
	//columns[2] = new nlobjSearchColumn('custrecord_emp_contact');

	
	var customers = nlapiSearchRecord('customrecord_employe_record', null, null, columns); //unexpected error
	
	Log('result for array ', customers[0].getValue('custrecord_emp_firstname'));

	//slist.addRows(customers);
	nlapiLogExecution("DEBUG", "message", "Drawing Layout");

	response.writePage(list);
	
}
