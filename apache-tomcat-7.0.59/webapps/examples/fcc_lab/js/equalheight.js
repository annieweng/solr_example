/**
 * equalheight.jquery.js
 * Make row elements all the height of the tallest item in the row
 * 
 * Created by Jay Contonio on 2010-09-02.
 * Modified on 2011-02-24 to add row functionality
 * 
 * @example for rows with two columns @link http://fcc.gov/rulemaking (whenever it launches)
 * $('.column').equalheight(2);
 */ 

(function($) {
	$.fn.equalheight = function(numberOfColumns)
	{
		
		if (!numberOfColumns)
		{
			throw new Error('Number of columns is required');
		}
		
		var currentHeight = 0;
		var rows = [];
		var row = [];
		
		// Create an array of rows so we can compare the tallest item in each row
		$(this).each(function(i) {
			row.push(this);
			if (i % numberOfColumns)
			{
				rows.push(row);
				row = [];
			}
		});
		
		for (var i=0; i < rows.length; i++) {
			// Loop through each row and compare it's height to the variable currentHeight
			// if the item's height is greater than the currentHeight, set currentHeight to the new height
			for (var j=0; j < rows[i].length; j++) {
				if ($(rows[i][j]).height() >= currentHeight) currentHeight = $(rows[i][j]).height();
			}
			// Apply currentHeight to both items in the row
			for (var z=0; z < rows[i].length; z++) {
				$(rows[i][z]).css({ 'height': currentHeight + 'px' });
			}
			// Start over for the next row
			currentHeight = 0;
		}
		
	};
})(jQuery);
