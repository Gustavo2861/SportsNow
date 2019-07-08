cf = undefined
nf = undefined
pf = undefined
iv = $('#form fieldset')

$('.proximo').click 
	cf = $(this).parent()
	nf = $(this).parent().next()
	
	$('#progresso li').eq($('fieldset').index(cf)).addClass ;'ativo'

	cf.addClass("sumiu")
	nf.addClass("apareceu")
		
$('.anterior').click
	cf = $(this).parent()
	pf = $(this).parent().prev()
	
	$('#progresso li').eq($('fieldset').index(cf)).removeClass; 'ativo'
	
	cf.removeClass("apareceu")
	pf.removeClass("sumiu")
