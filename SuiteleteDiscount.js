/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       02 Dec 2015     user
 *
 */

/**
 * @param {nlobjRequest} request Request object
 * @param {nlobjResponse} response Response object
 * @returns {Void} Any output is written via response object
 */
function suitelet(request, response)
{
	
	if(request.getMethod() == 'GET') 
	{
		var form = nlapiCreateForm('Search Discounts');
		var field = form.addField('custpage_customer', 'select', 'Customer', 'customer');
		field.setLayoutType('normal', 'startcol');
		form.addField('custpage_item', 'select', 'Item', 'item');
		form.addField('custpage_price','select', 'Price', 'price');
		form.addField('custpage_location', 'select', 'Location', 'location');

		var select = form.addField('custpage_operation','select', 'Select');
        select.addSelectOption('','');
        select.addSelectOption('extruct', 'Extruct');
        select.addSelectOption('booking', 'Booking');
        select.addSelectOption('inter_island', 'Inter-island');
    
		
		form.addSubmitButton('submit');
		response.writePage(form);
	}
	else
	{
		
	}
}
