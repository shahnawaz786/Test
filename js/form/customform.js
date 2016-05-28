jQuery(function($){
	$(".custom-form-link").click(function(){
	$(".widget-overlay").show();
	});
	$(".widget-overlay .form-overlay .close-form").click(function(){
	$(".widget-overlay").hide();	
	});
	//submitCustomForm();	
});
function submitCustomForm(){
	var url = homeUrl +"form/index/save";
	jQuery("#custom-form-submit").click(function(){
		var fname = jQuery("#first-name").val();
		var lname = jQuery("#last-name").val();
		var email = jQuery("#email").val();
		var filename = jQuery("#file-upload").val();
		if((fname==null || fname=='') && (lname==null || lname=='') && (email==null || email=='') && (filename==null || filename=='') ){
		//return false;
		}
		
		
		jQuery.ajax({
			url     :   url,
			type    :   'POST',
			data    :   {'first_name':fname,'last_name':lname,'email':email,'filename':filename},
				beforeSend: function() {            
				},
				success :  function(data){
						data = eval('('+data + ')');
						var status = data.status;
						var name = data.lname;
						if(status == "success")
						{
							jQuery(".form-msg").html("Thank You "+lname+"!");
							jQuery(".form-msg").show().delay(5000).fadeOut("slow");
						}
						else if(status == "error")
						{
							jQuery(".form-msg").html("Sorry");
							jQuery(".form-msg").show().delay(5000).fadeOut("slow");
						}
				}
		});
	});
}
