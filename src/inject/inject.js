
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		do{
			checkpnt= 0;

		console.log("Hello. This message was sent from scripts/inject.js");
		var intime = setInterval((function(){
			var em= document.querySelector('#guide-content');
			if(em)
			{
				clearInterval(intime);
				em.parentNode.removeChild(em);	
			}
		
		im=document.getElementById("masthead-ad");
		if(im)
		{
			clearInterval(intime);
			im.parentNode.removeChild(im);
		}

		lm= document.querySelector('ytd-browse');
		if(lm)
		{
			clearInterval(intime);
			//lm.style.display = 'none' ;
		   lm.parentNode.removeChild(lm)
		}

		sd = document.getElementById('secondary');
		if(sd)
		{
			clearInterval(intime);
			sd.parentNode.removeChild(sd);
		}
		window.onhashchange = function() { 
		checkpnt = 1;
	   }

		}), 500);

		// ----------------------------------------------------------
}while(checkpnt==1);

	}, 10);
}); 