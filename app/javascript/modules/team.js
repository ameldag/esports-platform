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
$(document).on('click', '#user', function(e) {
    e.preventDefault();
    var user_id = $(this).data('owner')
    var team_id = $(this).data('team')

    $.ajax({
        url: team_id + '/giveownership/' + user_id,
        type: 'GET',
        complete: function(response) {
            $('.modal').hide();
            window.location.reload();

        },
    });
});