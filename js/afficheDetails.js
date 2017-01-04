//This function show or hide the desription of one of the user parameters
function afficheDetails(paramName) {
	if(document.getElementById(paramName + ' button').name === "Show " + paramName){
		document.getElementById(paramName + ' desc').style.display = "block";
		document.getElementById(paramName + ' button').value = "Hide description";
		document.getElementById(paramName + ' button').name = "Hide " + paramName;
	}
	else if(document.getElementById(paramName + ' button').name === "Hide " + paramName){
		document.getElementById(paramName + ' desc').style.display = "none";
		document.getElementById(paramName + ' button').value = "Show description";
		document.getElementById(paramName + ' button').name = "Show " + paramName;
	}
}
