$(document).ready(function(){
	var canvas = document.getElementById('canvas');
	window.ctx = canvas.getContext('2d');
	var startDraw = false; // не рисуем
	canvas.lineWidth = 5; // толщина кисти
	canvas.lineCap='round'; //тип кисти
	canvas.addEventListener('mousedown',function(e) { //нажали на лкм			
			startDraw = true; //начали рисовать
			/*
			ctx.lineTo( x, y );
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo( x, y );
			*/

			ctx.moveTo( e.pageX, e.pageY );
			ctx.beginPath();


	},false);

	canvas.addEventListener('mouseup',function(e) { //отпустили лкм
			startDraw = false; //перестали рисовать

	},false);

	canvas.addEventListener('mousemove',function(e) { //процесс рисования
		$("#canvas").css('crosshair'); //курсор
			var x,y; 
				 x = e.pageX - canvas.offsetLeft, //координаты
                 y = e.pageY - canvas.offsetTop;
           if(startDraw){ 
           		switch(tool){
           			/* Характиристики для инструментов*/
					case 'brush': //кисть
						ctx.lineTo( x, y );
					    ctx.stroke();
					    ctx.beginPath();
					    ctx.moveTo( x, y );
					    break; 

			  		case 'purge'://ластик
			  			ctx.clearRect(x, y, ctx.lineWidth, ctx.lineWidth);
			  			break; 
						}
			}

	},false);

});