console.log('bla appjs');
$( document ).ready(function() {
    $("#dispositivo-text").hide();
    $("#filtro-text").hide();
    $("#tubo-text").hide();
    $("#adaptador-text").hide();
    $("#mascara-text").hide();

    $("#dispositivo-img").click(function(){
        $("#filtro-text").hide();
        $("#tubo-text").hide();
        $("#adaptador-text").hide();
        $("#mascara-text").hide();
        $("#dispositivo-text").toggle();
    });
    $("#filtro-img").click(function(){
        $("#dispositivo-text").hide();
        $("#tubo-text").hide();
        $("#adaptador-text").hide();
        $("#mascara-text").hide();
        $("#filtro-text").toggle();
    });
    $("#tubo-img").click(function(){
        $("#dispositivo-text").hide();
        $("#filtro-text").hide();
        $("#adaptador-text").hide();
        $("#mascara-text").hide();
        $("#tubo-text").toggle();
    });
    $("#adaptador-img").click(function(){
        $("#dispositivo-text").hide();
        $("#filtro-text").hide();
        $("#tubo-text").hide();
        $("#mascara-text").hide();
        $("#adaptador-text").toggle();
    });
    $("#mascara-img").click(function(){
        $("#dispositivo-text").hide();
        $("#filtro-text").hide();
        $("#tubo-text").hide();
        $("#adaptador-text").hide();
        $("#mascara-text").toggle();
    });

});