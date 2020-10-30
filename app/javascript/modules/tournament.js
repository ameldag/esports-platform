$(document).on('click', '.subscribe', function(e) {
    e.preventDefault();
    var tournament_id = $(this).data('attr')
    $.ajax({
        url: tournament_id + '/subscribe ',
        type: 'GET',
        success: function(response) {
            $('.subscribe').hide();
            alert("Team is succesfully subscribe to this tournament.")
        },
        error: function(params) {
            alert("It appears there is no roster for this game in this team.")
        }
    });
});

$(document).on('click', '.confirm_subscribe', function(e) {
    e.preventDefault();
    var tournament_id = $(this).data('attr')
    $.ajax({
        url: tournament_id + '/confirm_subscribtion ',
        type: 'GET',
        success: function(response) {
            $('.confirm_subscribe').hide();
            alert("Subscribtion is succesfully confirmed to this tournament.");
        },
        error: function(e) {
            alert("t appears there is no roster for this game in this team.")
        }

    });
});
$(document).on('click', '.new_roster', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'team/roster/new ',
        type: 'GET',
        success: function(response) {
            console.log("Roster was successfully created");
            alert("Roster was successfully created");

        },
        error: function(e) {
            alert("already have roster in this game.");
        }

    });
});