import {
    LowDatabase,
    BracketsManager
} from "@seemba-official/brackets-manager";

const storage = new LowDatabase();
const manager = new BracketsManager(storage);
storage.reset();
document.getElementById("bracket-tournament").addEventListener("click", function(event) {
    event.preventDefault();
    $('#bracketsViewer').show();
    var name = $('#name').val();
    var game = $('#game').val();
    var type = $('#stage').val();
    var seedings = document.getElementsByName("rosters");
    let rosters = []
    for (var i = 0; i < seedings.length; i++) {
        rosters.push(seedings[i].value);
    }

    (async() => {

        await manager.create({
            name: name,
            tournamentId: 0,
            type: type,
            seeding: rosters,
            settings: {
                seedOrdering: ['natural'],
                grandFinal: 'simple',
                groupCount: 2
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

        // You can manually add locales. English will be used as a fallback if keys are missing.
        // You can force browser language detection by setting the `
        //i18nextLng ` property to a locale key (ex: 'ru') in the localStorage.
        console.log(data);
        bracketsViewer.addLocale('ru', {
            "origin-hint": {
                "seed": "семя {{position}}",
            }
        });

        // This is optional.You must do it before render().
        bracketsViewer.setParticipantImages(data.participant.map(participant => ({
            participantId: participant.id,
            imageUrl: 'https://github.githubassets.com/pinned-octocat.svg',
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
        document.getElementById("bracketsViewer").addEventListener("click", function(event) {
            event.preventDefault();
            var target = "http://localhost:3000/tournament/new";
            console.log(data, name, game);
            $.ajax({
                type: 'POST',
                url: target,
                data: {
                    tournament: data,
                    name: name,
                    game: game
                },
            });

        });
    })()
});