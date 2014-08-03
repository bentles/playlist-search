$(document).ready(function(){
    var $button = $('<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default search-btn-component" type="button"><span class="yt-uix-button-content">Search</span><span class="yt-uix-button-content">Search</span></button>');
    $button.insertBefore($("#search-btn"));
    $button.click(function(){
	var search = encodeURIComponent($("#masthead-search-term").val());
	search = "results?search_query="+ search +"&filters=playlist";
	window.location.replace(search);
    });
});
