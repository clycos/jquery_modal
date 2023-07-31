$(document).ready(function () {
  // Open the modal when the button is clicked
  $('#openModalBtn').on('click', function () {
    $('#myModal').css('display', 'block');
  });

  // Close the modal when the close button or the overlay is clicked
  $('.close, .modal').on('click', function () {
    $('#myModal').css('display', 'none');
  });

  // Prevent the modal from closing when its content is clicked
  $('.modal-content').on('click', function (event) {
    event.stopPropagation();
  });
});
