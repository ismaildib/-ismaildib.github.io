document.addEventListener("DOMContentLoaded",includeHTML);
	
/* 	let e=document.getElementsByTagName("include");
	while(e.length){
		fetch(e[0].attributes.src.value)
		.then((response)=>{return response.text();})
		.then((html)=>{
			e[0].insertAdjacentHTML("afterend",html);
			e[0].remove();
		});
	} */
	
	
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("include");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
          	elmnt.insertAdjacentHTML("afterend",this.responseText);}
          /*remove the elmnt, and call this function once more:*/
          elmnt.remove();
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
	
	