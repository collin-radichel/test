// const { response } = require("express");





console.log(`it's aliveeeeee!`);

$(document).ready(handleReady);

function handleReady(){
    // trigger a GET request for data
    getPeople();


    $('#submit').on('click', handleAddFriend);
}

function handleAddFriend(){
    console.log('clicked');

    //jQuery for getting input values
    //must always be an object
    let dataToSend = {
        name : $('#nameIn').val()
    }
    console.log(dataToSend);
    //send to server where it will be added to the array
    $.ajax({
        url : '/data',
        type : 'POST',
        data : dataToSend//data becomes req.body on server
    }).then(function(response){
        console.log(response);
        //after success of POST, redo a GET
        getPeople();
    })
}

function getPeople() {
    // go to server, and ask for data, return from server
    // usually append that data to DOM
    // AJAX
    $.ajax({
        url : '/data',
        type: 'GET'
    }).then(function(response){
        $('#target').empty();
        for (let person of response) {
            $('#target').append(`
                <li>${person}</li>
            `)
        }
        console.log(response);
    })
}