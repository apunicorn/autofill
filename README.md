autofill
========

Autofill search box. Currently populated with tasty Mexican foods but can be swapped out for anything


To populate with new items or change the id of the input box that the autofill is using : simply edit the array in the autocomplete() function. 

Current setup: 

autocomplete($("#auto"), ["burrito", "taco", "chimichanga", "flauta", "chicharron", "quesadilla", "torta", "pulpo", "guacamole", "salsa"]);

To change items: remove my Mexican food, add whatever items you want (no matter how many)
To change id of input box: change $("#auto") to $("ID_OF_YOUR_INPUT_BOX")

Cheers!
