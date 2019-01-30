// //check off specific todolist
// $("li").click(function(){
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		//turn it to black
// 		$(this).css({
// 			// turn it to gray
// 			color : "black",
// 			textDecoration : "none"
// 		});
// 	}else{
// 		//if li is black
// 		$(this).css({
// 			// turn it to gray
// 			color : "gray",
// 			textDecoration : "line-through"
// 		});
// 	}
// });
			// **** EASY WAY ****
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	//parent = li (parent) yang mengurung span (child)
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//mengambil todo baru dari inputan
		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});