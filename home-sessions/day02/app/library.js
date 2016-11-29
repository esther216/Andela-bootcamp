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
	}
}