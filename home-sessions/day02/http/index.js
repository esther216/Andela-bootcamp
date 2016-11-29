//var gitHub= require('github');
var inquirer= require('inquirer');
var prompt = inquirer.createPromptModule();

var gitHubApi= require('node-github');
var github = new gitHubApi({
    version: "3.0.0"
});

function getUserCredentials(callback) {
  var questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your Github username or e-mail address:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username or e-mail address';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password';
        }
      }
    }
  ];

  inquirer.prompt(questions).then(callback);
}

getUserCredentials(function(credentials){
  //console.log(credentials);
  github.user.getFollowingFromUser({
	    user: "mikedeboer"
	}, function(err, res) {
			var data= JSON.stringify(res);
	    console.log(data);
	});
});





