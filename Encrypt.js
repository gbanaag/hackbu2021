var name = "timothy";
var alphabet = "abcdefghijklmnopqrstuvwxyz123456789";
var password = "strong password";
var key = name.substring(0, 3);
var newPassword = "null";



newPassword = enc(password, key);
console.log(newPassword);
newPassword = dec(newPassword, key);
console.log(newPassword);

function enc(pass, key){
  var newPass = "";
  var numkey = alphabet.indexOf(key.substring(0,1)) + alphabet.indexOf(key.substring(1,2)) + alphabet.indexOf(key.substring(2,3));
  //console.log(numkey);
  for(var i=0; i<pass.length; i++){
  var numLetter = alphabet.indexOf(pass.substring(i,i+1));
  //console.log(numLetter);
    if (numLetter == -1){
        newPass = newPass + " ";
    }
    else{
    numLetter = numkey + numLetter + i;
    while(numLetter > 34 )
    {
      numLetter = numLetter - 34;
    }
  //  console.log(alphabet.substring(numLetter, numLetter + 1));
    newPass = newPass + alphabet.substring(numLetter, numLetter + 1);
    }

  }
  return newPass;
}


function dec(pass, key){
  var newPass = "";
  var numkey = alphabet.indexOf(key.substring(0,1)) + alphabet.indexOf(key.substring(1,2)) + alphabet.indexOf(key.substring(2,3));
  for(var i=0; i<pass.length; i++){
    var numLetter = alphabet.indexOf(pass.substring(i,i+1));
    //console.log(alphabet.indexOf(pass.substring(i,i+1)));
    if (numLetter == -1){
        newPass = newPass + " ";
    }
    else{
      numLetter = numLetter - numkey - i;
    //  console.log(numLetter);
      while(numLetter < 0 )
      {
        numLetter = 34 + numLetter;
      }
      newPass = newPass + alphabet.substring(numLetter, numLetter + 1);
    }
  }
  return newPass;
}
