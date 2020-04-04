
$(function() {
	$.ajax( "https://covid19.mathdro.id/api/countries/Poland" )
		.done(function(data) {
			let confirmed = $('#confirmed');
			let recovered = $('#recovered');
			let deaths = $('#deaths');  
			console.log(data)

		confirmed.text (data.confirmed.value);
		recovered.text (data.recovered.value);
		deaths.text (data.deaths.value);

		runJqueryCounters(data.confirmed.value, data.recovered.value, data.deaths.value);   
		})
		.fail(function() {
		alert( "Error" );
	})

});


function runJqueryCounters() {
	$('.count').each(function () {
		let element = this;
		jQuery({ Counter: 0 }).animate({ Counter: $(element).text() }, {
			duration: 2000,
			easing: 'swing',
			step: function () {
				$(element).text(Math.ceil(this.Counter));
			}
		});
	});

} 


