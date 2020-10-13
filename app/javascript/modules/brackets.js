(async function(id) {
    var tournament_id = $('#brackets-tournament').data('id');
    const data = await fetch('/tournament/' + tournament_id + '/bracket.json').then(res => res.json());

    bracketsViewer.render('#brackets-tournament', {
        stage: data.stage,
        groups: data.group,
        rounds: data.round,
        matches: data.match,
        matchGames: data.match_game,
        participants: data.participant,
    });
})();