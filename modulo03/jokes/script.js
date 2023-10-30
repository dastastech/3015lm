$(document).ready(function() {
    $("#loadJoke").click(function() {
        $.get("https://v2.jokeapi.dev/joke/Any", function(data) {
            if(data.type === "single") {
                $("#jokeContent").text(data.joke);
            } else if(data.type === "twopart") {
                $("#jokeContent").text(data.setup + " ... " + data.delivery);
            } else {
            $("#jokeContent").text("Ocurrió un error al cargar el chiste.");
            }
        });
    });
});