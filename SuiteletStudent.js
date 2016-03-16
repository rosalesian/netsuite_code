/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       10 Nov 2015     user
 *
 */

/**
 * @param {nlobjRequest} request Request object
 * @param {nlobjResponse} response Response objectl
 * @returns {Void} Any output is written via response object
 */
function suitelet(request, response){
	var RECORD_ID = 'customrecord_employe_record';
	
	var emp  = employee_list();
	 
	var result_emp = get_emplopyee();
	
//	Log('Result sublist', emp.length);
	
	
	if ( request.getMethod() == 'GET' )
	   {
	        var form = nlapiCreateForm('Employee Form');
	        var field = form.addField('custpage_firstname','text', 'First name');
	        field.setLayoutType('normal', 'startcol')
	        form.addField('custpage_middlename','text', 'Middle name');
	        form.addField('custpage_lastname','text','Last name');
	        form.addField('custpage_date_of_birth','date', 'Date Of Birth');
	        form.addField('custpage_contact','phone', 'Phone');
	        form.addField('custpage_address', 'text', 'Address');
	        
	        
	      
	        
	        var sublist = form.addSubList('custpage_dptlist','inlineeditor', 'Department');
	        //standard record
	        var sub = sublist.addField('custpage_item_sublist', 'select', 'Item', 'item');
	        //custom record 
	       // var sub = sublist.addField('custpage_item_sublist', 'select', 'Item', RECORD_ID);
	        //sub.addSelectOption('',result_emp);
	        sublist.addField('custpage_department', 'text', 'Department');
	        sublist.addField('custpage_description', 'textarea', 'Description');
	       
	        form.addSubmitButton('Submit');
	 
	        response.writePage( form );
	        
	       // alert('Helllo World');
	   }
	   else {
		 /*  var REC_ID = "";
		   	var employee = nlapiCreateRecord(REC_ID);
		   	
		   	employee.setFieldValue(FIRST_NAME, request.getParameter('datefield'));
		   	 
		   	var id = nlapiSubmitRecord(employee, true, true);*/
		   
		    var FIRST_NAME = 'custrecord_emp_firstname',
		   		MIDDLE_NAME = 'custrecord_emp_middlename',
		   		LAST_NAME = 'custrecord_emp_lastname',
		   		DATE_OF_BIRTH = 'custrecord_emp_dob',
		   		CONTACT = 'custrecord_emp_contact',
		   		ADDRESS = 'custrecord_emp_address';
		  
		   
		   var first_name = request.getParameter('custpage_firstname'),
		   	   middle_name = request.getParameter('custpage_middlename'),
		   	   last_name = request.getParameter('custpage_lastname'),
		   	   date_of_birth = request.getParameter('custpage_date_of_birth'),
		   	   contact = request.getParameter('custpage_contact'),
		   	   address = request.getParameter('custpage_address');
		   
		   Log('Test', 'test for line item');
		   Log('Line item value',  request.getLineItemValue ('custpage_dptlist', 'custpage_department', 1));
		   
		 
		   var employee = nlapiCreateRecord(RECORD_ID);
		   employee.setFieldValue(FIRST_NAME, first_name);
		   employee.setFieldValue(MIDDLE_NAME, middle_name);
		   employee.setFieldValue(LAST_NAME, last_name);
		   employee.setFieldValue(DATE_OF_BIRTH, date_of_birth);
		   employee.setFieldValue(CONTACT, contact);
		   employee.setFieldValue(ADDRESS, address);
		   
		   employee.setLineItemValue('recmachcustrecord885', 'custrecord_item_sublist', 1, '33546');
		   employee.setLineItemValue('recmachcustrecord885', 'custrecord_dept_name', 1, 'testing department');
		   employee.setLineItemValue('recmachcustrecord885', 'custrecord_dept_description', 1, 'THIS IS A DESCRIPTION');
		   
		   var id = nlapiSubmitRecord(employee, true, true);
		   //suiteletList(request, response);
		  // Log('Result for submit', id);
		   
		   
		   
		   //Log('result post', first_name +" "+ middle_name +" "+ last_name +" "+ date_of_birth +" "+ contact +" "+ address);
		   
		   }
	        //dumpResponse(request,response);
		   //Log(request, response);
		   //alert('Helllo World');
		   
			
}

function employee_list() {
	
	var column = [
	           new nlobjSearchColumn('custrecord_emp_firstname'),
	           new nlobjSearchColumn('custrecord_emp_middlename'),
	           new nlobjSearchColumn('custrecord_emp_lastname'),
	           new nlobjSearchColumn('custrecord_emp_dob'),
	           new nlobjSearchColumn('custrecord_emp_contact'),
	           new nlobjSearchColumn('custrecord_emp_address')
	    ];
	
	return  nlapiSearchRecord('customrecord_employe_record', null, null, column);
}


function suiteletList(request, response){

	

}


