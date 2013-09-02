var tools = ['brush', 'purge', 'text'];
var tool='brush';
/* Прорисовка инстументов */
$(document).ready(function(){
	for(var i=0; i<tools.length;i++){ //проходим по массиву с инструментами 
		$("#tools").append('<div class="tool"><input style="width:31px;height:31px;" type="image" src="./site_images/icons/'+tools[i]+'.png" onclick="tool=\''+tools[i]+'\';"></div>'); //добавляем в блок массив с подходящем имененм
	}
	$(".tool").click(function(){
		$(".tool").css({'opacity': '1'});
		$(this).css({'opacity':'0.3'});
	});
	$(".tool").click(function(){ //добавления блока для текста
			if(tool == 'text'){
		checkText = true;
		$(".container").append('<div class="textDrag" style="min-width:250px;width:auto;height:auto;background:#ccc;padding:10px;z-index:1000;position: absolute;top: 200px;left:250px;"><textarea class="addTextCanvas"></textarea></div>');
		$(".textDrag").draggable({ appendTo: ".board",opacity: .5, cursor: 'move' }); //jquery ui draggable 

	}
	});
});
