module.exports={
	findMissing: function(arr1, arr2) {
		// create an object literal to hold values
		var result={};

		// counter for checking same elements in both arrays
  	var same= 0;

  	// check if arrays are empty
		if(arr1.length === 0 && arr2.length === 0){
			return 0;
		}

		// set properties for the object literal (result) created above
	  else if(arr1.length > arr2.length){
	    result.larger_array= arr1;
	    result.smaller_array= arr2;
	    result.iter= result["larger_array"].length;
	  }
	  else{
	    result.larger_array= arr2;
	    result.smaller_array= arr1;
	    result.iter= result["larger_array"].length;
	  }
	  
	  //loop through largest array and compare with smallest array
  	result["larger_array"].forEach(function(item){
	    var index= result["smaller_array"].indexOf(item);

	    //check if element in the same idex are the same
	    if(item === result["smaller_array"][index]){
	    	same++;
	    }

	    //check if and element in the largest array can be found
	    //in the smallest array
	    if(index < 0){
	      result["missing_number"]= item;
	    }
	  });

	  // check if number of same elements is equivalent to the length
	  // of the largest array.
	  // the largest_array and smallest_array should have the same length
	  if(same === result["iter"] && result["iter"] === result["smaller_array"].length){
	  	return 0;
	  }
	  //else return the missing number
	  else{
	  	return result["missing_number"];
	  }
	}
}