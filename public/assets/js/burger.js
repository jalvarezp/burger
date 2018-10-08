$(function () {

    $(".addBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burgerToeat").val().trim(),
        };
        //console.log(newBurger.name)
    
    
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(
          function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".devoured").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var id=$(this).data("id");
        var devoured=$(this).data("status");
    
        var newStatus = {
          status:devoured
        };
      console.log(newStatus.status + " y su id es " + id);
    
    
        // Send the POST request.
        $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: newStatus
        }).then(
          function () {
            console.log("changed status to " + newStatus.status);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

});