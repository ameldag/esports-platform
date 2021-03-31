import {
    BracketsManager,
    JsonDatabase
} from 'brackets-manager';
const storage = new JsonDatabase();
console.log(storage);
// const manager = new BracketsManager(storage);
// storage.reset();
// await manager.create({
//     name: 'Amateur',
//     tournamentId: 0,
//     type: 'double_elimination',
//     seeding: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8', 'Team 9', 'Team 10', 'Team 11', 'Team 12', 'Team 13', 'Team 14', 'Team 15', 'Team 16'],
//     settings: {
//         seedOrdering: ['natural'],
//         grandFinal: 'simple'
//     }
// });
// const stage = await storage.select('stage');
// const round = await storage.select('round');
// const group = await storage.select('group');
// const match = await storage.select('match');
// const participant = await storage.select('participant');
// const match_group = await storage.select('match_group');
// const dataa = {
//     stage,
//     group,
//     round,
//     match,
//     match_group,
//     participant
// };
// JSON.stringify(dataa);

// const data = { "stage": [{ "id": 0, "tournament_id": 0, "name": "Amateur", "type": "double_elimination", "number": 1, "settings": { "seedOrdering": ["natural", "natural", "reverse_half_shift", "reverse"], "grandFinal": "simple", "matchesChildCount": 0, "size": 16 } }], "group": [{ "id": 0, "stage_id": 0, "number": 1 }, { "id": 1, "stage_id": 0, "number": 2 }, { "id": 2, "stage_id": 0, "number": 3 }], "round": [{ "id": 0, "number": 1, "stage_id": 0, "group_id": 0 }, { "id": 1, "number": 2, "stage_id": 0, "group_id": 0 }, { "id": 2, "number": 3, "stage_id": 0, "group_id": 0 }, { "id": 3, "number": 4, "stage_id": 0, "group_id": 0 }, { "id": 4, "number": 1, "stage_id": 0, "group_id": 1 }, { "id": 5, "number": 2, "stage_id": 0, "group_id": 1 }, { "id": 6, "number": 3, "stage_id": 0, "group_id": 1 }, { "id": 7, "number": 4, "stage_id": 0, "group_id": 1 }, { "id": 8, "number": 5, "stage_id": 0, "group_id": 1 }, { "id": 9, "number": 6, "stage_id": 0, "group_id": 1 }, { "id": 10, "number": 1, "stage_id": 0, "group_id": 2 }], "match": [{ "id": 0, "number": 1, "stage_id": 0, "group_id": 0, "round_id": 0, "child_count": 0, "status": 2, "opponent1": { "id": 0, "position": 1 }, "opponent2": { "id": 1, "position": 2 } }, { "id": 1, "number": 2, "stage_id": 0, "group_id": 0, "round_id": 0, "child_count": 0, "status": 2, "opponent1": { "id": 2, "position": 3 }, "opponent2": { "id": 3, "position": 4 } }, { "id": 2, "number": 3, "stage_id": 0, "group_id": 0, "round_id": 0, "child_count": 0, "status": 2, "opponent1": { "id": 4, "position": 5 }, "opponent2": { "id": 5, "position": 6 } }, { "id": 3, "number": 4, "stage_id": 0, "group_id": 0, "round_id": 0, "child_count": 0, "status": 2, "opponent1": { "id": 6, "position": 7 }, "opponent2": { "id": 7, "position": 8 } }, { "id": 4, "number": 5, "stage_id": 0, "group_id": 0, "round_id": 0, "child_count": 0, "status": 2, "opponent1": { "id": 8, "position": 9 }, "opponent2": { "id": 9, "position": 10 } }, { "id": 5, "number": 6, "stage_id": 0, "group_id": 0, "round_id": 0, "child_count": 0, "status": 2, "opponent1": { "id": 10, "position": 11 }, "opponent2": { "id": 11, "position": 12 } }, { "id": 6, "number": 7, "stage_id": 0, "group_id": 0, "round_id": 0, "child_count": 0, "status": 2, "opponent1": { "id": 12, "position": 13 }, "opponent2": { "id": 13, "position": 14 } }, { "id": 7, "number": 8, "stage_id": 0, "group_id": 0, "round_id": 0, "child_count": 0, "status": 2, "opponent1": { "id": 14, "position": 15 }, "opponent2": { "id": 15, "position": 16 } }, { "id": 8, "number": 1, "stage_id": 0, "group_id": 0, "round_id": 1, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 9, "number": 2, "stage_id": 0, "group_id": 0, "round_id": 1, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 10, "number": 3, "stage_id": 0, "group_id": 0, "round_id": 1, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 11, "number": 4, "stage_id": 0, "group_id": 0, "round_id": 1, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 12, "number": 1, "stage_id": 0, "group_id": 0, "round_id": 2, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 13, "number": 2, "stage_id": 0, "group_id": 0, "round_id": 2, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 14, "number": 1, "stage_id": 0, "group_id": 0, "round_id": 3, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 15, "number": 1, "stage_id": 0, "group_id": 1, "round_id": 4, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 1 }, "opponent2": { "id": null, "position": 2 } }, { "id": 16, "number": 2, "stage_id": 0, "group_id": 1, "round_id": 4, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 3 }, "opponent2": { "id": null, "position": 4 } }, { "id": 17, "number": 3, "stage_id": 0, "group_id": 1, "round_id": 4, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 5 }, "opponent2": { "id": null, "position": 6 } }, { "id": 18, "number": 4, "stage_id": 0, "group_id": 1, "round_id": 4, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 7 }, "opponent2": { "id": null, "position": 8 } }, { "id": 19, "number": 1, "stage_id": 0, "group_id": 1, "round_id": 5, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 2 }, "opponent2": { "id": null } }, { "id": 20, "number": 2, "stage_id": 0, "group_id": 1, "round_id": 5, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 1 }, "opponent2": { "id": null } }, { "id": 21, "number": 3, "stage_id": 0, "group_id": 1, "round_id": 5, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 4 }, "opponent2": { "id": null } }, { "id": 22, "number": 4, "stage_id": 0, "group_id": 1, "round_id": 5, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 3 }, "opponent2": { "id": null } }, { "id": 23, "number": 1, "stage_id": 0, "group_id": 1, "round_id": 6, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 24, "number": 2, "stage_id": 0, "group_id": 1, "round_id": 6, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 25, "number": 1, "stage_id": 0, "group_id": 1, "round_id": 7, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 2 }, "opponent2": { "id": null } }, { "id": 26, "number": 2, "stage_id": 0, "group_id": 1, "round_id": 7, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 1 }, "opponent2": { "id": null } }, { "id": 27, "number": 1, "stage_id": 0, "group_id": 1, "round_id": 8, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null } }, { "id": 28, "number": 1, "stage_id": 0, "group_id": 1, "round_id": 9, "child_count": 0, "status": 0, "opponent1": { "id": null, "position": 1 }, "opponent2": { "id": null } }, { "id": 29, "number": 1, "stage_id": 0, "group_id": 2, "round_id": 10, "child_count": 0, "status": 0, "opponent1": { "id": null }, "opponent2": { "id": null, "position": 1 } }], "match_group": null, "participant": [{ "id": 0, "tournament_id": 0, "name": "Team 1" }, { "id": 1, "tournament_id": 0, "name": "Team 2" }, { "id": 2, "tournament_id": 0, "name": "Team 3" }, { "id": 3, "tournament_id": 0, "name": "Team 4" }, { "id": 4, "tournament_id": 0, "name": "Team 5" }, { "id": 5, "tournament_id": 0, "name": "Team 6" }, { "id": 6, "tournament_id": 0, "name": "Team 7" }, { "id": 7, "tournament_id": 0, "name": "Team 8" }, { "id": 8, "tournament_id": 0, "name": "Team 9" }, { "id": 9, "tournament_id": 0, "name": "Team 10" }, { "id": 10, "tournament_id": 0, "name": "Team 11" }, { "id": 11, "tournament_id": 0, "name": "Team 12" }, { "id": 12, "tournament_id": 0, "name": "Team 13" }, { "id": 13, "tournament_id": 0, "name": "Team 14" }, { "id": 14, "tournament_id": 0, "name": "Team 15" }, { "id": 15, "tournament_id": 0, "name": "Team 16" }] }
//     // You can manually add locales. English will be used as a fallback if keys are missing.
//     // You can force browser language detection by setting the `i18nextLng` property to a locale key (ex: 'ru') in the localStorage.
// console.log(data);
// bracketsViewer.addLocale('ru', {
//     "origin-hint": {
//         "seed": "семя {{position}}",
//     }
// });

// // This is optional.You must do it before render().
// bracketsViewer.setParticipantImages(data.participant.map(participant => ({
//     participantId: participant.id,
//     imageUrl: 'https://github.githubassets.com/pinned-octocat.svg',
// })));

// bracketsViewer.render({
//     stages: data.stage,
//     matches: data.match,
//     matchGames: data.match_game,
//     participants: data.participant,
// }, {
//     selector: '#example',
//     participantOriginPlacement: 'before',
//     separatedChildCountLabel: true,
//     showSlotsOrigin: true,
//     showLowerBracketSlotsOrigin: true,
//     highlightParticipantOnHover: true,
// });