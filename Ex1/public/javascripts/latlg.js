$('#btn-submit').on('click', function (){
    callGoogleApi();
});
$(document).on('keyup', function (e) {
    if (e.which == 13) callGoogleApi();
});

function callGoogleApi() {
    $('.result h4').remove();
    $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + $('#latitude').val().trim() + ',' +
        $('#longtitude').val().trim() + '&key=AIzaSyDYsNsVJsF6jCGhCA85lojWX7xcT6x9VTo', function (res) {
            $('.result').append('<h4>' + res.results[0].formatted_address + '</h4>');
        });
}