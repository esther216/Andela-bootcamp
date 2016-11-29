module.exports={
	words: function(data){
		var regEx= /\n|\t|[ ]/;
		var splitted= data.split(regEx);
		var occurrence={};
	  occurrence[splitted[0]]= 1;
	  
	  for(var i=1; i < splitted.length; i++){
	    if(splitted[i] in occurrence){
	      occurrence[splitted[i]]++;
	    }
	    else{
	      occurrence[splitted[i]]= 1;
	    }
	  }
	  return occurrence;
	}
}