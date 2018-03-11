$('#btn-address-submit').on('click', function () {
    latlongToAddress();
});

$('#btn-2-points-submit').on('click', function () {
    latlongToDistance();
});

var map;
$(document).on('keyup', function (e) {
    if (e.which == 13) latlongToAddress();
});

function latlongToAddress() {
    $('.address-result h4').remove();
    $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + $('#latitude').val().trim() + ',' +
        $('#longtitude').val().trim() + '&key=AIzaSyDYsNsVJsF6jCGhCA85lojWX7xcT6x9VTo', function (res) {
            $('.address-result').prepend('<h4>' + res.results[0].formatted_address + '</h4>');
            map = new google.maps.Map(document.getElementById('map'), {
                center: res.results[0].geometry.location,
                zoom: 18
            });
        });
}

function latlongToDistance() {
    $('.distance-result h4').remove();

    var lat1 = $('#lat-1').val().trim();
    var lon1 = $('#lon-1').val().trim();
    var lat2 = $('#lat-2').val().trim();
    var lon2 = $('#lon-2').val().trim();

    $.post('/api/calculate_distance', {
        lat1: lat1,
        lon1: lon1,
        lat2: lat2,
        lon2: lon2
    }, function (res) {
        console.log(res)
        $('.distance-result').append('<h4>Distance: ' + res.distance.toFixed(2) + ' km</h4>');
    });
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}
