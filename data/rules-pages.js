/* Page map for the Locksmith Licensing Board's rules (21 NCAC Chapter 29) as
   the Office of Administrative Hearings publishes them, one 14-page PDF for
   the chapter. The PDF prints no page numbers, so pages are counted
   physically and the map is the identity; it exists because the engine
   deep-links citations as "#page=N" through a manual's `pages` map, and the
   validator insists every cited page resolve through it.
   A question's `ref` carries the rule number (".0402(c)"), and its `page` is
   the page that rule starts on: .0201-.0202 on 1, .0203-.0205 on 2,
   .0206-.0401 on 3, .0402 on 4, .0403-.0501 on 5, .0502 on 6, .0503-.0504
   on 7, .0601-.0602 on 8, .0611 on 9, .0613 on 10, .0614-.0616 on 11,
   .0701-.0703 on 12, .0704-.0803 on 13, .0804-.0806 on 14.
   Verified against the published PDF in August 2026. */
const RULES_PAGES = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "11": 11,
  "12": 12,
  "13": 13,
  "14": 14,
};
