 window.onload = function() {


	function tel(){
		console.log('click');
		document.getElementById('phone').href="tel:+79132077303";
		var wbody = document.getElementById('body').offsetWidth;
		if (wbody<500) ym(45965133,'reachGoal','mobile-click-phone');
	}

 	phone.onclick = function() {
 		tel();
 	}

}
