$(document).ready(function() {
  Event.list();
  $('.modal-trigger').leanModal();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'yyyy-mm-dd'
  });
});
// SERIALIZE OBJECTS
$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$( "#create-event-form" ).submit(function( event ) {
  event.preventDefault();
  var data = {
    "event" : $(this).serializeObject()
  }
  console.log(data);
});

//Refresh Event
$('#refresh-events').click(function(event){
  Event.list();
});

//List events
var Event ={
  list: function(){
    $.get( url_formatted() + "/events", function(data, status){
      $('#calendar').html("");
      $('#calendar').fullCalendar({
        events: data
      });

    });
  }
}
