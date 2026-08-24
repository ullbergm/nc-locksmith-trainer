/* Everything that names the exam this trainer studies for: the North
   Carolina Locksmith Licensing Exam, its pass mark and section balance, the
   law sources the questions cite, and the prose that mentions the license.
   The engine under js/ reads only this file and data/questions.js, so a
   trainer for a different exam is built by replacing the data/ directory and
   the page shell (index.html, manifest.webmanifest, icons, CNAME); js/
   carries no knowledge of any particular exam.
   Loads after data/questions.js, data/law-pages.js, and data/rules-pages.js
   and may read all three. */

// Section numbers are exam topics, not chapters of one book: the Board sells
// its study guide in print and the actual exam outline is topical, so the
// bank is organized by the subjects the Board says it tests. Topics 1-8 are
// the General Locksmithing material, 9 automotive, 10 safes and vaults, 11
// access control, and 12-13 the law: the Locksmith Licensing Act (G.S. 74F)
// and the Board's rules and Code of Ethics (21 NCAC 29). A question in 12 or
// 13 carries a `manual` and cites its section; the technical topics have no
// citable free source, so their questions carry no citation.
const GENERAL = [1, 2, 3, 4, 5, 6, 7, 8];
const AUTOMOTIVE = [9];
const SAFE_VAULT = [10];
const ACCESS = [11];
const LAW = [12, 13];
const ALL = [...GENERAL, ...AUTOMOTIVE, ...SAFE_VAULT, ...ACCESS, ...LAW];

const BANK_SIZE = QUESTION_BANK.length;

