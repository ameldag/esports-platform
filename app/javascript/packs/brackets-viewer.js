import "../css/brackets-viewer-rtl.css";
import '../css/brackets-viewer.css';
console.log("testttt");
! function(e) {
    var t = {};

    function n(r) { if (t[r]) return t[r].exports; var i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
    n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) { return e[t] }.bind(null, i));
        return r
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 1)
}([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getRanking = t.rankingHeader = t.isMajorRound = t.splitBy = void 0, t.splitBy = function(e, t) { const n = Object(); for (const r of e) n[r[t]] || (n[r[t]] = []), n[r[t]].push(r); return Object.values(n) }, t.isMajorRound = function(e) { return 1 === e || e % 2 == 0 };
        const r = { rank: { value: "#", tooltip: "Rank" }, id: { value: "Name", tooltip: "Name" }, played: { value: "P", tooltip: "Played" }, wins: { value: "W", tooltip: "Wins" }, draws: { value: "D", tooltip: "Draws" }, losses: { value: "L", tooltip: "Losses" }, forfeits: { value: "F", tooltip: "Forfeits" }, scoreFor: { value: "SF", tooltip: "Score For" }, scoreAgainst: { value: "SA", tooltip: "Score Against" }, scoreDifference: { value: "+/-", tooltip: "Score Difference" }, points: { value: "Pts", tooltip: "Points" } };

        function i(e, t, n, r) {
            if (!n || null === n.id) return;
            const i = e[n.id] || { rank: 0, id: 0, played: 0, wins: 0, draws: 0, losses: 0, forfeits: 0, scoreFor: 0, scoreAgainst: 0, scoreDifference: 0, points: 0 };
            i.id = n.id, i.played++, "win" === n.result && i.wins++, "draw" === n.result && i.draws++, "loss" === n.result && i.losses++, n.forfeit && i.forfeits++, i.scoreFor += n.score || 0, i.scoreAgainst += r && r.score || 0, i.scoreDifference = i.scoreFor - i.scoreAgainst, i.points = t(i), e[n.id] = i
        }
        t.rankingHeader = function(e) { return r[e] }, t.getRanking = function(e, t) {
            t = t || (e => 3 * e.wins + 1 * e.draws + 0 * e.losses);
            const n = {};
            for (const r of e) i(n, t, r.opponent1, r.opponent2), i(n, t, r.opponent2, r.opponent1);
            return function(e) {
                const t = Object.values(e).sort((e, t) => t.points - e.points),
                    n = { value: 0, lastPoints: -1 };
                for (const e of t) e.rank = n.lastPoints !== e.points ? ++n.value : n.value, n.lastPoints = e.points;
                return t
            }(n)
        }
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) { void 0 === r && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, r) { void 0 === r && (r = n), e[r] = t[n] }),
            i = this && this.__setModuleDefault || (Object.create ? function(e, t) { Object.defineProperty(e, "default", { enumerable: !0, value: t }) } : function(e, t) { e.default = t }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && r(t, e, n);
                return i(t, e), t
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), n(2);
        const a = n(0),
            c = o(n(3)),
            s = o(n(4));
        window.bracketsViewer = new class {
            constructor() { this.teamRefsDOM = {} }
            render(e, t, n) {
                const r = document.querySelector(e);
                if (!r) throw Error('Root not found. You must have a root element with id "root"');
                this.config = { participantOriginPlacement: n && n.participantOriginPlacement || "before", showSlotsOrigin: !n || void 0 === n.showSlotsOrigin || n.showSlotsOrigin, showLowerBracketSlotsOrigin: !n || void 0 === n.showLowerBracketSlotsOrigin || n.showLowerBracketSlotsOrigin, highlightParticipantOnHover: !n || void 0 === n.highlightParticipantOnHover || n.highlightParticipantOnHover }, this.participants = t.participants, t.participants.forEach(e => this.teamRefsDOM[e.id] = []);
                const i = a.splitBy(t.matches, "group_id");
                switch (t.stage.type) {
                    case "round_robin":
                        this.renderRoundRobin(r, "", i);
                        break;
                    case "single_elimination":
                    case "double_elimination":
                        this.renderElimination(r, "", t.stage.type, i);
                        break;
                    default:
                        throw Error("Unknown bracket type: " + t.stage.type)
                }
            }
            renderRoundRobin(e, t, n) {
                const r = c.createRoundRobinContainer();
                let i = 1;
                for (const e of n) {
                    const t = c.createGroupContainer(s.getGroupName(i++)),
                        n = a.splitBy(e, "round_id");
                    let o = 1;
                    for (const e of n) {
                        const n = c.createRoundContainer(s.getRoundName(o++));
                        for (const t of e) n.append(this.createMatch(t));
                        t.append(n)
                    }
                    t.append(this.createRanking(e)), r.append(t)
                }
                e.append(c.createTitle(t), r)
            }
            renderElimination(e, t, n, r) {
                if (e.append(c.createTitle(t)), "single_elimination" === n) return this.renderSingleElimination(e, r);
                this.renderDoubleElimination(e, r)
            }
            renderSingleElimination(e, t) {
                const n = void 0 !== t[1];
                this.renderBracket(e, a.splitBy(t[0], "round_id"), s.getRoundName), n && this.renderFinal("consolation_final", t[1])
            }
            renderDoubleElimination(e, t) {
                const n = void 0 !== t[2];
                this.renderBracket(e, a.splitBy(t[0], "round_id"), s.getWinnerBracketRoundName, !1, n), this.renderBracket(e, a.splitBy(t[1], "round_id"), s.getLoserBracketRoundName, !0), n && this.renderFinal("grand_final", t[2])
            }
            renderBracket(e, t, n, r, i) {
                const o = c.createBracketContainer(),
                    a = t.length;
                let s = 1;
                for (const e of t) {
                    const u = c.createRoundContainer(n(s));
                    for (const n of e) u.append(this.createBracketMatch(s, t, n, a, r, i));
                    o.append(u), s++
                }
                e.append(o)
            }
            renderFinal(e, t) {
                const n = document.querySelector(".bracket");
                if (!n) throw Error("Upper bracket not found.");
                const r = s.getGrandFinalName(t);
                for (let i = 0; i < t.length; i++) {
                    const o = c.createRoundContainer(s.getFinalMatchLabel(e, r, i));
                    o.append(this.createFinalMatch(e, r, t, i)), n.append(o)
                }
            }
            createRanking(e) {
                const t = c.createTable(),
                    n = a.getRanking(e);
                t.append(c.createHeaders(n));
                for (const e of n) t.append(this.createRankingItem(e));
                return t
            }
            createRankingItem(e) {
                const t = c.createRow();
                for (const n in e) {
                    let r = e[n];
                    if ("id" === n) {
                        const e = this.participants.find(e => e.id === r);
                        if (void 0 !== e) {
                            const n = c.createCell(e.name);
                            this.setupMouseHover(e.id, n), t.append(n);
                            continue
                        }
                    }
                    t.append(c.createCell(r))
                }
                return t
            }
            createBracketMatch(e, t, n, r, i, o) {
                const a = c.getBracketConnection(e, t, i, o),
                    u = s.getMatchLabel(n, e, r, i),
                    d = s.getMatchHint(e, r, i);
                return this.createMatch(n, a, u, d, i)
            }
            createFinalMatch(e, t, n, r) {
                const i = c.getFinalConnection(e, r, n),
                    o = s.getFinalMatchLabel(e, t, r),
                    a = s.getFinalMatchHint(e, r);
                return this.createMatch(n[r], i, o, a)
            }
            createMatch(e, t, n, r, i) {
                i = i || !1;
                const o = c.createMatchContainer(),
                    a = c.createTeamsContainer(),
                    u = this.createTeam(e.opponent1, r, i),
                    d = this.createTeam(e.opponent2, r, i);
                return n && a.append(c.createMatchLabel(n, s.getMatchStatus(e.status))), a.append(u, d), o.append(a), t ? (c.setupConnection(a, o, t), o) : o
            }
            createTeam(e, t, n) {
                const r = c.createTeamContainer(),
                    i = c.createNameContainer(),
                    o = c.createResultContainer();
                return null === e ? i.innerText = "BYE" : this.renderParticipant(i, o, e, t, n), r.append(i, o), e && null !== e.id && this.setupMouseHover(e.id, r), r
            }
            renderParticipant(e, t, n, r, i) {
                const o = this.participants.find(e => e.id === n.id);
                o ? (e.innerText = o.name, this.renderTeamOrigin(e, n, i)) : this.renderHint(e, n, r, i), t.innerText = "" + (n.score || "-"), c.setupWin(e, t, n), c.setupLoss(e, t, n)
            }
            renderHint(e, t, n, r) { void 0 !== n && void 0 !== t.position && this.config.showSlotsOrigin && (!this.config.showLowerBracketSlotsOrigin && r || c.setupHint(e, n(t.position))) }
            renderTeamOrigin(e, t, n) {
                if (void 0 === t.position) return;
                if ("none" === this.config.participantOriginPlacement) return;
                if (!this.config.showSlotsOrigin) return;
                if (!this.config.showLowerBracketSlotsOrigin && n) return;
                const r = n ? "P" + t.position : "#" + t.position;
                c.addTeamOrigin(e, r, this.config.participantOriginPlacement)
            }
            setupMouseHover(e, t) { this.config.highlightParticipantOnHover && (this.teamRefsDOM[e].push(t), t.addEventListener("mouseover", () => { this.teamRefsDOM[e].forEach(e => e.classList.add("hover")) }), t.addEventListener("mouseleave", () => { this.teamRefsDOM[e].forEach(e => e.classList.remove("hover")) })) }
        }
    }, function(e, t, n) {}, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.setupConnection = t.getFinalConnection = t.getBracketConnection = t.addTeamOrigin = t.setupLoss = t.setupWin = t.setupHint = t.createGroupContainer = t.createRoundRobinContainer = t.createRoundContainer = t.createTitle = t.createTable = t.createHeaders = t.createRow = t.createCell = t.createBracketContainer = t.createTeamsContainer = t.createMatchLabel = t.createMatchContainer = t.createTeamContainer = t.createNameContainer = t.createResultContainer = void 0;
        const r = n(0);
        t.createResultContainer = function() { const e = document.createElement("div"); return e.classList.add("result"), e }, t.createNameContainer = function() { const e = document.createElement("div"); return e.classList.add("name"), e }, t.createTeamContainer = function() { const e = document.createElement("div"); return e.classList.add("team"), e }, t.createMatchContainer = function() { const e = document.createElement("div"); return e.classList.add("match"), e }, t.createMatchLabel = function(e, t) { const n = document.createElement("span"); return n.innerText = e, n.title = t, n }, t.createTeamsContainer = function() { const e = document.createElement("div"); return e.classList.add("teams"), e }, t.createBracketContainer = function() { const e = document.createElement("section"); return e.classList.add("bracket"), e }, t.createCell = function(e) { const t = document.createElement("td"); return t.innerText = String(e), t }, t.createRow = function() { return document.createElement("tr") }, t.createHeaders = function(e) {
            const t = document.createElement("tr"),
                n = e[0];
            for (const e in n) {
                const n = r.rankingHeader(e),
                    i = document.createElement("th");
                i.innerText = n.value, i.setAttribute("title", n.tooltip), t.append(i)
            }
            return t
        }, t.createTable = function() { return document.createElement("table") }, t.createTitle = function(e) { const t = document.createElement("h1"); return t.innerText = e, t }, t.createRoundContainer = function(e) {
            const t = document.createElement("h3");
            t.innerText = e;
            const n = document.createElement("article");
            return n.classList.add("round"), n.append(t), n
        }, t.createRoundRobinContainer = function() { const e = document.createElement("div"); return e.classList.add("round-robin"), e }, t.createGroupContainer = function(e) {
            const t = document.createElement("h2");
            t.innerText = e;
            const n = document.createElement("section");
            return n.classList.add("group"), n.append(t), n
        }, t.setupHint = function(e, t) { e.classList.add("hint"), e.innerText = t }, t.setupWin = function(e, t, n) { n.result && "win" === n.result && (e.classList.add("win"), t.classList.add("win"), void 0 === n.score && (t.innerText = "W")) }, t.setupLoss = function(e, t, n) {
            (n.result && "loss" === n.result || n.forfeit) && (e.classList.add("loss"), t.classList.add("loss"), n.forfeit ? t.innerText = "F" : void 0 === n.score && (t.innerText = "L"))
        }, t.addTeamOrigin = function(e, t, n) { const r = document.createElement("span"); "before" === n ? (r.innerText = t + " ", e.prepend(r)) : "after" === n && (r.innerText = ` (${t})`, e.append(r)) }, t.getBracketConnection = function(e, t, n, r) { return n ? { connectPrevious: e > 1 && (e % 2 == 1 ? "square" : "straight"), connectNext: e < t.length && (e % 2 == 0 ? "square" : "straight") } : { connectPrevious: e > 1 && "square", connectNext: e < t.length ? "square" : !!r && "straight" } }, t.getFinalConnection = function(e, t, n) { return { connectPrevious: "grand_final" === e && 0 === t && "straight", connectNext: 2 === n.length && 0 === t && "straight" } }, t.setupConnection = function(e, t, n) { n.connectPrevious && e.classList.add("connect-previous"), n.connectNext && t.classList.add("connect-next"), "straight" === n.connectPrevious && e.classList.add("straight"), "straight" === n.connectNext && t.classList.add("straight") }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getLoserBracketRoundName = t.getWinnerBracketRoundName = t.getRoundName = t.getGroupName = t.getGrandFinalName = t.getMatchStatus = t.getFinalMatchHint = t.getFinalMatchLabel = t.getMatchLabel = t.getMatchHint = void 0;
        const r = n(5),
            i = n(0);
        t.getMatchHint = function(e, t, n) {
            if (!n && 1 === e) return e => "Seed " + e;
            if (n && i.isMajorRound(e)) {
                const n = Math.ceil((e + 1) / 2);
                let r = e => `Loser of WB ${n}.${e}`;
                return e === t - 2 && (r = e => I18n.t('tournaments.brackets.loser_wb_semi') + " " + e), e === t && (r = () => I18n.t('tournaments.brackets.loser_wb_final') + " "), r
            }
        }, t.getMatchLabel = function(e, t, n, r) {
            let i = "M";
            r ? i = "LB" : !1 === r && (i = "WB");
            const o = t === n - 1,
                a = t === n;
            let c = `${i} ${t}.${e.number}`;
            return !r && o && (c = I18n.t('tournaments.brackets.semi') + " " + e.number), a && (c = I18n.t('tournaments.brackets.final')), c
        }, t.getFinalMatchLabel = function(e, t, n) { return "consolation_final" === e ? "Consolation Final" : t(n) }, t.getFinalMatchHint = function(e, t) { return "consolation_final" === e ? e => "Loser of Semi " + e : 0 === t ? () => I18n.t('tournaments.brackets.winner_lb_final') : void 0 }, t.getMatchStatus = function(e) {
            switch (e) {
                case r.Status.Locked:
                    return I18n.t('tournaments.brackets.status.locked');
                case r.Status.Waiting:
                    return I18n.t('tournaments.brackets.status.waiting');
                case r.Status.Ready:
                    return I18n.t('tournaments.brackets.status.ready');
                case r.Status.Running:
                    return I18n.t('tournaments.brackets.status.running');
                case r.Status.Completed:
                    return I18n.t('tournaments.brackets.status.completed');
                case r.Status.Archived:
                    return I18n.t('tournaments.brackets.status.archived');
            }
        }, t.getGrandFinalName = function(e) { return 1 === e.length ? () => I18n.t('tournaments.brackets.grand_final') : e => "GF" + I18n.t('tournaments.brackets.round') + " " + (e + 1) }, t.getGroupName = function(e) { return I18n.t('tournaments.brackets.round') + " " + e }, t.getRoundName = function(e) { return I18n.t('tournaments.brackets.round') + " " + e }, t.getWinnerBracketRoundName = function(e) {
            return "WB" + I18n.t('tournaments.brackets.round') + e
        }, t.getLoserBracketRoundName = function(e) {
            return "LB" + I18n.t('tournaments.brackets.round') + e
        }
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Status = void 0,
            function(e) {
                e[e.Locked = 0] = I18n.t('tournaments.brackets.status.locked'),
                    e[e.Waiting = 1] = I18n.t('tournaments.brackets.status.waiting',
                        e[e.Ready = 2] = I18n.t('tournaments.brackets.status.ready'),
                        e[e.Running = 3] = I18n.t('tournaments.brackets.status.running'),
                        e[e.Completed = 4] = I18n.t('tournaments.brackets.status.completed'),
                        e[e.Archived = 5] = I18n.t('tournaments.brackets.status.archived'))
            }(t.Status || (t.Status = {}))
    }
]);