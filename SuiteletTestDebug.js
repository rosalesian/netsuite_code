/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       11 Nov 2015     user
 *
 */

/**
 * @param {nlobjRequest} request Request object
 * @param {nlobjResponse} response Response object
 * @returns {Void} Any output is written via response object
 */
function suitelet(request, response){
	var list = nlapiCreateList('Customer List');
	list.setStyle('normal');
	
	/* var column = list.addColumn('number', 'text', 'Number', 'left');
     column.setURL(nlapiResolveURL('RECORD','salesorder'));
     column.addParamToURL('id','id', true);*/
	

	//list.addColumn('custrecord_emp_id', 'text', 'text','left');
	
	
	list.addColumn('custrecord_emp_firstname', 'text', 'Firstname', 'left');
	list.addColumn('custrecord_emp_lastname', 'text', 'Lastname', 'left');
	list.addColumn('custrecord_emp_contact', 'phone', 'Phone', 'left');


	//var filter = new nlobjSearchFilter('phone', null, 'contains', '111-1111');
	
	var columns = new Array(); //result
	columns[0] = new nlobjSearchColumn('custrecord_emp_firstname');
	columns[1] = new nlobjSearchColumn('custrecord_emp_lastname');
	columns[2] = new nlobjSearchColumn('custrecord_emp_contact');

	nlapiLogExecution("DEBUG", "message", "Initializing search");
	var customers = nlapiSearchRecord('customrecord_employe_record', null, null, columns); //unexpected error
	nlapiLogExecution("DEBUG", "message", "Search success");
	for (var i =0; i < customers.length; i++){
		nlapiLogExecution("DEBUG", "customer", customers[i].getValue("custrecord_emp_firstname"));
	}
		

	list.addRows(customers);
	nlapiLogExecution("DEBUG", "message", "Drawing Layout");

	response.writePage(list);
}
