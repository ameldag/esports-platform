(async() => {
    const urlParams = new URLSearchParams(window.location.search);
    const locale = urlParams.get('locale');
    var tournament_id = $('#brackets-tournament').data('id');
    const data = await fetch('/tournament/' + tournament_id + '/bracket.json').then(res => res.json());
    localStorage.setItem("i18nextLng", locale);

    bracketsViewer.addLocale('ru', {
        "origin-hint": {
            "seed": "семя {{position}}",
        }
    });
    // This is optional.You must do it before render().
    bracketsViewer.setParticipantImages(data.participant.map(participant => ({
        participantId: participant.id,
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AEi-user.svg&psig=AOvVaw0KxBPNeLyppSh_kjiuoRAl&ust=1620737096047000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjXiaySv_ACFQAAAAAdAAAAABAJ',
    })));

    bracketsViewer.render({
        stages: data.stage,
        matches: data.match,
        matchGames: data.match_game,
        participants: data.participant,
    }, {
        selector: '#brackets-tournament',
        participantOriginPlacement: 'before',
        separatedChildCountLabel: true,
        showSlotsOrigin: true,
        showLowerBracketSlotsOrigin: true,
        highlightParticipantOnHover: true,
    });
})();