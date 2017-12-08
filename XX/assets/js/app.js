$(function() {
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 100,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 0.5,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": 0,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 3,
				"direction": "bottom",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 100,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 150,
					"duration": 0.5
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});

	setInterval(function() {
		var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + "";

		$('.date').html(""+months[dt.getMonth()]+" "+dt.getDate()+", "+dt.getFullYear()+"");

		var hours = dt.getHours() ;

		var minutes = ""+dt.getMinutes()+"";
		if (minutes < 10) {
			minutes = "0"+minutes+"";
		}
		$('.time').html(""+hours+":"+minutes+"");
		//以上部分输出时钟内时间，请勿修改

		//按照当前时间修改good morning ,afternoon等内容，
		$('.seconds').html(""+dt.getSeconds()+"s") 
        var day="\ngood morning!";
        //默认为good morning
        if (hours > 11){    //11点之后修改为good afternoon
            day="\ngood afternoon!"     
         }
        if (hours > 15){    //15点之后修改为good evening
            day="\ngood evening!"     
        }
        if (hours > 19){    //19点之后修改为good night
            day="\ngood night!"     
        }


        $('.hello').html("Hello");   //修改html后双引号内的内容，可以修改输出在右上输出内容，可删除
        $('.day').html(day);  //输出日期请勿修改

	}, 1000);
});
