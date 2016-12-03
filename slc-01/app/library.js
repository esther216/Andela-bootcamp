module.exports={
	aritGeo: function(data){
		var len= data.length;
		if(len === 0){
			return 0;
		}
		else{
			//calculate common difference
      var diff= data[1] - data[0];
         
      // calculate common ratio
      var ratio= data[1]/data[0];
         
      //calculate sum of AP series
      var sumAP= len*(2*data[0] + (len -1)*diff)/2;
         
      //calculate sum of GP series
      var sumGP= (data[0]*(1- Math.pow(ratio, len)))/(1 - ratio);
         
      //initialise computed sum
      var realSum= 0;
      for(var i=0; i < len; i++){
        realSum += data[i];
      }
         
      //compare values
      if(realSum == sumAP){
        return "Arithmetic";
      }
      else if( realSum == sumGP){
        return "Geometric";
      }
      else{
        return -1;
      }
		}
	}
}