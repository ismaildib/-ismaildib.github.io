document.addEventListener("DOMContentLoaded",function(){
	
	let e=document.getElementsByTagName("include");
	while(e.length){
		fetch(e[0].attributes.src.value)
		.then((response)=>{return response.text();})
		.then((html)=>{
			e[0].insertAdjacentHTML("afterend",html);
			e[0].remove();
		});
	}
	
});
	
	
	