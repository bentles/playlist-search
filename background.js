$(document).ready(function(){
    var $button = $('<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default search-btn-component" type="button">Playlist</button>');
    $button.insertBefore($("#search-btn"));
    
    $("#masthead-search-term").keyup(function(event){
	if (event.shiftKey && event.which === 13)
	{
	    plSearch();
	    return false;
	}
    });    

    $button.click(function(){
	plSearch();
    });

    function plSearch()
    {
	var search = encodeURIComponent($("#masthead-search-term").val());
	search = "results?search_query="+ search +"&filters=playlist";
	window.location.replace(search);
    }
});
