/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       08 Dec 2015     Brian
 *
 */


function fieldChange(type, name) {
	if(name=='units'){
		if(nlapiGetFieldValue('class')=='3' || nlapiGetFieldValue('class')=='10' || nlapiGetFieldValue('class')=='1'  || nlapiGetFieldValue('class')=='11' || nlapiGetFieldValue('class')=='118') { // MONDELEZ=3; DELMONTE GT=10; DELMONTE=1; DELMONTE FS=11; GLOBE=118;
	    	nlapiSetCurrentLineItemValue('item', 'custcol6', 0);
			nlapiSetCurrentLineItemValue('item', 'custcol7', 0);
			nlapiSetCurrentLineItemValue('item', 'custcol8', 0);
			nlapiSetCurrentLineItemValue('item', 'custcol9', 0);
			nlapiSetCurrentLineItemValue('item', 'custcol11', 0);
			nlapiSetCurrentLineItemValue('item', 'custcol12', 0);
			nlapiSetCurrentLineItemValue('item', 'custcol32', 0);
			nlapiSetCurrentLineItemValue('item', 'rate', 0);
			nlapiSetCurrentLineItemValue('item', 'amount', 0);
			nlapiSetCurrentLineItemValue('item', 'custcol10', 0);
		}
	}
}

function validateLine(type) {
	if(nlapiGetFieldValue('class')=='3' || nlapiGetFieldValue('class')=='10' || nlapiGetFieldValue('class')=='1'  || nlapiGetFieldValue('class')=='11' || nlapiGetFieldValue('class')=='118') { // MONDELEZ=3; DELMONTE GT=10; DELMONTE=1; DELMONTE FS=11; GLOBE=118;
		parent_location = nlapiLookupField('employee', nlapiGetUser(), 'custentity49', false); 
		POMDG.computeAmountDue(nlapiGetCurrentLineItemValue('item', 'item'),parent_location, nlapiGetFieldValue('class'));
	}
	return true;
}

