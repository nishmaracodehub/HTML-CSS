//check off specific Todos by clicking

$('ul').on("click", "li",function(){
//perfect and easy way to do it. create a class in css and add it here
$(this).toggleClass("completed");
//long method
/*	//if li is red turn turn it into black
	if($(this).css("color") === "rgb(255, 0, 0)"){
	$(this).css({
	color : "black",
	textDecoration : "none"
	});
	}
	else{
		$(this).css({
		color : "red",
		textDecoration : "line-through"
	});
	}*/
	
});

//click on X to delete a TODO
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adding a new TODO

$("input[type='text']").keypress(function(event){

	if(event.which === 13)
	{
		var newTodo = $(this).val();
		//remove the input text after hitting enter
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");

	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();

});



