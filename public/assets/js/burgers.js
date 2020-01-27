// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $('.change-devouredx').on('click', function (event) {
    const id = $(this).data('id');
    const newDevoured = $(this).data('devoured');

    console.log(id);
    console.log(newDevoured);

    const newDevouredState = {
      devoured: newDevoured,
    };

    console.log(newDevouredState);

    // Send the PUT request.
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: JSON.stringify(newDevouredState),
    }).then(
      function () {
        console.log('changed devoured to', newDevoured);
        // Reload the page to get the updated list
        location.reload();
      },
    );
  });

  $('.create-form').on('submit', function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $('#ca').val().trim(),
      devoured: $('[name=devoured]:checked').val().trim(),
    };

    console.log('New Burger: ' + newBurger);

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(
      function () {
        console.log('created new burger');
        // Reload the page to get the updated list
        location.reload();
      },
    );
  });
});
