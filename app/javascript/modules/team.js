$(document).on('click', '.request-btn', function(e) {
    e.preventDefault();
    var item_id = $(this).data('attr')
    var answer = $(this).data('answer')
        // hide requests link
    $('#requests').hide();
    // show loading gif
    $('.loading-gif').show();

    $.ajax({
        url: '/team/request/' + item_id + '?answer=' + answer,
        type: 'POST',
        success: function(response) {
            // hide the loading gif
            $('.loading-gif').hide();
            // show our requests 
            $('#requests').show();
        }
    });
});