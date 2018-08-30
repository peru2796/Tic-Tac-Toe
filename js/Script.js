$(document).ready(function (){
var x="x";
var o="o";
var turns=0;
//spot var2
var spot1 = $('#span01');
var spot2 = $('#span02');
var spot3 = $('#span03');
var spot4 = $('#span04');
var spot5 = $('#span05');
var spot6 = $('#span06');
var spot7 = $('#span07');
var spot8 = $('#span08');
var spot9 = $('#span09');

$('#board li').on('click',function(){
	if(spot1.hasClass('o')&&spot2.hasClass('o') && spot3.hasClass('o')||
	spot4.hasClass('o')&&spot5.hasClass('o') && spot6.hasClass('o')||
	spot7.hasClass('o')&&spot8.hasClass('o') && spot9.hasClass('o')||
	spot1.hasClass('o')&&spot4.hasClass('o') && spot7.hasClass('o')||
	spot2.hasClass('o')&&spot5.hasClass('o') && spot8.hasClass('o')||
	spot3.hasClass('o')&&spot6.hasClass('o') && spot9.hasClass('o')||
	spot1.hasClass('o')&&spot5.hasClass('o') && spot9.hasClass('o')||
	spot3.hasClass('o')&&spot5.hasClass('o') && spot7.hasClass('o'))
	{
		alert('Winner:o');
		turns=0;
		Clear();
	}
		else if(spot1.hasClass('x')&&spot2.hasClass('x') && spot3.hasClass('x')||
	spot4.hasClass('x')&&spot5.hasClass('x') && spot6.hasClass('x')||
	spot7.hasClass('x')&&spot8.hasClass('x') && spot9.hasClass('x')||
	spot1.hasClass('x')&&spot4.hasClass('x') && spot7.hasClass('x')||
	spot2.hasClass('x')&&spot5.hasClass('x') && spot8.hasClass('x')||
	spot3.hasClass('x')&&spot6.hasClass('x') && spot9.hasClass('x')||
	spot1.hasClass('x')&&spot5.hasClass('x') && spot9.hasClass('x')||
	spot3.hasClass('x')&&spot5.hasClass('x') && spot7.hasClass('x'))
	{
		alert('Winner:o');
		turns=0;
		Clear();
	}
		else if (turns==9)
	{
		alert('Draw..');
		Clear();
		turns=0;
	}
	else if($(this).hasClass('disabled'))
	{
	alert ('This spot is already filled');
	}
	else if(turns%2 ===0)
	{
	turns++;
	$(this).text('o');
	$(this).addClass('disabled o');
	if(spot1.hasClass('o')&&spot2.hasClass('o') && spot3.hasClass('o')||
	spot4.hasClass('o')&&spot5.hasClass('o') && spot6.hasClass('o')||
	spot7.hasClass('o')&&spot8.hasClass('o') && spot9.hasClass('o')||
	spot1.hasClass('o')&&spot4.hasClass('o') && spot7.hasClass('o')||
	spot2.hasClass('o')&&spot5.hasClass('o') && spot8.hasClass('o')||
	spot3.hasClass('o')&&spot6.hasClass('o') && spot9.hasClass('o')||
	spot1.hasClass('o')&&spot5.hasClass('o') && spot9.hasClass('o')||
	spot3.hasClass('o')&&spot5.hasClass('o') && spot7.hasClass('o'))
	{
		setTimeout(function(){ alert('Winner:o'); }, 200);
		turns=0;
	}
	}
	else
	{
	turns++;
	$(this).text('x');
	$(this).addClass('disabled x');
	if(spot1.hasClass('x')&&spot2.hasClass('x') && spot3.hasClass('x')||
	spot4.hasClass('x')&&spot5.hasClass('x') && spot6.hasClass('x')||
	spot7.hasClass('x')&&spot8.hasClass('x') && spot9.hasClass('x')||
	spot1.hasClass('x')&&spot4.hasClass('x') && spot7.hasClass('x')||
	spot2.hasClass('x')&&spot5.hasClass('x') && spot8.hasClass('x')||
	spot3.hasClass('x')&&spot6.hasClass('x') && spot9.hasClass('x')||
	spot1.hasClass('x')&&spot5.hasClass('x') && spot9.hasClass('x')||
	spot3.hasClass('x')&&spot5.hasClass('x') && spot7.hasClass('x'))
	{
		setTimeout(function(){ alert('Winner:x'); }, 200);
		turns=0;
		
	}
	}
		
});

$('#reset').click(function(){
		Clear();
});
function Clear()
{
		$('#board li').text('+');
		$('#board li').removeClass('disabled');
		$('#board li').removeClass('x');
		$('#board li').removeClass('o');
}
});
