$(document).ready(function () {
    loadBurger()
    const burgerForm = $("#burgerForm")
    //reloads on addburger
    function addBurger(burger) {
        $.post("/api/newBurger", burger, function () {
            window.location.href = "/"
        });
    }
    //gets data from api route
    function loadBurger() {
        $.get("/api/burgers", function (data) {
            writeBurgers(data)
        }
        )
    }
    //writes the data returned from the database to the page
    function writeBurgers(burgerData) {
        burgerData.forEach(function (element) {
            let newBurgerLine = `<div class="row">
        <div class="col-md-12">
        <span id="burger${element.id}">${element.burger_name}</span>
        <button type="button" class="btn btn-danger" id="${element.id}">Devour the burger</button>
        </div>
        </div>`
            console.log(newBurgerLine)
            let eatenBurger = `<div class="row">
        <div class="col-md-12">
        <span id="burger${element.id}">${element.burger_name}</span>
        </div>
        </div>`
            if (element.devoured) {
                $(burgersEaten).append(eatenBurger);
            }
            else { $(burgerStock).append(newBurgerLine) }
        })

        console.log(burgerData)
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
    $(document).on("click", ".btn-danger", function (event) {
        let bId = this.id
        let eaten = true
        let bUpdate = {
            id: bId,
            devoured: eaten
        }
        $.post(`/api/burgers:${bId}`, bUpdate, function () {
            window.location.href = "/"
        })
    })

});
