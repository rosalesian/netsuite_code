/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       15 Feb 2016     user
 *
 */

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @param {String} type Sublist internal id
 * @returns {Boolean} True to save line item, false to abort save
 */
function clientValidateLine(type){
	
	var location, principal, item, quantity, units, amount, unit_type, conversionrate, price, net, purchase_price, conversion_factor;
	
	var custom_form = nlapiGetFieldValue('customform');
	if(custom_form == 165 || custom_form == 181 || custom_form == 176 || custom_form == 119)
	{
		principal = nlapiGetFieldValue('class');
		if(principal == null || principal == "")
		{
			alert("Principal is required!...");
			return false;
		}
		else
		{
			//location = nlapiGetFieldValue('location');
			location = nlapiLookupField('employee', nlapiGetUser(), 'custentity49');
			item = nlapiGetCurrentLineItemValue('item', 'item');
			quantity = nlapiGetCurrentLineItemValue('item', 'quantity');
			units = nlapiGetCurrentLineItemText('item', 'units');
			amount = nlapiGetCurrentLineItemValue('item', 'amount');
			
			purchase_price = getPurchasePrice(location, principal, item);
			
			var result_item = getUnitTypeId(item);
			conversion_factor = result_item.conversionRate;
			unit_type = result_item.unitType;
			
			//CALL METHOD CONVERTION RATE TO GET CONVERSIONRATE
			conversionrate = getConversionRate(unit_type, units);
			//COMPUTATION FOR PRICE
			price = (parseFloat(purchase_price) / parseFloat(conversion_factor)) * parseFloat(conversionrate);
			//COMPUTATION FOR NET
			net = parseFloat(price) * parseFloat(quantity).toFixed(5);
			
			nlapiSetCurrentLineItemValue('item','amount',net);
		
			return true;
		}
		
	}
  
}

//RETURN PURCHASE PRICE
function getPurchasePrice(location, principal, item)
{
	
	var columns = [
					new nlobjSearchColumn('custrecord744'), 
				  ];
	var filter = [
	              	new nlobjSearchFilter('custrecord743', null, 'is', location),
	              	new nlobjSearchFilter('custrecord802', null, 'is', principal),
	              	new nlobjSearchFilter('custrecord742', null, 'is', item)
	             ];
	var results = nlapiSearchRecord('customrecord252', null, filter, columns);
	if(results != null)
	{
		return results[0].getValue('custrecord744');;
	} 
	else
	{
		return 0.00;
	}
}

//RETURN CONVERTION FACTOR AND UNIT PRICE
function getUnitTypeId(item)
{
	var columns = [
					new nlobjSearchColumn('custitem72'),
					new nlobjSearchColumn('unitstype')
				  ];
	var filter = [
	              	new nlobjSearchFilter('internalid', null, 'is', item)
	             ];
	var results = nlapiSearchRecord('inventoryitem', null, filter, columns);
	if(results != null)
	{
		return {
			'unitType': results[0].getValue('unitstype'),
			'conversionRate': results[0].getValue('custitem72')
		};
	}
	else
	{
		return 0.00;
	}
}

//RETURN CONVERSTION RATE
function getConversionRate(unit_type, units)
{
	filters = new Array (
			new nlobjSearchFilter('internalid', null, 'anyof', unit_type),
			new nlobjSearchFilter('abbreviation', null, 'is', units)
	);

	search = nlapiSearchRecord('unitstype', 'customsearch_conversion_units', filters,  new nlobjSearchColumn('conversionrate'));
	if(search != null)
	{
		return search[0].getValue('conversionrate');
	}
	else
	{
		return 0.00;
	}
}
//3rd parameter type
function Log(id, value) {
	nlapiLogExecution('DEBUG', id, value);
}