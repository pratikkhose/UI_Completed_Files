// JavaScript Way of AJAX
$('#js-ajax').click(function() {

    // Create AJAX Request
    let xhttp = new XMLHttpRequest();

    // Prepare the AJAX Request
    xhttp.open('GET','https://api.myjson.com/bins/1fy6jx',true);

    // Send the AJAX Request
    xhttp.send();

    // Track the AJAX Request
    xhttp.onreadystatechange = function() {
        // Server is ready with response & it is OK
        if(xhttp.readyState === 4 && xhttp.status === 200){
            let data = xhttp.responseText;
            let persons = JSON.parse(data);
            displayData(persons);
        }
    };

});

// JQuery AJAX
$('#jquery-btn').click(function() {
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/x70zx',
        type : 'json',
        success : function(data) {
            let persons = data;
            displayData(persons);
        }
    });
});

// display data
let displayData = (persons) => {
    let tableBody = $('#table_body');
    let tableRow = '';
    for(let person of persons){
        tableRow += `<tr>
                        <td>${person.id}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.email}</td>
                        <td>${person.gender}</td>
                        <td>${person.ip_address}</td>
                    </tr>`;
    }
    tableBody.empty().append(tableRow);
};