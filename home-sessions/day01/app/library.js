module.exports={
	dataTypes: function(data){
		var type= typeof data;

		if((type === 'object') && data === null || type === 'undefined'){
			return 'no value';
		} 
		if(type === 'number'){
			if(data < 100){
				return "less than 100";
			}
			else if(data === 100){
				return 'equal to 100';
			}
			else{
				return 'more than 100';
			}
		}
		if(type === 'string'){
			return data.length;
		}
		if(type === 'boolean'){
			return data;
		}
		if(data instanceof Array){
			return data[2];
		}
		if(type === 'function'){
			return data(true);
		}
	},

	getPrimes: function(num){
		//function for checking squares
		function isSquare(num){
		  var root= Math.sqrt(num);
		  var checkSum= 0;
		  for(var i=0; i < root; i++){
		    checkSum= checkSum + root;
		  }
		  if(num === checkSum){
		    return true;
		  }
		  else{
		    return false;
		  }
		}

		//function for checking if a number is completetly 
		// divisible
		function isDivisible(dividend, divisor){
		  if(dividend%divisor === 0){
		    return true;
		  }
		  else{
		    return false;
		  }
		}

		// execution of getPrimes function
		var primeNumbers=[];
		if(num <= 0){
			return 'invalid input';
		}
	  else{
	  	for(var i=0; i <= num; i++){
		    if(i === 0 || i === 1 || (isSquare(i) === true)){
		      continue;
		    }
		    if((i != 2 && isDivisible(i, 2) === true) || (i != 3 && isDivisible(i, 3) === true) || (i != 5 && isDivisible(i,5) === true) || (i != 7 && isDivisible(i,7) === true)){
		      continue;
		    }
		    primeNumbers.push(i);
		  }
		  return primeNumbers;

	  }
	},
	Car: function(name, model, type){
		this.name= name;
		this.model= model;
		this.type= type;
		this.numOfDoors= 4;
		this.numOfWheels= 4;
		this.speed;
		if(name === undefined && model === undefined){
			this.name= "General";
			this.model= "GM";
		}

		if(name === "Porshe" || name==="Koenigsegg"){
			this.numOfDoors= 2;
		}
		if(type === "trailer"){
			this.numOfWheels = 8;
			this.speed= "0 km/h";
		}

		this.drive= function(num){
			if(this.type === 'trailer'){
				this.speed= "77 km/h";
			}
			if(this.name === "Porshe"){
				this.speed= "250 km/h";
			}
			return Car;
		}
		
	}

}