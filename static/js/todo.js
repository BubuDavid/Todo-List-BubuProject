$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//Click on X to delete the item

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding a New Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Add thingys
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		//Clean the input box
		$(this).val("");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});