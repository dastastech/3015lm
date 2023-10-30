$(document).ready(function() {
    $("#btnDrink").click(function() {
        $.get("https://www.thecocktaildb.com/api/json/v1/1/random.php", 
            function(data) {
                const drink = data.drinks[0];
                $('#tituloH1').html( drink.strDrink ); // titulo
                
        });
    });
});