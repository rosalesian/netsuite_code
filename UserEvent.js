/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       06 Nov 2015     user
 *
 */

function beforeLoad(type) {
	//nlapiLogExecution('DEBUG', 'User Event Sample', 'value sample');
//	nlapiSetFieldValue('memo', 'User Event value data');
}

function beforeSubmit(type) {
	alert('befor submit');
}

function afterSubmit(type) {
	alert('after submit');
}