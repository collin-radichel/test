console.log(`it's aliveeeeee!`);

$(document).ready(handleReady);

function handleReady(){
    // trigger a GET request for data
    getPeople();
}

function getPeople() {
    // go to server, and ask for data, return from server
    // usually append that data to DOM
    // AJAX
    $.ajax({
        url : '/data',
        type: 'GET'
    }).then(function(response){
        console.log(response);
    })
}