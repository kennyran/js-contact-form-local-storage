$(document).ready(function() {
    // init runs when page is first loaded, to see if any data is stored for each of the fields
    function init() {
        // square brackets in .val(localStorage[]) refer to arrays and can contain more than 1 value
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"])
        }
        if (localStorage["email"]) {
            $('#email').val(localStorage["email"])
        }
        if (localStorage["message"]) {
            $('message').val(localStorage["message"])
        }
    }
    init();
});

// this will check for any data that has been inputted into local storage
//[$(this).attr()] refers to current html element 
$('.stored').change(function() {
    localStorage[$(this).attr('name')] = $(this).val();
});