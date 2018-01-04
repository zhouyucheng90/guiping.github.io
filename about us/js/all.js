$(function(){
	allPage();
		allHome();
		return;	
});

function allPage(){
	//var topshares=$('#topshares .shares');
}





function allSocia(){
	//banner
	var dians = $('#dian2s a');
	var big_img = $('#socia_banner');
	var big_a = $('#big_a');
	dians.mouseover(function(){
		if($(this).hasClass('active'))return;
		if(big_img.queue('fx').length!=0){
			big_img.stop(true);
		}
		dians.removeClass('active');
		var img = $(this).attr('b');
		var link = $(this).attr('l');
		var title = $(this).attr('t');
		$(this).addClass('active');
		big_img.animate({'opacity':'0.2'},400,function(){
			big_img.css('background-image','url('+img+')').attr('title',title);
			if(link==''){
				big_a.attr('href','javascript:;').addClass('cdefault');
			}else{
				big_a.attr('href',link).removeClass('cdefault');
			}
			big_img.animate({'opacity':'1'},700);
		});
	});
	
	var stop2 = false;
	big_img.mouseover(function(){
		stop2=true;
	}).mouseout(function(){
		stop2=false;
	});
	
	var item_len = dians.length;
	var marquee2 = autoSwitchSociaBanner();
	MyMar2 = setInterval(marquee2,5000);
	function autoSwitchSociaBanner(){
		return (function(){
			if(stop2)return;
			var next = null;
			var activeed = false;
			$('#dian2s a').each(function(i){
				if(activeed){
					next = $(this);return false;
				}
				if($(this).hasClass('active')){
					activeed = true;
				}
			});
			if(!next){
				next = $('#dian2s a').eq(0);
			}
			next.mouseover();
			stop2 = false;
		});
	}
}




function allHome(){
	changeImages(5);
	var allimg = $('#small_imgs .img');
	var big_img = $('#big_img');
	var big_a = $('#big_a');
	var small_next = $('#small_next');
	var stop2 = false;
	allimg.mouseover(function(){
		if($(this).hasClass('active'))return;
		allimg.removeClass('active');
		$(this).addClass('active');
		var img = $(this).attr('b');
		var link = $(this).attr('l');
		if(big_img.queue('fx').length!=0){
			big_img.stop(true);
		}
		big_img.animate({'opacity':'0.2'},400,function(){
			big_img.css('background-image','url('+img+')');
			if(link==''){
				big_a.attr('href','javascript:;').addClass('cdefault');
			}else{
				big_a.attr('href',link).removeClass('cdefault');
			}
			big_img.animate({'opacity':'1'},700);
		});
	});
	$('#home_banner').mouseover(function(){
		stop2=true;
	}).mouseout(function(){
		stop2=false;
	});
	
	var marquee2 = autoSwitchHomeBanner(allimg);
	MyMar2 = setInterval(marquee2,3000);
	function autoSwitchHomeBanner(allimg){
		return (function(){
			if(stop2)return;
			var index = 0;
			$('#small_imgs .img').each(function(i){
				if($(this).hasClass('active')){
					index = i;return false;
				}
			});
			if(index>=4){
				small_next.click();
			}
			var next = $('#small_imgs .img.active:first').parent().next().find('.img');
			if(next.length==0){
				next = allimg.eq(0);
			}
			next.mouseover();
			stop2 = false;
		});
	}
}
//左右点击图片
function changeImages(allowl) {
	var itemall = $('#small_imgs .item');
	iteml = itemall.length;
	if (iteml <= allowl) {// 少于最大显示数
		$('#small_pre,#small_next').css('background', 'none');
		return;
	}
	iteml = ((iteml - allowl) > allowl) ? allowl : (iteml - allowl);
	imagesSwitch33('#small_pre', '#small_next', itemall, 900, iteml);
}
/*
 * 图片切换33不自动 iteml = jQuery(this).find('.smallitem').length; iteml =
 * ((iteml-allowl)>allowl)?allow:(iteml-allowl);
 * imagesSwitch33(pre,next,jQuery(this).find('.smallitem'),900,iteml);
 */
function imagesSwitch33(left, right, items, movetime, num) {
	movetime = (parseInt(movetime)) ? movetime : 400;
	items.parent().css({
		position : 'relative',
		overflow : 'hidden'
	});
	items.parent().wrapInner('<div></div>');
	items.parent().css('position', 'absolute');
	items.parent().css('left', '0');
	var offw = items.eq(0).outerWidth(true);
	var allw = items.outerWidth(true) * (items.length);
	var movew = offw * num;
	items.parent().width(allw + 'px');
	var len = items.length;
	var isclick = false;

	jQuery(left).click(function() {
		if (items.parent().queue('fx').length != 0)
			return;
		isclick = true;
		items.parent().prepend(items.parent().children().slice(len - num, len));
		items.parent().css('left', '-' + movew + 'px');
		items.parent().animate({
			left : '+=' + movew + 'px'
		}, movetime, function() {
			items.parent().css('left', 0);
		});
	});
	jQuery(right).click(function() {
		if (items.parent().queue('fx').length != 0)
			return;
		isclick = true;
		items.parent().animate({
			left : '-=' + movew + 'px'
		}, movetime, function() {
			items.parent().append(items.parent().children().slice(0, num));
			items.parent().css('left', 0);
		});
	});
}
