module.exports={
	words: function(data){
		//split data
		var splitted= data.replace(/\n|\t/g," ").replace(/[, ]+/g," ").split(" ");
		
		// create an object literal to store result
		var occurrence={};
	  
	  for(var i=0; i < splitted.length; i++){
	    if(Object.hasOwnProperty.call(occurrence,splitted[i])){
	      occurrence[splitted[i]]++;
	    }
	    else{
	      occurrence[splitted[i]]= 1;
	    }
	  }
	  return occurrence;
	},
	findMinMax: function(numList){
		var result= [];
	  var smallest = numList[0];
	  var largest= numList[0];
	  
	  for(var i= 1; i < numList.length; i++){
	    if(numList[i] > largest){
	     largest = numList[i];
	    }
	    if(numList[i] < smallest){
	     smallest= numList[i];
	    }
	  }
	  result.push(smallest);
	  result.push(largest);
	  if(result[0] == result[1]){
	    result.pop(result[1]);
	  }
	  return result;
	}
}