var POMDG = new function () {
	//----------------------------------------------------//
	this.computeAmountDue = function(item, location, principal) {
		var discamt1 = 0,
			discamt2 = 0,
			discamt3 = 0,
			discamt4 = 0,
			discamt5 = 0,
			discamt6 = 0,
			total_discount = 0,
			gross = 0;
		
		var discounts = POMDG.getCustomerDiscounts(item, location, principal);
		if(discounts!=null) {
			var unitTypeAndConversionRate = POMDG.getItemUnitTypeConversionRate(item);
			var price_piece = parseFloat(discounts.purchase_price) / parseFloat(unitTypeAndConversionRate.conversionRate); //Compute Purchase price in pieces
			conversion_rate = POMDG.getConversionRate(unitTypeAndConversionRate.unitType, nlapiGetCurrentLineItemText('item', 'units')); //gets the Conversion factor based on the unit selected
			price = (price_piece * conversion_rate).toFixed(10); //Compute purchase price based on units
			
			gross = parseFloat(price * nlapiGetCurrentLineItemValue('item', 'quantity')).toFixed(10);
			
			discamt1 = parseFloat(parseFloat(discounts.dist_disc)/100) * gross;
			gross-=discamt1;
			discamt2 = parseFloat(parseFloat(discounts.bo_allow)/100) * gross;
			gross-=discamt2;
			discamt3 = parseFloat(parseFloat(discounts.prompt_disc)/100) * gross;
			gross-=discamt3;
			discamt4 = parseFloat(parseFloat(discounts.tra)/100) * gross;
			gross-=discamt4;
			discamt5 = parseFloat(parseFloat(discounts.merch_support)/100) * gross;
			gross-=discamt5;
			discamt6 = parseFloat(parseFloat(discounts.slog_disc)/100) * gross;
			gross-=discamt6;
			
			total_discount = discamt1 + discamt2 + discamt3 + discamt4 + discamt5 + discamt6;
			nlapiSetCurrentLineItemValue('item', 'custcol6', discounts.dist_disc);
			nlapiSetCurrentLineItemValue('item', 'custcol7', discounts.bo_allow);
			nlapiSetCurrentLineItemValue('item', 'custcol8', discounts.prompt_disc);
			nlapiSetCurrentLineItemValue('item', 'custcol9', discounts.tra);
			nlapiSetCurrentLineItemValue('item', 'custcol11', discounts.merch_support);
			nlapiSetCurrentLineItemValue('item', 'custcol12', discounts.slog_disc);
			nlapiSetCurrentLineItemValue('item', 'custcol32', price);
			nlapiSetCurrentLineItemValue('item', 'rate', price);
			nlapiSetCurrentLineItemValue('item', 'amount', gross.toFixed(2));
			nlapiSetCurrentLineItemValue('item', 'custcol10', total_discount.toFixed(10));
		}

	};
	//----------END COMPUTE AMOUNT DUE----------------//
	
	//----------------------------------------------------//
	this.getCustomerDiscounts = function(item, location, principal) {
		
		var columns = [
				new nlobjSearchColumn('custrecord736'),//dist disc
				new nlobjSearchColumn('custrecord737'),//bo allow
				new nlobjSearchColumn('custrecord738'),//prompt disc
				new nlobjSearchColumn('custrecord739'),//tra
				new nlobjSearchColumn('custrecord740'),//merch and support
				new nlobjSearchColumn('custrecord741'),//slog disc
				new nlobjSearchColumn('custrecord744')//purchase price
			];
		
		var filter = [
				new nlobjSearchFilter('custrecord742', null, 'is', item),
				new nlobjSearchFilter('custrecord802', null, 'anyof', principal),
				new nlobjSearchFilter('custrecord743', null, 'anyof', location)
			];
			
		var results = nlapiSearchRecord('customrecord252', null, filter, columns); //Executes Query and returns the query results
		
		if(results!=null) {
			return {
				'dist_disc':( results[0].getValue('custrecord736') == null || results[0].getValue('custrecord736')=='' ) ? 0 : results[0].getValue('custrecord736'),
				'bo_allow':( results[0].getValue('custrecord737') == null || results[0].getValue('custrecord737')=='' ) ? 0 : results[0].getValue('custrecord737'),
				'prompt_disc':( results[0].getValue('custrecord738') == null || results[0].getValue('custrecord738')=='' ) ? 0 : results[0].getValue('custrecord738'),
				'tra':( results[0].getValue('custrecord739') == null || results[0].getValue('custrecord739')=='' ) ? 0 : results[0].getValue('custrecord739'),
				'merch_support':( results[0].getValue('custrecord740') == null || results[0].getValue('custrecord740')=='' ) ? 0 : results[0].getValue('custrecord740'),
				'slog_disc':( results[0].getValue('custrecord741') == null || results[0].getValue('custrecord741')=='' ) ? 0 : results[0].getValue('custrecord741'),
				'purchase_price':results[0].getValue('custrecord744')
			};
			
		} else { return null; }
		
	};
	//----------END GET CUSTOMER DISCOUNTS----------------//
	
	//----------------------------------------------------//
	this.getConversionRate = function(unitstype, unitname) {
		filters = new Array (
				new nlobjSearchFilter('internalid', null, 'anyof', unitstype),
				new nlobjSearchFilter('abbreviation', null, 'is', unitname)
		);

		search = nlapiSearchRecord('unitstype', 'customsearch_conversion_units', filters,  new nlobjSearchColumn('conversionrate'));
		return search[0].getValue('conversionrate');
	};
	//----------END GET CONVERSION RATE----------------//
	
	//----------------------------------------------------//
	this.getItemUnitTypeConversionRate = function(item) {
		var columns = [
						new nlobjSearchColumn('unitstype'), //unit type
						new nlobjSearchColumn('custitem72') //conversion factor
					  ];
		var filter = [
		              	new nlobjSearchFilter('internalid', null, 'is', item)
		             ];
		var results = nlapiSearchRecord('inventoryitem', null, filter, columns);
		if(results != null) {
			return {
				'unitType': results[0].getValue('unitstype'),
				'conversionRate': results[0].getValue('custitem72')
			};
		} else { return null; }
	};
	//----------END GET ITEM UNIT TYPE AND CONVERSION RATE----------------//
};