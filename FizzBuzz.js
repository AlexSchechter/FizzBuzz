$(function(){
	
	$("#launch").click(function(){
		
		var firstNumber = +document.getElementById('firstInput').value;
		var secondNumber = +document.getElementById('secondInput').value;
		
		$("#outputTable").empty();
		$('table').removeClass();
		
		$('table').addClass('tableStyle');
		if (firstNumber < 1 || secondNumber < 1 || firstNumber > 100 || secondNumber > 100 || Math.floor(firstNumber) !== firstNumber || 	Math.floor (secondNumber) !== secondNumber )
		{	
			alert("Both numbers have to be integers between 1 and 100, please input again")
			myReset();
			return;
		};
		
	
		for (i = 1; i <= 100; i++) {			
			
			if (Math.floor((i-1)/10) === (i-1)/10) {
				$('#outputTable').append("<tr>");
			};
			
			if (Math.floor(i/firstNumber) === i/firstNumber) {
				if (Math.floor(i/secondNumber) === i/secondNumber) {
					$('#outputTable').append("<td class='fizzBuzz'>FizzBuzz</td>");
				} else {
					$('#outputTable').append("<td class='fizz'>Fizz</td>");
				}
			} else if (Math.floor(i/secondNumber) === i/secondNumber) {
				$('#outputTable').append("<td class='buzz'>Buzz</td>");
			} else {
				$('#outputTable').append("<td class='myNumber'>" + i + "</td>");
			};
			
			if (Math.floor(i/10) === i/10) {
				$('#outputTable').append("</tr>");
			};
		};
			
	});
		
	
	$("#resetting").click(function(){
		myReset();
	});
	
	
	function myReset() {
	$("#firstInput, #secondInput").val(''); 
	$("#outputTable").empty();
	$('table').removeClass();
	} 
	
	$('#myHighlight').hover (function() {
		$('#outputTable').addClass('hoverInTable');
		$('.fizzBuzz').addClass('hoverInFizzBuzz');
	}, function() {
		$('#outputTable').removeClass('hoverInTable');
		$('.fizzBuzz').removeClass('hoverInFizzBuzz');
	});
});