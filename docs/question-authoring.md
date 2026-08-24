# Writing the question bank

This is the recipe the question bank was written with.

## How a question is used

Knowing where each field surfaces explains most of the rules below:

- The app shuffles the choices every time a question is shown, so the
  position of the correct answer in the data does not matter. The length and
  wording of the choices show every time, so patterns there matter a lot.
- Choices phrased like "All of the above" are detected (any choice starting
  with all/none/any/both "of the above" or "of these") and kept below the
  choices they refer to, whatever the shuffle does.
- The explanation is shown after a wrong answer, in Browse, and in the mock
  exam review. It has to teach the rule on its own.
- Each question is a spaced-repetition flashcard. Two questions about the
  same fact are scheduled independently, so drilling one silently answers
  the other and inflates the readiness projection.
- A law citation becomes a deep link into the statute or rules PDF at the
  cited section's page. It is how a reader verifies a question against the
  current text, and the correction workflow depends on it.

## The schema

`data/questions.js` is a JSON array behind a `const`. Sections are exam
topics (`EXAM_CONFIG.flatSections`), following the Board's published exam
outline: 1–8 are the General Locksmithing part (terminology; keys, blanks,
and keyways; mechanisms; duplication and impressioning; rekeying and picking;
master keying; door hardware and handing; finishes), 9 Automotive, 10 Safes
and Vaults, 11 Access Control, and 12–13 the Rules/Ethics/Laws part (the Act,
then the Board's rules). Ids are `t<section>-NNN` for the technical topics,
`l12-NNN` for the statute, and `r13-NNN` for the rules.

A technical entry — trade knowledge with no citable free source (the Board's
study guide is sold in print and cannot be cited):

```json
{
  "id": "t7-012",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "...",
  "choices": ["...", "...", "...", "..."],
  "answer": 3,
  "explanation": "..."
}
```

A law entry cites the section it came from. `manual` picks the source (`law`
for G.S. Chapter 74F, `rules` for 21 NCAC 29), `ref` is the citation as it
reads ("§ 74F-5(a)", ".0503(g)"), and `page` is the PDF page that section
starts on, resolved through `data/law-pages.js` / `data/rules-pages.js`:

```json
{
  "id": "l12-004",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "...",
  "choices": ["...", "...", "...", "..."],
  "answer": 0,
  "explanation": "...",
  "manual": "law",
  "ref": "§ 74F-5(a)",
  "page": "1"
}
```

- `choices`: exactly four, all distinct.
- `answer`: 0-based index into `choices`.
- Both law manuals set `citeByRef`, so the validator rejects a law question
  without a `ref`; the technical topics carry no citation at all
  (`requireCitations` stays unset).

`npm test` runs `tests/validate-bank.js`, which enforces the schema,
uniqueness, near-duplicate stems, and citation resolution, checks the
question count stated in the README, and prints answer-length statistics.

## Rules for writing questions

1. **Do not let the correct answer be the longest choice.** Correct answers
   accumulate qualifiers; casually written distractors stay short, and a
   test-savvy reader picks the longest choice without knowing the material.
   By chance the correct answer is uniquely longest about 25% of the time;
   the validator warns above 35%.
2. **Make distractors plausible.** Same units, same order of magnitude,
   neighboring values ($200/$250/$300, 3 years/5 years), believable but
   wrong policy.
3. **One fact per question, one question per fact.** The statute and rules
   repeat themselves (fees appear in both); the bank must not.
4. **Paraphrase, never copy the source's sentences.**
5. **The explanation states the rule, not a pointer.** Never "see § 74F-9".
6. **Keep numbers exactly as the source states them** — fees, terms, day
   counts, hour counts. They are what these sources exist to fix and what
   the exam asks about.
7. **Ask about the material, not the document.** Nothing like "what does
   § 74F-5 cover"; test what the licensee has to know and do. (The one
   traditional exception: the Board's composition and procedures are
   themselves tested on the real exam, so they are material here.)
8. **Write self-contained stems.** Avoid negative stems unless the negation
   is the point, and capitalize the NOT when it is.
9. **Cite as you write, not afterwards.**

## Coverage

The exam is heavy on definitions and terminology — candidates consistently
report "regurgitating remembered definitions", keyway identification, finish
codes, basic master keying, door and safe handing, and detailed questions on
the Board itself ("how many Board members are there?"). The Board's own
instructions add: fees, renewal requirements, apprentice licensing, and
ethical scenarios from the Code of Ethics (21 NCAC 29 .0500).

A statute or rule set is read section by section; skip what is not law to
follow (expired and repealed rules, history notes). Because law is amended,
law questions cite the section rather than the page alone, so a reader who
finds a question stale can see which section to check.

## The loop

1. Read the topic's sources (or the trade references for a technical topic).
2. Draft the topic's questions with citations inline, following the rules.
3. Run `npm test`. Fix every error and look at the answer-length line.
4. Review each law question against its cited section. For model-drafted
   questions this pass is not optional.
5. Update the question count stated in the README; the validator holds the
   two in sync.

When the statute or rules are amended, re-derive the page maps in
`data/law-pages.js` / `data/rules-pages.js` and spot-check citations near
the changed sections.
