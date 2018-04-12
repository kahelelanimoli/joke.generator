$(document).ready( function() {
    $.ajax({
        url: 'https://icanhazdadjoke.com/',
        method: 'GET',
        dataType: 'JSON'
    }).done(function(res) {
       $('#JokeDisplay').text(res.joke)
    }).fail( function(err) {
        alert(err.responseJSON.errors)
    })
    $('#nextJoke').on('click', function () {
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            method: 'GET',
            dataType: 'JSON'
        }).done(function(res) {
           $('#JokeDisplay').text(res.joke)
        }).fail( function(err) {
            alert(err.responseJSON.errors)
        })
    })
})