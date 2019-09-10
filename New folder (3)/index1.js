level=1;
		pps=10;
		function drink(pps){
			drinkid=setInterval(function(){
				$("#filledgauge").height($("#filledgauge").height()-1);
				if ($("#filledgauge").height()<=0){
					clearInterval(drinkid);
					if(level>1){
						level=level-1;
						$("#filledgauge").height(100);
						pps=pps-5;
					    $("#level").html(level);	
						drink(pps);
					}else{
						alert('You LOSE');
					}
					
				}
			},1000/pps);

		}
		$(document).ready(function(){
			drink(pps);
			$("#mybutton").click(function(){
				$("#filledgauge").height($("#filledgauge").height()+10);
				$("#mybutton").blur();
				if($("#filledgauge").height()>=210){
					clearInterval(drinkid);
					$("#filledgauge").height(100);
					level= level+1;
					$("#level").html(level);
					pps=pps+5;
					drink(pps);
				}
			});
			$(document).keypress(function(e){
				if (e.which==13) {
					alert('LOSER')
				}

		});
	});		