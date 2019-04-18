var userName = "clientID";
var passWord = "secretKey";

function authenticate(user, password){
  var token = user + ":" + password;

  var hash = btoa(token);

  return "Basic " + hash;
}
