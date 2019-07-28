	$(window).load(function() {

		

		/*Настройка select*/
		$('.select_checked').on('click', function(){
			$('.select__dropdown').toggleClass('select__dropdown_open');
		});
		//Передаем выбранное значение в списке
		$('.select__option').on('click', function(){
			var value = $(this).attr('data-value');
			$('#select-type').val(value);
			$('.select_checked').text(value);
			$('.select__dropdown').toggleClass('select__dropdown_open');
		});

		
}); 


