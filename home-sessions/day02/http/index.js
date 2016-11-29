var gitHub= require('github');
var prompt= require('prompt');
var userDetails=[];

var properties = [
  {
    name: 'username',
    message: 'Enter Your Github Username or Email Address' 
  },
  {
    name: 'password',
    hidden: true
  }
];

prompt.start();

prompt.get(properties,function(err,result){
	userDetails.push(result.name);
	userDetails.push(result.password);
	console.log("great!");
});
