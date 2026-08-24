/* Page map for the North Carolina Locksmith Licensing Act (G.S. Chapter 74F)
   as the General Assembly publishes it, one PDF for the whole chapter. The
   chapter is short enough that printed and physical pages coincide, so the
   map is the identity on the pages that carry statute text; it exists because
   the engine deep-links citations as "#page=N" through a manual's `pages`
   map, and the validator insists every cited page resolve through it.
   A question's `ref` carries the section number ("§ 74F-5(a)"), and its
   `page` is the page that section starts on:
   74F-1 through 74F-5 on 1, 74F-6 on 2, 74F-7 on 3, 74F-7.1 through 74F-9
   on 4, 74F-10 through 74F-15 on 5, 74F-16 on 6, 74F-17 and 74F-18 on 7.
   Verified against the published PDF in August 2026. */
const LAW_PAGES = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
};
