// JavaScript Document



$(document).ready(function(){
	
	$("#recipe1").show();
	$("#recipe2").hide();
	$("#recipe3").hide();
	
	$(".halfSizePick").hide();
	$(".normalSizePick").show();
	$(".doubleSizePick").hide();
		
	// VARIABLES
	let recipe1 = document.querySelector("#recipe1");
	let recipe2 = document.querySelector("#recipe2");
	let recipe3 = document.querySelector("#recipe3");
	let select = document.querySelector("#recipeSelect");
	let radioHTML = "";
	let quantityHTML = "";
	
	// Selecting the recipe
	$("#firstRecipe").click(function(){
		//alert("crockpot chilli");
		$("#recipe1").show();
		$("#recipe2").hide();
		$("#recipe3").hide();
	});
	
	$("#secondRecipe").click(function(){
		//alert("option 2");
		$("#recipe1").hide();
		$("#recipe2").show();
		$("#recipe3").hide();
	});
	
	$("#thirdRecipe").click(function(){
		//alert("option 3");
		$("#recipe1").hide();
		$("#recipe2").hide();
		$("#recipe3").show();
	});
	
	// SELECTING QUANTITY
	$(".halfSize").click(function(){
		$(".halfSizePick").show();
		$(".normalSizePick").hide();
		$(".doubleSizePick").hide();
	});
	
	$(".normalSize").click(function(){
		//alert("option 2");
		$(".halfSizePick").hide();
		$(".normalSizePick").show();
		$(".doubleSizePick").hide()
	});
	
	$(".doubleSize").click(function(){
		//alert("option 3");
		$(".halfSizePick").hide();
		$(".normalSizePick").hide();
		$(".doubleSizePick").show()
	});
	
	
	// SHOWING AND HIDING THE INGREDIENTS AND INSTRUCTIONS
	$(".showIn").click(function(){
		$(".1ingredients").toggle();
	});
	
	$(".toggleIns").click(function(){
		$(".1instructions").toggle();
	});
	
	//COPYWRITE
	$('footer span').html('©Copywrite ' + new Date().getFullYear());
	
	
	
	
	
	
	
	
	
	
});