import {
    LowDatabase,
    BracketsManager
}
from "@seemba-official/brackets-manager";
const storage = new LowDatabase();
const manager = new BracketsManager(storage);
const urlParams = new URLSearchParams(window.location.search);
const locale = urlParams.get('locale');
document.getElementById("bracket-tournament").addEventListener("click", function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var game = $('#game').val();
    var type = $('#stage').val();

    var number = parseInt($('#size').val());
    (async() => {
        storage.reset();
        try {
            await manager.create({
                name: name,
                tournamentId: 0,
                type: type,
                settings: {
                    seedOrdering: ['natural'],
                    skipFirstRound: false,
                    grandFinal: 'double',
                    groupCount: 1,
                    size: number
                }
            });
            const stage = await storage.select('stage');
            const round = await storage.select('round');
            const group = await storage.select('group');
            const match = await storage.select('match');
            const participant = await storage.select('participant');
            const match_group = await storage.select('match_group');
            const data = {
                stage,
                group,
                round,
                match,
                match_group,
                participant
            };
            JSON.stringify(data);
            $("#bracketsViewer").html(data);
            // You can manually add locales. English will be used as a fallback if keys are missing.
            // You can force browser language detection by setting the `
            //i18nextLng ` property to a locale key (ex: 'ru') in the localStorage.
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
                selector: '#bracketsViewer',
                participantOriginPlacement: 'before',
                separatedChildCountLabel: true,
                showSlotsOrigin: true,
                showLowerBracketSlotsOrigin: true,
                highlightParticipantOnHover: true,
            });
            document.getElementById("run_tournament").addEventListener("click", function(event) {
                event.preventDefault();
                var target = "http://localhost:3000/tournament/new";
                $.ajax({
                    type: 'POST',
                    url: target,
                    data: {
                        tournament: data,
                        rosters: number,
                        name: name,
                        game: game
                    },
                });

            });
            var x = document.getElementById("brackets");
            if (x.style.display === "none") {
                x.style.display = "block";
            }
        } catch (err) {
            console.log(err.message);
            // if (err.message == "You must provide a name for the stage.") {
            //     $('#name_stage').text(I18n.t('activerecord.errors.messages.empty_stage'));
            // } else if (err.message == "Impossible to create a stage with less than 2 participants.") {
            //     $('#name_stage').text("");
            //     $('#participants').text(I18n.t('activerecord.errors.messages.empty_participants'));
            // } else {
            //     $('#name_stage').text("");
            //     $('#participants').text("");
            //     $('#tournament').text(err.message);
            // }
        }
    })()
});