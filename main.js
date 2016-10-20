var firstName = {
    A:"A1pha", B:"Beta", C:"Cache", D:"Data", E:"Energy", F:"Funct1on", G:"Gl1tch", H:"Half-life", I:"Ice", J:"Java", K: "Keystr0ke",
    L:"L0gic", M:"Malware", N:"Nagware", O:"OS", P:"Phisherman", Q:"Quantum", R:"Raz0r", S:"Striker", T:"Tr0jan",
    U:"Ultrav1olet", V:"Van1lla", W:"WiFi", X:"Xer0x", Y:"Y", Z:"Zer0"
};
var surname = {
    A:"Analogue", B:"Bomb", C:"Catalyst", D:"Discharge", E:"Electron", F:"Faraday", G:"Gig", H:"Hacker", I:"IP", J:"Jabber",
    K:"Killer", L:"Lazer", M:"Madman", N:"n00b", O:"Overclock", P:"Payload", Q:"Quark", R:"Ray", S:"Spy", T:"T-Rex",
    U:"Unit", V:"Virus", W:"Worm", X:"X", Y:"Yob", Z:"Zombie"
};

function aliasGen(a){

  a = document.getElementById("inputText").value.replace(/\s+/g,' ').trim();
	
  if(a === 'Name...'){
	document.getElementById("generatedAlias").innerHTML = "Your forgot to input your name!";
  }
  else if (a === ''){
  document.getElementById("generatedAlias").innerHTML = "Your forgot to input your name!";
  }
  else if (/[^a-z ]/i.test(a)){
	document.getElementById("generatedAlias").innerHTML = "Your name must only include letters from A - Z.";
  }
  else {

    b = a.split(' ');
    b = b[1];

    a = a.slice(0,1).toUpperCase();

    if (b === undefined){
      surname[b] = ''
  	}
  	else if (b === ''){
      surname[b] = ''
  	}
  	else {
  	  b = b.slice(0,1).toUpperCase()
  	}

	if (/[^a-z]/i.test(a)){
	  document.getElementById("generatedAlias").innerHTML = "Your name must only include letters from A - Z.";
	}
	else {
	  document.getElementById("generatedAlias").innerHTML = firstName[a] + surname[b];
	}
  }
}
