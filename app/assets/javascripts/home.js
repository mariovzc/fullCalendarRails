$(document).ready(function() {
  $('#calendar').fullCalendar({
    //events: <%= @events.to_json.html_safe %
  });
  $('.modal-trigger').leanModal();
});
