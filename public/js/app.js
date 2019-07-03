$(document).ready(function () {

    const burgerForm = $("#burgerForm")
    function addBurger(burger) {
        $.post("/api/newBurger", burger, function () {
            window.location.href = "/"
        });
    }
    $("#burgerButton").on("click", function (event) {
        event.preventDefault();
        if (!($("#addBurger").val().trim())) {
            return
        }
        else {
            let newBurger = {
                burger_name: $("#addBurger").val(),
                devoured: 0
            }
            addBurger(newBurger)
        }
    })


});
