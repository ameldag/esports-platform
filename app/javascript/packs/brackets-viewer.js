(() => {
    "use strict";
    var e = {
            498: (e, t, n) => {
                function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
                n.d(t, { Z: () => i })
            },
            668: (e, t, n) => {
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                function o(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e }
                n.d(t, { Z: () => o })
            },
            958: (e, t, n) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.setupConnection = t.getFinalConnection = t.getBracketConnection = t.addParticipantImage = t.addParticipantOrigin = t.setupLoss = t.setupWin = t.setupHint = t.createRankingHeaders = t.createCell = t.createRow = t.createTable = t.createResultContainer = t.createNameContainer = t.createParticipantContainer = t.createOpponentsContainer = t.createChildCountLabel = t.createMatchLabel = t.createMatchContainer = t.createRoundContainer = t.createGroupContainer = t.createBracketContainer = t.createEliminationContainer = t.createRoundRobinContainer = t.createTitle = void 0;
                const i = n(515),
                    o = n(851);
                t.createTitle = function(e) { const t = document.createElement("h1"); return t.innerText = e, t }, t.createRoundRobinContainer = function(e) { const t = document.createElement("div"); return t.classList.add("round-robin"), t.setAttribute("data-stage-id", e.toString()), t }, t.createEliminationContainer = function(e) { const t = document.createElement("div"); return t.classList.add("elimination"), t.setAttribute("data-stage-id", e.toString()), t }, t.createBracketContainer = function(e) { const t = document.createElement("section"); return t.classList.add("bracket"), t.setAttribute("data-group-id", e.toString()), t }, t.createGroupContainer = function(e, t) {
                    const n = document.createElement("h2");
                    n.innerText = t;
                    const i = document.createElement("section");
                    return i.classList.add("group"), i.setAttribute("data-group-id", e.toString()), i.append(n), i
                }, t.createRoundContainer = function(e, t) {
                    const n = document.createElement("h3");
                    n.innerText = t;
                    const i = document.createElement("article");
                    return i.classList.add("round"), i.setAttribute("data-round-id", e.toString()), i.append(n), i
                }, t.createMatchContainer = function(e, t) { const n = document.createElement("div"); return n.classList.add("match"), void 0 !== e && n.setAttribute("data-match-id", e.toString()), void 0 !== t && n.setAttribute("data-match-status", t.toString()), n }, t.createMatchLabel = function(e, t) { const n = document.createElement("span"); return n.innerText = e, n.title = t, n }, t.createChildCountLabel = function(e) { const t = document.createElement("span"); return t.innerText = e, t }, t.createOpponentsContainer = function() { const e = document.createElement("div"); return e.classList.add("opponents"), e }, t.createParticipantContainer = function(e) { const t = document.createElement("div"); return t.classList.add("participant"), null !== e && t.setAttribute("data-participant-id", e.toString()), t }, t.createNameContainer = function() { const e = document.createElement("div"); return e.classList.add("name"), e }, t.createResultContainer = function() { const e = document.createElement("div"); return e.classList.add("result"), e }, t.createTable = function() { return document.createElement("table") }, t.createRow = function() { return document.createElement("tr") }, t.createCell = function(e) { const t = document.createElement("td"); return t.innerText = String(e), t }, t.createRankingHeaders = function(e) {
                    const t = document.createElement("tr"),
                        n = e[0];
                    for (const e in n) {
                        const n = e,
                            o = i.rankingHeader(n),
                            r = document.createElement("th");
                        r.innerText = o.text, r.setAttribute("title", o.tooltip), t.append(r)
                    }
                    return t
                }, t.setupHint = function(e, t) { e.classList.add("hint"), e.innerText = t }, t.setupWin = function(e, t, n) { n.result && "win" === n.result && (e.classList.add("win"), void 0 === n.score && (t.innerText = o.abbreviations.win)) }, t.setupLoss = function(e, t, n) {
                    (n.result && "loss" === n.result || n.forfeit) && (e.classList.add("loss"), n.forfeit ? t.innerText = o.abbreviations.forfeit : void 0 === n.score && (t.innerText = o.abbreviations.loss))
                }, t.addParticipantOrigin = function(e, t, n) { const i = document.createElement("span"); "before" === n ? (i.innerText = `${t} `, e.prepend(i)) : "after" === n && (i.innerText = ` (${t})`, e.append(i)) }, t.addParticipantImage = function(e, t) {
                    const n = document.createElement("img");
                    n.src = t, e.prepend(n)
                }, t.getBracketConnection = function(e, t, n, i, o, r) { var a, s, c; const l = { connectPrevious: !1, connectNext: !1 }; return "loser-bracket" === o ? (l.connectPrevious = t > 1 && (t % 2 == 1 ? "square" : "straight"), l.connectNext = t < n && (t % 2 == 0 ? "square" : "straight")) : (l.connectPrevious = t > 1 && "square", l.connectNext = t < n ? "square" : !!r && "straight"), e || 2 !== t || (("single-bracket" === o || "winner-bracket" === o) && void 0 === (null === (a = i.opponent1) || void 0 === a ? void 0 : a.position) && void 0 === (null === (s = i.opponent2) || void 0 === s ? void 0 : s.position) && (l.connectPrevious = !1), "loser-bracket" === o && void 0 === (null === (c = i.opponent2) || void 0 === c ? void 0 : c.position) && (l.connectPrevious = !1)), l }, t.getFinalConnection = function(e, t, n) { return { connectPrevious: "grand_final" === e && 1 === t && "straight", connectNext: 2 === n && 1 === t && "straight" } }, t.setupConnection = function(e, t, n) { n.connectPrevious && e.classList.add("connect-previous"), n.connectNext && t.classList.add("connect-next"), "straight" === n.connectPrevious && e.classList.add("straight"), "straight" === n.connectNext && t.classList.add("straight") }
            },
            515: (e, t, n) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.getRanking = t.rankingHeader = t.isMajorRound = t.getOriginAbbreviation = t.completeWithBlankMatches = t.findRoot = t.splitBy = void 0;
                const i = n(851);

                function o(e, t, n, i) {
                    if (!n || null === n.id) return;
                    const o = e[n.id] || { rank: 0, id: 0, played: 0, wins: 0, draws: 0, losses: 0, forfeits: 0, scoreFor: 0, scoreAgainst: 0, scoreDifference: 0, points: 0 };
                    o.id = n.id, (n.forfeit || n.result) && o.played++, "win" === n.result && o.wins++, "draw" === n.result && o.draws++, "loss" === n.result && o.losses++, n.forfeit && o.forfeits++, o.scoreFor += n.score || 0, o.scoreAgainst += i && i.score || 0, o.scoreDifference = o.scoreFor - o.scoreAgainst, o.points = t(o), e[n.id] = o
                }
                t.splitBy = function(e, t) { const n = Object(); for (const i of e) n[i[t]] || (n[i[t]] = []), n[i[t]].push(i); return Object.values(n) }, t.findRoot = function(e) { const t = document.querySelectorAll(e || ".brackets-viewer"); if (0 === t.length) throw Error("Root not found. You must have at least one root element."); if (t.length > 1) throw Error("Multiple possible roots were found. Please use `config.selector` to choose a specific root."); const n = t[0]; if (!n.classList.contains("brackets-viewer")) throw Error("The selected root must have a `.brackets-viewer` class."); return n }, t.completeWithBlankMatches = function(e, t, n) { let i = []; return "single-bracket" !== n && "winner-bracket" !== n || (i = t.map((e => { var t, n; return [(null === (t = e.opponent1) || void 0 === t ? void 0 : t.position) || null, (null === (n = e.opponent2) || void 0 === n ? void 0 : n.position) || null] })).flat()), "loser-bracket" === n && (i = t.map((e => { var t; return (null === (t = e.opponent2) || void 0 === t ? void 0 : t.position) || null }))), 0 === i.filter((e => null !== e)).length ? { matches: e, fromToornament: !1 } : { matches: i.map((t => t && e.find((e => e.number === t)) || null)), fromToornament: !0 } }, t.getOriginAbbreviation = function(e, t, n, o) { return n = n || -1, t && "loser-bracket" === e && 1 === n || "single-bracket" === e || "winner-bracket" === e && 1 === n ? i.abbreviations.seed : "loser-bracket" === e && n % 2 == 0 && "opponent1" === o ? i.abbreviations.position : null }, t.isMajorRound = function(e) { return 1 === e || e % 2 == 0 }, t.rankingHeader = function(e) { return i.headers[e] }, t.getRanking = function(e, t) {
                    t = t || (e => 3 * e.wins + 1 * e.draws + 0 * e.losses);
                    const n = {};
                    for (const i of e) o(n, t, i.opponent1, i.opponent2), o(n, t, i.opponent2, i.opponent1);
                    return function(e) {
                        const t = Object.values(e).sort(((e, t) => e.points !== t.points ? t.points - e.points : t.played - e.played)),
                            n = { value: 0, lastPoints: -1 };
                        for (const e of t) e.rank = n.lastPoints !== e.points ? ++n.value : n.value, n.lastPoints = e.points;
                        return t
                    }(n)
                }
            },
            456: function(e, t, n) {
                var i = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.locales = void 0;
                const o = i(n(117)),
                    r = i(n(169));
                t.locales = { en: o.default, fr: r.default }
            },
            851: function(e, t, n) {
                var i = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.headers = t.BYE = t.bestOfX = t.abbreviations = t.getLoserBracketRoundName = t.getWinnerBracketRoundName = t.getRoundName = t.getGroupName = t.getMatchStatus = t.getFinalMatchLabel = t.getMatchLabel = t.getFinalOriginHint = t.getOriginHint = t.i18next = void 0;
                const o = i(n(136));
                t.i18next = o.default;
                const r = i(n(420)),
                    a = n(456),
                    s = n(981),
                    c = n(515);

                function l(e, t, n) { return "boolean" == typeof n ? o.default.t(`${e}.${t}`, { returnObjects: !0 }) : o.default.t(`${e}.${t}`, n) }
                o.default.use(r.default).init({ fallbackLng: "en", debug: !0, resources: {} }), Object.keys(a.locales).forEach((e => o.default.addResourceBundle(e, "translation", a.locales[e]))), t.getOriginHint = function(e, t, n, i) { if (1 === e) { if ("single-bracket" === i) return e => l("origin-hint", "seed", { position: e }); if ("winner-bracket" === i) return e => l("origin-hint", "seed", { position: e }); if ("loser-bracket" === i && n) return e => l("origin-hint", "seed", { position: e }) } if (c.isMajorRound(e) && "loser-bracket" === i) { if (e === t - 2) return e => l("origin-hint", "winner-bracket-semi-final", { position: e }); if (e === t) return () => l("origin-hint", "winner-bracket-final"); const i = Math.ceil((e + 1) / 2); return n ? e => l("origin-hint", "winner-bracket", { round: i - 1, position: e }) : e => l("origin-hint", "winner-bracket", { round: i, position: e }) } }, t.getFinalOriginHint = function(e, t) { return "consolation_final" === e ? e => l("origin-hint", "consolation-final", { position: e }) : 1 === t ? () => l("origin-hint", "grand-final") : void 0 }, t.getMatchLabel = function(e, t, n, i) {
                    const o = l("match-label", "winner-bracket" === i ? "winner-bracket" : "loser-bracket" === i ? "loser-bracket" : "standard-bracket"),
                        r = t === n - 1,
                        a = t === n;
                    if ("single-bracket" === i) { if (r) return l("match-label", "standard-bracket-semi-final", { matchNumber: e }); if (a) return l("match-label", "standard-bracket-final") }
                    return r ? l("match-label", "double-elimination-semi-final", { matchPrefix: o, matchNumber: e }) : a ? l("match-label", "double-elimination-final", { matchPrefix: o }) : l("match-label", "double-elimination", { matchPrefix: o, roundNumber: t, matchNumber: e })
                }, t.getFinalMatchLabel = function(e, t, n) { return "consolation_final" === e ? l("match-label", "consolation-final") : 1 === n ? l("match-label", "grand-final-single") : l("match-label", "grand-final", { roundNumber: t }) }, t.getMatchStatus = function(e) {
                    switch (e) {
                        case s.Status.Locked:
                            return l("match-status", "locked");
                        case s.Status.Waiting:
                            return l("match-status", "waiting");
                        case s.Status.Ready:
                            return l("match-status", "ready");
                        case s.Status.Running:
                            return l("match-status", "running");
                        case s.Status.Completed:
                            return l("match-status", "completed");
                        case s.Status.Archived:
                            return l("match-status", "archived")
                    }
                }, t.getGroupName = function(e) { return l("common", "group-name", { groupNumber: e }) }, t.getRoundName = function(e, t) { return e === t ? l("common", "round-name-final") : l("common", "round-name", { roundNumber: e }) }, t.getWinnerBracketRoundName = function(e, t) { return e === t ? l("common", "round-name-winner-bracket-final") : l("common", "round-name-winner-bracket", { roundNumber: e }) }, t.getLoserBracketRoundName = function(e, t) { return e === t ? l("common", "round-name-loser-bracket-final") : l("common", "round-name-loser-bracket", { roundNumber: e }) }, t.abbreviations = { win: l("abbreviations", "win"), loss: l("abbreviations", "loss"), forfeit: l("abbreviations", "forfeit"), position: l("abbreviations", "position"), seed: l("abbreviations", "seed") }, t.bestOfX = e => l("common", "best-of-x", { x: e }), t.BYE = l("common", "bye"), t.headers = { rank: l("ranking", "rank", !0), id: l("ranking", "id", !0), played: l("ranking", "played", !0), wins: l("ranking", "wins", !0), draws: l("ranking", "draws", !0), losses: l("ranking", "losses", !0), forfeits: l("ranking", "forfeits", !0), scoreFor: l("ranking", "score-for", !0), scoreAgainst: l("ranking", "score-against", !0), scoreDifference: l("ranking", "score-difference", !0), points: l("ranking", "points", !0) }
            },
            560: function(e, t, n) {
                var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) { void 0 === i && (i = n), Object.defineProperty(e, i, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, i) { void 0 === i && (i = n), e[i] = t[n] }),
                    o = this && this.__setModuleDefault || (Object.create ? function(e, t) { Object.defineProperty(e, "default", { enumerable: !0, value: t }) } : function(e, t) { e.default = t }),
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                        return o(t, e), t
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.BracketsViewer = void 0, n(942);
                const a = n(981),
                    s = n(515),
                    c = r(n(958)),
                    l = r(n(851));
                class u {
                    constructor() { this.participantRefs = {}, this.participants = [], this.participantImages = [], this.skipFirstRound = !1, this.alwaysConnectFirstRound = !1 }
                    render(e, t) {
                        const n = document.createDocumentFragment();
                        this.config = { participantOriginPlacement: (null == t ? void 0 : t.participantOriginPlacement) || "before", separatedChildCountLabel: void 0 !== (null == t ? void 0 : t.separatedChildCountLabel) && t.separatedChildCountLabel, showSlotsOrigin: void 0 === (null == t ? void 0 : t.showSlotsOrigin) || t.showSlotsOrigin, showLowerBracketSlotsOrigin: void 0 === (null == t ? void 0 : t.showLowerBracketSlotsOrigin) || t.showLowerBracketSlotsOrigin, highlightParticipantOnHover: void 0 === (null == t ? void 0 : t.highlightParticipantOnHover) || t.highlightParticipantOnHover }, this.participants = e.participants, e.participants.forEach((e => this.participantRefs[e.id] = [])), e.stages.forEach((t => this.renderStage(n, {...e, stages: [t], matches: e.matches.filter((e => e.stage_id === t.id)) }))), s.findRoot(null == t ? void 0 : t.selector).append(n)
                    }
                    addLocale(e, t) { l.i18next.addResourceBundle(e, "translation", t), l.i18next.changeLanguage() }
                    setParticipantImages(e) { this.participantImages = e }
                    renderStage(e, t) {
                        const n = t.stages[0],
                            i = s.splitBy(t.matches, "group_id");
                        switch (this.skipFirstRound = n.settings.skipFirstRound || !1, n.type) {
                            case "round_robin":
                                this.renderRoundRobin(e, n, i);
                                break;
                            case "single_elimination":
                            case "double_elimination":
                                this.renderElimination(e, n, i);
                                break;
                            default:
                                throw Error(`Unknown bracket type: ${n.type}`)
                        }
                    }
                    renderRoundRobin(e, t, n) {
                        const i = c.createRoundRobinContainer(t.id);
                        i.append(c.createTitle(t.name));
                        let o = 1;
                        for (const e of n) {
                            const t = e[0].group_id,
                                n = c.createGroupContainer(t, l.getGroupName(o++)),
                                r = s.splitBy(e, "round_id");
                            let a = 1;
                            for (const e of r) {
                                const t = e[0].round_id,
                                    i = c.createRoundContainer(t, l.getRoundName(a++, 0));
                                for (const t of e) i.append(this.createMatch(t));
                                n.append(i)
                            }
                            n.append(this.createRanking(e)), i.append(n)
                        }
                        e.append(i)
                    }
                    renderElimination(e, t, n) {
                        const i = c.createEliminationContainer(t.id);
                        i.append(c.createTitle(t.name)), "single_elimination" === t.type ? this.renderSingleElimination(i, n) : this.renderDoubleElimination(i, n), e.append(i)
                    }
                    renderSingleElimination(e, t) {
                        const n = void 0 !== t[1];
                        this.renderBracket(e, s.splitBy(t[0], "round_id"), l.getRoundName, "single-bracket"), n && this.renderFinal(e, "consolation_final", t[1])
                    }
                    renderDoubleElimination(e, t) {
                        const n = void 0 !== t[1],
                            i = void 0 !== t[2];
                        this.renderBracket(e, s.splitBy(t[0], "round_id"), l.getWinnerBracketRoundName, "winner-bracket", i), n && this.renderBracket(e, s.splitBy(t[1], "round_id"), l.getLoserBracketRoundName, "loser-bracket"), i && this.renderFinal(e, "grand_final", t[2])
                    }
                    renderBracket(e, t, n, i, o) {
                        const r = t[0][0].group_id,
                            a = t.length,
                            l = c.createBracketContainer(r),
                            { matches: u, fromToornament: p } = s.completeWithBlankMatches(t[0], t[1], i);
                        this.alwaysConnectFirstRound = !p;
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e][0].round_id,
                                s = e + 1,
                                d = c.createRoundContainer(r, n(s, a)),
                                f = p && 1 === s ? u : t[e];
                            for (const e of f) d.append(e && this.createBracketMatch(s, a, e, i, o) || this.skipBracketMatch());
                            l.append(d)
                        }
                        e.append(l)
                    }
                    renderFinal(e, t, n) {
                        const i = e.querySelector(".bracket");
                        if (!i) throw Error("Upper bracket not found.");
                        const o = n[0].opponent1,
                            r = null === (null == o ? void 0 : o.id) || "win" === (null == o ? void 0 : o.result) ? 1 : 2,
                            a = n.slice(0, r),
                            s = n.length;
                        for (let e = 0; e < a.length; e++) {
                            const n = e + 1,
                                o = c.createRoundContainer(a[e].round_id, l.getFinalMatchLabel(t, n, s));
                            o.append(this.createFinalMatch(t, a, n, s)), i.append(o)
                        }
                    }
                    createRanking(e) {
                        const t = c.createTable(),
                            n = s.getRanking(e);
                        t.append(c.createRankingHeaders(n));
                        for (const e of n) t.append(this.createRankingRow(e));
                        return t
                    }
                    createRankingRow(e) {
                        const t = c.createRow(),
                            n = 0 === e.played;
                        for (const i in e) {
                            const o = i,
                                r = e[o];
                            if ("id" === o) {
                                const e = this.participants.find((e => e.id === r));
                                if (void 0 !== e) {
                                    const n = c.createCell(e.name);
                                    this.setupMouseHover(e.id, n), t.append(n);
                                    continue
                                }
                            }!n || "rank" !== o && "points" !== o ? t.append(c.createCell(r)) : t.append(c.createCell("-"))
                        }
                        return t
                    }
                    createBracketMatch(e, t, n, i, o) {
                        const r = c.getBracketConnection(this.alwaysConnectFirstRound, e, t, n, i, o),
                            a = l.getMatchLabel(n.number, e, t, i) + (n.child_count > 0 ? `, Bo${n.child_count}` : ""),
                            s = l.getOriginHint(e, t, this.skipFirstRound, i);
                        return this.createMatch(n, i, r, a, s, e)
                    }
                    createFinalMatch(e, t, n, i) {
                        const o = n - 1,
                            r = c.getFinalConnection(e, n, t.length),
                            a = l.getFinalMatchLabel(e, n, i),
                            s = l.getFinalOriginHint(e, n);
                        return this.createMatch(t[o], "final-group", r, a, s)
                    }
                    skipBracketMatch() {
                        const e = c.createMatchContainer(),
                            t = c.createOpponentsContainer(),
                            n = this.createParticipant(null),
                            i = this.createParticipant(null);
                        return t.append(n, i), e.append(t), e.style.visibility = "hidden", e
                    }
                    createMatch(e, t, n, i, o, r) {
                        const s = c.createMatchContainer(e.id, e.status),
                            u = c.createOpponentsContainer();
                        e.status >= a.Status.Completed && (o = void 0);
                        const p = this.createParticipant(e.opponent1, "opponent1", o, t, r),
                            d = this.createParticipant(e.opponent2, "opponent2", o, t, r);
                        return i && (e.child_count > 0 && !this.config.separatedChildCountLabel && (i += `, ${l.bestOfX(e.child_count)}`), u.append(c.createMatchLabel(i, l.getMatchStatus(e.status)))), e.child_count > 0 && this.config.separatedChildCountLabel && u.append(c.createChildCountLabel(l.bestOfX(e.child_count))), u.append(p, d), s.append(u), n ? (c.setupConnection(u, s, n), s) : s
                    }
                    createParticipant(e, t, n, i, o) { const r = { participant: c.createParticipantContainer(e && e.id), name: c.createNameContainer(), result: c.createResultContainer() }; return null === e ? r.name.innerText = l.BYE : this.renderParticipant(r, e, t, n, i, o), r.participant.append(r.name, r.result), e && null !== e.id && this.setupMouseHover(e.id, r.participant), r.participant }
                    renderParticipant(e, t, n, i, o, r) {
                        const a = this.participants.find((e => e.id === t.id));
                        a ? (e.name.innerText = a.name, e.participant.setAttribute("title", a.name), this.renderParticipantImage(e.name, a.id), this.renderParticipantOrigin(e.name, t, n, o, r)) : this.renderHint(e.name, t, i, o), e.result.innerText = `${void 0===t.score?"-":t.score}`, c.setupWin(e.participant, e.result, t), c.setupLoss(e.participant, e.result, t)
                    }
                    renderParticipantImage(e, t) {
                        const n = this.participantImages.find((e => e.participantId === t));
                        n && c.addParticipantImage(e, n.imageUrl)
                    }
                    renderHint(e, t, n, i) { void 0 !== n && void 0 !== t.position && this.config.showSlotsOrigin && (this.config.showLowerBracketSlotsOrigin || "loser-bracket" !== i) && c.setupHint(e, n(t.position)) }
                    renderParticipantOrigin(e, t, n, i, o) {
                        if (void 0 === t.position || void 0 === i) return;
                        if (!this.config.participantOriginPlacement || "none" === this.config.participantOriginPlacement) return;
                        if (!this.config.showSlotsOrigin) return;
                        if (!this.config.showLowerBracketSlotsOrigin && "loser-bracket" === i) return;
                        const r = s.getOriginAbbreviation(i, this.skipFirstRound, o, n);
                        if (!r) return;
                        const a = r + t.position;
                        c.addParticipantOrigin(e, a, this.config.participantOriginPlacement)
                    }
                    setupMouseHover(e, t) {
                        if (!this.config.highlightParticipantOnHover) return;
                        const n = this.participantRefs[e];
                        if (!n) throw Error(`The participant (id: ${e}) does not exist in the participants table.`);
                        n.push(t), t.addEventListener("mouseover", (() => { n.forEach((e => e.classList.add("hover"))) })), t.addEventListener("mouseleave", (() => { n.forEach((e => e.classList.remove("hover"))) }))
                    }
                }
                t.BracketsViewer = u, window.bracketsViewer = new u
            },
            981: (e, t) => {
                var n;
                Object.defineProperty(t, "__esModule", { value: !0 }), t.Status = void 0, (n = t.Status || (t.Status = {}))[n.Locked = 0] = "Locked", n[n.Waiting = 1] = "Waiting", n[n.Ready = 2] = "Ready", n[n.Running = 3] = "Running", n[n.Completed = 4] = "Completed", n[n.Archived = 5] = "Archived"
            },
            420: (e, t, n) => {
                n.r(t), n.d(t, { default: () => L });
                var i = n(498),
                    o = n(668),
                    r = [],
                    a = r.forEach,
                    s = r.slice;

                function c(e) {
                    return a.call(s.call(arguments, 1), (function(t) {
                        if (t)
                            for (var n in t) void 0 === e[n] && (e[n] = t[n])
                    })), e
                }
                var l = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                    u = function(e, t, n) {
                        var i = n || {};
                        i.path = i.path || "/";
                        var o = e + "=" + encodeURIComponent(t);
                        if (i.maxAge > 0) {
                            var r = i.maxAge - 0;
                            if (isNaN(r)) throw new Error("maxAge should be a Number");
                            o += "; Max-Age=" + Math.floor(r)
                        }
                        if (i.domain) {
                            if (!l.test(i.domain)) throw new TypeError("option domain is invalid");
                            o += "; Domain=" + i.domain
                        }
                        if (i.path) {
                            if (!l.test(i.path)) throw new TypeError("option path is invalid");
                            o += "; Path=" + i.path
                        }
                        if (i.expires) {
                            if ("function" != typeof i.expires.toUTCString) throw new TypeError("option expires is invalid");
                            o += "; Expires=" + i.expires.toUTCString()
                        }
                        if (i.httpOnly && (o += "; HttpOnly"), i.secure && (o += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                            case !0:
                                o += "; SameSite=Strict";
                                break;
                            case "lax":
                                o += "; SameSite=Lax";
                                break;
                            case "strict":
                                o += "; SameSite=Strict";
                                break;
                            case "none":
                                o += "; SameSite=None";
                                break;
                            default:
                                throw new TypeError("option sameSite is invalid")
                        }
                        return o
                    },
                    p = {
                        name: "cookie",
                        lookup: function(e) {
                            var t;
                            if (e.lookupCookie && "undefined" != typeof document) {
                                var n = function(e) {
                                    for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                                        for (var o = n[i];
                                            " " === o.charAt(0);) o = o.substring(1, o.length);
                                        if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                                    }
                                    return null
                                }(e.lookupCookie);
                                n && (t = n)
                            }
                            return t
                        },
                        cacheUserLanguage: function(e, t) {
                            t.lookupCookie && "undefined" != typeof document && function(e, t, n, i) {
                                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
                                n && (o.expires = new Date, o.expires.setTime(o.expires.getTime() + 60 * n * 1e3)), i && (o.domain = i), document.cookie = u(e, encodeURIComponent(t), o)
                            }(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
                        }
                    },
                    d = {
                        name: "querystring",
                        lookup: function(e) {
                            var t;
                            if ("undefined" != typeof window)
                                for (var n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++) {
                                    var o = n[i].indexOf("=");
                                    o > 0 && n[i].substring(0, o) === e.lookupQuerystring && (t = n[i].substring(o + 1))
                                }
                            return t
                        }
                    },
                    f = null,
                    g = function() {
                        if (null !== f) return f;
                        try {
                            f = "undefined" !== window && null !== window.localStorage;
                            var e = "i18next.translate.boo";
                            window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e)
                        } catch (e) { f = !1 }
                        return f
                    },
                    h = {
                        name: "localStorage",
                        lookup: function(e) {
                            var t;
                            if (e.lookupLocalStorage && g()) {
                                var n = window.localStorage.getItem(e.lookupLocalStorage);
                                n && (t = n)
                            }
                            return t
                        },
                        cacheUserLanguage: function(e, t) { t.lookupLocalStorage && g() && window.localStorage.setItem(t.lookupLocalStorage, e) }
                    },
                    m = null,
                    v = function() {
                        if (null !== m) return m;
                        try {
                            m = "undefined" !== window && null !== window.sessionStorage;
                            var e = "i18next.translate.boo";
                            window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e)
                        } catch (e) { m = !1 }
                        return m
                    },
                    b = {
                        name: "sessionStorage",
                        lookup: function(e) {
                            var t;
                            if (e.lookupSessionStorage && v()) {
                                var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                                n && (t = n)
                            }
                            return t
                        },
                        cacheUserLanguage: function(e, t) { t.lookupSessionStorage && v() && window.sessionStorage.setItem(t.lookupSessionStorage, e) }
                    },
                    y = {
                        name: "navigator",
                        lookup: function(e) {
                            var t = [];
                            if ("undefined" != typeof navigator) {
                                if (navigator.languages)
                                    for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                                navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language)
                            }
                            return t.length > 0 ? t : void 0
                        }
                    },
                    k = { name: "htmlTag", lookup: function(e) { var t, n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null); return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")), t } },
                    w = {
                        name: "path",
                        lookup: function(e) {
                            var t;
                            if ("undefined" != typeof window) {
                                var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                                if (n instanceof Array)
                                    if ("number" == typeof e.lookupFromPathIndex) {
                                        if ("string" != typeof n[e.lookupFromPathIndex]) return;
                                        t = n[e.lookupFromPathIndex].replace("/", "")
                                    } else t = n[0].replace("/", "")
                            }
                            return t
                        }
                    },
                    x = {
                        name: "subdomain",
                        lookup: function(e) {
                            var t;
                            if ("undefined" != typeof window) {
                                var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                                n instanceof Array && (t = "number" == typeof e.lookupFromSubdomainIndex ? n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
                            }
                            return t
                        }
                    },
                    S = function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (0, i.Z)(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n)
                        }
                        return (0, o.Z)(e, [{
                            key: "init",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                this.services = e, this.options = c(t, this.options || {}, { order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"], lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"] }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(p), this.addDetector(d), this.addDetector(h), this.addDetector(b), this.addDetector(y), this.addDetector(k), this.addDetector(w), this.addDetector(x)
                            }
                        }, { key: "addDetector", value: function(e) { this.detectors[e.name] = e } }, {
                            key: "detect",
                            value: function(e) {
                                var t = this;
                                e || (e = this.options.order);
                                var n = [];
                                return e.forEach((function(e) {
                                    if (t.detectors[e]) {
                                        var i = t.detectors[e].lookup(t.options);
                                        i && "string" == typeof i && (i = [i]), i && (n = n.concat(i))
                                    }
                                })), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                            }
                        }, {
                            key: "cacheUserLanguage",
                            value: function(e, t) {
                                var n = this;
                                t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((function(t) { n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options) })))
                            }
                        }]), e
                    }();
                S.type = "languageDetector";
                const L = S
            },
            136: (e, t, n) => {
                function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

                function r(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? Object(arguments[t]) : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), i.forEach((function(t) { o(e, t, n[t]) }))
                    }
                    return e
                }
                n.r(t), n.d(t, { default: () => $ });
                var a = n(498),
                    s = n(668);

                function c(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                function l(e, t) { return !t || "object" !== i(t) && "function" != typeof t ? c(e) : t }

                function u(e) { return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                function p(e, t) { return (p = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

                function d(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && p(e, t)
                }
                var f = { type: "logger", log: function(e) { this.output("log", e) }, warn: function(e) { this.output("warn", e) }, error: function(e) { this.output("error", e) }, output: function(e, t) { console && console[e] && console[e].apply(console, t) } },
                    g = new(function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (0, a.Z)(this, e), this.init(t, n)
                        }
                        return (0, s.Z)(e, [{
                            key: "init",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                this.prefix = t.prefix || "i18next:", this.logger = e || f, this.options = t, this.debug = t.debug
                            }
                        }, { key: "setDebug", value: function(e) { this.debug = e } }, { key: "log", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return this.forward(t, "log", "", !0) } }, { key: "warn", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return this.forward(t, "warn", "", !0) } }, { key: "error", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return this.forward(t, "error", "") } }, { key: "deprecate", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return this.forward(t, "warn", "WARNING DEPRECATED: ", !0) } }, { key: "forward", value: function(e, t, n, i) { return i && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e)) } }, { key: "create", value: function(t) { return new e(this.logger, r({}, { prefix: "".concat(this.prefix, ":").concat(t, ":") }, this.options)) } }]), e
                    }()),
                    h = function() {
                        function e() {
                            (0, a.Z)(this, e), this.observers = {}
                        }
                        return (0, s.Z)(e, [{ key: "on", value: function(e, t) { var n = this; return e.split(" ").forEach((function(e) { n.observers[e] = n.observers[e] || [], n.observers[e].push(t) })), this } }, { key: "off", value: function(e, t) { this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) { return e !== t })) : delete this.observers[e]) } }, {
                            key: "emit",
                            value: function(e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                if (this.observers[e]) {
                                    var o = [].concat(this.observers[e]);
                                    o.forEach((function(e) { e.apply(void 0, n) }))
                                }
                                if (this.observers["*"]) {
                                    var r = [].concat(this.observers["*"]);
                                    r.forEach((function(t) { t.apply(t, [e].concat(n)) }))
                                }
                            }
                        }]), e
                    }();

                function m() { var e, t, n = new Promise((function(n, i) { e = n, t = i })); return n.resolve = e, n.reject = t, n }

                function v(e) { return null == e ? "" : "" + e }

                function b(e, t, n) { e.forEach((function(e) { t[e] && (n[e] = t[e]) })) }

                function y(e, t, n) {
                    function i(e) { return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e }

                    function o() { return !e || "string" == typeof e }
                    for (var r = "string" != typeof t ? [].concat(t) : t.split("."); r.length > 1;) { if (o()) return {}; var a = i(r.shift());!e[a] && n && (e[a] = new n), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {} }
                    return o() ? {} : { obj: e, k: i(r.shift()) }
                }

                function k(e, t, n) {
                    var i = y(e, t, Object);
                    i.obj[i.k] = n
                }

                function w(e, t) {
                    var n = y(e, t),
                        i = n.obj,
                        o = n.k;
                    if (i) return i[o]
                }

                function x(e, t, n) { var i = w(e, n); return void 0 !== i ? i : w(t, n) }

                function S(e, t, n) { for (var i in t) "__proto__" !== i && "constructor" !== i && (i in e ? "string" == typeof e[i] || e[i] instanceof String || "string" == typeof t[i] || t[i] instanceof String ? n && (e[i] = t[i]) : S(e[i], t[i], n) : e[i] = t[i]); return e }

                function L(e) { return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }
                var O = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };

                function R(e) { return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function(e) { return O[e] })) : e }
                var C = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;

                function P(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                    if (e) {
                        if (e[t]) return e[t];
                        for (var i = t.split(n), o = e, r = 0; r < i.length; ++r) {
                            if ("string" == typeof o[i[r]] && r + 1 < i.length) return;
                            if (void 0 === o[i[r]]) { for (var a = 2, s = i.slice(r, r + a).join(n), c = o[s]; void 0 === c && i.length > r + a;) a++, c = o[s = i.slice(r, r + a).join(n)]; if (void 0 === c) return; if ("string" == typeof c) return c; if (s && "string" == typeof c[s]) return c[s]; var l = i.slice(r + a).join(n); return l ? P(c, l, n) : void 0 }
                            o = o[i[r]]
                        }
                        return o
                    }
                }
                var N = function(e) {
                        function t(e) { var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" }; return (0, a.Z)(this, t), n = l(this, u(t).call(this)), C && h.call(c(n)), n.data = e || {}, n.options = i, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), void 0 === n.options.ignoreJSONStructure && (n.options.ignoreJSONStructure = !0), n }
                        return d(t, e), (0, s.Z)(t, [{ key: "addNamespaces", value: function(e) { this.options.ns.indexOf(e) < 0 && this.options.ns.push(e) } }, {
                            key: "removeNamespaces",
                            value: function(e) {
                                var t = this.options.ns.indexOf(e);
                                t > -1 && this.options.ns.splice(t, 1)
                            }
                        }, {
                            key: "getResource",
                            value: function(e, t, n) {
                                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                    o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                                    r = void 0 !== i.ignoreJSONStructure ? i.ignoreJSONStructure : this.options.ignoreJSONStructure,
                                    a = [e, t];
                                n && "string" != typeof n && (a = a.concat(n)), n && "string" == typeof n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (a = e.split("."));
                                var s = w(this.data, a);
                                return s || !r || "string" != typeof n ? s : P(this.data && this.data[e] && this.data[e][t], n, o)
                            }
                        }, {
                            key: "addResource",
                            value: function(e, t, n, i) {
                                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 },
                                    r = this.options.keySeparator;
                                void 0 === r && (r = ".");
                                var a = [e, t];
                                n && (a = a.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (i = t, t = (a = e.split("."))[1]), this.addNamespaces(t), k(this.data, a, i), o.silent || this.emit("added", e, t, n, i)
                            }
                        }, {
                            key: "addResources",
                            value: function(e, t, n) {
                                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: !1 };
                                for (var o in n) "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], { silent: !0 });
                                i.silent || this.emit("added", e, t, n)
                            }
                        }, {
                            key: "addResourceBundle",
                            value: function(e, t, n, i, o) {
                                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: !1 },
                                    s = [e, t];
                                e.indexOf(".") > -1 && (i = n, n = t, t = (s = e.split("."))[1]), this.addNamespaces(t);
                                var c = w(this.data, s) || {};
                                i ? S(c, n, o) : c = r({}, c, n), k(this.data, s, c), a.silent || this.emit("added", e, t, n)
                            }
                        }, { key: "removeResourceBundle", value: function(e, t) { this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t) } }, { key: "hasResourceBundle", value: function(e, t) { return void 0 !== this.getResource(e, t) } }, { key: "getResourceBundle", value: function(e, t) { return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? r({}, {}, this.getResource(e, t)) : this.getResource(e, t) } }, { key: "getDataByLanguage", value: function(e) { return this.data[e] } }, { key: "toJSON", value: function() { return this.data } }]), t
                    }(h),
                    E = { processors: {}, addPostProcessor: function(e) { this.processors[e.name] = e }, handle: function(e, t, n, i, o) { var r = this; return e.forEach((function(e) { r.processors[e] && (t = r.processors[e].process(t, n, i, o)) })), t } },
                    F = {},
                    j = function(e) {
                        function t(e) { var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (0, a.Z)(this, t), n = l(this, u(t).call(this)), C && h.call(c(n)), b(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, c(n)), n.options = i, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = g.create("translator"), n }
                        return d(t, e), (0, s.Z)(t, [{ key: "changeLanguage", value: function(e) { e && (this.language = e) } }, {
                            key: "exists",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} },
                                    n = this.resolve(e, t);
                                return n && void 0 !== n.res
                            }
                        }, {
                            key: "extractFromKey",
                            value: function(e, t) {
                                var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                                void 0 === n && (n = ":");
                                var i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                    o = t.ns || this.options.defaultNS;
                                if (n && e.indexOf(n) > -1) {
                                    var r = e.match(this.interpolator.nestingRegexp);
                                    if (r && r.length > 0) return { key: e, namespaces: o };
                                    var a = e.split(n);
                                    (n !== i || n === i && this.options.ns.indexOf(a[0]) > -1) && (o = a.shift()), e = a.join(i)
                                }
                                return "string" == typeof o && (o = [o]), { key: e, namespaces: o }
                            }
                        }, {
                            key: "translate",
                            value: function(e, n, o) {
                                var a = this;
                                if ("object" !== i(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), null == e) return "";
                                Array.isArray(e) || (e = [String(e)]);
                                var s = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                    c = this.extractFromKey(e[e.length - 1], n),
                                    l = c.key,
                                    u = c.namespaces,
                                    p = u[u.length - 1],
                                    d = n.lng || this.language,
                                    f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                if (d && "cimode" === d.toLowerCase()) { if (f) { var g = n.nsSeparator || this.options.nsSeparator; return p + g + l } return l }
                                var h = this.resolve(e, n),
                                    m = h && h.res,
                                    v = h && h.usedKey || l,
                                    b = h && h.exactUsedKey || l,
                                    y = Object.prototype.toString.apply(m),
                                    k = ["[object Number]", "[object Function]", "[object RegExp]"],
                                    w = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                    x = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                    S = "string" != typeof m && "boolean" != typeof m && "number" != typeof m;
                                if (x && m && S && k.indexOf(y) < 0 && ("string" != typeof w || "[object Array]" !== y)) {
                                    if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, m, n) : "key '".concat(l, " (").concat(this.language, ")' returned an object instead of string.");
                                    if (s) {
                                        var L = "[object Array]" === y,
                                            O = L ? [] : {},
                                            R = L ? b : v;
                                        for (var C in m)
                                            if (Object.prototype.hasOwnProperty.call(m, C)) {
                                                var P = "".concat(R).concat(s).concat(C);
                                                O[C] = this.translate(P, r({}, n, { joinArrays: !1, ns: u })), O[C] === P && (O[C] = m[C])
                                            }
                                        m = O
                                    }
                                } else if (x && "string" == typeof w && "[object Array]" === y)(m = m.join(w)) && (m = this.extendTranslation(m, e, n, o));
                                else {
                                    var N = !1,
                                        E = !1,
                                        F = void 0 !== n.count && "string" != typeof n.count,
                                        j = t.hasDefaultValue(n),
                                        B = F ? this.pluralResolver.getSuffix(d, n.count) : "",
                                        M = n["defaultValue".concat(B)] || n.defaultValue;
                                    !this.isValidLookup(m) && j && (N = !0, m = M), this.isValidLookup(m) || (E = !0, m = l);
                                    var T = j && M !== m && this.options.updateMissing;
                                    if (E || N || T) {
                                        if (this.logger.log(T ? "updateKey" : "missingKey", d, p, l, T ? M : m), s) {
                                            var _ = this.resolve(l, r({}, n, { keySeparator: !1 }));
                                            _ && _.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                        }
                                        var A = [],
                                            D = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                        if ("fallback" === this.options.saveMissingTo && D && D[0])
                                            for (var I = 0; I < D.length; I++) A.push(D[I]);
                                        else "all" === this.options.saveMissingTo ? A = this.languageUtils.toResolveHierarchy(n.lng || this.language) : A.push(n.lng || this.language);
                                        var H = function(e, t, i) { a.options.missingKeyHandler ? a.options.missingKeyHandler(e, p, t, T ? i : m, T, n) : a.backendConnector && a.backendConnector.saveMissing && a.backendConnector.saveMissing(e, p, t, T ? i : m, T, n), a.emit("missingKey", e, p, t, m) };
                                        this.options.saveMissing && (this.options.saveMissingPlurals && F ? A.forEach((function(e) { a.pluralResolver.getSuffixes(e).forEach((function(t) { H([e], l + t, n["defaultValue".concat(t)] || M) })) })) : H(A, l, M))
                                    }
                                    m = this.extendTranslation(m, e, n, h, o), E && m === l && this.options.appendNamespaceToMissingKey && (m = "".concat(p, ":").concat(l)), E && this.options.parseMissingKeyHandler && (m = this.options.parseMissingKeyHandler(m))
                                }
                                return m
                            }
                        }, {
                            key: "extendTranslation",
                            value: function(e, t, n, i, o) {
                                var a = this;
                                if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, i.usedLng, i.usedNS, i.usedKey, { resolved: i });
                                else if (!n.skipInterpolation) {
                                    n.interpolation && this.interpolator.init(r({}, n, { interpolation: r({}, this.options.interpolation, n.interpolation) }));
                                    var s, c = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                    if (c) {
                                        var l = e.match(this.interpolator.nestingRegexp);
                                        s = l && l.length
                                    }
                                    var u = n.replace && "string" != typeof n.replace ? n.replace : n;
                                    if (this.options.interpolation.defaultVariables && (u = r({}, this.options.interpolation.defaultVariables, u)), e = this.interpolator.interpolate(e, u, n.lng || this.language, n), c) {
                                        var p = e.match(this.interpolator.nestingRegexp);
                                        s < (p && p.length) && (n.nest = !1)
                                    }!1 !== n.nest && (e = this.interpolator.nest(e, (function() { for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r]; return o && o[0] === i[0] && !n.context ? (a.logger.warn("It seems you are nesting recursively key: ".concat(i[0], " in key: ").concat(t[0])), null) : a.translate.apply(a, i.concat([t])) }), n)), n.interpolation && this.interpolator.reset()
                                }
                                var d = n.postProcess || this.options.postProcess,
                                    f = "string" == typeof d ? [d] : d;
                                return null != e && f && f.length && !1 !== n.applyPostProcessor && (e = E.handle(f, e, t, this.options && this.options.postProcessPassResolved ? r({ i18nResolved: i }, n) : n, this)), e
                            }
                        }, {
                            key: "resolve",
                            value: function(e) {
                                var t, n, i, o, r, a = this,
                                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return "string" == typeof e && (e = [e]), e.forEach((function(e) {
                                    if (!a.isValidLookup(t)) {
                                        var c = a.extractFromKey(e, s),
                                            l = c.key;
                                        n = l;
                                        var u = c.namespaces;
                                        a.options.fallbackNS && (u = u.concat(a.options.fallbackNS));
                                        var p = void 0 !== s.count && "string" != typeof s.count,
                                            d = void 0 !== s.context && "string" == typeof s.context && "" !== s.context,
                                            f = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                        u.forEach((function(e) {
                                            a.isValidLookup(t) || (r = e, !F["".concat(f[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(r) && (F["".concat(f[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(f.join(", "), '" won\'t get resolved as namespace "').concat(r, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach((function(n) {
                                                if (!a.isValidLookup(t)) {
                                                    o = n;
                                                    var r, c, u = l,
                                                        f = [u];
                                                    for (a.i18nFormat && a.i18nFormat.addLookupKeys ? a.i18nFormat.addLookupKeys(f, l, n, e, s) : (p && (r = a.pluralResolver.getSuffix(n, s.count)), p && d && f.push(u + r), d && f.push(u += "".concat(a.options.contextSeparator).concat(s.context)), p && f.push(u += r)); c = f.pop();) a.isValidLookup(t) || (i = c, t = a.getResource(n, e, c, s))
                                                }
                                            })))
                                        }))
                                    }
                                })), { res: t, usedKey: n, exactUsedKey: i, usedLng: o, usedNS: r }
                            }
                        }, { key: "isValidLookup", value: function(e) { return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e) } }, { key: "getResource", value: function(e, t, n) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i) } }], [{
                            key: "hasDefaultValue",
                            value: function(e) {
                                var t = "defaultValue";
                                for (var n in e)
                                    if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
                                return !1
                            }
                        }]), t
                    }(h);

                function B(e) { return e.charAt(0).toUpperCase() + e.slice(1) }
                var M = function() {
                        function e(t) {
                            (0, a.Z)(this, e), this.options = t, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = g.create("languageUtils")
                        }
                        return (0, s.Z)(e, [{ key: "getScriptPartFromCode", value: function(e) { if (!e || e.indexOf("-") < 0) return null; var t = e.split("-"); return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-"))) } }, { key: "getLanguagePartFromCode", value: function(e) { if (!e || e.indexOf("-") < 0) return e; var t = e.split("-"); return this.formatLanguageCode(t[0]) } }, {
                            key: "formatLanguageCode",
                            value: function(e) {
                                if ("string" == typeof e && e.indexOf("-") > -1) {
                                    var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                        n = e.split("-");
                                    return this.options.lowerCaseLng ? n = n.map((function(e) { return e.toLowerCase() })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = B(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = B(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = B(n[2].toLowerCase()))), n.join("-")
                                }
                                return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                            }
                        }, { key: "isWhitelisted", value: function(e) { return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(e) } }, { key: "isSupportedCode", value: function(e) { return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1 } }, {
                            key: "getBestMatchFromCodes",
                            value: function(e) {
                                var t, n = this;
                                return e ? (e.forEach((function(e) {
                                    if (!t) {
                                        var i = n.formatLanguageCode(e);
                                        n.options.supportedLngs && !n.isSupportedCode(i) || (t = i)
                                    }
                                })), !t && this.options.supportedLngs && e.forEach((function(e) {
                                    if (!t) {
                                        var i = n.getLanguagePartFromCode(e);
                                        if (n.isSupportedCode(i)) return t = i;
                                        t = n.options.supportedLngs.find((function(e) { if (0 === e.indexOf(i)) return e }))
                                    }
                                })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                            }
                        }, { key: "getFallbackCodes", value: function(e, t) { if (!e) return []; if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e; if (!t) return e.default || []; var n = e[t]; return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [] } }, {
                            key: "toResolveHierarchy",
                            value: function(e, t) {
                                var n = this,
                                    i = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                    o = [],
                                    r = function(e) { e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e))) };
                                return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), i.forEach((function(e) { o.indexOf(e) < 0 && r(n.formatLanguageCode(e)) })), o
                            }
                        }]), e
                    }(),
                    T = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }],
                    _ = { 1: function(e) { return Number(e > 1) }, 2: function(e) { return Number(1 != e) }, 3: function(e) { return 0 }, 4: function(e) { return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2) }, 5: function(e) { return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5) }, 6: function(e) { return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2) }, 7: function(e) { return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2) }, 8: function(e) { return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3) }, 9: function(e) { return Number(e >= 2) }, 10: function(e) { return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4) }, 11: function(e) { return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3) }, 12: function(e) { return Number(e % 10 != 1 || e % 100 == 11) }, 13: function(e) { return Number(0 !== e) }, 14: function(e) { return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3) }, 15: function(e) { return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2) }, 16: function(e) { return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2) }, 17: function(e) { return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1) }, 18: function(e) { return Number(0 == e ? 0 : 1 == e ? 1 : 2) }, 19: function(e) { return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3) }, 20: function(e) { return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2) }, 21: function(e) { return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0) }, 22: function(e) { return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3) } };

                function A() { var e = {}; return T.forEach((function(t) { t.lngs.forEach((function(n) { e[n] = { numbers: t.nr, plurals: _[t.fc] } })) })), e }
                var D = function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (0, a.Z)(this, e), this.languageUtils = t, this.options = n, this.logger = g.create("pluralResolver"), this.rules = A()
                        }
                        return (0, s.Z)(e, [{ key: "addRule", value: function(e, t) { this.rules[e] = t } }, { key: "getRule", value: function(e) { return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)] } }, { key: "needsPlural", value: function(e) { var t = this.getRule(e); return t && t.numbers.length > 1 } }, { key: "getPluralFormsOfKey", value: function(e, t) { return this.getSuffixes(e).map((function(e) { return t + e })) } }, {
                            key: "getSuffixes",
                            value: function(e) {
                                var t = this,
                                    n = this.getRule(e);
                                return n ? n.numbers.map((function(n) { return t.getSuffix(e, n) })) : []
                            }
                        }, {
                            key: "getSuffix",
                            value: function(e, t) {
                                var n = this,
                                    i = this.getRule(e);
                                if (i) {
                                    var o = i.noAbs ? i.plurals(t) : i.plurals(Math.abs(t)),
                                        r = i.numbers[o];
                                    this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                                    var a = function() { return n.options.prepend && r.toString() ? n.options.prepend + r.toString() : r.toString() };
                                    return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? "_plural_".concat(r.toString()) : a() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                                }
                                return this.logger.warn("no plural rule found for: ".concat(e)), ""
                            }
                        }]), e
                    }(),
                    I = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            (0, a.Z)(this, e), this.logger = g.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) { return e }, this.init(t)
                        }
                        return (0, s.Z)(e, [{
                            key: "init",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                e.interpolation || (e.interpolation = { escapeValue: !0 });
                                var t = e.interpolation;
                                this.escape = void 0 !== t.escape ? t.escape : R, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? L(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? L(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? L(t.nestingPrefix) : t.nestingPrefixEscaped || L("$t("), this.nestingSuffix = t.nestingSuffix ? L(t.nestingSuffix) : t.nestingSuffixEscaped || L(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                            }
                        }, { key: "reset", value: function() { this.options && this.init(this.options) } }, {
                            key: "resetRegExp",
                            value: function() {
                                var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                                this.regexp = new RegExp(e, "g");
                                var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                                this.regexpUnescape = new RegExp(t, "g");
                                var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                                this.nestingRegexp = new RegExp(n, "g")
                            }
                        }, {
                            key: "interpolate",
                            value: function(e, t, n, i) {
                                var o, a, s, c = this,
                                    l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                                function u(e) { return e.replace(/\$/g, "$$$$") }
                                var p = function(e) {
                                    if (e.indexOf(c.formatSeparator) < 0) { var o = x(t, l, e); return c.alwaysFormat ? c.format(o, void 0, n, r({}, i, t, { interpolationkey: e })) : o }
                                    var a = e.split(c.formatSeparator),
                                        s = a.shift().trim(),
                                        u = a.join(c.formatSeparator).trim();
                                    return c.format(x(t, l, s), u, n, r({}, i, t, { interpolationkey: s }))
                                };
                                this.resetRegExp();
                                var d = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
                                    f = i && i.interpolation && i.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                return [{ regex: this.regexpUnescape, safeValue: function(e) { return u(e) } }, { regex: this.regexp, safeValue: function(e) { return c.escapeValue ? u(c.escape(e)) : u(e) } }].forEach((function(t) {
                                    for (s = 0; o = t.regex.exec(e);) {
                                        if (void 0 === (a = p(o[1].trim())))
                                            if ("function" == typeof d) {
                                                var n = d(e, o, i);
                                                a = "string" == typeof n ? n : ""
                                            } else {
                                                if (f) { a = o[0]; continue }
                                                c.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), a = ""
                                            }
                                        else "string" == typeof a || c.useRawValueToEscape || (a = v(a));
                                        var r = t.safeValue(a);
                                        if (e = e.replace(o[0], r), f ? (t.regex.lastIndex += r.length, t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0, ++s >= c.maxReplaces) break
                                    }
                                })), e
                            }
                        }, {
                            key: "nest",
                            value: function(e, t) {
                                var n, i, o = this,
                                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    s = r({}, a);

                                function c(e, t) {
                                    var n = this.nestingOptionsSeparator;
                                    if (e.indexOf(n) < 0) return e;
                                    var i = e.split(new RegExp("".concat(n, "[ ]*{"))),
                                        o = "{".concat(i[1]);
                                    e = i[0], o = (o = this.interpolate(o, s)).replace(/'/g, '"');
                                    try { s = JSON.parse(o), t && (s = r({}, t, s)) } catch (t) { return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(n).concat(o) }
                                    return delete s.defaultValue, e
                                }
                                for (s.applyPostProcessor = !1, delete s.defaultValue; n = this.nestingRegexp.exec(e);) {
                                    var l = [],
                                        u = !1;
                                    if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                        var p = n[1].split(this.formatSeparator).map((function(e) { return e.trim() }));
                                        n[1] = p.shift(), l = p, u = !0
                                    }
                                    if ((i = t(c.call(this, n[1].trim(), s), s)) && n[0] === e && "string" != typeof i) return i;
                                    "string" != typeof i && (i = v(i)), i || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), i = ""), u && (i = l.reduce((function(e, t) { return o.format(e, t, a.lng, r({}, a, { interpolationkey: n[1].trim() })) }), i.trim())), e = e.replace(n[0], i), this.regexp.lastIndex = 0
                                }
                                return e
                            }
                        }]), e
                    }(),
                    H = function(e) {
                        function t(e, n, i) { var o, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return (0, a.Z)(this, t), o = l(this, u(t).call(this)), C && h.call(c(o)), o.backend = e, o.store = n, o.services = i, o.languageUtils = i.languageUtils, o.options = r, o.logger = g.create("backendConnector"), o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(i, r.backend, r), o }
                        return d(t, e), (0, s.Z)(t, [{
                            key: "queueLoad",
                            value: function(e, t, n, i) {
                                var o = this,
                                    r = [],
                                    a = [],
                                    s = [],
                                    c = [];
                                return e.forEach((function(e) {
                                    var i = !0;
                                    t.forEach((function(t) { var s = "".concat(e, "|").concat(t);!n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1, i = !1, a.indexOf(s) < 0 && a.push(s), r.indexOf(s) < 0 && r.push(s), c.indexOf(t) < 0 && c.push(t))) })), i || s.push(e)
                                })), (r.length || a.length) && this.queue.push({ pending: a, loaded: {}, errors: [], callback: i }), { toLoad: r, pending: a, toLoadLanguages: s, toLoadNamespaces: c }
                            }
                        }, {
                            key: "loaded",
                            value: function(e, t, n) {
                                var i = e.split("|"),
                                    o = i[0],
                                    r = i[1];
                                t && this.emit("failedLoading", o, r, t), n && this.store.addResourceBundle(o, r, n), this.state[e] = t ? -1 : 2;
                                var a = {};
                                this.queue.forEach((function(n) {
                                    var i, s, c, l, u;
                                    i = n.loaded, s = r, (l = (c = y(i, [o], Object)).obj)[u = c.k] = l[u] || [], l[u].push(s),
                                        function(e, t) { for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t) }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) { a[e] || (a[e] = []), n.loaded[e].length && n.loaded[e].forEach((function(t) { a[e].indexOf(t) < 0 && a[e].push(t) })) })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                                })), this.emit("loaded", a), this.queue = this.queue.filter((function(e) { return !e.done }))
                            }
                        }, {
                            key: "read",
                            value: function(e, t, n) {
                                var i = this,
                                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                                    a = arguments.length > 5 ? arguments[5] : void 0;
                                return e.length ? this.backend[n](e, t, (function(s, c) { s && c && o < 5 ? setTimeout((function() { i.read.call(i, e, t, n, o + 1, 2 * r, a) }), r) : a(s, c) })) : a(null, {})
                            }
                        }, {
                            key: "prepareLoading",
                            value: function(e, t) {
                                var n = this,
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    o = arguments.length > 3 ? arguments[3] : void 0;
                                if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                                "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                                var r = this.queueLoad(e, t, i, o);
                                if (!r.toLoad.length) return r.pending.length || o(), null;
                                r.toLoad.forEach((function(e) { n.loadOne(e) }))
                            }
                        }, { key: "load", value: function(e, t, n) { this.prepareLoading(e, t, {}, n) } }, { key: "reload", value: function(e, t, n) { this.prepareLoading(e, t, { reload: !0 }, n) } }, {
                            key: "loadOne",
                            value: function(e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    i = e.split("|"),
                                    o = i[0],
                                    r = i[1];
                                this.read(o, r, "read", void 0, void 0, (function(i, a) { i && t.logger.warn("".concat(n, "loading namespace ").concat(r, " for language ").concat(o, " failed"), i), !i && a && t.logger.log("".concat(n, "loaded namespace ").concat(r, " for language ").concat(o), a), t.loaded(e, i, a) }))
                            }
                        }, {
                            key: "saveMissing",
                            value: function(e, t, n, i, o) {
                                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                                this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, i, null, r({}, a, { isUpdate: o })), e && e[0] && this.store.addResource(e[0], t, n, i))
                            }
                        }]), t
                    }(h);

                function U() {
                    return {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        whitelist: !1,
                        nonExplicitWhitelist: !1,
                        supportedLngs: !1,
                        nonExplicitSupportedLngs: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        partialBundledLanguages: !1,
                        saveMissing: !1,
                        updateMissing: !1,
                        saveMissingTo: "fallback",
                        saveMissingPlurals: !0,
                        missingKeyHandler: !1,
                        missingInterpolationHandler: !1,
                        postProcess: !1,
                        postProcessPassResolved: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: !1,
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function(e) {
                            var t = {};
                            if ("object" === i(e[1]) && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" === i(e[2]) || "object" === i(e[3])) {
                                var n = e[3] || e[2];
                                Object.keys(n).forEach((function(e) { t[e] = n[e] }))
                            }
                            return t
                        },
                        interpolation: { escapeValue: !0, format: function(e, t, n, i) { return e }, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !1 }
                    }
                }

                function V(e) { return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e }

                function W() {}
                const $ = new(function(e) {
                    function t() {
                        var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = arguments.length > 1 ? arguments[1] : void 0;
                        if ((0, a.Z)(this, t), e = l(this, u(t).call(this)), C && h.call(c(e)), e.options = V(n), e.services = {}, e.logger = g, e.modules = { external: [] }, i && !e.isInitialized && !n.isClone) {
                            if (!e.options.initImmediate) return e.init(n, i), l(e, c(e));
                            setTimeout((function() { e.init(n, i) }), 0)
                        }
                        return e
                    }
                    return d(t, e), (0, s.Z)(t, [{
                        key: "init",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;

                            function i(e) { return e ? "function" == typeof e ? new e : e : null }
                            if ("function" == typeof t && (n = t, t = {}), t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = r({}, U(), this.options, V(t)), this.format = this.options.interpolation.format, n || (n = W), !this.options.isClone) {
                                this.modules.logger ? g.init(i(this.modules.logger), this.options) : g.init(null, this.options);
                                var o = new M(this.options);
                                this.store = new N(this.options.resources, this.options);
                                var a = this.services;
                                a.logger = g, a.resourceStore = this.store, a.languageUtils = o, a.pluralResolver = new D(o, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), a.interpolator = new I(this.options), a.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, a.backendConnector = new H(i(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", (function(t) {
                                    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                    e.emit.apply(e, [t].concat(i))
                                })), this.modules.languageDetector && (a.languageDetector = i(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = i(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new j(this.services, this.options), this.translator.on("*", (function(t) {
                                    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                    e.emit.apply(e, [t].concat(i))
                                })), this.modules.external.forEach((function(t) { t.init && t.init(e) }))
                            }
                            if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                                var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                s.length > 0 && "dev" !== s[0] && (this.options.lng = s[0])
                            }
                            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                            var c = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                            c.forEach((function(t) { e[t] = function() { var n; return (n = e.store)[t].apply(n, arguments) } }));
                            var l = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                            l.forEach((function(t) { e[t] = function() { var n; return (n = e.store)[t].apply(n, arguments), e } }));
                            var u = m(),
                                p = function() {
                                    var t = function(t, i) { e.isInitialized && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), u.resolve(i), n(t, i) };
                                    if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
                                    e.changeLanguage(e.options.lng, t)
                                };
                            return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), u
                        }
                    }, {
                        key: "loadResources",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W,
                                i = n,
                                o = "string" == typeof e ? e : this.language;
                            if ("function" == typeof e && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
                                if (o && "cimode" === o.toLowerCase()) return i();
                                var r = [],
                                    a = function(e) { e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) { r.indexOf(e) < 0 && r.push(e) })) };
                                if (o) a(o);
                                else {
                                    var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                    s.forEach((function(e) { return a(e) }))
                                }
                                this.options.preload && this.options.preload.forEach((function(e) { return a(e) })), this.services.backendConnector.load(r, this.options.ns, i)
                            } else i(null)
                        }
                    }, { key: "reloadResources", value: function(e, t, n) { var i = m(); return e || (e = this.languages), t || (t = this.options.ns), n || (n = W), this.services.backendConnector.reload(e, t, (function(e) { i.resolve(), n(e) })), i } }, { key: "use", value: function(e) { if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()"); if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()"); return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && E.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this } }, {
                        key: "changeLanguage",
                        value: function(e, t) {
                            var n = this;
                            this.isLanguageChangingTo = e;
                            var i = m();
                            this.emit("languageChanging", e);
                            var o = function(e) {
                                var o = "string" == typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                                o && (n.language || (n.language = o, n.languages = n.services.languageUtils.toResolveHierarchy(o)), n.translator.language || n.translator.changeLanguage(o), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(o)), n.loadResources(o, (function(e) {! function(e, o) { o ? (n.language = o, n.languages = n.services.languageUtils.toResolveHierarchy(o), n.translator.changeLanguage(o), n.isLanguageChangingTo = void 0, n.emit("languageChanged", o), n.logger.log("languageChanged", o)) : n.isLanguageChangingTo = void 0, i.resolve((function() { return n.t.apply(n, arguments) })), t && t(e, (function() { return n.t.apply(n, arguments) })) }(e, o) }))
                            };
                            return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), i
                        }
                    }, {
                        key: "getFixedT",
                        value: function(e, t) {
                            var n = this,
                                o = function e(t, o) {
                                    var a;
                                    if ("object" !== i(o)) {
                                        for (var s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++) c[l - 2] = arguments[l];
                                        a = n.options.overloadTranslationOptionHandler([t, o].concat(c))
                                    } else a = r({}, o);
                                    return a.lng = a.lng || e.lng, a.lngs = a.lngs || e.lngs, a.ns = a.ns || e.ns, n.t(t, a)
                                };
                            return "string" == typeof e ? o.lng = e : o.lngs = e, o.ns = t, o
                        }
                    }, { key: "t", value: function() { var e; return this.translator && (e = this.translator).translate.apply(e, arguments) } }, { key: "exists", value: function() { var e; return this.translator && (e = this.translator).exists.apply(e, arguments) } }, { key: "setDefaultNamespace", value: function(e) { this.options.defaultNS = e } }, {
                        key: "hasLoadedNamespace",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                            var i = this.languages[0],
                                o = !!this.options && this.options.fallbackLng,
                                r = this.languages[this.languages.length - 1];
                            if ("cimode" === i.toLowerCase()) return !0;
                            var a = function(e, n) { var i = t.services.backendConnector.state["".concat(e, "|").concat(n)]; return -1 === i || 2 === i };
                            if (n.precheck) { var s = n.precheck(this, a); if (void 0 !== s) return s }
                            return !!this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || !(!a(i, e) || o && !a(r, e))
                        }
                    }, {
                        key: "loadNamespaces",
                        value: function(e, t) {
                            var n = this,
                                i = m();
                            return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach((function(e) { n.options.ns.indexOf(e) < 0 && n.options.ns.push(e) })), this.loadResources((function(e) { i.resolve(), t && t(e) })), i) : (t && t(), Promise.resolve())
                        }
                    }, {
                        key: "loadLanguages",
                        value: function(e, t) {
                            var n = m();
                            "string" == typeof e && (e = [e]);
                            var i = this.options.preload || [],
                                o = e.filter((function(e) { return i.indexOf(e) < 0 }));
                            return o.length ? (this.options.preload = i.concat(o), this.loadResources((function(e) { n.resolve(), t && t(e) })), n) : (t && t(), Promise.resolve())
                        }
                    }, { key: "dir", value: function(e) { return e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" : "rtl" } }, {
                        key: "createInstance",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return new t(e, n)
                        }
                    }, {
                        key: "cloneInstance",
                        value: function() {
                            var e = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W,
                                o = r({}, this.options, n, { isClone: !0 }),
                                a = new t(o),
                                s = ["store", "services", "language"];
                            return s.forEach((function(t) { a[t] = e[t] })), a.services = r({}, this.services), a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, a.translator = new j(a.services, a.options), a.translator.on("*", (function(e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                a.emit.apply(a, [e].concat(n))
                            })), a.init(o, i), a.translator.options = a.options, a.translator.backendConnector.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, a
                        }
                    }]), t
                }(h))
            },
            942: (e, t, n) => { n.r(t) },
            117: e => { e.exports = JSON.parse('{"origin-hint":{"seed":"Seed {{position}}","winner-bracket":"Loser of WB {{round}}.{{position}}","winner-bracket-semi-final":"Loser of WB Semi {{position}}","winner-bracket-final":"Loser of WB Final","consolation-final":"Loser of Semi {{position}}","grand-final":"Winner of LB Final"},"match-label":{"winner-bracket":"WB","loser-bracket":"LB","standard-bracket":"M","standard-bracket-semi-final":"Semi {{matchNumber}}","standard-bracket-final":"Final","double-elimination":"{{matchPrefix}} {{roundNumber}}.{{matchNumber}}","double-elimination-semi-final":"{{matchPrefix}} Semi {{matchNumber}}","double-elimination-final":"{{matchPrefix}} Final","consolation-final":"Consolation Final","grand-final-single":"Grand Final","grand-final":"GF Round {{roundNumber}}"},"match-status":{"locked":"Locked","waiting":"Waiting","ready":"Ready","running":"Running","completed":"Completed","archived":"Archived"},"abbreviations":{"win":"W","loss":"L","forfeit":"F","position":"P","seed":"#"},"ranking":{"rank":{"text":"#","tooltip":"Rank"},"id":{"text":"Name","tooltip":"Name"},"played":{"text":"P","tooltip":"Played"},"wins":{"text":"$t(abbreviations.win)","tooltip":"Wins"},"draws":{"text":"D","tooltip":"Draws"},"losses":{"text":"$t(abbreviations.loss)","tooltip":"Losses"},"forfeits":{"text":"$t(abbreviations.forfeit)","tooltip":"Forfeits"},"score-for":{"text":"SF","tooltip":"Score For"},"score-against":{"text":"SA","tooltip":"Score Against"},"score-difference":{"text":"+/-","tooltip":"Score Difference"},"points":{"text":"Pts","tooltip":"Points"}},"common":{"bye":"BYE","best-of-x":"Bo{{x}}","group-name":"Group {{groupNumber}}","round-name":"Round {{roundNumber}}","round-name-final":"Final Round","round-name-winner-bracket":"WB Round {{roundNumber}}","round-name-winner-bracket-final":"WB Final Round","round-name-loser-bracket":"LB Round {{roundNumber}}","round-name-loser-bracket-final":"LB Final Round"}}') },
            169: e => { e.exports = JSON.parse('{"origin-hint":{"seed":"Seed {{position}}","winner-bracket":"Perdant WB {{round}}.{{position}}","winner-bracket-semi-final":"Perdant WB Semi {{position}}","winner-bracket-final":"Perdant Finale WB","consolation-final":"Perdant Semi {{position}}","grand-final":"Gagnant Finale LB"},"match-label":{"winner-bracket":"WB","loser-bracket":"LB","standard-bracket":"M","standard-bracket-semi-final":"Semi {{matchNumber}}","standard-bracket-final":"Finale","double-elimination":"{{matchPrefix}} {{roundNumber}}.{{matchNumber}}","double-elimination-semi-final":"{{matchPrefix}} Semi {{matchNumber}}","double-elimination-final":"Finale {{matchPrefix}}","consolation-final":"Petite finale","grand-final-single":"Grande finale","grand-final":"GF Round {{roundNumber}}"},"match-status":{"locked":"Verrouillé","waiting":"En attente","ready":"Prêt","running":"En cours","completed":"Terminé","archived":"Archivé"},"abbreviations":{"win":"V","loss":"D","forfeit":"F","position":"P","seed":"#"},"ranking":{"rank":{"text":"#","tooltip":"Rang"},"id":{"text":"Name","tooltip":"Nom"},"played":{"text":"J","tooltip":"Joué"},"wins":{"text":"$t(abbreviations.win)","tooltip":"Victoires"},"draws":{"text":"N","tooltip":"Match nul"},"losses":{"text":"$t(abbreviations.loss)","tooltip":"Défaites"},"forfeits":{"text":"$t(abbreviations.forfeit)","tooltip":"Forfaits"},"score-for":{"text":"SF","tooltip":"Score pour"},"score-against":{"text":"SA","tooltip":"Score contre"},"score-difference":{"text":"+/-","tooltip":"Différence de score"},"points":{"text":"Pts","tooltip":"Points"}},"common":{"bye":"BYE","best-of-x":"Bo{{x}}","group-name":"Groupe {{groupNumber}}","round-name":"Round {{roundNumber}}","round-name-final":"Round final","round-name-winner-bracket":"WB Round {{roundNumber}}","round-name-winner-bracket-final":"WB Round final","round-name-loser-bracket":"LB Round {{roundNumber}}","round-name-loser-bracket-final":"LB Round final"}}') }
        },
        t = {};

    function n(i) { var o = t[i]; if (void 0 !== o) return o.exports; var r = t[i] = { exports: {} }; return e[i].call(r.exports, r, r.exports, n), r.exports }
    n.d = (e, t) => { for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] }) }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n(560)
})();
(() => {
    "use strict";
    var e = {
            621: (e, t, n) => {
                function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
                n.d(t, { Z: () => i })
            },
            770: (e, t, n) => {
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                function o(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e }
                n.d(t, { Z: () => o })
            },
            953: (e, t, n) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.setupConnection = t.getFinalConnection = t.getBracketConnection = t.addParticipantImage = t.addParticipantOrigin = t.setupLoss = t.setupWin = t.setupHint = t.createRankingHeaders = t.createCell = t.createRow = t.createTable = t.createResultContainer = t.createNameContainer = t.createParticipantContainer = t.createOpponentsContainer = t.createChildCountLabel = t.createMatchLabel = t.createMatchContainer = t.createRoundContainer = t.createGroupContainer = t.createBracketContainer = t.createEliminationContainer = t.createRoundRobinContainer = t.createTitle = void 0;
                const i = n(547),
                    o = n(894);
                t.createTitle = function(e) { const t = document.createElement("h1"); return t.innerText = e, t }, t.createRoundRobinContainer = function(e) { const t = document.createElement("div"); return t.classList.add("round-robin"), t.setAttribute("data-stage-id", e.toString()), t }, t.createEliminationContainer = function(e) { const t = document.createElement("div"); return t.classList.add("elimination"), t.setAttribute("data-stage-id", e.toString()), t }, t.createBracketContainer = function(e) { const t = document.createElement("section"); return t.classList.add("bracket"), t.setAttribute("data-group-id", e.toString()), t }, t.createGroupContainer = function(e, t) {
                    const n = document.createElement("h2");
                    n.innerText = t;
                    const i = document.createElement("section");
                    return i.classList.add("group"), i.setAttribute("data-group-id", e.toString()), i.append(n), i
                }, t.createRoundContainer = function(e, t) {
                    const n = document.createElement("h3");
                    n.innerText = t;
                    const i = document.createElement("article");
                    return i.classList.add("round"), i.setAttribute("data-round-id", e.toString()), i.append(n), i
                }, t.createMatchContainer = function(e, t) { const n = document.createElement("div"); return n.classList.add("match"), n.setAttribute("data-match-id", e.toString()), n.setAttribute("data-match-status", t.toString()), n }, t.createMatchLabel = function(e, t) { const n = document.createElement("span"); return n.innerText = e, n.title = t, n }, t.createChildCountLabel = function(e) { const t = document.createElement("span"); return t.innerText = e, t }, t.createOpponentsContainer = function() { const e = document.createElement("div"); return e.classList.add("opponents"), e }, t.createParticipantContainer = function(e) { const t = document.createElement("div"); return t.classList.add("participant"), null !== e && t.setAttribute("data-participant-id", e.toString()), t }, t.createNameContainer = function() { const e = document.createElement("div"); return e.classList.add("name"), e }, t.createResultContainer = function() { const e = document.createElement("div"); return e.classList.add("result"), e }, t.createTable = function() { return document.createElement("table") }, t.createRow = function() { return document.createElement("tr") }, t.createCell = function(e) { const t = document.createElement("td"); return t.innerText = String(e), t }, t.createRankingHeaders = function(e) {
                    const t = document.createElement("tr"),
                        n = e[0];
                    for (const e in n) {
                        const n = i.rankingHeader(e),
                            o = document.createElement("th");
                        o.innerText = n.text, o.setAttribute("title", n.tooltip), t.append(o)
                    }
                    return t
                }, t.setupHint = function(e, t) { e.classList.add("hint"), e.innerText = t }, t.setupWin = function(e, t, n) { n.result && "win" === n.result && (e.classList.add("win"), void 0 === n.score && (t.innerText = o.abbreviations.win)) }, t.setupLoss = function(e, t, n) {
                    (n.result && "loss" === n.result || n.forfeit) && (e.classList.add("loss"), n.forfeit ? t.innerText = o.abbreviations.forfeit : void 0 === n.score && (t.innerText = o.abbreviations.loss))
                }, t.addParticipantOrigin = function(e, t, n) { const i = document.createElement("span"); "before" === n ? (i.innerText = `${t} `, e.prepend(i)) : "after" === n && (i.innerText = ` (${t})`, e.append(i)) }, t.addParticipantImage = function(e, t) {
                    const n = document.createElement("img");
                    n.src = t, e.prepend(n)
                }, t.getBracketConnection = function(e, t, n, i) { return "loser-bracket" === n ? { connectPrevious: e > 1 && (e % 2 == 1 ? "square" : "straight"), connectNext: e < t && (e % 2 == 0 ? "square" : "straight") } : { connectPrevious: e > 1 && "square", connectNext: e < t ? "square" : !!i && "straight" } }, t.getFinalConnection = function(e, t, n) { return { connectPrevious: "grand_final" === e && 1 === t && "straight", connectNext: 2 === n && 1 === t && "straight" } }, t.setupConnection = function(e, t, n) { n.connectPrevious && e.classList.add("connect-previous"), n.connectNext && t.classList.add("connect-next"), "straight" === n.connectPrevious && e.classList.add("straight"), "straight" === n.connectNext && t.classList.add("straight") }
            },
            547: (e, t, n) => {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.getRanking = t.rankingHeader = t.isMajorRound = t.getOriginAbbreviation = t.findRoot = t.splitBy = void 0;
                const i = n(894);

                function o(e, t, n, i) {
                    if (!n || null === n.id) return;
                    const o = e[n.id] || { rank: 0, id: 0, played: 0, wins: 0, draws: 0, losses: 0, forfeits: 0, scoreFor: 0, scoreAgainst: 0, scoreDifference: 0, points: 0 };
                    o.id = n.id, o.played++, "win" === n.result && o.wins++, "draw" === n.result && o.draws++, "loss" === n.result && o.losses++, n.forfeit && o.forfeits++, o.scoreFor += n.score || 0, o.scoreAgainst += i && i.score || 0, o.scoreDifference = o.scoreFor - o.scoreAgainst, o.points = t(o), e[n.id] = o
                }
                t.splitBy = function(e, t) { const n = Object(); for (const i of e) n[i[t]] || (n[i[t]] = []), n[i[t]].push(i); return Object.values(n) }, t.findRoot = function(e) { const t = document.querySelectorAll(e || ".brackets-viewer"); if (0 === t.length) throw Error("Root not found. You must have at least one root element."); if (t.length > 1) throw Error("Multiple possible roots were found. Please use `config.selector` to choose a specific root."); const n = t[0]; if (!n.classList.contains("brackets-viewer")) throw Error("The selected root must have a `.brackets-viewer` class."); return n }, t.getOriginAbbreviation = function(e, t, n) { return t && "lower-bracket" === e && 1 === n ? i.abbreviations.seed : "lower-bracket" === e || "final-group" === e ? i.abbreviations.position : i.abbreviations.seed }, t.isMajorRound = function(e) { return 1 === e || e % 2 == 0 }, t.rankingHeader = function(e) { return i.headers[e] }, t.getRanking = function(e, t) {
                    t = t || (e => 3 * e.wins + 1 * e.draws + 0 * e.losses);
                    const n = {};
                    for (const i of e) o(n, t, i.opponent1, i.opponent2), o(n, t, i.opponent2, i.opponent1);
                    return function(e) {
                        const t = Object.values(e).sort(((e, t) => t.points - e.points)),
                            n = { value: 0, lastPoints: -1 };
                        for (const e of t) e.rank = n.lastPoints !== e.points ? ++n.value : n.value, n.lastPoints = e.points;
                        return t
                    }(n)
                }
            },
            592: function(e, t, n) {
                var i = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.locales = void 0;
                const o = i(n(117)),
                    r = i(n(169));
                t.locales = { en: o.default, fr: r.default }
            },
            894: function(e, t, n) {
                var i = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.headers = t.BYE = t.bestOfX = t.abbreviations = t.getLoserBracketRoundName = t.getWinnerBracketRoundName = t.getRoundName = t.getGroupName = t.getMatchStatus = t.getFinalMatchLabel = t.getMatchLabel = t.getFinalOriginHint = t.getOriginHint = t.i18next = void 0;
                const o = i(n(558));
                t.i18next = o.default;
                const r = i(n(656)),
                    a = n(592),
                    s = n(981),
                    c = n(547);

                function u(e, t, n) { return "boolean" == typeof n ? o.default.t(`${e}.${t}`, { returnObjects: !0 }) : o.default.t(`${e}.${t}`, n) }
                o.default.use(r.default).init({ fallbackLng: "en", debug: !0, resources: {} }), Object.keys(a.locales).forEach((e => o.default.addResourceBundle(e, "translation", a.locales[e]))), t.getOriginHint = function(e, t, n, i) { if (1 === e) { if ("single-bracket" === i) return e => u("origin-hint", "seed", { position: e }); if ("winner-bracket" === i) return e => u("origin-hint", "seed", { position: e }); if ("loser-bracket" === i && n) return e => u("origin-hint", "seed", { position: e }) } if (c.isMajorRound(e) && "loser-bracket" === i) { if (e === t - 2) return e => u("origin-hint", "winner-bracket-semi-final", { position: e }); if (e === t) return () => u("origin-hint", "winner-bracket-final"); const i = Math.ceil((e + 1) / 2); return n ? e => u("origin-hint", "winner-bracket", { round: i - 1, position: e }) : e => u("origin-hint", "winner-bracket", { round: i, position: e }) } }, t.getFinalOriginHint = function(e, t) { return "consolation_final" === e ? e => u("origin-hint", "consolation-final", { position: e }) : 1 === t ? () => u("origin-hint", "grand-final") : void 0 }, t.getMatchLabel = function(e, t, n, i) {
                    const o = u("match-label", "winner-bracket" === i ? "winner-bracket" : "loser-bracket" === i ? "loser-bracket" : "standard-bracket"),
                        r = t === n - 1,
                        a = t === n;
                    if ("single-bracket" === i) { if (r) return u("match-label", "standard-bracket-semi-final", { matchNumber: e }); if (a) return u("match-label", "standard-bracket-final") }
                    return r ? u("match-label", "double-elimination-semi-final", { matchPrefix: o, matchNumber: e }) : a ? u("match-label", "double-elimination-final", { matchPrefix: o }) : u("match-label", "double-elimination", { matchPrefix: o, roundNumber: t, matchNumber: e })
                }, t.getFinalMatchLabel = function(e, t, n) { return "consolation_final" === e ? u("match-label", "consolation-final") : 1 === n ? u("match-label", "grand-final-single") : u("match-label", "grand-final", { roundNumber: t }) }, t.getMatchStatus = function(e) {
                    switch (e) {
                        case s.Status.Locked:
                            return u("match-status", "locked");
                        case s.Status.Waiting:
                            return u("match-status", "waiting");
                        case s.Status.Ready:
                            return u("match-status", "ready");
                        case s.Status.Running:
                            return u("match-status", "running");
                        case s.Status.Completed:
                            return u("match-status", "completed");
                        case s.Status.Archived:
                            return u("match-status", "archived")
                    }
                }, t.getGroupName = function(e) { return u("common", "group-name", { groupNumber: e }) }, t.getRoundName = function(e, t) { return e === t ? u("common", "round-name-final") : u("common", "round-name", { roundNumber: e }) }, t.getWinnerBracketRoundName = function(e, t) { return e === t ? u("common", "round-name-winner-bracket-final") : u("common", "round-name-winner-bracket", { roundNumber: e }) }, t.getLoserBracketRoundName = function(e, t) { return e === t ? u("common", "round-name-loser-bracket-final") : u("common", "round-name-loser-bracket", { roundNumber: e }) }, t.abbreviations = { win: u("abbreviations", "win"), loss: u("abbreviations", "loss"), forfeit: u("abbreviations", "forfeit"), position: u("abbreviations", "position"), seed: u("abbreviations", "seed") }, t.bestOfX = e => u("common", "best-of-x", { x: e }), t.BYE = u("common", "bye"), t.headers = { rank: u("ranking", "rank", !0), id: u("ranking", "id", !0), played: u("ranking", "played", !0), wins: u("ranking", "wins", !0), draws: u("ranking", "draws", !0), losses: u("ranking", "losses", !0), forfeits: u("ranking", "forfeits", !0), scoreFor: u("ranking", "score-for", !0), scoreAgainst: u("ranking", "score-against", !0), scoreDifference: u("ranking", "score-difference", !0), points: u("ranking", "points", !0) }
            },
            153: function(e, t, n) {
                var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) { void 0 === i && (i = n), Object.defineProperty(e, i, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, i) { void 0 === i && (i = n), e[i] = t[n] }),
                    o = this && this.__setModuleDefault || (Object.create ? function(e, t) { Object.defineProperty(e, "default", { enumerable: !0, value: t }) } : function(e, t) { e.default = t }),
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
                        return o(t, e), t
                    };
                Object.defineProperty(t, "__esModule", { value: !0 }), t.BracketsViewer = void 0, n(811);
                const a = n(547),
                    s = r(n(953)),
                    c = r(n(894));
                class u {
                    constructor() { this.participantRefs = {}, this.participants = [], this.participantImages = [] }
                    render(e, t) {
                        const n = document.createDocumentFragment();
                        this.config = { participantOriginPlacement: (null == t ? void 0 : t.participantOriginPlacement) || "before", separatedChildCountLabel: void 0 !== (null == t ? void 0 : t.separatedChildCountLabel) && t.separatedChildCountLabel, showSlotsOrigin: void 0 === (null == t ? void 0 : t.showSlotsOrigin) || t.showSlotsOrigin, showLowerBracketSlotsOrigin: void 0 === (null == t ? void 0 : t.showLowerBracketSlotsOrigin) || t.showLowerBracketSlotsOrigin, highlightParticipantOnHover: void 0 === (null == t ? void 0 : t.highlightParticipantOnHover) || t.highlightParticipantOnHover }, this.participants = e.participants, e.participants.forEach((e => this.participantRefs[e.id] = [])), e.stages.forEach((t => this.renderStage(n, {...e, stages: [t], matches: e.matches.filter((e => e.stage_id === t.id)) }))), a.findRoot(null == t ? void 0 : t.selector).append(n)
                    }
                    addLocale(e, t) { c.i18next.addResourceBundle(e, "translation", t), c.i18next.changeLanguage() }
                    setParticipantImages(e) { this.participantImages = e }
                    renderStage(e, t) {
                        const n = t.stages[0],
                            i = a.splitBy(t.matches, "group_id");
                        switch (this.skipFirstRound = n.settings.skipFirstRound || !1, n.type) {
                            case "round_robin":
                                this.renderRoundRobin(e, n, i);
                                break;
                            case "single_elimination":
                            case "double_elimination":
                                this.renderElimination(e, n, i);
                                break;
                            default:
                                throw Error(`Unknown bracket type: ${n.type}`)
                        }
                    }
                    renderRoundRobin(e, t, n) {
                        const i = s.createRoundRobinContainer(t.id);
                        i.append(s.createTitle(t.name));
                        let o = 1;
                        for (const e of n) {
                            const t = e[0].group_id,
                                n = s.createGroupContainer(t, c.getGroupName(o++)),
                                r = a.splitBy(e, "round_id");
                            let u = 1;
                            for (const e of r) {
                                const t = e[0].round_id,
                                    i = s.createRoundContainer(t, c.getRoundName(u++, 0));
                                for (const t of e) i.append(this.createMatch(t));
                                n.append(i)
                            }
                            n.append(this.createRanking(e)), i.append(n)
                        }
                        e.append(i)
                    }
                    renderElimination(e, t, n) {
                        const i = s.createEliminationContainer(t.id);
                        i.append(s.createTitle(t.name)), "single_elimination" === t.type ? this.renderSingleElimination(i, n) : this.renderDoubleElimination(i, n), e.append(i)
                    }
                    renderSingleElimination(e, t) {
                        const n = void 0 !== t[1];
                        this.renderBracket(e, a.splitBy(t[0], "round_id"), c.getRoundName, "single-bracket"), n && this.renderFinal(e, "consolation_final", t[1])
                    }
                    renderDoubleElimination(e, t) {
                        const n = void 0 !== t[1],
                            i = void 0 !== t[2];
                        this.renderBracket(e, a.splitBy(t[0], "round_id"), c.getWinnerBracketRoundName, "winner-bracket", i), n && this.renderBracket(e, a.splitBy(t[1], "round_id"), c.getLoserBracketRoundName, "loser-bracket"), i && this.renderFinal(e, "grand_final", t[2])
                    }
                    renderBracket(e, t, n, i, o) {
                        const r = t[0][0].group_id,
                            a = t.length,
                            c = s.createBracketContainer(r);
                        let u = 1;
                        for (const e of t) {
                            const t = e[0].round_id,
                                r = s.createRoundContainer(t, n(u, a));
                            for (const t of e) r.append(this.createBracketMatch(u, a, t, i, o));
                            c.append(r), u++
                        }
                        e.append(c)
                    }
                    renderFinal(e, t, n) {
                        const i = e.querySelector(".bracket");
                        if (!i) throw Error("Upper bracket not found.");
                        const o = n[0].opponent1,
                            r = null === (null == o ? void 0 : o.id) || "win" === (null == o ? void 0 : o.result) ? 1 : 2,
                            a = n.slice(0, r),
                            u = n.length;
                        for (let e = 0; e < a.length; e++) {
                            const n = e + 1,
                                o = s.createRoundContainer(a[e].round_id, c.getFinalMatchLabel(t, n, u));
                            o.append(this.createFinalMatch(t, a, n, u)), i.append(o)
                        }
                    }
                    createRanking(e) {
                        const t = s.createTable(),
                            n = a.getRanking(e);
                        t.append(s.createRankingHeaders(n));
                        for (const e of n) t.append(this.createRankingRow(e));
                        return t
                    }
                    createRankingRow(e) {
                        const t = s.createRow();
                        for (const n in e) {
                            const i = e[n];
                            if ("id" === n) {
                                const e = this.participants.find((e => e.id === i));
                                if (void 0 !== e) {
                                    const n = s.createCell(e.name);
                                    this.setupMouseHover(e.id, n), t.append(n);
                                    continue
                                }
                            }
                            t.append(s.createCell(i))
                        }
                        return t
                    }
                    createBracketMatch(e, t, n, i, o) {
                        const r = s.getBracketConnection(e, t, i, o),
                            a = c.getMatchLabel(n.number, e, t, i) + (n.child_count > 0 ? `, Bo${n.child_count}` : ""),
                            u = c.getOriginHint(e, t, this.skipFirstRound, i);
                        return this.createMatch(n, i, r, a, u, e)
                    }
                    createFinalMatch(e, t, n, i) {
                        const o = n - 1,
                            r = s.getFinalConnection(e, n, t.length),
                            a = c.getFinalMatchLabel(e, n, i),
                            u = c.getFinalOriginHint(e, n);
                        return this.createMatch(t[o], "final-group", r, a, u)
                    }
                    createMatch(e, t, n, i, o, r) {
                        const a = s.createMatchContainer(e.id, e.status),
                            u = s.createOpponentsContainer(),
                            l = this.createParticipant(e.opponent1, o, t, r),
                            p = this.createParticipant(e.opponent2, o, t, r);
                        return i && (e.child_count > 0 && !this.config.separatedChildCountLabel && (i += `, ${c.bestOfX(e.child_count)}`), u.append(s.createMatchLabel(i, c.getMatchStatus(e.status)))), e.child_count > 0 && this.config.separatedChildCountLabel && u.append(s.createChildCountLabel(c.bestOfX(e.child_count))), u.append(l, p), a.append(u), n ? (s.setupConnection(u, a, n), a) : a
                    }
                    createParticipant(e, t, n, i) { const o = { participant: s.createParticipantContainer(e && e.id), name: s.createNameContainer(), result: s.createResultContainer() }; return null === e ? o.name.innerText = c.BYE : this.renderParticipant(o, e, t, n, i), o.participant.append(o.name, o.result), e && null !== e.id && this.setupMouseHover(e.id, o.participant), o.participant }
                    renderParticipant(e, t, n, i, o) {
                        const r = this.participants.find((e => e.id === t.id));
                        r ? (e.name.innerText = r.name, e.participant.setAttribute("title", r.name), this.renderParticipantImage(e.name, r.id), this.renderParticipantOrigin(e.name, t, i, o)) : this.renderHint(e.name, t, n, i), e.result.innerText = `${void 0===t.score?"-":t.score}`, s.setupWin(e.participant, e.result, t), s.setupLoss(e.participant, e.result, t)
                    }
                    renderParticipantImage(e, t) {
                        const n = this.participantImages.find((e => e.participantId === t));
                        n && s.addParticipantImage(e, n.imageUrl)
                    }
                    renderHint(e, t, n, i) { void 0 !== n && void 0 !== t.position && this.config.showSlotsOrigin && (this.config.showLowerBracketSlotsOrigin || "loser-bracket" !== i) && s.setupHint(e, n(t.position)) }
                    renderParticipantOrigin(e, t, n, i) {
                        if (void 0 === t.position || void 0 === n) return;
                        if (!this.config.participantOriginPlacement || "none" === this.config.participantOriginPlacement) return;
                        if (!this.config.showSlotsOrigin) return;
                        if (!this.config.showLowerBracketSlotsOrigin && "loser-bracket" === n) return;
                        const o = a.getOriginAbbreviation(n, this.skipFirstRound, i) + t.position;
                        s.addParticipantOrigin(e, o, this.config.participantOriginPlacement)
                    }
                    setupMouseHover(e, t) {
                        if (!this.config.highlightParticipantOnHover) return;
                        const n = this.participantRefs[e];
                        if (!n) throw Error(`The participant (id: ${e}) does not exist in the participants table.`);
                        n.push(t), t.addEventListener("mouseover", (() => { n.forEach((e => e.classList.add("hover"))) })), t.addEventListener("mouseleave", (() => { n.forEach((e => e.classList.remove("hover"))) }))
                    }
                }
                t.BracketsViewer = u, window.bracketsViewer = new u
            },
            981: (e, t) => {
                var n;
                Object.defineProperty(t, "__esModule", { value: !0 }), t.Status = void 0, (n = t.Status || (t.Status = {}))[n.Locked = 0] = "Locked", n[n.Waiting = 1] = "Waiting", n[n.Ready = 2] = "Ready", n[n.Running = 3] = "Running", n[n.Completed = 4] = "Completed", n[n.Archived = 5] = "Archived"
            },
            656: (e, t, n) => {
                n.r(t), n.d(t, { default: () => L });
                var i = n(621),
                    o = n(770),
                    r = [],
                    a = r.forEach,
                    s = r.slice;

                function c(e) {
                    return a.call(s.call(arguments, 1), (function(t) {
                        if (t)
                            for (var n in t) void 0 === e[n] && (e[n] = t[n])
                    })), e
                }
                var u = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                    l = function(e, t, n) {
                        var i = n || {};
                        i.path = i.path || "/";
                        var o = e + "=" + encodeURIComponent(t);
                        if (i.maxAge > 0) {
                            var r = i.maxAge - 0;
                            if (isNaN(r)) throw new Error("maxAge should be a Number");
                            o += "; Max-Age=" + Math.floor(r)
                        }
                        if (i.domain) {
                            if (!u.test(i.domain)) throw new TypeError("option domain is invalid");
                            o += "; Domain=" + i.domain
                        }
                        if (i.path) {
                            if (!u.test(i.path)) throw new TypeError("option path is invalid");
                            o += "; Path=" + i.path
                        }
                        if (i.expires) {
                            if ("function" != typeof i.expires.toUTCString) throw new TypeError("option expires is invalid");
                            o += "; Expires=" + i.expires.toUTCString()
                        }
                        if (i.httpOnly && (o += "; HttpOnly"), i.secure && (o += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                            case !0:
                                o += "; SameSite=Strict";
                                break;
                            case "lax":
                                o += "; SameSite=Lax";
                                break;
                            case "strict":
                                o += "; SameSite=Strict";
                                break;
                            case "none":
                                o += "; SameSite=None";
                                break;
                            default:
                                throw new TypeError("option sameSite is invalid")
                        }
                        return o
                    },
                    p = {
                        name: "cookie",
                        lookup: function(e) {
                            var t;
                            if (e.lookupCookie && "undefined" != typeof document) {
                                var n = function(e) {
                                    for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                                        for (var o = n[i];
                                            " " === o.charAt(0);) o = o.substring(1, o.length);
                                        if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                                    }
                                    return null
                                }(e.lookupCookie);
                                n && (t = n)
                            }
                            return t
                        },
                        cacheUserLanguage: function(e, t) {
                            t.lookupCookie && "undefined" != typeof document && function(e, t, n, i) {
                                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
                                n && (o.expires = new Date, o.expires.setTime(o.expires.getTime() + 60 * n * 1e3)), i && (o.domain = i), document.cookie = l(e, encodeURIComponent(t), o)
                            }(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
                        }
                    },
                    d = {
                        name: "querystring",
                        lookup: function(e) {
                            var t;
                            if ("undefined" != typeof window)
                                for (var n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++) {
                                    var o = n[i].indexOf("=");
                                    o > 0 && n[i].substring(0, o) === e.lookupQuerystring && (t = n[i].substring(o + 1))
                                }
                            return t
                        }
                    },
                    f = null,
                    g = function() {
                        if (null !== f) return f;
                        try {
                            f = "undefined" !== window && null !== window.localStorage;
                            var e = "i18next.translate.boo";
                            window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e)
                        } catch (e) { f = !1 }
                        return f
                    },
                    h = {
                        name: "localStorage",
                        lookup: function(e) {
                            var t;
                            if (e.lookupLocalStorage && g()) {
                                var n = window.localStorage.getItem(e.lookupLocalStorage);
                                n && (t = n)
                            }
                            return t
                        },
                        cacheUserLanguage: function(e, t) { t.lookupLocalStorage && g() && window.localStorage.setItem(t.lookupLocalStorage, e) }
                    },
                    m = null,
                    v = function() {
                        if (null !== m) return m;
                        try {
                            m = "undefined" !== window && null !== window.sessionStorage;
                            var e = "i18next.translate.boo";
                            window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e)
                        } catch (e) { m = !1 }
                        return m
                    },
                    b = {
                        name: "sessionStorage",
                        lookup: function(e) {
                            var t;
                            if (e.lookupSessionStorage && v()) {
                                var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                                n && (t = n)
                            }
                            return t
                        },
                        cacheUserLanguage: function(e, t) { t.lookupSessionStorage && v() && window.sessionStorage.setItem(t.lookupSessionStorage, e) }
                    },
                    y = {
                        name: "navigator",
                        lookup: function(e) {
                            var t = [];
                            if ("undefined" != typeof navigator) {
                                if (navigator.languages)
                                    for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                                navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language)
                            }
                            return t.length > 0 ? t : void 0
                        }
                    },
                    k = { name: "htmlTag", lookup: function(e) { var t, n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null); return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")), t } },
                    w = {
                        name: "path",
                        lookup: function(e) {
                            var t;
                            if ("undefined" != typeof window) {
                                var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                                if (n instanceof Array)
                                    if ("number" == typeof e.lookupFromPathIndex) {
                                        if ("string" != typeof n[e.lookupFromPathIndex]) return;
                                        t = n[e.lookupFromPathIndex].replace("/", "")
                                    } else t = n[0].replace("/", "")
                            }
                            return t
                        }
                    },
                    x = {
                        name: "subdomain",
                        lookup: function(e) {
                            var t;
                            if ("undefined" != typeof window) {
                                var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                                n instanceof Array && (t = "number" == typeof e.lookupFromSubdomainIndex ? n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
                            }
                            return t
                        }
                    },
                    S = function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (0, i.Z)(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n)
                        }
                        return (0, o.Z)(e, [{
                            key: "init",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                this.services = e, this.options = c(t, this.options || {}, { order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"], lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"] }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(p), this.addDetector(d), this.addDetector(h), this.addDetector(b), this.addDetector(y), this.addDetector(k), this.addDetector(w), this.addDetector(x)
                            }
                        }, { key: "addDetector", value: function(e) { this.detectors[e.name] = e } }, {
                            key: "detect",
                            value: function(e) {
                                var t = this;
                                e || (e = this.options.order);
                                var n = [];
                                return e.forEach((function(e) {
                                    if (t.detectors[e]) {
                                        var i = t.detectors[e].lookup(t.options);
                                        i && "string" == typeof i && (i = [i]), i && (n = n.concat(i))
                                    }
                                })), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                            }
                        }, {
                            key: "cacheUserLanguage",
                            value: function(e, t) {
                                var n = this;
                                t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((function(t) { n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options) })))
                            }
                        }]), e
                    }();
                S.type = "languageDetector";
                const L = S
            },
            558: (e, t, n) => {
                function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

                function r(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? Object(arguments[t]) : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), i.forEach((function(t) { o(e, t, n[t]) }))
                    }
                    return e
                }
                n.r(t), n.d(t, { default: () => W });
                var a = n(621),
                    s = n(770);

                function c(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                function u(e, t) { return !t || "object" !== i(t) && "function" != typeof t ? c(e) : t }

                function l(e) { return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

                function p(e, t) { return (p = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

                function d(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && p(e, t)
                }
                var f = { type: "logger", log: function(e) { this.output("log", e) }, warn: function(e) { this.output("warn", e) }, error: function(e) { this.output("error", e) }, output: function(e, t) { console && console[e] && console[e].apply(console, t) } },
                    g = new(function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (0, a.Z)(this, e), this.init(t, n)
                        }
                        return (0, s.Z)(e, [{
                            key: "init",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                this.prefix = t.prefix || "i18next:", this.logger = e || f, this.options = t, this.debug = t.debug
                            }
                        }, { key: "setDebug", value: function(e) { this.debug = e } }, { key: "log", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return this.forward(t, "log", "", !0) } }, { key: "warn", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return this.forward(t, "warn", "", !0) } }, { key: "error", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return this.forward(t, "error", "") } }, { key: "deprecate", value: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return this.forward(t, "warn", "WARNING DEPRECATED: ", !0) } }, { key: "forward", value: function(e, t, n, i) { return i && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e)) } }, { key: "create", value: function(t) { return new e(this.logger, r({}, { prefix: "".concat(this.prefix, ":").concat(t, ":") }, this.options)) } }]), e
                    }()),
                    h = function() {
                        function e() {
                            (0, a.Z)(this, e), this.observers = {}
                        }
                        return (0, s.Z)(e, [{ key: "on", value: function(e, t) { var n = this; return e.split(" ").forEach((function(e) { n.observers[e] = n.observers[e] || [], n.observers[e].push(t) })), this } }, { key: "off", value: function(e, t) { this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) { return e !== t })) : delete this.observers[e]) } }, {
                            key: "emit",
                            value: function(e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                if (this.observers[e]) {
                                    var o = [].concat(this.observers[e]);
                                    o.forEach((function(e) { e.apply(void 0, n) }))
                                }
                                if (this.observers["*"]) {
                                    var r = [].concat(this.observers["*"]);
                                    r.forEach((function(t) { t.apply(t, [e].concat(n)) }))
                                }
                            }
                        }]), e
                    }();

                function m() { var e, t, n = new Promise((function(n, i) { e = n, t = i })); return n.resolve = e, n.reject = t, n }

                function v(e) { return null == e ? "" : "" + e }

                function b(e, t, n) { e.forEach((function(e) { t[e] && (n[e] = t[e]) })) }

                function y(e, t, n) {
                    function i(e) { return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e }

                    function o() { return !e || "string" == typeof e }
                    for (var r = "string" != typeof t ? [].concat(t) : t.split("."); r.length > 1;) { if (o()) return {}; var a = i(r.shift());!e[a] && n && (e[a] = new n), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {} }
                    return o() ? {} : { obj: e, k: i(r.shift()) }
                }

                function k(e, t, n) {
                    var i = y(e, t, Object);
                    i.obj[i.k] = n
                }

                function w(e, t) {
                    var n = y(e, t),
                        i = n.obj,
                        o = n.k;
                    if (i) return i[o]
                }

                function x(e, t, n) { var i = w(e, n); return void 0 !== i ? i : w(t, n) }

                function S(e, t, n) { for (var i in t) "__proto__" !== i && "constructor" !== i && (i in e ? "string" == typeof e[i] || e[i] instanceof String || "string" == typeof t[i] || t[i] instanceof String ? n && (e[i] = t[i]) : S(e[i], t[i], n) : e[i] = t[i]); return e }

                function L(e) { return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }
                var O = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };

                function R(e) { return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function(e) { return O[e] })) : e }
                var C = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
                    P = function(e) {
                        function t(e) { var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" }; return (0, a.Z)(this, t), n = u(this, l(t).call(this)), C && h.call(c(n)), n.data = e || {}, n.options = i, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n }
                        return d(t, e), (0, s.Z)(t, [{ key: "addNamespaces", value: function(e) { this.options.ns.indexOf(e) < 0 && this.options.ns.push(e) } }, {
                            key: "removeNamespaces",
                            value: function(e) {
                                var t = this.options.ns.indexOf(e);
                                t > -1 && this.options.ns.splice(t, 1)
                            }
                        }, {
                            key: "getResource",
                            value: function(e, t, n) {
                                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                    o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                                    r = [e, t];
                                return n && "string" != typeof n && (r = r.concat(n)), n && "string" == typeof n && (r = r.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (r = e.split(".")), w(this.data, r)
                            }
                        }, {
                            key: "addResource",
                            value: function(e, t, n, i) {
                                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 },
                                    r = this.options.keySeparator;
                                void 0 === r && (r = ".");
                                var a = [e, t];
                                n && (a = a.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (i = t, t = (a = e.split("."))[1]), this.addNamespaces(t), k(this.data, a, i), o.silent || this.emit("added", e, t, n, i)
                            }
                        }, {
                            key: "addResources",
                            value: function(e, t, n) {
                                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: !1 };
                                for (var o in n) "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], { silent: !0 });
                                i.silent || this.emit("added", e, t, n)
                            }
                        }, {
                            key: "addResourceBundle",
                            value: function(e, t, n, i, o) {
                                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: !1 },
                                    s = [e, t];
                                e.indexOf(".") > -1 && (i = n, n = t, t = (s = e.split("."))[1]), this.addNamespaces(t);
                                var c = w(this.data, s) || {};
                                i ? S(c, n, o) : c = r({}, c, n), k(this.data, s, c), a.silent || this.emit("added", e, t, n)
                            }
                        }, { key: "removeResourceBundle", value: function(e, t) { this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t) } }, { key: "hasResourceBundle", value: function(e, t) { return void 0 !== this.getResource(e, t) } }, { key: "getResourceBundle", value: function(e, t) { return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? r({}, {}, this.getResource(e, t)) : this.getResource(e, t) } }, { key: "getDataByLanguage", value: function(e) { return this.data[e] } }, { key: "toJSON", value: function() { return this.data } }]), t
                    }(h),
                    N = { processors: {}, addPostProcessor: function(e) { this.processors[e.name] = e }, handle: function(e, t, n, i, o) { var r = this; return e.forEach((function(e) { r.processors[e] && (t = r.processors[e].process(t, n, i, o)) })), t } },
                    E = {},
                    F = function(e) {
                        function t(e) { var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return (0, a.Z)(this, t), n = u(this, l(t).call(this)), C && h.call(c(n)), b(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, c(n)), n.options = i, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = g.create("translator"), n }
                        return d(t, e), (0, s.Z)(t, [{ key: "changeLanguage", value: function(e) { e && (this.language = e) } }, {
                            key: "exists",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} },
                                    n = this.resolve(e, t);
                                return n && void 0 !== n.res
                            }
                        }, {
                            key: "extractFromKey",
                            value: function(e, t) {
                                var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                                void 0 === n && (n = ":");
                                var i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                    o = t.ns || this.options.defaultNS;
                                if (n && e.indexOf(n) > -1) {
                                    var r = e.match(this.interpolator.nestingRegexp);
                                    if (r && r.length > 0) return { key: e, namespaces: o };
                                    var a = e.split(n);
                                    (n !== i || n === i && this.options.ns.indexOf(a[0]) > -1) && (o = a.shift()), e = a.join(i)
                                }
                                return "string" == typeof o && (o = [o]), { key: e, namespaces: o }
                            }
                        }, {
                            key: "translate",
                            value: function(e, n, o) {
                                var a = this;
                                if ("object" !== i(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), null == e) return "";
                                Array.isArray(e) || (e = [String(e)]);
                                var s = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                    c = this.extractFromKey(e[e.length - 1], n),
                                    u = c.key,
                                    l = c.namespaces,
                                    p = l[l.length - 1],
                                    d = n.lng || this.language,
                                    f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                if (d && "cimode" === d.toLowerCase()) { if (f) { var g = n.nsSeparator || this.options.nsSeparator; return p + g + u } return u }
                                var h = this.resolve(e, n),
                                    m = h && h.res,
                                    v = h && h.usedKey || u,
                                    b = h && h.exactUsedKey || u,
                                    y = Object.prototype.toString.apply(m),
                                    k = ["[object Number]", "[object Function]", "[object RegExp]"],
                                    w = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                    x = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                    S = "string" != typeof m && "boolean" != typeof m && "number" != typeof m;
                                if (x && m && S && k.indexOf(y) < 0 && ("string" != typeof w || "[object Array]" !== y)) {
                                    if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, m, n) : "key '".concat(u, " (").concat(this.language, ")' returned an object instead of string.");
                                    if (s) {
                                        var L = "[object Array]" === y,
                                            O = L ? [] : {},
                                            R = L ? b : v;
                                        for (var C in m)
                                            if (Object.prototype.hasOwnProperty.call(m, C)) {
                                                var P = "".concat(R).concat(s).concat(C);
                                                O[C] = this.translate(P, r({}, n, { joinArrays: !1, ns: l })), O[C] === P && (O[C] = m[C])
                                            }
                                        m = O
                                    }
                                } else if (x && "string" == typeof w && "[object Array]" === y)(m = m.join(w)) && (m = this.extendTranslation(m, e, n, o));
                                else {
                                    var N = !1,
                                        E = !1,
                                        F = void 0 !== n.count && "string" != typeof n.count,
                                        j = t.hasDefaultValue(n),
                                        B = F ? this.pluralResolver.getSuffix(d, n.count) : "",
                                        M = n["defaultValue".concat(B)] || n.defaultValue;
                                    !this.isValidLookup(m) && j && (N = !0, m = M), this.isValidLookup(m) || (E = !0, m = u);
                                    var _ = j && M !== m && this.options.updateMissing;
                                    if (E || N || _) {
                                        if (this.logger.log(_ ? "updateKey" : "missingKey", d, p, u, _ ? M : m), s) {
                                            var T = this.resolve(u, r({}, n, { keySeparator: !1 }));
                                            T && T.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                        }
                                        var A = [],
                                            D = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                        if ("fallback" === this.options.saveMissingTo && D && D[0])
                                            for (var I = 0; I < D.length; I++) A.push(D[I]);
                                        else "all" === this.options.saveMissingTo ? A = this.languageUtils.toResolveHierarchy(n.lng || this.language) : A.push(n.lng || this.language);
                                        var H = function(e, t, i) { a.options.missingKeyHandler ? a.options.missingKeyHandler(e, p, t, _ ? i : m, _, n) : a.backendConnector && a.backendConnector.saveMissing && a.backendConnector.saveMissing(e, p, t, _ ? i : m, _, n), a.emit("missingKey", e, p, t, m) };
                                        this.options.saveMissing && (this.options.saveMissingPlurals && F ? A.forEach((function(e) { a.pluralResolver.getSuffixes(e).forEach((function(t) { H([e], u + t, n["defaultValue".concat(t)] || M) })) })) : H(A, u, M))
                                    }
                                    m = this.extendTranslation(m, e, n, h, o), E && m === u && this.options.appendNamespaceToMissingKey && (m = "".concat(p, ":").concat(u)), E && this.options.parseMissingKeyHandler && (m = this.options.parseMissingKeyHandler(m))
                                }
                                return m
                            }
                        }, {
                            key: "extendTranslation",
                            value: function(e, t, n, i, o) {
                                var a = this;
                                if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, i.usedLng, i.usedNS, i.usedKey, { resolved: i });
                                else if (!n.skipInterpolation) {
                                    n.interpolation && this.interpolator.init(r({}, n, { interpolation: r({}, this.options.interpolation, n.interpolation) }));
                                    var s, c = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                    if (c) {
                                        var u = e.match(this.interpolator.nestingRegexp);
                                        s = u && u.length
                                    }
                                    var l = n.replace && "string" != typeof n.replace ? n.replace : n;
                                    if (this.options.interpolation.defaultVariables && (l = r({}, this.options.interpolation.defaultVariables, l)), e = this.interpolator.interpolate(e, l, n.lng || this.language, n), c) {
                                        var p = e.match(this.interpolator.nestingRegexp);
                                        s < (p && p.length) && (n.nest = !1)
                                    }!1 !== n.nest && (e = this.interpolator.nest(e, (function() { for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r]; return o && o[0] === i[0] && !n.context ? (a.logger.warn("It seems you are nesting recursively key: ".concat(i[0], " in key: ").concat(t[0])), null) : a.translate.apply(a, i.concat([t])) }), n)), n.interpolation && this.interpolator.reset()
                                }
                                var d = n.postProcess || this.options.postProcess,
                                    f = "string" == typeof d ? [d] : d;
                                return null != e && f && f.length && !1 !== n.applyPostProcessor && (e = N.handle(f, e, t, this.options && this.options.postProcessPassResolved ? r({ i18nResolved: i }, n) : n, this)), e
                            }
                        }, {
                            key: "resolve",
                            value: function(e) {
                                var t, n, i, o, r, a = this,
                                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return "string" == typeof e && (e = [e]), e.forEach((function(e) {
                                    if (!a.isValidLookup(t)) {
                                        var c = a.extractFromKey(e, s),
                                            u = c.key;
                                        n = u;
                                        var l = c.namespaces;
                                        a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                                        var p = void 0 !== s.count && "string" != typeof s.count,
                                            d = void 0 !== s.context && "string" == typeof s.context && "" !== s.context,
                                            f = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                        l.forEach((function(e) {
                                            a.isValidLookup(t) || (r = e, !E["".concat(f[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(r) && (E["".concat(f[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(f.join(", "), '" won\'t get resolved as namespace "').concat(r, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach((function(n) {
                                                if (!a.isValidLookup(t)) {
                                                    o = n;
                                                    var r, c, l = u,
                                                        f = [l];
                                                    for (a.i18nFormat && a.i18nFormat.addLookupKeys ? a.i18nFormat.addLookupKeys(f, u, n, e, s) : (p && (r = a.pluralResolver.getSuffix(n, s.count)), p && d && f.push(l + r), d && f.push(l += "".concat(a.options.contextSeparator).concat(s.context)), p && f.push(l += r)); c = f.pop();) a.isValidLookup(t) || (i = c, t = a.getResource(n, e, c, s))
                                                }
                                            })))
                                        }))
                                    }
                                })), { res: t, usedKey: n, exactUsedKey: i, usedLng: o, usedNS: r }
                            }
                        }, { key: "isValidLookup", value: function(e) { return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e) } }, { key: "getResource", value: function(e, t, n) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i) } }], [{
                            key: "hasDefaultValue",
                            value: function(e) {
                                var t = "defaultValue";
                                for (var n in e)
                                    if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
                                return !1
                            }
                        }]), t
                    }(h);

                function j(e) { return e.charAt(0).toUpperCase() + e.slice(1) }
                var B = function() {
                        function e(t) {
                            (0, a.Z)(this, e), this.options = t, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = g.create("languageUtils")
                        }
                        return (0, s.Z)(e, [{ key: "getScriptPartFromCode", value: function(e) { if (!e || e.indexOf("-") < 0) return null; var t = e.split("-"); return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-"))) } }, { key: "getLanguagePartFromCode", value: function(e) { if (!e || e.indexOf("-") < 0) return e; var t = e.split("-"); return this.formatLanguageCode(t[0]) } }, {
                            key: "formatLanguageCode",
                            value: function(e) {
                                if ("string" == typeof e && e.indexOf("-") > -1) {
                                    var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                        n = e.split("-");
                                    return this.options.lowerCaseLng ? n = n.map((function(e) { return e.toLowerCase() })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = j(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = j(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = j(n[2].toLowerCase()))), n.join("-")
                                }
                                return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                            }
                        }, { key: "isWhitelisted", value: function(e) { return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(e) } }, { key: "isSupportedCode", value: function(e) { return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1 } }, {
                            key: "getBestMatchFromCodes",
                            value: function(e) {
                                var t, n = this;
                                return e ? (e.forEach((function(e) {
                                    if (!t) {
                                        var i = n.formatLanguageCode(e);
                                        n.options.supportedLngs && !n.isSupportedCode(i) || (t = i)
                                    }
                                })), !t && this.options.supportedLngs && e.forEach((function(e) {
                                    if (!t) {
                                        var i = n.getLanguagePartFromCode(e);
                                        if (n.isSupportedCode(i)) return t = i;
                                        t = n.options.supportedLngs.find((function(e) { if (0 === e.indexOf(i)) return e }))
                                    }
                                })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                            }
                        }, { key: "getFallbackCodes", value: function(e, t) { if (!e) return []; if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e; if (!t) return e.default || []; var n = e[t]; return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [] } }, {
                            key: "toResolveHierarchy",
                            value: function(e, t) {
                                var n = this,
                                    i = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                    o = [],
                                    r = function(e) { e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e))) };
                                return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), i.forEach((function(e) { o.indexOf(e) < 0 && r(n.formatLanguageCode(e)) })), o
                            }
                        }]), e
                    }(),
                    M = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }],
                    _ = { 1: function(e) { return Number(e > 1) }, 2: function(e) { return Number(1 != e) }, 3: function(e) { return 0 }, 4: function(e) { return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2) }, 5: function(e) { return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5) }, 6: function(e) { return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2) }, 7: function(e) { return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2) }, 8: function(e) { return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3) }, 9: function(e) { return Number(e >= 2) }, 10: function(e) { return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4) }, 11: function(e) { return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3) }, 12: function(e) { return Number(e % 10 != 1 || e % 100 == 11) }, 13: function(e) { return Number(0 !== e) }, 14: function(e) { return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3) }, 15: function(e) { return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2) }, 16: function(e) { return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2) }, 17: function(e) { return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1) }, 18: function(e) { return Number(0 == e ? 0 : 1 == e ? 1 : 2) }, 19: function(e) { return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3) }, 20: function(e) { return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2) }, 21: function(e) { return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0) }, 22: function(e) { return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3) } };

                function T() { var e = {}; return M.forEach((function(t) { t.lngs.forEach((function(n) { e[n] = { numbers: t.nr, plurals: _[t.fc] } })) })), e }
                var A = function() {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (0, a.Z)(this, e), this.languageUtils = t, this.options = n, this.logger = g.create("pluralResolver"), this.rules = T()
                        }
                        return (0, s.Z)(e, [{ key: "addRule", value: function(e, t) { this.rules[e] = t } }, { key: "getRule", value: function(e) { return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)] } }, { key: "needsPlural", value: function(e) { var t = this.getRule(e); return t && t.numbers.length > 1 } }, { key: "getPluralFormsOfKey", value: function(e, t) { return this.getSuffixes(e).map((function(e) { return t + e })) } }, {
                            key: "getSuffixes",
                            value: function(e) {
                                var t = this,
                                    n = this.getRule(e);
                                return n ? n.numbers.map((function(n) { return t.getSuffix(e, n) })) : []
                            }
                        }, {
                            key: "getSuffix",
                            value: function(e, t) {
                                var n = this,
                                    i = this.getRule(e);
                                if (i) {
                                    var o = i.noAbs ? i.plurals(t) : i.plurals(Math.abs(t)),
                                        r = i.numbers[o];
                                    this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                                    var a = function() { return n.options.prepend && r.toString() ? n.options.prepend + r.toString() : r.toString() };
                                    return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? "_plural_".concat(r.toString()) : a() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                                }
                                return this.logger.warn("no plural rule found for: ".concat(e)), ""
                            }
                        }]), e
                    }(),
                    D = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            (0, a.Z)(this, e), this.logger = g.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) { return e }, this.init(t)
                        }
                        return (0, s.Z)(e, [{
                            key: "init",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                e.interpolation || (e.interpolation = { escapeValue: !0 });
                                var t = e.interpolation;
                                this.escape = void 0 !== t.escape ? t.escape : R, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? L(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? L(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? L(t.nestingPrefix) : t.nestingPrefixEscaped || L("$t("), this.nestingSuffix = t.nestingSuffix ? L(t.nestingSuffix) : t.nestingSuffixEscaped || L(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                            }
                        }, { key: "reset", value: function() { this.options && this.init(this.options) } }, {
                            key: "resetRegExp",
                            value: function() {
                                var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                                this.regexp = new RegExp(e, "g");
                                var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                                this.regexpUnescape = new RegExp(t, "g");
                                var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                                this.nestingRegexp = new RegExp(n, "g")
                            }
                        }, {
                            key: "interpolate",
                            value: function(e, t, n, i) {
                                var o, r, a, s = this,
                                    c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                                function u(e) { return e.replace(/\$/g, "$$$$") }
                                var l = function(e) {
                                    if (e.indexOf(s.formatSeparator) < 0) { var o = x(t, c, e); return s.alwaysFormat ? s.format(o, void 0, n) : o }
                                    var r = e.split(s.formatSeparator),
                                        a = r.shift().trim(),
                                        u = r.join(s.formatSeparator).trim();
                                    return s.format(x(t, c, a), u, n, i)
                                };
                                this.resetRegExp();
                                var p = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
                                    d = i && i.interpolation && i.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                return [{ regex: this.regexpUnescape, safeValue: function(e) { return u(e) } }, { regex: this.regexp, safeValue: function(e) { return s.escapeValue ? u(s.escape(e)) : u(e) } }].forEach((function(t) {
                                    for (a = 0; o = t.regex.exec(e);) {
                                        if (void 0 === (r = l(o[1].trim())))
                                            if ("function" == typeof p) {
                                                var n = p(e, o, i);
                                                r = "string" == typeof n ? n : ""
                                            } else {
                                                if (d) { r = o[0]; continue }
                                                s.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), r = ""
                                            }
                                        else "string" == typeof r || s.useRawValueToEscape || (r = v(r));
                                        if (e = e.replace(o[0], t.safeValue(r)), t.regex.lastIndex = 0, ++a >= s.maxReplaces) break
                                    }
                                })), e
                            }
                        }, {
                            key: "nest",
                            value: function(e, t) {
                                var n, i, o = this,
                                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    s = r({}, a);

                                function c(e, t) {
                                    var n = this.nestingOptionsSeparator;
                                    if (e.indexOf(n) < 0) return e;
                                    var i = e.split(new RegExp("".concat(n, "[ ]*{"))),
                                        o = "{".concat(i[1]);
                                    e = i[0], o = (o = this.interpolate(o, s)).replace(/'/g, '"');
                                    try { s = JSON.parse(o), t && (s = r({}, t, s)) } catch (t) { return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(n).concat(o) }
                                    return delete s.defaultValue, e
                                }
                                for (s.applyPostProcessor = !1, delete s.defaultValue; n = this.nestingRegexp.exec(e);) {
                                    var u = [],
                                        l = !1;
                                    if (n[0].includes(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                        var p = n[1].split(this.formatSeparator).map((function(e) { return e.trim() }));
                                        n[1] = p.shift(), u = p, l = !0
                                    }
                                    if ((i = t(c.call(this, n[1].trim(), s), s)) && n[0] === e && "string" != typeof i) return i;
                                    "string" != typeof i && (i = v(i)), i || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), i = ""), l && (i = u.reduce((function(e, t) { return o.format(e, t, a.lng, a) }), i.trim())), e = e.replace(n[0], i), this.regexp.lastIndex = 0
                                }
                                return e
                            }
                        }]), e
                    }(),
                    I = function(e) {
                        function t(e, n, i) { var o, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return (0, a.Z)(this, t), o = u(this, l(t).call(this)), C && h.call(c(o)), o.backend = e, o.store = n, o.services = i, o.languageUtils = i.languageUtils, o.options = r, o.logger = g.create("backendConnector"), o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(i, r.backend, r), o }
                        return d(t, e), (0, s.Z)(t, [{
                            key: "queueLoad",
                            value: function(e, t, n, i) {
                                var o = this,
                                    r = [],
                                    a = [],
                                    s = [],
                                    c = [];
                                return e.forEach((function(e) {
                                    var i = !0;
                                    t.forEach((function(t) { var s = "".concat(e, "|").concat(t);!n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1, i = !1, a.indexOf(s) < 0 && a.push(s), r.indexOf(s) < 0 && r.push(s), c.indexOf(t) < 0 && c.push(t))) })), i || s.push(e)
                                })), (r.length || a.length) && this.queue.push({ pending: a, loaded: {}, errors: [], callback: i }), { toLoad: r, pending: a, toLoadLanguages: s, toLoadNamespaces: c }
                            }
                        }, {
                            key: "loaded",
                            value: function(e, t, n) {
                                var i = e.split("|"),
                                    o = i[0],
                                    r = i[1];
                                t && this.emit("failedLoading", o, r, t), n && this.store.addResourceBundle(o, r, n), this.state[e] = t ? -1 : 2;
                                var a = {};
                                this.queue.forEach((function(n) {
                                    var i, s, c, u, l;
                                    i = n.loaded, s = r, (u = (c = y(i, [o], Object)).obj)[l = c.k] = u[l] || [], u[l].push(s),
                                        function(e, t) { for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t) }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) { a[e] || (a[e] = []), n.loaded[e].length && n.loaded[e].forEach((function(t) { a[e].indexOf(t) < 0 && a[e].push(t) })) })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                                })), this.emit("loaded", a), this.queue = this.queue.filter((function(e) { return !e.done }))
                            }
                        }, {
                            key: "read",
                            value: function(e, t, n) {
                                var i = this,
                                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                                    a = arguments.length > 5 ? arguments[5] : void 0;
                                return e.length ? this.backend[n](e, t, (function(s, c) { s && c && o < 5 ? setTimeout((function() { i.read.call(i, e, t, n, o + 1, 2 * r, a) }), r) : a(s, c) })) : a(null, {})
                            }
                        }, {
                            key: "prepareLoading",
                            value: function(e, t) {
                                var n = this,
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    o = arguments.length > 3 ? arguments[3] : void 0;
                                if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                                "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                                var r = this.queueLoad(e, t, i, o);
                                if (!r.toLoad.length) return r.pending.length || o(), null;
                                r.toLoad.forEach((function(e) { n.loadOne(e) }))
                            }
                        }, { key: "load", value: function(e, t, n) { this.prepareLoading(e, t, {}, n) } }, { key: "reload", value: function(e, t, n) { this.prepareLoading(e, t, { reload: !0 }, n) } }, {
                            key: "loadOne",
                            value: function(e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    i = e.split("|"),
                                    o = i[0],
                                    r = i[1];
                                this.read(o, r, "read", void 0, void 0, (function(i, a) { i && t.logger.warn("".concat(n, "loading namespace ").concat(r, " for language ").concat(o, " failed"), i), !i && a && t.logger.log("".concat(n, "loaded namespace ").concat(r, " for language ").concat(o), a), t.loaded(e, i, a) }))
                            }
                        }, {
                            key: "saveMissing",
                            value: function(e, t, n, i, o) {
                                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                                this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, i, null, r({}, a, { isUpdate: o })), e && e[0] && this.store.addResource(e[0], t, n, i))
                            }
                        }]), t
                    }(h);

                function H() {
                    return {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        whitelist: !1,
                        nonExplicitWhitelist: !1,
                        supportedLngs: !1,
                        nonExplicitSupportedLngs: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        partialBundledLanguages: !1,
                        saveMissing: !1,
                        updateMissing: !1,
                        saveMissingTo: "fallback",
                        saveMissingPlurals: !0,
                        missingKeyHandler: !1,
                        missingInterpolationHandler: !1,
                        postProcess: !1,
                        postProcessPassResolved: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: !1,
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function(e) {
                            var t = {};
                            if ("object" === i(e[1]) && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" === i(e[2]) || "object" === i(e[3])) {
                                var n = e[3] || e[2];
                                Object.keys(n).forEach((function(e) { t[e] = n[e] }))
                            }
                            return t
                        },
                        interpolation: { escapeValue: !0, format: function(e, t, n, i) { return e }, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !1 }
                    }
                }

                function U(e) { return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e }

                function V() {}
                const W = new(function(e) {
                    function t() {
                        var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = arguments.length > 1 ? arguments[1] : void 0;
                        if ((0, a.Z)(this, t), e = u(this, l(t).call(this)), C && h.call(c(e)), e.options = U(n), e.services = {}, e.logger = g, e.modules = { external: [] }, i && !e.isInitialized && !n.isClone) {
                            if (!e.options.initImmediate) return e.init(n, i), u(e, c(e));
                            setTimeout((function() { e.init(n, i) }), 0)
                        }
                        return e
                    }
                    return d(t, e), (0, s.Z)(t, [{
                        key: "init",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;

                            function i(e) { return e ? "function" == typeof e ? new e : e : null }
                            if ("function" == typeof t && (n = t, t = {}), t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = r({}, H(), this.options, U(t)), this.format = this.options.interpolation.format, n || (n = V), !this.options.isClone) {
                                this.modules.logger ? g.init(i(this.modules.logger), this.options) : g.init(null, this.options);
                                var o = new B(this.options);
                                this.store = new P(this.options.resources, this.options);
                                var a = this.services;
                                a.logger = g, a.resourceStore = this.store, a.languageUtils = o, a.pluralResolver = new A(o, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), a.interpolator = new D(this.options), a.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, a.backendConnector = new I(i(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", (function(t) {
                                    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                    e.emit.apply(e, [t].concat(i))
                                })), this.modules.languageDetector && (a.languageDetector = i(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = i(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new F(this.services, this.options), this.translator.on("*", (function(t) {
                                    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                    e.emit.apply(e, [t].concat(i))
                                })), this.modules.external.forEach((function(t) { t.init && t.init(e) }))
                            }
                            if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                                var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                s.length > 0 && "dev" !== s[0] && (this.options.lng = s[0])
                            }
                            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                            var c = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                            c.forEach((function(t) { e[t] = function() { var n; return (n = e.store)[t].apply(n, arguments) } }));
                            var u = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                            u.forEach((function(t) { e[t] = function() { var n; return (n = e.store)[t].apply(n, arguments), e } }));
                            var l = m(),
                                p = function() {
                                    var t = function(t, i) { e.isInitialized && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), l.resolve(i), n(t, i) };
                                    if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
                                    e.changeLanguage(e.options.lng, t)
                                };
                            return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), l
                        }
                    }, {
                        key: "loadResources",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V,
                                i = n,
                                o = "string" == typeof e ? e : this.language;
                            if ("function" == typeof e && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
                                if (o && "cimode" === o.toLowerCase()) return i();
                                var r = [],
                                    a = function(e) { e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) { r.indexOf(e) < 0 && r.push(e) })) };
                                if (o) a(o);
                                else {
                                    var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                    s.forEach((function(e) { return a(e) }))
                                }
                                this.options.preload && this.options.preload.forEach((function(e) { return a(e) })), this.services.backendConnector.load(r, this.options.ns, i)
                            } else i(null)
                        }
                    }, { key: "reloadResources", value: function(e, t, n) { var i = m(); return e || (e = this.languages), t || (t = this.options.ns), n || (n = V), this.services.backendConnector.reload(e, t, (function(e) { i.resolve(), n(e) })), i } }, { key: "use", value: function(e) { if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()"); if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()"); return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && N.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this } }, {
                        key: "changeLanguage",
                        value: function(e, t) {
                            var n = this;
                            this.isLanguageChangingTo = e;
                            var i = m();
                            this.emit("languageChanging", e);
                            var o = function(e) {
                                var o = "string" == typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                                o && (n.language || (n.language = o, n.languages = n.services.languageUtils.toResolveHierarchy(o)), n.translator.language || n.translator.changeLanguage(o), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(o)), n.loadResources(o, (function(e) {! function(e, o) { o ? (n.language = o, n.languages = n.services.languageUtils.toResolveHierarchy(o), n.translator.changeLanguage(o), n.isLanguageChangingTo = void 0, n.emit("languageChanged", o), n.logger.log("languageChanged", o)) : n.isLanguageChangingTo = void 0, i.resolve((function() { return n.t.apply(n, arguments) })), t && t(e, (function() { return n.t.apply(n, arguments) })) }(e, o) }))
                            };
                            return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), i
                        }
                    }, {
                        key: "getFixedT",
                        value: function(e, t) {
                            var n = this,
                                o = function e(t, o) {
                                    var a;
                                    if ("object" !== i(o)) {
                                        for (var s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++) c[u - 2] = arguments[u];
                                        a = n.options.overloadTranslationOptionHandler([t, o].concat(c))
                                    } else a = r({}, o);
                                    return a.lng = a.lng || e.lng, a.lngs = a.lngs || e.lngs, a.ns = a.ns || e.ns, n.t(t, a)
                                };
                            return "string" == typeof e ? o.lng = e : o.lngs = e, o.ns = t, o
                        }
                    }, { key: "t", value: function() { var e; return this.translator && (e = this.translator).translate.apply(e, arguments) } }, { key: "exists", value: function() { var e; return this.translator && (e = this.translator).exists.apply(e, arguments) } }, { key: "setDefaultNamespace", value: function(e) { this.options.defaultNS = e } }, {
                        key: "hasLoadedNamespace",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                            var i = this.languages[0],
                                o = !!this.options && this.options.fallbackLng,
                                r = this.languages[this.languages.length - 1];
                            if ("cimode" === i.toLowerCase()) return !0;
                            var a = function(e, n) { var i = t.services.backendConnector.state["".concat(e, "|").concat(n)]; return -1 === i || 2 === i };
                            if (n.precheck) { var s = n.precheck(this, a); if (void 0 !== s) return s }
                            return !!this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || !(!a(i, e) || o && !a(r, e))
                        }
                    }, {
                        key: "loadNamespaces",
                        value: function(e, t) {
                            var n = this,
                                i = m();
                            return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach((function(e) { n.options.ns.indexOf(e) < 0 && n.options.ns.push(e) })), this.loadResources((function(e) { i.resolve(), t && t(e) })), i) : (t && t(), Promise.resolve())
                        }
                    }, {
                        key: "loadLanguages",
                        value: function(e, t) {
                            var n = m();
                            "string" == typeof e && (e = [e]);
                            var i = this.options.preload || [],
                                o = e.filter((function(e) { return i.indexOf(e) < 0 }));
                            return o.length ? (this.options.preload = i.concat(o), this.loadResources((function(e) { n.resolve(), t && t(e) })), n) : (t && t(), Promise.resolve())
                        }
                    }, { key: "dir", value: function(e) { return e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" : "rtl" } }, {
                        key: "createInstance",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return new t(e, n)
                        }
                    }, {
                        key: "cloneInstance",
                        value: function() {
                            var e = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V,
                                o = r({}, this.options, n, { isClone: !0 }),
                                a = new t(o),
                                s = ["store", "services", "language"];
                            return s.forEach((function(t) { a[t] = e[t] })), a.services = r({}, this.services), a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, a.translator = new F(a.services, a.options), a.translator.on("*", (function(e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                a.emit.apply(a, [e].concat(n))
                            })), a.init(o, i), a.translator.options = a.options, a.translator.backendConnector.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, a
                        }
                    }]), t
                }(h))
            },
            811: (e, t, n) => { n.r(t) },
            117: e => { e.exports = JSON.parse('{"origin-hint":{"seed":"Seed {{position}}","winner-bracket":"Loser of WB {{round}}.{{position}}","winner-bracket-semi-final":"Loser of WB Semi {{position}}","winner-bracket-final":"Loser of WB Final","consolation-final":"Loser of Semi {{position}}","grand-final":"Winner of LB Final"},"match-label":{"winner-bracket":"WB","loser-bracket":"LB","standard-bracket":"M","standard-bracket-semi-final":"Semi {{matchNumber}}","standard-bracket-final":"Final","double-elimination":"{{matchPrefix}} {{roundNumber}}.{{matchNumber}}","double-elimination-semi-final":"{{matchPrefix}} Semi {{matchNumber}}","double-elimination-final":"{{matchPrefix}} Final","consolation-final":"Consolation Final","grand-final-single":"Grand Final","grand-final":"GF Round {{roundNumber}}"},"match-status":{"locked":"Locked","waiting":"Waiting","ready":"Ready","running":"Running","completed":"Completed","archived":"Archived"},"abbreviations":{"win":"W","loss":"L","forfeit":"F","position":"P","seed":"#"},"ranking":{"rank":{"text":"#","tooltip":"Rank"},"id":{"text":"Name","tooltip":"Name"},"played":{"text":"P","tooltip":"Played"},"wins":{"text":"$t(abbreviations.win)","tooltip":"Wins"},"draws":{"text":"D","tooltip":"Draws"},"losses":{"text":"$t(abbreviations.loss)","tooltip":"Losses"},"forfeits":{"text":"$t(abbreviations.forfeit)","tooltip":"Forfeits"},"score-for":{"text":"SF","tooltip":"Score For"},"score-against":{"text":"SA","tooltip":"Score Against"},"score-difference":{"text":"+/-","tooltip":"Score Difference"},"points":{"text":"Pts","tooltip":"Points"}},"common":{"bye":"BYE","best-of-x":"Bo{{x}}","group-name":"Group {{groupNumber}}","round-name":"Round {{roundNumber}}","round-name-final":"Final Round","round-name-winner-bracket":"WB Round {{roundNumber}}","round-name-winner-bracket-final":"WB Final Round","round-name-loser-bracket":"LB Round {{roundNumber}}","round-name-loser-bracket-final":"LB Final Round"}}') },
            169: e => { e.exports = JSON.parse('{"origin-hint":{"seed":"Seed {{position}}","winner-bracket":"Perdant WB {{round}}.{{position}}","winner-bracket-semi-final":"Perdant WB Semi {{position}}","winner-bracket-final":"Perdant Finale WB","consolation-final":"Perdant Semi {{position}}","grand-final":"Gagnant Finale LB"},"match-label":{"winner-bracket":"WB","loser-bracket":"LB","standard-bracket":"M","standard-bracket-semi-final":"Semi {{matchNumber}}","standard-bracket-final":"Finale","double-elimination":"{{matchPrefix}} {{roundNumber}}.{{matchNumber}}","double-elimination-semi-final":"{{matchPrefix}} Semi {{matchNumber}}","double-elimination-final":"Finale {{matchPrefix}}","consolation-final":"Petite finale","grand-final-single":"Grande finale","grand-final":"GF Round {{roundNumber}}"},"match-status":{"locked":"Verrouillé","waiting":"En attente","ready":"Prêt","running":"En cours","completed":"Terminé","archived":"Archivé"},"abbreviations":{"win":"V","loss":"D","forfeit":"F","position":"P","seed":"#"},"ranking":{"rank":{"text":"#","tooltip":"Rang"},"id":{"text":"Name","tooltip":"Nom"},"played":{"text":"J","tooltip":"Joué"},"wins":{"text":"$t(abbreviations.win)","tooltip":"Victoires"},"draws":{"text":"N","tooltip":"Match nul"},"losses":{"text":"$t(abbreviations.loss)","tooltip":"Défaites"},"forfeits":{"text":"$t(abbreviations.forfeit)","tooltip":"Forfaits"},"score-for":{"text":"SF","tooltip":"Score pour"},"score-against":{"text":"SA","tooltip":"Score contre"},"score-difference":{"text":"+/-","tooltip":"Différence de score"},"points":{"text":"Pts","tooltip":"Points"}},"common":{"bye":"BYE","best-of-x":"Bo{{x}}","group-name":"Groupe {{groupNumber}}","round-name":"Round {{roundNumber}}","round-name-final":"Round final","round-name-winner-bracket":"WB Round {{roundNumber}}","round-name-winner-bracket-final":"WB Round final","round-name-loser-bracket":"LB Round {{roundNumber}}","round-name-loser-bracket-final":"LB Round final"}}') }
        },
        t = {};

    function n(i) { if (t[i]) return t[i].exports; var o = t[i] = { exports: {} }; return e[i].call(o.exports, o, o.exports, n), o.exports }
    n.d = (e, t) => { for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] }) }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n(153)
})();