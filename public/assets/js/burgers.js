//Create new burger
$(".create-form").on("submit", function (e) {
    e.preventDefault()
    let textBox = $("#bn").val()
    let newBurger = {
        burger_name: textBox,
        devoured: 0
    }
    $.post("/api/burgers", newBurger, function (result) {
        location.reload()
    })
})

//Devour burger
$(".devouredBtn").on("click", function (e) {
    e.preventDefault()
    let newBurger = {
        devoured: 1
    }
    let id = $(this).attr("data-id")
    $.ajax({
        url: "/api/burgers/" + id,
       method: "PUT",
        data: newBurger
    }).then(function () {
        location.reload()
    })
})

  //Return burger
$(".return").on("click", function (e) {
    e.preventDefault()
    let newBurger = {
        devoured: 0
    }
    let id = $(this).attr("data-id")
    $.ajax({
        url: "/api/burgers/" + id,
       method: "PUT",
        data: newBurger
    }).then(function () {
        location.reload()
    })
});

//delete burger
  $(".destroy").on("click", function() {
     
      let id = $(this).data("id");
        console.log(id)

    $.ajax("/api/burgers/" + id, {
      method: "DELETE"
    }).then(function() {
        location.reload();
      }
    );
});