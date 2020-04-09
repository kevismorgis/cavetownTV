function goChan(chan = false) {
	console.log(chan);
	if(chan) {
		chan = parseInt(chan, 10);
		$('.channel').addClass('entered');
		
		switch(chan) {
			case 4: // sing w/ me
				$('.video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/56Ya1ku6J5k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
				break;	
			case 8: // oat milk
				$('.video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/YhbcPbzyDtE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
				break;	
			case 21: // mag pics
				$('.video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/rbxKmoWLh2Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
				break;	
			case 32: // sweet tooth
				$('.video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/c_jWpZ6XDIc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
				break;	
			case 44: //NYC live
				$('.video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/7n_1WmJXZOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
				break;		
			case 50: //sleepyTV
				$('.video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLJpf_nxQryPYE3ZztRCENx6QyYl4cBd2-" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
				break;	
			case 99: //store
				$('.video').html('<a href="http://www.cave.town" target="_blank" id="store">' +
					'<div class="center-content dots">' +
						'<img class="storeel" alt="C" src="./ctl_1c.png"/>' +
						'<img class="storeel" alt="A" src="./ctl_2a.png"/>' +
						'<img class="storeel" alt="V" src="./ctl_3v.png"/>' +
						'<img class="storeel" alt="E" src="./ctl_4e.png"/>' +
						'<img class="storeel" alt="T" src="./ctl_5t.png"/>' +
						'<img class="storeel" alt="O" src="./ctl_6o.png"/>' +
						'<img class="storeel" alt="W" src="./ctl_7w.png"/>' +
						'<img class="storeel" alt="N" src="./ctl_8n.png"/>' +
						'<img id="storebg" alt="Cavetown" src="./ctlbg.png"/>' +
						'<span class="enter">(click to enter store)</span>' +
					'</div>' +
				'</a>');
				break;				
			default:
				$('.video').html("");
		}
	}
}

// with thanks to https://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery/995193#995193
(function($) {
	$.fn.inputFilter = function(inputFilter) {
		return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
			if (inputFilter(this.value)) {
				this.oldValue = this.value;
				this.oldSelectionStart = this.selectionStart;
				this.oldSelectionEnd = this.selectionEnd;
			} else if (this.hasOwnProperty("oldValue")) {
				this.value = this.oldValue;
				this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
			} else {
				this.value = "";
			}
		});
	};
}(jQuery));

$(document).ready(function() {
	console.log("%c // Development by Second City Prints - Wood texture from www.textures4photoshop.com //", 'background:black;color:white;padding:5px;');
	
	$(".channel").inputFilter(function(value) {
		return /^\d*$/.test(value); 
	});
	$(".channel").on('input', function(value) {
		if($(this).val().length < 4) {
			$(this).removeClass('entered');
		}
	});
	
	$('.key:not(.ok) span').on('click', function () {
		var channel = $('.channel');
		if(channel.val().length < 4 && !channel.hasClass('entered')) {
			channel.val(channel.val() + $(this).text()); 
		} else {
			channel.val($(this).text()); 
		}
		channel.removeClass('entered');
	});
	
	$('.sticky:not(.active)').on('click', function(){
		if(!($(this).hasClass('cd'))) {
			$(this).addClass('active');
		}
	});
	
	$('.x').on('click', function(){
		$('.sticky').addClass('cd');
		$('.sticky').removeClass('active');
		setTimeout(function(){$('.sticky').removeClass('cd');}, 1000);
	});

	$('.key.ok').on('click', function(){
		goChan($('.channel').val());
	});
	$('.channel').keypress(function (e) {
		if (e.which == 13) {
			goChan($('.channel').val());
			this.blur();
		}
	});
	
});