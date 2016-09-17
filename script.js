$(document).ready(function(){
	//Cover image animation

	$('.container').mouseover(function(){
		$('#cover').fadeTo(1500, 1.00);
	});
	setTimeout(function(){
		$('#cover img').attr('src', 'Family_Map_Graphic_Large.gif');
	}, 3000);
	$('#cover img').click(function(){
		$('.container').fadeOut(1500, 0);
		$('#louisa').fadeTo(3000, 1.00);
	});

	//Lineage Animation

	$('#louisa').click(function(){
		$('#hank, #helen').fadeTo(1000, 1.00);
	});
	$('#hank').click(function(){
		$("#hls1, #gransav").fadeTo(1000, 1.00);
	});
	$('#helen').click(function(){
		$("#poppy, #grandma").fadeTo(1000, 1.00);
	});


	$('#hls1').click(function(){
		$("#ccs, #avk").fadeTo(1000, 1.00);
	});
	$('#gransav').click(function(){
		$("#radfurness, #carolinewood").fadeTo(1000, 1.00);
	});
	$('#grandma').click(function(){
		$("#kdw, #greatgranny").fadeTo(1000, 1.00);
	});


	$('#ccs').click(function(){
		$("#wls, #schaunc").fadeTo(1000, 1.00);
	});
	$('#radfurness').click(function(){
		$("#frankfurness, #fannyfurness").fadeTo(1000, 1.00);
	});
	$('#greatgranny').click(function(){
		$("#bigmama").fadeTo(1000, 1.00);
	});


	$('#wls').click(function(){
		$("#tls, #mteakle").fadeTo(1000, 1.00);
	});
	$('#schaunc').click(function(){
		$("#hteakle, #elihuchaunc").fadeTo(1000, 1.00);
	});
	$('#frankfurness').click(function(){
		$("#annisjenks, #whf").fadeTo(1000, 1.00);
	});


	$('#tls').click(function(){
		$("#nls, #areynolds").fadeTo(1000, 1.00);
	});
	$('#elihuchaunc').click(function(){
		$("#adarling, #c_chaunc").fadeTo(1000, 1.00);
	});
	$('#whf').click(function(){
		$("#rthwing, #wfurness").fadeTo(1000, 1.00);
	});


	$('#nls').click(function(){
		$("#elittleton, #ts4").fadeTo(1000, 1.00);
	});
	$('#c_chaunc').click(function(){
		$("#mgriswold, #e_chaunc").fadeTo(1000, 1.00);
	});
	$('#wfurness').click(function(){
		$("#ahurd, #jfurness").fadeTo(1000, 1.00);
	});


	$('#ts4').click(function(){
		$("#ts3, #aharm").fadeTo(1000, 1.00);
	});
	$('#e_chaunc').click(function(){
		$("#sjudson, #n_chaunc").fadeTo(1000, 1.00);
	});


	$('#ts3').click(function(){
		$("#ts2, #mrobins").fadeTo(1000, 1.00);
	});
	$('#n_chaunc').click(function(){
		$("#n_chaunc1, #astrong").fadeTo(1000, 1.00);
	});


	$('#ts2').click(function(){
		$("#ts1, #htyng").fadeTo(1000, 1.00);
	});
	$('#n_chaunc1').click(function(){
		$("#c_eyre, #c_chaunc1").fadeTo(1000, 1.00);
	});


});