const EXAM_CONFIG = {
  storageKey: 'nc-locksmith-trainer-v1',      // localStorage; changing it orphans saved progress
  sessionKey: 'nc-locksmith-trainer-session', // sessionStorage mirror of the active session
  exportPrefix: 'locksmith-progress',         // backup filename: <prefix>-YYYY-MM-DD.json
  repo: 'https://github.com/ullbergm/nc-locksmith-trainer',
  // 21 NCAC 29 .0203: "The passing score for the Locksmith Licensing
  // Examination shall be 70 percent."
  passMark: 0.7,

  flatSections: true,
  sectionWord: 'topic',

  // The sources the law questions cite: the statute as the General Assembly
  // publishes it and the Board's rules as the Office of Administrative
  // Hearings publishes them, each one PDF for the whole chapter. Both are
  // cited the way lawyers and the Board cite them, by section number in
  // `ref`, and the page opens the PDF in the right place. The Board's own
  // study guide is sold in print and cannot be cited; the technical topics
  // carry no citation, so citations stay optional.
  manuals: {
    law: {
      title: 'North Carolina Locksmith Licensing Act (G.S. Chapter 74F)',
      cite: 'G.S.',  // citations read "G.S. § 74F-5(a)"
      short: '74F',
      url: 'https://www.ncleg.gov/EnactedLegislation/Statutes/PDF/ByChapter/Chapter_74F.pdf',
      pages: LAW_PAGES,
      citeByRef: true,
    },
    // Served over http because that is how the Office of Administrative
    // Hearings publishes it; it answers on nothing else.
    rules: {
      title: 'Locksmith Licensing Board Rules (21 NCAC Chapter 29)',
      cite: '21 NCAC 29', // citations read "21 NCAC 29 .0503(g)"
      short: 'Rules',
      url: 'http://reports.oah.state.nc.us/ncac/title%2021%20-%20occupational%20licensing%20boards%20and%20commissions/chapter%2029%20-%20locksmith%20licensing%20board/chapter%2029%20rules.pdf',
      pages: RULES_PAGES,
      citeByRef: true,
    },
  },

  // Mock exams. The real sitting is one 150-question paper exam balanced
  // 75 General / 20 Automotive / 15 Safe and Vault / 5 Access Control /
  // 35 Rules-Ethics-Laws (the Board publishes the balance in its application
  // instructions). The engine draws a mock exam uniformly from the listed
  // sections, so the full mock approximates that balance rather than
  // matching it; the part-sized mocks drill each part at its real weight.
  exams: [
    { key: 'full', name: 'Licensing Exam (all parts)', sections: ALL, count: 150 },
    { key: 'general', name: 'General Locksmithing part', sections: GENERAL, count: 75 },
    { key: 'auto', name: 'Automotive part', sections: AUTOMOTIVE, count: 20 },
    { key: 'safe', name: 'Safe and Vault part', sections: SAFE_VAULT, count: 15 },
    { key: 'access', name: 'Access Control part', sections: ACCESS, count: 5 },
    { key: 'law', name: 'Rules, Ethics, and Laws part', sections: LAW, count: 35 },
  ],

  // What the Settings picker offers: the whole exam, or one of its parts for
  // focused study. Everyone sits the same single exam, so the parts exist
  // for drilling weak areas rather than as separate credentials.
  tests: [
    { key: 'full', group: 'exam', name: 'NC Locksmith Licensing Exam', note: 'all 150 questions of material: every topic below', sections: ALL },
    { key: 'general', group: 'part', name: 'General Locksmithing', note: 'terminology, keys and keyways, mechanisms, duplication, rekeying, master keying, door hardware, finishes — 75 of 150 questions', sections: GENERAL },
    { key: 'auto', group: 'part', name: 'Automotive Locksmithing', note: 'wafer locks, high-security keys, transponders, lockouts — 20 of 150 questions', sections: AUTOMOTIVE },
    { key: 'safe', group: 'part', name: 'Safes and Vaults', note: 'combination locks, ratings, relockers, safe handing — 15 of 150 questions', sections: SAFE_VAULT },
    { key: 'access', group: 'part', name: 'Access Control', note: 'electric locks, credentials, fail-safe vs fail-secure — 5 of 150 questions', sections: ACCESS },
    { key: 'law', group: 'part', name: 'Rules, Ethics, and Laws', note: 'G.S. 74F and the Board’s rules and Code of Ethics — 35 of 150 questions', sections: LAW },
  ],
  testGroups: [
    ['exam', 'The licensing exam'],
    ['part', 'One part at a time'],
  ],

  // The license and designation the exam leads to, shown as a reference
  // table in About. The Board is the authority; this is a summary, so
  // `source` is linked next to it and fees should be rechecked there.
  licenses: {
    title: 'North Carolina locksmith credentials',
    source: 'https://nclocksmithboard.org/',
    sourceName: 'NC Locksmith Licensing Board',
    intro: `North Carolina licenses locksmiths under G.S. Chapter 74F. The license takes a
      completed application, an SBI/FBI fingerprint background check, the Board's exam at
      70%, and the fees; it renews every three years on 16 hours of continuing education.
      The apprentice designation is the no-exam path in: it requires the application,
      background check, and fee, and it buys up to three years working under a licensed
      locksmith's supervision before the exam must be passed.`,
    groups: [
      {
        name: 'Licensure',
        items: [
          { code: 'LK', name: 'Licensed Locksmith', who: 'anyone performing or offering locksmith services in North Carolina, from rekeying and lockouts to safes and access control', exams: 'the 150-question licensing exam at 70%', term: '3-year license, $300 issuance, $300 renewal on 16 CEU hours' },
          { code: 'AP', name: 'Apprentice Locksmith', who: 'newcomers working under a licensed locksmith’s supervision; max two per supervisor, colored badge card, no exam to start', exams: 'none to start; the licensing exam before the 3-year designation expires, or it is never granted again', term: 'up to 3 years, $300 fee, $25 transfer fee, not renewable' },
        ],
      },
    ],
  },

  // Prose that names the exam, injected as HTML into the matching views.
  homeSubtitle: `${BANK_SIZE} questions for the North Carolina Locksmith Licensing Exam — general locksmithing, automotive, safes, access control, and NC law`,
  disclaimerHTML: `The law questions were written from the
    <a href="https://www.ncleg.gov/EnactedLegislation/Statutes/PDF/ByChapter/Chapter_74F.pdf"
       target="_blank" rel="noopener">North Carolina Locksmith Licensing Act</a> (G.S. 74F) and the Board's
    <a href="http://reports.oah.state.nc.us/ncac/title%2021%20-%20occupational%20licensing%20boards%20and%20commissions/chapter%2029%20-%20locksmith%20licensing%20board/chapter%2029%20rules.pdf"
       target="_blank" rel="noopener">rules and Code of Ethics</a> (21 NCAC 29), and each cites and
    links the section it came from; check anything important against the current text,
    because statutes and rules are amended and fees and deadlines move first. The
    technical questions are standard trade knowledge with no free official source, so
    they carry no citation; accuracy is not guaranteed. The Board's own study guide is
    sold in print, its exam questions are not public, and no claim is made that these
    match or resemble them. All progress is stored locally in your browser and never
    sent to a server.`,
  aboutIntroHTML: `<p>NC Locksmith Trainer is a free, open-source study tool for the North
    Carolina Locksmith Licensing Exam: one 150-question paper exam, passed at 70%,
    balanced 75 questions of General Locksmithing, 20 Automotive, 15 Safe and Vault,
    5 Access Control, and 35 Rules, Ethics, and Laws. Its ${BANK_SIZE} questions follow
    that outline. The law questions were written from the two documents the Board tells
    applicants to read: the
    <a href="https://www.ncleg.gov/EnactedLegislation/Statutes/PDF/ByChapter/Chapter_74F.pdf"
       target="_blank" rel="noopener">Locksmith Licensing Act</a> (G.S. Chapter 74F) and the
    Board's
    <a href="http://reports.oah.state.nc.us/ncac/title%2021%20-%20occupational%20licensing%20boards%20and%20commissions/chapter%2029%20-%20locksmith%20licensing%20board/chapter%2029%20rules.pdf"
       target="_blank" rel="noopener">rules</a> (21 NCAC Chapter 29), which carry the Code of
    Ethics the Board says to review for the exam's ethical-scenario questions. Every law
    question cites its section, and the citation is a link that opens the source at the
    right page.</p>
    <p>The technical material — terminology, keyways, mechanisms, master keying, door
    hardware and handing, finishes, automotive work, safes, and access control — is the
    standard trade knowledge the Board's exam outline names, written at the level the
    Board states the exam is pitched: someone with roughly one year in the trade. People
    who have sat the exam consistently report that it leans on definitions and
    terminology, keyway identification, finish codes, basic master keying, and the
    handing of doors and safes, and the bank leans the same way.</p>`,
  aboutCaveatHTML: `<p><strong>The subject matter here is the trade's, not the Board's.</strong>
    The Board's official study guide is sold in print for $45 and cannot be quoted or
    cited here; these questions were written to the Board's published exam outline from
    trade-standard knowledge and from the two free-to-read law sources, not from the
    study guide. Serious candidates should buy the study guide from the
    <a href="https://nclocksmithboard.org/" target="_blank" rel="noopener">Board's site</a> —
    the Board says everything in it can be on the test, and it carries the diagrams and
    keyway illustrations a text bank cannot.</p>
    <p>Questions were written by a language model and reviewed for accuracy, but
    mistakes are possible and accuracy is not guaranteed. Law changes: the statute and
    rules were current when the questions were written (August 2026), and a citation
    that no longer matches the linked section is a question to report. The actual exam
    questions are not public, and no claim is made that these match or resemble
    them.</p>`,
};
