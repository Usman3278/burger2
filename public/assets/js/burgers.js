$(function() {

    //Eat da burger
    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newDevouredState = {
            devoured: 1
        };

        //Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevouredState);
                location.reload();
            }
        );
    });

    //Remove burger
    $(".removeburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        //SendDELETE request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

    //Add burger
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        //POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });

});