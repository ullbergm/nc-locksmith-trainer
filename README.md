# NC Locksmith Trainer

[![CI](https://github.com/ullbergm/nc-locksmith-trainer/actions/workflows/ci.yml/badge.svg)](https://github.com/ullbergm/nc-locksmith-trainer/actions/workflows/ci.yml)
[![Latest release](https://img.shields.io/github/v/release/ullbergm/nc-locksmith-trainer)](https://github.com/ullbergm/nc-locksmith-trainer/releases)
[![License: MIT](https://img.shields.io/github/license/ullbergm/nc-locksmith-trainer)](LICENSE)
[![Live site](https://img.shields.io/website?url=https%3A%2F%2Flocksmith.ullberg.io&label=locksmith.ullberg.io)](https://locksmith.ullberg.io)

[![Questions](https://img.shields.io/badge/questions-550-blue)](data/questions.js)
[![Dependencies](https://img.shields.io/badge/dependencies-none-blue)](package.json)
[![PWA](https://img.shields.io/badge/PWA-offline%20ready-blue)](manifest.webmanifest)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-blue)](CONTRIBUTING.md)
[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-blue)](https://www.conventionalcommits.org/en/v1.0.0/)

Practice questions with spaced repetition for the North Carolina Locksmith
Licensing Exam. The bank has 550 multiple-choice questions following the
Board's published exam outline — General Locksmithing, Automotive, Safe and
Vault, Access Control, and Rules/Ethics/Laws. The law questions were written
from the two documents the Board tells applicants to read: the
[Locksmith Licensing Act](https://www.ncleg.gov/EnactedLegislation/Statutes/PDF/ByChapter/Chapter_74F.pdf)
(G.S. Chapter 74F) and the Board's
[rules and Code of Ethics](http://reports.oah.state.nc.us/ncac/title%2021%20-%20occupational%20licensing%20boards%20and%20commissions/chapter%2029%20-%20locksmith%20licensing%20board/chapter%2029%20rules.pdf)
(21 NCAC Chapter 29), and each cites and links the section it came from. The
technical questions are standard trade knowledge, written at the level the
Board says the exam is pitched: someone with roughly one year in the trade.

Live at [locksmith.ullberg.io](https://locksmith.ullberg.io), or run it
yourself. There is no build step, no dependencies, and no server. Just open
`index.html` in a browser. All progress is stored locally in the browser and
never sent anywhere. Settings has export and import for backups or for moving
between devices.

## The exam

North Carolina licenses locksmiths under G.S. Chapter 74F. The exam is one
150-question paper multiple-choice sitting, passed at 70% (21 NCAC 29 .0203),
balanced 75 questions of General Locksmithing, 20 Automotive, 15 Safe and
Vault, 5 Access Control, and 35 Rules, Ethics, and Laws. Applications go in
first ($300, with an SBI/FBI fingerprint check); the exam fee is $200 per
attempt, and sittings run through the year at community colleges around the
state. The license renews every three years on 16 hours of continuing
education. The Board also issues a no-exam apprentice designation, good for at
most three years under a licensed locksmith's supervision.

The Board sells its official study guide for $45 and says everything in it
can be on the test; it carries the keyway and hardware diagrams a text bank
cannot. This trainer is a complement to it, not a substitute — see
[nclocksmithboard.org](https://nclocksmithboard.org/) for the guide, the
application, and exam dates.

## Development

```
npm ci
npm run lint
npm test
npm run test:browser
```

`npm test` validates the question bank (schema, unique ids, citation
resolution, answer-length balance) and runs the FSRS scheduler and readiness
projection suites. `npm run test:browser` drives the full app end to end in a
headless browser.

The engine — the study/exam/stats UI, FSRS scheduler, readiness projection,
storage, service worker, and structural CSS — is shared across the ullbergm
exam trainers and synced verbatim from
[trainer-engine](https://github.com/ullbergm/trainer-engine); files listed in
`MANIFEST` are owned there, and CI rejects edits to them here. This repo owns
the question bank and exam config in `data/`, the brass theme in
`css/app.css`, the page shell, icons, and these docs.

## Writing questions

[docs/question-authoring.md](docs/question-authoring.md) is the recipe the
bank was written with — the schema, the citation rules for the statute and
Board rules, and the distractor and coverage rules the validator enforces.

## License

[MIT](LICENSE). The statute and administrative code are public documents of
the State of North Carolina.
