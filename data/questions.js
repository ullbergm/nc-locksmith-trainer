/* Question bank for the North Carolina Locksmith Licensing Exam, following
   the Board's published outline: one 150-question sitting balanced 75
   General Locksmithing, 20 Automotive, 15 Safe and Vault, 5 Access Control,
   and 35 Rules/Ethics/Laws, passed at 70%. Sections here are exam topics
   (EXAM_CONFIG.flatSections): 1-8 the General material, 9 Automotive, 10
   Safes and Vaults, 11 Access Control, 12 the Locksmith Licensing Act (G.S.
   Chapter 74F), and 13 the Board's rules and Code of Ethics (21 NCAC 29).

   The two law topics were written from the statute and rules themselves,
   the two documents the Board tells applicants to read; each question cites
   its section in `ref` and deep-links the published PDF through
   data/law-pages.js / data/rules-pages.js. The technical topics are
   standard trade knowledge; the Board's own study guide is sold in print
   and cannot be cited, so those questions carry no citation.

   Ids: t<topic>-NNN for the technical topics, l12-NNN for the statute,
   r13-NNN for the rules. docs/question-authoring.md is the recipe this
   bank was written with. */
const QUESTION_BANK = [
 {
  "id": "t1-001",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The broad portion of a key that the user grips and turns is called the:",
  "choices": [
   "blade",
   "bow",
   "shoulder",
   "tip"
  ],
  "answer": 1,
  "explanation": "The bow is the enlarged head of the key that the user holds. It also carries any stamped markings, while the blade is the portion that enters the lock."
 },
 {
  "id": "t1-002",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "On most cylinder keys, which feature stops the key at its proper insertion depth and serves as the reference point for locating the cuts?",
  "choices": [
   "the tip",
   "the keyway groove",
   "the bow",
   "the shoulder"
  ],
  "answer": 3,
  "explanation": "The shoulder is the projection where the blade meets the bow. It seats against the face of the plug, positioning the key so each cut aligns with its pin chamber, and spacing is normally measured from it."
 },
 {
  "id": "t1-003",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The end of the key blade that enters the keyway first is known as the:",
  "choices": [
   "tip",
   "throat",
   "heel",
   "post"
  ],
  "answer": 0,
  "explanation": "The tip is the leading end of the blade. On keys without a shoulder, such as many Ford automotive keys, the tip itself is used as the stop and spacing reference."
 },
 {
  "id": "t1-004",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The lengthwise grooves milled into the sides of a key blade exist primarily to:",
  "choices": [
   "mark the factory depth numbers",
   "strengthen the blade against twisting when the key is turned",
   "let the blade pass the wards of a matching keyway",
   "give the cutter wheel a guide path"
  ],
  "answer": 2,
  "explanation": "The side millings form the blade's cross-section profile. Only a blade whose grooves correspond to the keyway's wards can enter the plug, which is how keyways keep out wrong keys."
 },
 {
  "id": "t1-005",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The combination of cuts along the top edge of a key blade that actually positions the tumblers is the key's:",
  "choices": [
   "milling",
   "profile",
   "bitting",
   "broaching"
  ],
  "answer": 2,
  "explanation": "The bitting is the series of cuts that lifts each tumbler to its correct height. Milling and broaching refer to the lengthwise grooves and the keyway shape, not to the cuts."
 },
 {
  "id": "t1-006",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A string of digits such as 35241, where each digit gives the depth of one cut in order, is called the key's:",
  "choices": [
   "bitting code",
   "spacing chart",
   "keyway section",
   "index number"
  ],
  "answer": 0,
  "explanation": "A bitting code lists the depth number for each cut position, usually reading from bow to tip. With the manufacturer's depth and space data, a key can be originated from this code alone."
 },
 {
  "id": "t1-007",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "In a manufacturer's key specifications, the term spacing refers to the:",
  "choices": [
   "difference between the shallowest and deepest cuts",
   "width of the keyway opening",
   "angle of the cut walls",
   "locations of the cut centers along the blade"
  ],
  "answer": 3,
  "explanation": "Spacing gives where each cut sits along the blade, measured from the shoulder or tip. Depth, by contrast, states how far down each cut is made. Both must be correct for the key to work."
 },
 {
  "id": "t1-008",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "MACS, the maximum adjacent cut specification, limits the:",
  "choices": [
   "number of cuts allowed on one blade",
   "greatest depth difference permitted between neighboring cuts",
   "total number of depths in the manufacturer's system",
   "distance permitted between the shoulder and the first cut position"
  ],
  "answer": 1,
  "explanation": "Because cuts have sloped sides, a very deep cut next to a very shallow one would undercut the shallow cut or make the key bind. MACS states the largest depth difference two adjacent cuts may have."
 },
 {
  "id": "t1-009",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "In a pin tumbler cylinder, the part that contains the keyway and rotates when the correct key is inserted is the:",
  "choices": [
   "plug",
   "bible",
   "shell",
   "cam"
  ],
  "answer": 0,
  "explanation": "The plug is the rotating core of the cylinder. It turns inside the stationary shell, also called the housing, and its rotation is what operates the locking mechanism."
 },
 {
  "id": "t1-010",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The dividing line between the plug and the shell, where all pin stacks must break for the plug to turn, is the:",
  "choices": [
   "ward line",
   "keyway",
   "shear line",
   "bitting line"
  ],
  "answer": 2,
  "explanation": "When the correct key lifts each pin stack so the break between bottom pin and driver pin sits exactly at the plug's edge, the shear line is clear and the plug can rotate."
 },
 {
  "id": "t1-011",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The pins that rest directly on the key blade and are made in lengths matched to the cut depths are the:",
  "choices": [
   "driver pins",
   "bottom pins",
   "master pins",
   "retainer pins"
  ],
  "answer": 1,
  "explanation": "Bottom pins, also called key pins, touch the key. Each length corresponds to one cut depth so the correct cut raises the pin exactly to the shear line."
 },
 {
  "id": "t1-012",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "With no key in a pin tumbler lock, rotation of the plug is blocked because the springs push which components across the shear line?",
  "choices": [
   "the bottom pins only",
   "the plug retainers",
   "the tailpieces",
   "the driver pins"
  ],
  "answer": 3,
  "explanation": "Driver pins, also called top pins, sit above the bottom pins. At rest they are pushed down into the plug's chambers, spanning the shear line and locking the plug to the shell."
 },
 {
  "id": "t1-013",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The springs at the top of each pin chamber in a cylinder serve to:",
  "choices": [
   "keep the pin stacks pressed down against the key",
   "hold the plug in the shell",
   "return the cam to its starting position",
   "force the key back out of the keyway when it is released"
  ],
  "answer": 0,
  "explanation": "Each chamber's spring keeps constant pressure on its pin stack. This makes the pins ride the key's cuts as it enters and drops the drivers back into the plug when the key is withdrawn."
 },
 {
  "id": "t1-014",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The shaped opening in the face of the plug that admits only keys with a matching blade profile is the:",
  "choices": [
   "chamber",
   "gate",
   "shear line",
   "keyway"
  ],
  "answer": 3,
  "explanation": "The keyway is the ward-shaped slot broached through the plug. A key blank must have millings that clear the keyway's wards before its bitting can even reach the pins."
 },
 {
  "id": "t1-015",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The raised portion of a cylinder housing that contains the pin chambers, springs, and driver pins is commonly called the:",
  "choices": [
   "saddle",
   "bible",
   "hull",
   "bridge"
  ],
  "answer": 1,
  "explanation": "The bible is the projecting part of the shell above the plug. The pin chambers are drilled through it, and it holds the springs and driver pins over the plug."
 },
 {
  "id": "t1-016",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The flat bar attached to the back of a rim or key-in-knob cylinder, which transmits the plug's rotation into the lock mechanism, is the:",
  "choices": [
   "door spindle",
   "cam",
   "tailpiece",
   "hub"
  ],
  "answer": 2,
  "explanation": "A tailpiece is the loose flat actuator used on rim and key-in-knob or key-in-lever cylinders. Mortise cylinders instead use a cam screwed rigidly to the back of the plug."
 },
 {
  "id": "t1-017",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A cylinder with a threaded body that screws directly into the lock case and operates the lock with a rotating cam is a:",
  "choices": [
   "rim cylinder",
   "cam lock",
   "profile cylinder",
   "mortise cylinder"
  ],
  "answer": 3,
  "explanation": "Mortise cylinders thread into the front of a mortise lock case and are held by a set screw. The cam on the back of the plug throws the lock's mechanism as the key turns."
 },
 {
  "id": "t1-018",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A cylinder that passes through the door and is held from the inside by a mounting plate and machine screws, typically operating a surface-mounted nightlatch, is a:",
  "choices": [
   "mortise cylinder",
   "rim cylinder",
   "key-in-knob cylinder",
   "interchangeable core"
  ],
  "answer": 1,
  "explanation": "Rim cylinders are used with rim, or surface-mounted, locks such as nightlatches and exit device trim. A long flat tailpiece extends through the door into the lock body behind it."
 },
 {
  "id": "t1-019",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A small self-contained lock whose rotating flat blade directly secures a drawer, cabinet, or mailbox door is called a:",
  "choices": [
   "rim latch",
   "deadlatch",
   "cam lock",
   "unit lock"
  ],
  "answer": 2,
  "explanation": "A cam lock is a complete small lock, usually a pin tumbler or wafer cylinder, with a flat cam bolted to its rear. Turning the key swings the cam behind the frame to secure the door or drawer."
 },
 {
  "id": "t1-020",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The cylinder format common on European door hardware, with a fixed shape resembling an elongated keyhole and a cam in its center, is the:",
  "choices": [
   "profile or euro cylinder",
   "rim cylinder",
   "threaded mortise cylinder",
   "cam lock cylinder"
  ],
  "answer": 0,
  "explanation": "The euro profile cylinder has a standardized cross-section and slides into a matching cutout in the lock case, secured by one long screw. Its center-mounted cam operates the lock."
 },
 {
  "id": "t1-021",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "In master keying, the key that operates only one lock, or one keyed-alike group of locks, at the lowest level of the system is the:",
  "choices": [
   "grand master key",
   "control key",
   "change key",
   "maison key"
  ],
  "answer": 2,
  "explanation": "The change key, sometimes called the day key or operating key, is the lowest-level key. Each lock in a master system normally has its own change key combination."
 },
 {
  "id": "t1-022",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A key deliberately combinated to operate every lock in a group, even though each lock also has its own individual key, is a:",
  "choices": [
   "duplicate key",
   "master key",
   "code key",
   "construction key"
  ],
  "answer": 1,
  "explanation": "A master key operates all locks in its group, each of which is also operated by its own change key. In pin tumbler locks this is usually achieved with master wafers that create extra shear points."
 },
 {
  "id": "t1-023",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The key whose only working purpose is to install and remove interchangeable cores from their housings is the:",
  "choices": [
   "change key",
   "operating key",
   "master key",
   "control key"
  ],
  "answer": 3,
  "explanation": "Turning the control key retracts the core's control lug, letting the core be pulled from the housing. In most systems the control key is not intended to operate the lock itself."
 },
 {
  "id": "t1-024",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "An uncut key, milled for a particular keyway but not yet given any combination, is called a key:",
  "choices": [
   "blank",
   "core",
   "section",
   "pattern"
  ],
  "answer": 0,
  "explanation": "A key blank has the correct blade profile and length for a keyway but no cuts. It becomes a key only after bitting is cut into it by duplication, code cutting, or impressioning."
 },
 {
  "id": "t1-025",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A set of keys for one manufacturer, each cut across every position at a single factory depth, used to transfer accurate depths onto a blank, is known as:",
  "choices": [
   "a code book",
   "space and depth keys",
   "a master key set",
   "a set of tryout keys"
  ],
  "answer": 1,
  "explanation": "Space and depth keys, often just called depth keys, let a locksmith originate a key to factory specifications on a duplicating machine by copying each needed depth from the matching depth key."
 },
 {
  "id": "t1-026",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "Several locks purchased so that one key operates all of them, with no master keying involved, are said to be keyed:",
  "choices": [
   "random",
   "different",
   "alike",
   "in sections"
  ],
  "answer": 2,
  "explanation": "Keyed alike locks share the same combination and key. Keyed different means each lock has its own combination, so no key operates another lock in the group."
 },
 {
  "id": "t1-027",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "When stock locks are supplied keyed random, the buyer should expect that the cylinders:",
  "choices": [
   "carry assorted factory combinations, so repeats are possible",
   "are all operated by one factory key",
   "have no pins installed until keyed by a locksmith",
   "are individually guaranteed by the factory to have no duplicate combinations"
  ],
  "answer": 0,
  "explanation": "Keyed random means the locks are taken from stock with whatever combinations they happen to carry. No effort is made to key them alike or different, so duplicate bittings can occur."
 },
 {
  "id": "t1-028",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A keying arrangement that lets a contractor's key operate a building's locks during construction, and is voided once the owner's key is first used, is called:",
  "choices": [
   "maison keying",
   "construction keying",
   "rotating constant keying",
   "convenience keying"
  ],
  "answer": 1,
  "explanation": "Construction keying gives tradespeople temporary access. In the common lost-ball method, inserting and turning the owner's key drops a ball or wafer out of the shear line, permanently locking out the construction key."
 },
 {
  "id": "t1-029",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A key produced by tracing the cuts of an existing key on a duplicating machine is properly termed a:",
  "choices": [
   "first key",
   "impressioned key",
   "pattern key",
   "duplicate key"
  ],
  "answer": 3,
  "explanation": "A duplicate is copied from an existing key, so it also copies that key's wear and errors. A first key is originated without copying, for example by code cutting or impressioning."
 },
 {
  "id": "t1-030",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The hollow cylindrical tool pushed in behind a plug to hold the driver pins and springs in the shell while the plug is withdrawn is a:",
  "choices": [
   "cylinder cap tool",
   "plug spinner",
   "pinning tray",
   "plug follower"
  ],
  "answer": 3,
  "explanation": "The follower is the same diameter as the plug. Keeping it pressed against the plug as the plug comes out prevents the drivers and springs from dropping into the empty plug bore."
 },
 {
  "id": "t1-031",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The cap, clip, or screwed-on piece at the rear of a cylinder that keeps the plug from being pulled out of the shell is the plug:",
  "choices": [
   "follower",
   "gasket",
   "retainer",
   "collar"
  ],
  "answer": 2,
  "explanation": "The plug retainer holds the plug in the housing while still allowing it to rotate. It must be removed before the plug can be taken out for service or rekeying."
 },
 {
  "id": "t1-032",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A removable core with a distinctive figure-8 shaped face, made in a standardized size that fits housings from many hardware brands, is a:",
  "choices": [
   "small format interchangeable core",
   "large format interchangeable core",
   "mortise cylinder core",
   "profile cylinder core"
  ],
  "answer": 0,
  "explanation": "The SFIC, popularized by Best, has the figure-8 profile and interchanges across brands of SFIC housings. A large format interchangeable core is also control-key removable, but it is brand specific and sized like a conventional cylinder."
 },
 {
  "id": "t1-033",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "On an interchangeable core, the part that the control key retracts so the core can slide out of its housing is the:",
  "choices": [
   "throw member",
   "control lug",
   "core clip",
   "cam lever"
  ],
  "answer": 1,
  "explanation": "The control lug normally protrudes from the core body and locks it into the housing. Turning the control key pulls the lug in, freeing the core for removal without disassembling the lock."
 },
 {
  "id": "t1-034",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A flat plate with graduated slots that a finished key slides into so the depth number of each cut can be read is a key:",
  "choices": [
   "caliper",
   "follower",
   "punch",
   "gauge"
  ],
  "answer": 3,
  "explanation": "A key gauge decodes a key by showing which factory depth each cut matches. Reading the cuts of an existing key this way is one form of decoding; a key micrometer does the same job by precise measurement."
 },
 {
  "id": "t1-035",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The small, usually round trim plate that finishes the door face immediately around the base of a knob or lever is the:",
  "choices": [
   "strike",
   "faceplate",
   "rose",
   "backplate"
  ],
  "answer": 2,
  "explanation": "The rose is the trim ring behind a knob or lever. An escutcheon is a larger trim plate that covers more of the door, often surrounding both the knob and the keyhole or cylinder."
 },
 {
  "id": "t1-036",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The metal plate mortised into the door jamb, with an opening that receives the latch or bolt when the door closes, is the:",
  "choices": [
   "strike",
   "escutcheon",
   "faceplate",
   "keeper hasp"
  ],
  "answer": 0,
  "explanation": "The strike, or strike plate, is mounted on the frame and receives the projecting latchbolt or deadbolt. The faceplate, in contrast, is the plate on the edge of the door through which the bolt extends."
 },
 {
  "id": "t1-037",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The small auxiliary plunger that rides beside a latchbolt and, when held depressed by the strike, prevents the latch from being forced back is the:",
  "choices": [
   "anti-friction tongue",
   "deadlocking plunger",
   "guard bolt spring",
   "auxiliary strike pin"
  ],
  "answer": 1,
  "explanation": "When the door is closed, the strike holds the plunger in while the latchbolt extends, deadlocking the latch. This deadlatching action defeats shimming or loiding the latch with a card or shim."
 },
 {
  "id": "t1-038",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "What mainly distinguishes a deadbolt from a latchbolt?",
  "choices": [
   "a deadbolt is always longer than one inch",
   "a deadbolt is beveled so the door can slam shut",
   "a deadbolt is spring loaded so that it locks automatically as the door closes",
   "a deadbolt has no spring action and moves only by deliberate operation"
  ],
  "answer": 3,
  "explanation": "A latchbolt is beveled and spring loaded so it retracts as the door closes. A deadbolt is typically square ended and is thrown and retracted only by the key or thumbturn, so it cannot be pushed back."
 },
 {
  "id": "t1-039",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "The backset of a bored lockset is the distance from the:",
  "choices": [
   "floor to the center of the knob",
   "outer face of the bolt to the innermost tip of the latch",
   "edge of the door to the center of the cross bore",
   "strike to the edge of the jamb"
  ],
  "answer": 2,
  "explanation": "Backset is measured from the door edge to the centerline of the cross bore. The two U.S. standards are 2-3/8 inch for residential preps and 2-3/4 inch for commercial preps."
 },
 {
  "id": "t1-040",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "On a padlock, the curved bar that swings or slides open and passes through the item being secured is the:",
  "choices": [
   "staple",
   "shackle",
   "bail hasp",
   "toe bolt"
  ],
  "answer": 1,
  "explanation": "The shackle is the U-shaped or straight bar of the padlock. Its heel remains captive in the padlock body while the toe releases when the lock is opened."
 },
 {
  "id": "t1-041",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A hinged metal strap that folds over a protruding metal loop so a padlock can be inserted through the loop is called a:",
  "choices": [
   "strike bar",
   "keeper plate",
   "shackle guard",
   "hasp"
  ],
  "answer": 3,
  "explanation": "The hasp is the slotted hinged strap; the loop it drops over is the staple. With the padlock through the staple, the hasp covers its own mounting screws so they cannot be removed."
 },
 {
  "id": "t1-042",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "As a general trade term, a tumbler is any:",
  "choices": [
   "movable element that the correct key must position before the lock will operate",
   "fixed projection inside the lock that blocks a wrong key from entering or turning",
   "spring that returns the bolt to the locked position",
   "rotating disc that throws the bolt when turned"
  ],
  "answer": 0,
  "explanation": "Tumbler is the generic word covering pins, wafers, discs, and levers alike. Whatever its form, a tumbler must be moved to a precise position by the proper key before the lock can open."
 },
 {
  "id": "t1-043",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A fixed projection inside a lock or keyway whose purpose is to block the entry or rotation of an incorrect key is a:",
  "choices": [
   "gate",
   "fence",
   "ward",
   "detent"
  ],
  "answer": 2,
  "explanation": "Wards do not move; they simply obstruct keys that are not shaped to clear them. Warding is the oldest form of key control and survives in the milled grooves of modern keyways."
 },
 {
  "id": "t1-044",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A keyway is described as paracentric when its wards:",
  "choices": [
   "run only along the bottom edge of the opening",
   "extend past the vertical centerline of the keyway from each side",
   "are machined into the face of the plug rather than into the keyway walls",
   "allow any blank of the same width to enter"
  ],
  "answer": 1,
  "explanation": "In a paracentric keyway, wards from opposite walls reach beyond the centerline, giving the key a strongly serpentine cross-section. This hinders the entry and movement of picks and improves key control."
 },
 {
  "id": "t1-045",
  "section": 1,
  "sectionName": "Key and Lock Terminology",
  "question": "A code stamped on a lock or key that must first be translated through a code book or software before the bitting is known is a:",
  "choices": [
   "direct code",
   "bitting list",
   "spacing code",
   "blind code"
  ],
  "answer": 3,
  "explanation": "A blind code, such as a padlock series number, reveals nothing by itself and must be looked up. A direct code, also called a visual key code, states the bitting digits themselves, so the key can be cut from it immediately."
 },
 {
  "id": "t2-001",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Which feature of a key blank has no effect on whether the blank will actually enter and operate a lock?",
  "choices": [
   "the blade's groove milling",
   "the length of the blade",
   "the shape of the bow",
   "the thickness of the blade"
  ],
  "answer": 2,
  "explanation": "The bow is only a handle and an identification aid; its outline is not part of the working key. The blade's milling, thickness, and length are what determine whether the blank fits the keyway."
 },
 {
  "id": "t2-002",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "To confirm that an unmarked blank matches a customer's pattern key, the accepted quick check is to:",
  "choices": [
   "align the two keys at their shoulders and compare millings and silhouette",
   "weigh both keys to verify they are the same alloy",
   "insert the blank into the customer's lock and turn it gently to test the fit",
   "compare only the bow shapes of the two keys"
  ],
  "answer": 0,
  "explanation": "Sighting the two blades together, aligned at shoulder or tip, shows whether the grooves, length, and profile match. Bow shape proves nothing, and forcing an unverified blank into a lock risks jamming it."
 },
 {
  "id": "t2-003",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Designations such as KW1 and SC1 that locksmiths use across the industry for common blanks are best described as:",
  "choices": [
   "OEM factory part numbers",
   "codes assigned by the LIST Council",
   "standard keying symbols from master key system charts",
   "simplified Ilco numbers adopted as trade shorthand"
  ],
  "answer": 3,
  "explanation": "Ilco's EZ numbering gives popular blanks short codes built from the lock maker's initials plus a digit. Other blank manufacturers cross-reference their own part numbers to these EZ numbers."
 },
 {
  "id": "t2-004",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "The blank designated KW1 fits the standard five-pin residential keyway of which manufacturer?",
  "choices": [
   "Schlage",
   "Weiser",
   "Yale",
   "Kwikset"
  ],
  "answer": 3,
  "explanation": "KW1 is the everyday five-pin Kwikset blank and is among the highest-volume blanks in the United States. The KW prefix follows the convention of abbreviating the lock manufacturer's name."
 },
 {
  "id": "t2-005",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "How does the KW11 blank differ from the KW1?",
  "choices": [
   "it is a six-pin blank on the same Kwikset keyway",
   "it fits Weiser locks instead of Kwikset",
   "it is a double-sided automotive version",
   "it has a narrower blade for tighter security keyways"
  ],
  "answer": 0,
  "explanation": "KW11 carries the same Kwikset milling but a longer blade to reach a sixth chamber. It serves Kwikset's six-pin cylinders, which the shorter five-pin KW1 cannot fully operate."
 },
 {
  "id": "t2-006",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "A customer hands you a key stamped KW10. Its milling tells you the key belongs to a lock made by:",
  "choices": [
   "Arrow",
   "Kwikset",
   "Master",
   "Sargent"
  ],
  "answer": 1,
  "explanation": "KW10 is another blank in the Kwikset keyway family, used for the six-pin Titan style cylinders. Any KW-prefixed EZ number indicates Kwikset milling."
 },
 {
  "id": "t2-007",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "The SC1 blank is the standard blank for which type of cylinder?",
  "choices": [
   "Schlage six-pin commercial cylinders",
   "Kwikset five-pin residential",
   "Schlage five-pin in the C keyway",
   "Yale five-pin residential"
  ],
  "answer": 2,
  "explanation": "SC1 is the five-pin blank for Schlage's common C keyway, the usual residential Schlage configuration. It is one of the two most-cut residential blanks along with KW1."
 },
 {
  "id": "t2-008",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Compared with the SC1, the SC4 blank is:",
  "choices": [
   "cut for a completely different Schlage keyway section",
   "made only in nickel silver",
   "sized for Schlage padlocks alone",
   "the six-pin length version of the same keyway"
  ],
  "answer": 3,
  "explanation": "SC4 shares the Schlage C keyway milling but has a longer blade to serve six-pin cylinders. Six-pin cylinders are the norm in Schlage commercial work, while SC1 covers five-pin locks."
 },
 {
  "id": "t2-009",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Schlage's most common standard keyway, the one the SC1 blank enters, is designated by which letter?",
  "choices": [
   "A",
   "C",
   "E",
   "L"
  ],
  "answer": 1,
  "explanation": "The C keyway is Schlage's default open keyway for both residential and much commercial hardware. Other letters in the family designate different sections used for keyway-restricted systems."
 },
 {
  "id": "t2-010",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "The WR5 blank fits the standard keyway of which lock manufacturer?",
  "choices": [
   "Weslock",
   "Sargent",
   "Weiser",
   "Corbin"
  ],
  "answer": 2,
  "explanation": "WR5 is the common five-pin Weiser blank; WR3 is an older Weiser number also seen in the trade. The Weiser keyway is not interchangeable with Kwikset despite the similar market."
 },
 {
  "id": "t2-011",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "The Y1 blank is the standard five-pin blank for locks made by:",
  "choices": [
   "Yale",
   "Arrow",
   "Dexter",
   "Russwin"
  ],
  "answer": 0,
  "explanation": "Y1 serves Yale's common residential and light commercial keyway. Yale numbers are among the oldest in the EZ reference system."
 },
 {
  "id": "t2-012",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "The M1 blank, one of the most frequently duplicated blanks in any shop, fits:",
  "choices": [
   "Medeco high security cylinders",
   "Master padlocks",
   "mailbox cam locks",
   "Mosler safe deposit locks"
  ],
  "answer": 1,
  "explanation": "M1 is the standard blank for common Master brand laminated padlocks. Padlock keys are copied constantly, which keeps M1 near the top of blank sales lists."
 },
 {
  "id": "t2-013",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "A key that requires an AR1 blank belongs to a cylinder made by:",
  "choices": [
   "American Padlock",
   "Abus",
   "Argus",
   "Arrow"
  ],
  "answer": 3,
  "explanation": "AR1 is the standard Arrow blank. Arrow cylinders are common in commercial key-in-lever and deadbolt hardware, so the blank is a normal stock item."
 },
 {
  "id": "t2-014",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "In blank designations such as KW1, WR5, and AR1, the letter portion identifies the:",
  "choices": [
   "number of pin chambers the blank can serve",
   "manufacturer of the lock the blank fits",
   "metal the blank is made from",
   "year the keyway was introduced"
  ],
  "answer": 1,
  "explanation": "The letters abbreviate the lock maker, for example CO for Corbin, RU for Russwin, DE for Dexter, and S for Sargent. The digits distinguish blanks within that manufacturer's line."
 },
 {
  "id": "t2-015",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Two uncut residential blanks lie side by side: one shows a tightly convoluted, paracentric groove pattern, the other a broad, open, simple groove pattern. Which is which?",
  "choices": [
   "the convoluted one is Kwikset, the open one is Schlage",
   "both patterns are Schlage sections",
   "the convoluted one is Schlage, the open one is Kwikset",
   "both patterns are Kwikset generations"
  ],
  "answer": 2,
  "explanation": "Schlage's C keyway is noticeably paracentric, with deep wards reaching past the centerline that give the key a wavy cross-section. Kwikset's keyway is wider and more open with simpler milling."
 },
 {
  "id": "t2-016",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "A KW1 blank cannot be inserted into a Schlage C keyway because:",
  "choices": [
   "Schlage plugs are smaller in diameter",
   "its blade millings do not clear the keyway's wards",
   "the KW1 blade is too short to reach the pins",
   "Schlage cylinders read the key bitting from the side"
  ],
  "answer": 1,
  "explanation": "Entry depends entirely on the blade profile matching the keyway broaching. Since Kwikset and Schlage wards are shaped differently, each brand's blank is excluded from the other's keyway."
 },
 {
  "id": "t2-017",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "The conventional pin count for a standard Kwikset residential cylinder is:",
  "choices": [
   "four",
   "seven",
   "six",
   "five"
  ],
  "answer": 3,
  "explanation": "Kwikset residential locks are traditionally five-pin, matching the five-space KW1 key. Classic Schlage hardware, by contrast, is built around cylinders that can carry six pins."
 },
 {
  "id": "t2-018",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Commercial keying work favors six-pin cylinders over five-pin mainly because the extra chamber:",
  "choices": [
   "greatly increases the number of usable key changes",
   "makes the cylinder significantly harder to drill or force open",
   "lets the same key operate more than one keyway",
   "eliminates the need for master wafers"
  ],
  "answer": 0,
  "explanation": "Each added chamber multiplies the theoretical combinations by the number of depths, giving a six-pin system far more usable change keys. That capacity is what large master key systems need."
 },
 {
  "id": "t2-019",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Many automotive keys are called convenience keys because they are:",
  "choices": [
   "cut on both edges identically so they work inserted either way up",
   "supplied with a spare blank in the same package",
   "able to operate the doors, the ignition, and the trunk with a single key",
   "molded with a rubber grip for cold weather"
  ],
  "answer": 0,
  "explanation": "A double-sided convenience key carries the same bitting on both edges, so the driver never has to check which way is up. This differs from typical single-bitted house key blanks."
 },
 {
  "id": "t2-020",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "A blank made with a plain bow that carries no manufacturer name or recognizable outline is said to have a:",
  "choices": [
   "blind bow",
   "neuter bow",
   "ghost bow",
   "closed bow"
  ],
  "answer": 1,
  "explanation": "A neuter bow hides which lock brand or system the key belongs to. It is used for key control, since a found or photographed key gives away less information about the lock it operates."
 },
 {
  "id": "t2-021",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "A keyway is properly called restricted when:",
  "choices": [
   "it is paracentric and difficult to pick",
   "it accepts only six-pin length blanks",
   "its blanks were produced by fewer than three manufacturers worldwide",
   "the maker limits distribution of its blanks by contract or patent"
  ],
  "answer": 3,
  "explanation": "Restriction is about controlled blank availability, not the shape's complexity. The manufacturer supplies blanks only through authorized channels, so unauthorized duplication is difficult."
 },
 {
  "id": "t2-022",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "The strongest legally enforceable barrier against unauthorized manufacture of a high security key blank is:",
  "choices": [
   "a registered trademark on the bow",
   "an active utility patent covering the key design",
   "a Do Not Duplicate stamp on the bow",
   "membership of the maker in a locksmith association"
  ],
  "answer": 1,
  "explanation": "While a utility patent is in force, third parties cannot lawfully make or sell compatible blanks, which is the backbone of genuine key control programs. Once the patent expires, aftermarket blanks typically appear."
 },
 {
  "id": "t2-023",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Why does stamping Do Not Duplicate on a key give the owner little real protection?",
  "choices": [
   "the stamp wears off after repeated copying",
   "most key machines cannot grip a stamped bow",
   "it has no legal force and blanks for common keyways are freely available",
   "duplicating a stamped key is treated as only a minor offense in most states"
  ],
  "answer": 2,
  "explanation": "DND is merely a request; any shop can legally copy the key onto an ordinary blank. Ethical practice is to tell customers the stamp is advisory and to offer a genuinely restricted, patent-controlled system when they need real key control."
 },
 {
  "id": "t2-024",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "A key blank directory is used chiefly to:",
  "choices": [
   "record which customers hold which keys",
   "list the original bitting codes assigned to factory keyed locks",
   "show the retail price of every finished key",
   "match one maker's blank number to another maker's equivalent"
  ],
  "answer": 3,
  "explanation": "Directories show each blank's silhouette and cross-reference the numbers used by Ilco, JMA, Silca, and the original lock makers. That lets a shop find its own equivalent for any number a customer brings in."
 },
 {
  "id": "t2-025",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "An aftermarket key blank differs from an OEM blank in that it is:",
  "choices": [
   "made by an independent manufacturer to fit another maker's keyway",
   "always thinner than the factory original",
   "usable only after the original lock maker's patent has expired in all cases",
   "cut with the factory bitting already in place"
  ],
  "answer": 0,
  "explanation": "Aftermarket makers such as Ilco produce compatible blanks for other companies' unrestricted keyways. OEM blanks come from the original lock manufacturer; both work if the milling is correct."
 },
 {
  "id": "t2-026",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "A jumbo or large-bow version of a standard blank differs from the regular version in that it:",
  "choices": [
   "is made for cylinders that carry one additional pin chamber",
   "has an oversized head but an identical working blade",
   "is restricted to institutional customers",
   "is milled slightly deeper for worn locks"
  ],
  "answer": 1,
  "explanation": "Only the bow is enlarged, which helps users with limited grip strength and makes the key easy to spot on a ring. Because the blade is unchanged, it works in exactly the same locks."
 },
 {
  "id": "t2-027",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Nickel silver is preferred over plain brass for hard-use key blanks because nickel silver:",
  "choices": [
   "is much easier for duplicating machines to cut cleanly",
   "costs less per blank in quantity",
   "is harder and resists wear and bending far better",
   "takes stamping and engraving more cleanly"
  ],
  "answer": 2,
  "explanation": "Nickel silver, a copper alloy with nickel and zinc, is significantly harder than ordinary brass. Keys cut on it hold their depths much longer under daily use, which matters for master keys and frequently used keys."
 },
 {
  "id": "t2-028",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "The main drawbacks of cheap plain steel key blanks are that they:",
  "choices": [
   "rust in service and are hard on cutter wheels",
   "bend more easily than brass keys do in the keyway",
   "cannot be stamped with identification",
   "are too light to trip heavy pin springs"
  ],
  "answer": 0,
  "explanation": "Uncoated steel corrodes, and its hardness accelerates wear on duplicating machine cutters. Brass and nickel silver dominate quality blanks because they cut cleanly and do not rust."
 },
 {
  "id": "t2-029",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "In a multiplex or sectional keyway system, keyway restriction is used so that:",
  "choices": [
   "every key in the system enters every cylinder",
   "any change key can be duplicated onto any other section blank without restriction",
   "change keys fit only their own section while master keys pass several sections",
   "no master key is ever required"
  ],
  "answer": 2,
  "explanation": "Sectional families expand a master key system beyond what bitting alone allows. A change key is blocked by wards from entering other sections, while the master blank's milling clears multiple related sections."
 },
 {
  "id": "t2-030",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Older Corbin designations such as 59 and 60 that a locksmith meets on legacy hardware refer to:",
  "choices": [
   "cylinder body diameters measured in sixteenths of an inch",
   "hardware finish colors",
   "the year series of the lock case",
   "keyway families used within Corbin's multiplex keying"
  ],
  "answer": 3,
  "explanation": "Corbin's numbered designations identify related keyway groups in its multiplex system. Knowing the family tells the locksmith which blank sections belong together when servicing or extending old Corbin systems."
 },
 {
  "id": "t2-031",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "The Schlage designation written as C-K refers to:",
  "choices": [
   "the factory code series for Schlage padlocks",
   "related sectional keyways in Schlage's classic multiplex family",
   "the control key for Schlage interchangeable cores",
   "Schlage's line of double-sided automotive convenience key blanks"
  ],
  "answer": 1,
  "explanation": "Schlage's classic sectional family is lettered, with C as the common open section and other letters such as E, F, J, and K as restricted sections. The C-K range supports keyway-sectioned master key systems."
 },
 {
  "id": "t2-032",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "A blank whose milling perfectly matches the keyway may still be unusable for a particular cylinder if its:",
  "choices": [
   "bow carries the wrong brand name",
   "plating color differs from that of the original factory key",
   "blade is too short for the cylinder's number of pin chambers",
   "keyway letter is not stamped on it"
  ],
  "answer": 2,
  "explanation": "Blade length must cover every chamber in the cylinder, which is why five-pin and six-pin versions of the same keyway exist as separate blanks. Milling gets the blank into the lock; length lets it serve every cut."
 },
 {
  "id": "t2-033",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Although a bow's shape has no mechanical function, aftermarket makers still mold their bows to resemble the original manufacturer's outline because the shape:",
  "choices": [
   "lets counter staff identify the blank family at a glance",
   "is required by the lock maker's warranty terms",
   "keeps the key from rotating in the duplicating machine vise",
   "adds weight that helps the key seat fully"
  ],
  "answer": 0,
  "explanation": "Recognizable bow outlines are an identification aid. A tech sorting through a customer's ring can spot a Kwikset-style or Schlage-style head instantly and reach for the right blank hook."
 },
 {
  "id": "t2-034",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "When a shop is out of five-pin blanks for a keyway, what substitution is generally acceptable?",
  "choices": [
   "a blank from the nearest similar keyway, forced gently",
   "cutting the five spaces onto the same keyway's six-pin blank",
   "a universal blank filed to approximate shape",
   "shortening and re-milling a five-pin blank from another manufacturer"
  ],
  "answer": 1,
  "explanation": "A longer blank of the identical keyway, such as an SC4 in place of an SC1, can be cut for a five-pin lock since the extra length simply extends into the keyway. The reverse substitution fails because a short blade cannot reach the last chamber."
 },
 {
  "id": "t2-035",
  "section": 2,
  "sectionName": "Keys, Key Blanks, and Keyways",
  "question": "Blanks for a factory-restricted keyway are normally obtained by a locksmith through:",
  "choices": [
   "any wholesale blank distributor's catalog",
   "commercial duplicating houses that will copy the restricted milling on request",
   "trading stock with other local locksmiths",
   "the maker's authorized dealer program with signed end-user authorization"
  ],
  "answer": 3,
  "explanation": "Restricted programs supply blanks only to authorized dealers and keep records of who may order for each system, often requiring registered signatures. That controlled channel is what makes the keyway restricted in practice."
 },
 {
  "id": "t3-001",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "In a pin tumbler lock with no key inserted, what do the springs in each chamber do?",
  "choices": [
   "Push the driver pins down out of the shell and into the plug",
   "Hold the plug centered so it cannot wobble in the shell",
   "Force the bottom pins upward against the keyway wards",
   "Return the cam to the locked position after each turn"
  ],
  "answer": 0,
  "explanation": "At rest the springs press each driver pin down across the shear line so it sits partly in the shell and partly in the plug. With a pin bridging the shear line in every chamber, the plug cannot rotate."
 },
 {
  "id": "t3-002",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What does the correct key accomplish when it is fully inserted into a pin tumbler lock?",
  "choices": [
   "It compresses every spring solid so the drivers cannot move",
   "It pushes each bottom pin sideways into a relief cut machined into the wall of the plug",
   "It lifts each pin stack so the gap in the stack sits exactly at the shear line",
   "It rotates each pin stack a quarter turn to clear the shell"
  ],
  "answer": 2,
  "explanation": "Each cut on the key raises its pin stack a different amount so that the joint between bottom pin and driver pin lines up with the shear line. With nothing crossing the shear line, the plug is free to rotate."
 },
 {
  "id": "t3-003",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "In a pin tumbler cylinder, the shear line is best described as which of the following?",
  "choices": [
   "The line marking the deepest cut allowed on any key blade made for that keyway",
   "The circular boundary between the rotating plug and the fixed shell",
   "The slot in the plug face that the key enters",
   "The point where the tailpiece meets the cam"
  ],
  "answer": 1,
  "explanation": "The shear line is the gap at the circumference where the plug meets the cylinder shell. The lock opens only when no pin bridges that boundary, leaving the plug free to turn."
 },
 {
  "id": "t3-004",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Wafer tumbler locks are most commonly found in which group of applications?",
  "choices": [
   "Bank vault doors, safes, and ATM chests",
   "Exterior deadbolts on residential entry doors",
   "Prison cells, gates, and detention hardware",
   "Cabinets, mailboxes, and automobile locks"
  ],
  "answer": 3,
  "explanation": "Wafer locks are inexpensive and compact, so they dominate low-security uses such as file cabinets, desk locks, mailboxes, and many automotive door and ignition locks. They are rarely used where high security is required."
 },
 {
  "id": "t3-005",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What identifies a double-bitted wafer lock key?",
  "choices": [
   "It has two identical blades joined at a single bow",
   "It carries cuts along both edges of the blade to operate wafers from both sides",
   "It has one row of edge cuts plus a matching groove milled down the center of the blade",
   "It is cut on the flat face of the blade instead of the edge"
  ],
  "answer": 1,
  "explanation": "A double-bitted wafer key is cut on both edges because the lock positions wafers that must be moved from opposite sides of the keyway. Many older automotive locks used this design; single-bitted wafer keys are cut on one edge only."
 },
 {
  "id": "t3-006",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "In a lever tumbler lock, what must happen before the bolt can move?",
  "choices": [
   "Every lever must be pressed flat against the case",
   "The key must rotate the levers a full turn in sequence",
   "Each lever must be raised so its gate aligns for the fence to pass through",
   "The fence must drop away from the levers completely and come to rest on the floor of the case"
  ],
  "answer": 2,
  "explanation": "Each lever contains a gate, and a fence attached to the bolt must pass through all the gates at once. The correct key lifts every lever to exactly the right height so the gates line up and the bolt can travel."
 },
 {
  "id": "t3-007",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Lever tumbler locks remain the standard mechanism in which application?",
  "choices": [
   "Safe deposit boxes",
   "Automobile ignitions",
   "Vending machines",
   "Residential knob locks"
  ],
  "answer": 0,
  "explanation": "Safe deposit boxes almost universally use lever tumbler locks, and the design also appears in some mailboxes, lockers, and gate locks. Their flat keys and precise lever heights suit institutional use."
 },
 {
  "id": "t3-008",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "A typical safe deposit box lock requires two different keys to open. Why is it built that way?",
  "choices": [
   "One key retracts the main bolt while the other key releases the hinge pins so the door of the box can swing open",
   "The second key is a spare kept in case the first is lost",
   "Each key operates half of the levers to double the number of combinations",
   "The bank's guard key and the renter's key must both be used, so neither party can open the box alone"
  ],
  "answer": 3,
  "explanation": "Safe deposit locks are dual custody: the guard (prep) key held by the institution and the renter's key each operate a separate set of levers or a separate lock unit. Both must be turned before the bolt will move, so neither the bank nor the customer can open the box independently."
 },
 {
  "id": "t3-009",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "How does a disc detainer lock such as an Abloy padlock operate?",
  "choices": [
   "Spring-loaded discs are pressed flush with the surface of the plug by the cuts on the key blade",
   "The key rotates a stack of discs so their gates align and a sidebar can drop in",
   "Angled cuts on the key twist pins so a fence clears the bolt",
   "The key end pushes a circle of pins to a common depth"
  ],
  "answer": 1,
  "explanation": "A disc detainer key has angled cuts that rotate each disc a different amount until all the gates line up, letting the sidebar retract so the core can turn. Because the discs are not spring loaded, these locks tolerate dirt and freezing weather well."
 },
 {
  "id": "t3-010",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "A supplier's catalog describes an inexpensive cam lock as a 'disc tumbler' lock. In common American trade usage, what mechanism is that?",
  "choices": [
   "A rotating disc detainer mechanism like an Abloy",
   "A lever tumbler mechanism with a fixed fence",
   "A wafer tumbler mechanism",
   "A warded mechanism with stamped discs as wards"
  ],
  "answer": 2,
  "explanation": "In U.S. usage 'disc tumbler' is simply another name for the wafer tumbler lock found in cabinets and cam locks. It should not be confused with the disc detainer design, in which the key rotates discs against a sidebar."
 },
 {
  "id": "t3-011",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Why do warded locks provide only minimal security?",
  "choices": [
   "Their springs weaken quickly and stop holding the bolt",
   "The keyhole is large enough to reach the bolt with a finger",
   "The wards wear away after a few hundred key insertions",
   "Any key thin enough to clear the wards will operate the lock"
  ],
  "answer": 3,
  "explanation": "Wards are fixed obstructions that only block keys of the wrong shape; they do not test the key the way tumblers do. A key or tool cut down to miss the wards will turn the bolt, which is why warded locks are easily defeated."
 },
 {
  "id": "t3-012",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What is a skeleton key?",
  "choices": [
   "A warded-lock key with its bit ground down to bypass the wards of many locks",
   "A blank key that has not yet received any cuts",
   "A top master key that operates every cylinder in a large pin tumbler keying system",
   "A thin tension tool used to apply torque while picking"
  ],
  "answer": 0,
  "explanation": "A skeleton key is a warded key reduced to little more than the part that throws the bolt, so it clears the wards of many different warded locks. Its effectiveness illustrates how little protection wards actually provide."
 },
 {
  "id": "t3-013",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Tubular (axial) pin tumbler locks are the type most commonly found on which equipment?",
  "choices": [
   "Storm doors and screen doors",
   "Vending machines and coin-operated equipment",
   "Safe deposit boxes",
   "Mortise entry sets on commercial doors"
  ],
  "answer": 1,
  "explanation": "Tubular locks are standard on vending machines, coin boxes, bicycle locks, and similar equipment. Their round keys and circular pin arrangement suit compact cam-style installations."
 },
 {
  "id": "t3-014",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Where are the cuts located on the key for a tubular lock?",
  "choices": [
   "Along one edge of a flat blade, read from bow to tip",
   "Milled into the flat side of the blade as shallow dimples",
   "In a circle on the end of the round barrel, one cut per pin",
   "On both edges of a double-sided flat blade"
  ],
  "answer": 2,
  "explanation": "A tubular key is a hollow round barrel whose end face carries a ring of cuts, each one depressing a pin arranged in a circle around the plug. All pins are pushed to their shear positions at once when the key seats."
 },
 {
  "id": "t3-015",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What distinguishes a dimple lock from a conventional pin tumbler lock?",
  "choices": [
   "Its cuts are drilled into the flat face of the blade, and the pins press against that face",
   "It has no springs, relying on gravity to seat the pins",
   "Its pins rotate rather than lift when the key enters",
   "The key blade operates spring-loaded wafers arranged in two rows instead of conventional pin tumbler stacks"
  ],
  "answer": 0,
  "explanation": "A dimple lock is still a pin tumbler mechanism, but the pins bear against cone-shaped cuts milled into the face of the blade rather than against edge cuts. The blade enters with its flat side facing the pins, and many designs use pins on more than one row."
 },
 {
  "id": "t3-016",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "While picking a cylinder, a locksmith feels the plug give a small false set and then counter-rotate as a pin is pushed. Which component most likely caused that feedback?",
  "choices": [
   "A worn bottom pin whose rounded tip slides over the pick without any resistance",
   "A broken chamber spring",
   "A binding sidebar in the plug",
   "A spool driver pin catching its narrow waist at the shear line"
  ],
  "answer": 3,
  "explanation": "A spool pin has a narrow center between two full-diameter ends. Under picking tension the waist catches at the shear line, letting the plug rotate slightly into a false set, and lifting the pin further pushes the plug backward. The correct key is unaffected."
 },
 {
  "id": "t3-017",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "How does a serrated security pin resist picking?",
  "choices": [
   "Its extra weight makes it too heavy to lift with a pick",
   "Grooves cut around the pin snag repeatedly at the shear line, giving false sets",
   "It locks the spring solid whenever tension is applied",
   "Its square cross section jams the chamber and prevents any rotation of the plug at all"
  ],
  "answer": 1,
  "explanation": "The rings of shallow grooves on a serrated pin catch at the shear line one after another under tension, so the picker feels a series of false sets instead of one clean set. Serrations can appear on drivers, bottom pins, or both."
 },
 {
  "id": "t3-018",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Spool, mushroom, and serrated pins are installed in a cylinder. What effect do they have on the lock's proper key?",
  "choices": [
   "The key must be cut one depth shallower at those chambers",
   "The key needs a stronger turn to shear past the security pins",
   "None; security pins resist picking but operate normally with the correct key",
   "The key wears out faster because of the pin shapes"
  ],
  "answer": 2,
  "explanation": "Security pins are shaped to bind and give false feedback only when the plug is torqued during picking. When the correct key lifts every stack to the shear line at once, the pin shapes are irrelevant and the lock operates normally."
 },
 {
  "id": "t3-019",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What shape describes a mushroom driver pin?",
  "choices": [
   "A wide head over a narrower stem, like a mushroom cap on its stalk",
   "A cylinder with rings of grooves along its full length",
   "An hourglass with identical wide ends and a thin middle",
   "A cone that tapers to a point at the spring end"
  ],
  "answer": 0,
  "explanation": "A mushroom pin has a full-diameter head atop a reduced-diameter stem, so the lip of the head tilts and catches at the shear line under picking tension. It behaves much like a spool pin but with only one wide end."
 },
 {
  "id": "t3-020",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Inside a typical dial combination padlock, what allows the shackle to release when the correct numbers are dialed?",
  "choices": [
   "Each number dialed in sequence retracts one spring-loaded pin stack from the heel of the shackle",
   "The dial physically unscrews the shackle from the body",
   "The final number releases a spring that ejects the shackle",
   "The gates on all the wheels line up so the fence or latch can drop in and free the shackle"
  ],
  "answer": 3,
  "explanation": "Dialing the combination rotates each wheel until its gate sits under the fence or locking latch. With every gate aligned, the fence drops in, freeing the mechanism that holds the shackle."
 },
 {
  "id": "t3-021",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "On a padlock shackle, what do the terms heel and toe refer to?",
  "choices": [
   "The heel is the top bend of the shackle; the toe is its hardened core",
   "The heel is the end that stays retained in the body; the toe is the end that swings free when open",
   "The heel is the widest point of the shackle; the toe is the narrowest",
   "The heel is the exposed part that bolt cutters can grip; the toe is the part protected inside the body"
  ],
  "answer": 1,
  "explanation": "The heel is the long leg of the shackle that remains captive in the padlock body, and the toe is the short leg that releases and swings clear when the lock opens. Locking mechanisms may engage the heel only or both heel and toe."
 },
 {
  "id": "t3-022",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Why do better-quality padlocks lock the shackle with ball bearings instead of a spring-loaded latch?",
  "choices": [
   "Ball bearings keep the shackle from sticking so the lock opens faster in freezing weather",
   "Ball bearings are cheaper to produce than latch springs",
   "Positive ball bearing locking resists shim attacks that push a spring latch aside",
   "Ball bearings allow the shackle to rotate freely when locked"
  ],
  "answer": 2,
  "explanation": "A spring latch can be depressed by a thin shim slid down alongside the shackle, popping the lock open. Ball bearings seat into notches on the shackle and cannot be pushed back by a shim, so they must be released by the lock mechanism itself."
 },
 {
  "id": "t3-023",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What is the purpose of a shrouded shackle on a padlock?",
  "choices": [
   "Raised body shoulders shield most of the shackle from bolt cutters",
   "A rubber cover keeps rain and dust out of the keyway",
   "The shroud hides the brand name to prevent targeted attacks",
   "It insulates the shackle against electrical current"
  ],
  "answer": 0,
  "explanation": "A shrouded padlock extends the body up around the sides of the shackle, leaving too little exposed steel for bolt cutter jaws to grip. It is a physical attack countermeasure, not a weather feature."
 },
 {
  "id": "t3-024",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What makes a padlock rekeyable?",
  "choices": [
   "Its shackle can be swapped for one of a different diameter",
   "Its combination wheels can be reset by the owner",
   "Its keyway accepts blanks from several manufacturers",
   "Its cylinder can be removed from the body and repinned to a new key"
  ],
  "answer": 3,
  "explanation": "A rekeyable padlock is built so the cylinder comes out, usually after removing a retaining screw or the shackle, and can be repinned like any other cylinder. Non-rekeyable padlocks are assembled permanently at the factory and must be replaced to change keys."
 },
 {
  "id": "t3-025",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "How is a small format interchangeable core (SFIC) removed from its housing?",
  "choices": [
   "The operating key is turned backward one full rotation",
   "The control key is inserted and rotated about 15 degrees, retracting the control lug so the core slides out",
   "A retaining screw behind the face cap is removed with a spanner",
   "The complete lock housing is unscrewed from the door hardware first, while the keyed core remains locked inside it"
  ],
  "answer": 1,
  "explanation": "A special control key operates a separate control shear line; turning it roughly 15 degrees pulls the control lug in so the core can be withdrawn by hand. No tools or hardware disassembly are needed, which is the whole point of interchangeable cores."
 },
 {
  "id": "t3-026",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "The small format interchangeable core with its figure-8 profile is most closely associated with which manufacturer and keying system?",
  "choices": [
   "Schlage and its Everest system",
   "Medeco and its biaxial system",
   "Best and its A2 system",
   "Kwikset and its SmartKey system"
  ],
  "answer": 2,
  "explanation": "The SFIC design originated with Best, and the Best A2 pinning system with its .0125 inch increments is the standard most SFIC work follows. Many other brands now make A2-compatible cores in the same figure-8 format."
 },
 {
  "id": "t3-027",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What does the control lug on an interchangeable core actually do?",
  "choices": [
   "It extends into a recess in the housing to hold the core in place until the control key retracts it",
   "It drives the latch bolt each time an operating key turns",
   "It blocks the keyway when the wrong blank is inserted",
   "It automatically resets all the pin stacks to a neutral position whenever the core is out of its housing"
  ],
  "answer": 0,
  "explanation": "The control lug protrudes from the core body into a mating recess in the housing, physically retaining the core. Only the control key, working a dedicated control shear line, can pull the lug in and release the core."
 },
 {
  "id": "t3-028",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "From a physical security standpoint, why is a keyed knob lock alone considered weaker protection than a deadbolt on an entry door?",
  "choices": [
   "Knob locks cannot be rekeyed to match other locks",
   "Knob lock keys have fewer possible cut depths",
   "Knob locks always contain simple wafer mechanisms rather than pin tumblers, so their keys are easily copied",
   "The cylinder rides in the knob itself, which can be broken or wrenched off to expose the mechanism"
  ],
  "answer": 3,
  "explanation": "A knob lock puts the cylinder in the projecting knob, and its spring latch has a short throw; attackers can snap or wrench the knob off, or force the latch. A deadbolt's solid, longer bolt and body-mounted cylinder resist those attacks far better."
 },
 {
  "id": "t3-029",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What is the difference between a single cylinder and a double cylinder deadbolt?",
  "choices": [
   "A single cylinder has one pin stack; a double cylinder has two",
   "A single cylinder uses a key outside and a thumbturn inside; a double cylinder requires a key from both sides",
   "A single cylinder fits one door thickness; a double fits two",
   "A single cylinder deadbolt throws a half-inch bolt into the strike; a double cylinder throws a full one-inch bolt"
  ],
  "answer": 1,
  "explanation": "The terms describe how each side of the door is operated. A single cylinder deadbolt is keyed outside with an interior thumbturn, while a double cylinder deadbolt has a keyed cylinder on both faces of the door."
 },
 {
  "id": "t3-030",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Why do life safety codes restrict double cylinder deadbolts on doors required for exiting a building?",
  "choices": [
   "Their bolts are too short to satisfy commercial standards",
   "They cannot be master keyed with the rest of the building",
   "Occupants without the key could be trapped inside during a fire or other emergency",
   "Heat from a fire can expand the two cylinders enough to jam the bolt in the thrown position"
  ],
  "answer": 2,
  "explanation": "Because a double cylinder deadbolt needs a key to unlock from the inside, an occupant who cannot find the key cannot escape quickly. Egress codes generally require doors in the path of exit to open from inside without a key or special knowledge."
 },
 {
  "id": "t3-031",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "How is a mortise lock installed in a door?",
  "choices": [
   "The lock case fits into a rectangular pocket cut into the edge of the door",
   "The whole lock mounts on the interior surface of the door",
   "The mechanism slides into two bored round holes, one through the face and one in the edge",
   "The case clamps over the edge of the door like a sleeve"
  ],
  "answer": 0,
  "explanation": "A mortise lock's rectangular case sits in a deep pocket, the mortise, chiseled or machined into the door edge. A threaded mortise cylinder screws into the case, and its cam actuates the mechanism, which can combine a latch and a deadbolt in one body."
 },
 {
  "id": "t3-032",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "In ASSA high-security cylinders, what must the key satisfy in addition to lifting the pin stacks to the shear line?",
  "choices": [
   "It must depress a pin in the tip of the keyway before turning",
   "It must be magnetized to attract steel elements in the plug",
   "It must close an electrical contact inside the plug",
   "Milled side cuts on the blade must position side pins so a sidebar can retract"
  ],
  "answer": 3,
  "explanation": "ASSA twin-type cylinders add an independent sidebar controlled by a row of side pins that read milling along the side of the blade. Both the conventional shear line and the sidebar code must be correct, which greatly increases pick resistance and key control."
 },
 {
  "id": "t3-033",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "How is a night latch (rim lock) mounted, and how is it operated from outside?",
  "choices": [
   "It mortises into a deep pocket in the door edge like a mortise lock and is operated from outside by a small thumbturn mounted above the handle",
   "It mounts on the inside surface of the door, and a rim cylinder's tailpiece passes through the door to operate it from outside",
   "It mounts on the outside surface and locks with a padlock hasp",
   "It bores through the door like a knob lock and uses a lever handle"
  ],
  "answer": 1,
  "explanation": "A rim lock or night latch is surface mounted on the interior face of the door with a strike on the jamb. A separate rim cylinder installed through the door drives the mechanism with a flat tailpiece, while the inside is worked by knob or turn."
 },
 {
  "id": "t3-034",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What makes a jimmy-proof (interlocking) deadlock resistant to prying the door away from the frame?",
  "choices": [
   "Its bolt extends twice as far into the jamb as a standard deadbolt",
   "Hardened cover plates hide the gap between door and jamb",
   "Its vertical bolts drop into eyes on the surface-mounted strike, interlocking the door and jamb",
   "Its lock case is welded to a continuous steel channel that spans the full width of the door frame"
  ],
  "answer": 2,
  "explanation": "In a jimmy-proof deadlock, the Segal type being the classic example, vertical locking bolts descend through rings on a strike mounted to the jamb face. Because door and jamb are interlocked rather than bridged by a horizontal bolt, spreading the frame does not release the door."
 },
 {
  "id": "t3-035",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What is the fundamental difference between a spring bolt (latch bolt) and a deadbolt?",
  "choices": [
   "A spring bolt is beveled and retracts under pressure; a deadbolt moves only by key or turn",
   "A spring bolt is steel while a deadbolt is brass",
   "A spring bolt throws farther into the strike than a deadbolt",
   "A spring bolt is found only on padlock shackles, while a deadbolt is found only on hinged doors"
  ],
  "answer": 0,
  "explanation": "A spring bolt has an angled face and its own spring so the door can slam shut, but that same compliance means it can be forced back. A deadbolt has no spring action; once thrown it can be retracted only by deliberately operating the lock."
 },
 {
  "id": "t3-036",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "A basic spring latch can be slipped open with a credit card or celluloid strip. Which feature defeats that attack?",
  "choices": [
   "A stronger latch spring that resists finger pressure",
   "A longer beveled latch bolt that reaches much deeper into the strike box mounted on the jamb",
   "A weatherstrip seal covering the latch area",
   "A deadlatch, whose strike-depressed guard plunger blocks the latch from being pushed back"
  ],
  "answer": 3,
  "explanation": "Slipping or 'loiding' works by pressing the beveled latch back with a thin shim. A deadlatch adds an auxiliary guard plunger beside the main latch; when the door is closed the strike holds the plunger in, which deadlocks the latch against being shimmed."
 },
 {
  "id": "t3-037",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "How do anti-drill features protect a lock cylinder?",
  "choices": [
   "A soft brass face cap gums up drill bits with shavings",
   "Hardened steel inserts, pins, or rollers in the plug face and shell blunt or deflect drill bits",
   "The cylinder rotates freely so a drill cannot get purchase",
   "A brittle hardened ceramic sleeve around the plug shatters the tip of the drill bit on first contact"
  ],
  "answer": 1,
  "explanation": "Drilling attacks aim at the shear line or a sidebar so the pins or gates can be destroyed. Anti-drill designs place hardened steel elements such as inserts, rods, ball bearings, or rollers in the drill path, wearing out or wandering the bit before it reaches the mechanism."
 },
 {
  "id": "t3-038",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What is distinctive about how a Medeco high-security cylinder reads its key?",
  "choices": [
   "Magnets in the key align rotors inside the plug",
   "Telescoping pins ride inside hollow outer pins",
   "Chisel-pointed cuts at set angles rotate the pins so a sidebar can engage grooves on them",
   "Milling along the side of the blade lifts a second, independent row of spring-loaded wafers"
  ],
  "answer": 2,
  "explanation": "Medeco bottom pins must be both lifted to the shear line and rotated to a correct angle by the key's angled cuts, so that a sidebar can seat into grooves on the pins. This dual action makes picking far harder and makes unauthorized duplication difficult."
 },
 {
  "id": "t3-039",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "Mul-T-Lock cylinders are known for which pin design?",
  "choices": [
   "Telescoping pin-in-pin stacks, where an inner and an outer pin must each reach shear at the same time",
   "Lever tumblers with multiple false gates cut into each tumbler, designed to trap the fence whenever the lock is picked",
   "Free-spinning disc detainers with no springs",
   "A single long pin that reads every cut on the blade at once"
  ],
  "answer": 0,
  "explanation": "Mul-T-Lock's signature is the telescoping pin: a small inner pin rides inside a hollow outer pin, and the dimple key must set both components of every stack to their shear positions simultaneously. This effectively doubles the elements a picker must defeat in each chamber."
 },
 {
  "id": "t3-040",
  "section": 3,
  "sectionName": "Lock Types and Mechanisms",
  "question": "What does it mean when a lock cylinder is listed to UL 437?",
  "choices": [
   "It is rated to survive a building fire for one hour",
   "It has been approved for installation on electrified access control doors in commercial buildings",
   "It carries a lifetime mechanical warranty from the maker",
   "It has passed standardized attack tests, resisting picking and drilling for specified times"
  ],
  "answer": 3,
  "explanation": "UL 437 is Underwriters Laboratories' standard for key locks, requiring a cylinder to withstand defined attack tests, including picking and drilling for minimum time periods, along with impressioning and forcing resistance. The listing is a common benchmark for calling a cylinder high security."
 },
 {
  "id": "t4-001",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "On a standard key duplicating machine, how is the pattern of the original key transferred to the blank?",
  "choices": [
   "The original rides against a guide or stylus while the cutter wheel makes the same movements on the blank",
   "The machine measures the original electronically and punches the blank",
   "The original key is clamped directly on top of the blank so both keys pass under the cutter wheel together",
   "The operator reads each cut with a gauge and dials the depths in by hand"
  ],
  "answer": 0,
  "explanation": "A duplicator holds the original and the blank in paired vises on the same carriage. As the operator traces the original's cuts along the guide (stylus), the cutter wheel removes matching material from the blank."
 },
 {
  "id": "t4-002",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "Before cutting a duplicate, why must both keys be gauged in the vises by their shoulders or tips?",
  "choices": [
   "Gauging keeps the bows of both keys clear of the carriage so they cannot strike the spinning cutter wheel during the pass",
   "If the keys are not aligned to the same reference point, every cut lands in the wrong position along the blade",
   "Gauging measures the blade thickness for the correct cutter",
   "It ensures both vises apply equal clamping pressure"
  ],
  "answer": 1,
  "explanation": "The guide and cutter move together, so the original and blank must occupy identical positions in their vises. Aligning both keys off the shoulder, or off the tip for tip-stopped keys, guarantees the cut spacing transfers accurately."
 },
 {
  "id": "t4-003",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "Why does a copy of a copy of a copy eventually stop working in the lock?",
  "choices": [
   "Later generations are usually cut on cheaper, softer brass blanks, which wear down far more quickly in the lock",
   "Each duplication demagnetizes the blade slightly",
   "Small machine and alignment errors accumulate with each generation until the cuts fall outside tolerance",
   "The bow markings become unreadable so the blank cannot be identified"
  ],
  "answer": 2,
  "explanation": "Every duplication introduces slight error from vise alignment, guide wear, and cutter condition. Copying a copy stacks those errors generation after generation, and the bitting eventually drifts beyond the tolerance the lock will accept."
 },
 {
  "id": "t4-004",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "After cutting a key, what is the standard way to remove the burrs left on the blade?",
  "choices": [
   "Soak the key briefly in solvent",
   "Tap the blade flat with a small hammer",
   "Run the key through the lock several times",
   "Brush the key against the machine's wire brush wheel"
  ],
  "answer": 3,
  "explanation": "Cutting leaves sharp burrs along the edges of the cuts that can hang up in the lock and shave brass into the chambers. A quick pass on the wire brush wheel fitted to most key machines deburrs and smooths the blade before the key is handed over."
 },
 {
  "id": "t4-005",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "What can a code cutting machine do that a duplicating machine cannot?",
  "choices": [
   "Cut a correct key from depth and space numbers with no original key present",
   "Cut blanks made of hardened steel",
   "Copy a key without clamping it in a vise",
   "Cut both edges of a double-sided automotive key in a single pass of the cutter"
  ],
  "answer": 0,
  "explanation": "A duplicator can only trace an existing key, but a code machine positions each cut by the manufacturer's spacing and cuts it to a numbered depth. That lets a locksmith originate a factory-spec key from nothing but the code."
 },
 {
  "id": "t4-006",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "How does a punch-style code machine form the cuts on a key?",
  "choices": [
   "A motor-driven rotating wheel mills each cut while a stylus traces a master pattern bar",
   "A lever-driven punch shears each cut to the selected depth at the selected spacing",
   "A laser burns the bitting into the blade",
   "An abrasive belt grinds the whole bitting profile at once"
  ],
  "answer": 1,
  "explanation": "A punch machine uses a die and lever to stamp out each cut individually, with depth and spacing set by the machine's indexing for that key system. Punched cuts are square and accurate, and the machine needs no motor."
 },
 {
  "id": "t4-007",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "A customer supplies only the code XJ437 stamped on a cabinet lock. What must the locksmith do before this blind code can be cut?",
  "choices": [
   "Measure the keyway with a micrometer to derive the depths",
   "Impression the lock instead, because codes stamped on hardware can never be cut directly",
   "Translate the blind code into the actual bitting using a code book or code software",
   "Call the manufacturer for permission to cut the code"
  ],
  "answer": 2,
  "explanation": "A blind (indirect) code is a reference number that reveals nothing about the cuts by itself. It must be looked up in a code book or code program, which returns the direct bitting and the depth and space data needed to cut the key."
 },
 {
  "id": "t4-008",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "What is a direct code?",
  "choices": [
   "A code assigned by the factory that must be kept confidential",
   "A code that only works on interchangeable core systems",
   "The serial number of the lock housing",
   "A number whose digits are the actual cut depths of the key"
  ],
  "answer": 3,
  "explanation": "A direct or visual code states the bitting itself; each digit is the depth of one cut in order. Anyone with the depth and space data for that system can cut the key straight from the number, with no code book lookup required."
 },
 {
  "id": "t4-009",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "Why can a Schlage depth and space chart not be used to cut a Kwikset key by code?",
  "choices": [
   "Depth increments, spacing positions, and gauging data are specific to each manufacturer's system",
   "Kwikset does not publish codes for its keys",
   "Schlage charts are metric while Kwikset charts are in inches",
   "Kwikset keys must be punched at the factory and cannot be cut to code on any machine a locksmith owns"
  ],
  "answer": 0,
  "explanation": "Every manufacturer defines its own depth increments, number of depths, cut-to-cut spacing, and reference point. Cutting one maker's key with another maker's chart puts every cut at the wrong place and depth, so the correct chart for the exact system is required."
 },
 {
  "id": "t4-010",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "What tools does a locksmith use to read the depth numbers off an existing key?",
  "choices": [
   "A plug follower and a shim",
   "A key gauge or a micrometer",
   "A pippin file and a light",
   "A broach and a pin tray"
  ],
  "answer": 1,
  "explanation": "A key gauge is slid along each cut to read its depth number directly, while a micrometer or caliper measures the remaining blade material for comparison against the depth chart. Decoding a key this way converts it into a bitting that can be cut by code."
 },
 {
  "id": "t4-011",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "A customer's only key is badly worn but still works. What is the best way to produce a new key?",
  "choices": [
   "Duplicate the worn key on a tracing machine and polish the copy",
   "Duplicate the worn key, then file each cut slightly deeper",
   "Decode the worn key's original depths and cut a fresh key by code",
   "Cast the worn key in a mold and duplicate the casting"
  ],
  "answer": 2,
  "explanation": "Duplicating a worn key faithfully reproduces the wear, giving a copy at least as far out of spec as the original. Decoding the cuts back to their intended factory depth numbers and cutting by code produces a new key at true specification."
 },
 {
  "id": "t4-012",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "How is a blank prepared before impressioning a pin tumbler lock?",
  "choices": [
   "The blade is roughened with coarse sandpaper to hold graphite",
   "The blade is heated so the pins will dent it more easily",
   "The blade is coated with layout dye and dried",
   "The top edge of the blade is filed smooth and clean so pin marks will show"
  ],
  "answer": 3,
  "explanation": "Impressioning depends on seeing tiny marks left by the binding pins, so the blank's bitting edge is first dressed smooth and shiny with a file. Fresh marks stand out clearly against the prepared surface after each round of manipulation."
 },
 {
  "id": "t4-013",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "During impressioning, what does the locksmith do with the blank while it is in the lock?",
  "choices": [
   "Apply turning pressure to bind the pins, then rock the key so they mark the blade",
   "Slide the blank rapidly in and out of the keyway so the pin tips scratch lines along the blade",
   "Hold it perfectly still for a minute so the springs emboss it",
   "Tap the bow with a mallet to bounce the pins"
  ],
  "answer": 0,
  "explanation": "The blank is turned firmly to bind the pins against their chambers, then rocked or wiggled up and down so the bound pins impress marks into the blade. The key is then removed, filed at the marks, and the cycle repeats until the lock opens."
 },
 {
  "id": "t4-014",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "While impressioning, marks appear at some positions on the blank but not at others. What do the positions without marks indicate?",
  "choices": [
   "Those chambers contain no pins at all",
   "Those pins are not currently binding, so they leave no mark and need no filing yet",
   "The lock must contain security pins and cannot be impressioned, so the job should be stopped",
   "Those cuts are already too deep and the blank is ruined"
  ],
  "answer": 1,
  "explanation": "Only pins that are binding under the turning pressure press hard enough to mark the blade. Positions without marks are either not binding yet or already at correct depth, so the rule is to file only where marks appear and re-test."
 },
 {
  "id": "t4-015",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "Which file is traditionally used to shape the cuts while impressioning a key?",
  "choices": [
   "A flat bastard file",
   "A triangular saw file",
   "A pippin or round file",
   "A half-round wood rasp"
  ],
  "answer": 2,
  "explanation": "A pippin file, with its rounded teardrop cross section, or a fine round file cuts the smooth rounded valleys that let pins ride the blade without snagging. Fine Swiss-cut versions remove metal in the small controlled amounts impressioning demands."
 },
 {
  "id": "t4-016",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "Which group of locks generally responds well to impressioning?",
  "choices": [
   "Disc detainer, tubular, and electronic locks",
   "Combination padlocks and safe locks",
   "High-security sidebar cylinders of any brand",
   "Pin tumbler, warded, and lever tumbler locks"
  ],
  "answer": 3,
  "explanation": "Standard pin tumbler cylinders mark a prepared blank well, warded locks can be impressioned by smoking the blank to show ward contact, and lever locks mark through the same binding principle. These three families are the classic impressioning candidates."
 },
 {
  "id": "t4-017",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "Why are many high-security cylinders very difficult to impression?",
  "choices": [
   "Elements such as sidebars do not bear on the key edge, so they leave no usable marks on the blank",
   "Their keyways are broached so wide that a blank can never bind tightly enough to take a readable mark",
   "Their pins are lubricated so they cannot grip the blade",
   "Their springs are too weak to press the pins onto the key"
  ],
  "answer": 0,
  "explanation": "Impressioning reads marks made where binding components contact the blade. Sidebar codes, rotating pin angles, and similar secondary systems are not expressed as pressure on the blade edge, so the blank never shows what those elements require."
 },
 {
  "id": "t4-018",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "What is foil impressioning?",
  "choices": [
   "Wrapping a worn key in foil to take up slack in the keyway",
   "A technique in which soft foil on a special tool takes the pin impressions and forms a working key surface",
   "Coating a blank in foil so the file marks are easier to see",
   "Casting a duplicate key by pouring molten low-temperature metal into a mold formed from several layers of foil"
  ],
  "answer": 1,
  "explanation": "In foil impressioning, a carrier tool holds thin soft foil into the lock; manipulating the tool lets the tumblers press their own depths into the foil until the assembly turns the lock. The method is known to work against certain dimple and other locks."
 },
 {
  "id": "t4-019",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "What does key casting involve?",
  "choices": [
   "Machining a key from a solid billet on a milling machine",
   "Electroplating a plastic key to stiffen it",
   "Making a mold impression of an existing key and pouring a low-melting-point alloy copy",
   "Stamping large volumes of identical keys out of flat sheet stock with a factory die press"
  ],
  "answer": 2,
  "explanation": "Casting duplicates a key by pressing it into a mold material such as clay or silicone, then filling the cavity with a low-temperature alloy. It shows why brief unsupervised access to a key can compromise it, and the soft casting is typically used once or traced to cut a proper blank."
 },
 {
  "id": "t4-020",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "A key has snapped off inside a cylinder. What is the correct first approach to remove it?",
  "choices": [
   "Insert the broken bow half of the key to push the fragment all the way through the lock",
   "Squirt adhesive onto a probe and glue it to the fragment",
   "Drill a small hole into the fragment for a screw",
   "Slide a key extractor along the bitting to hook the fragment and draw it out"
  ],
  "answer": 3,
  "explanation": "A spiral or hooked extractor is worked in alongside the blade, engages the cuts of the fragment, and pulls it straight out, often with light lubricant to help. Anything that pushes the piece deeper, such as probing from the front or inserting another key, makes extraction harder."
 },
 {
  "id": "t4-021",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "How many cut depths does the standard Schlage residential/commercial key system use?",
  "choices": [
   "Ten depths, numbered 0 through 9",
   "Seven depths, numbered 1 through 7",
   "Eight depths, numbered 1 through 8",
   "Five depths, numbered A through E"
  ],
  "answer": 0,
  "explanation": "Schlage's classic system defines ten depths numbered 0 through 9, with 0 the shallowest cut. The fine increments give many usable combinations but demand accurate cutting."
 },
 {
  "id": "t4-022",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "The standard Kwikset key system uses which range of depth numbers?",
  "choices": [
   "0 through 9",
   "1 through 7",
   "1 through 10",
   "2 through 8"
  ],
  "answer": 1,
  "explanation": "Kwikset uses seven depths numbered 1 through 7, with 1 the shallowest. Its larger depth increments make Kwikset keys more forgiving to cut than systems with ten depths."
 },
 {
  "id": "t4-023",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "In most American key systems, what does a higher depth number on a bitting mean?",
  "choices": [
   "A shallower cut that leaves more blade material",
   "A wider cut across the blade",
   "A deeper cut, with more material removed from the blade",
   "A cut positioned closer to the bow"
  ],
  "answer": 2,
  "explanation": "By common convention the depth numbers increase as the cuts get deeper, so a 9 in a Schlage bitting is nearly down to the bottom of the blade while a 0 is barely cut. A few systems reverse this, which is why the chart for the specific system must be checked."
 },
 {
  "id": "t4-024",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "What is the root depth of a key cut?",
  "choices": [
   "The depth of the deepest cut allowed on the blank",
   "The distance from the tip of the key to the first cut",
   "The angle of the flat at the bottom of the cut",
   "The measurement from the bottom of the cut to the bottom of the blade"
  ],
  "answer": 3,
  "explanation": "Root depth is the material remaining under a cut, measured from the bottom (root) of the cut to the bottom of the blade. Micrometer readings of root depth are compared against the manufacturer's chart to identify each cut's depth number."
 },
 {
  "id": "t4-025",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "What does MACS stand for, and what does it limit?",
  "choices": [
   "Maximum adjacent cut specification, the greatest depth difference allowed between neighboring cuts on a key",
   "Master and change key specification, the greatest spread permitted between master key and change key cuts in one chamber",
   "Minimum allowable cut spacing, the closest two cuts may sit on the blade",
   "Manufacturer approved cutting standard, the list of machines certified for a keyway"
  ],
  "answer": 0,
  "explanation": "MACS is the maximum adjacent cut specification. Because cutters have angled flanks, a very deep cut next to a very shallow one would clip away part of the shallow cut, so each system caps how much neighboring depths may differ."
 },
 {
  "id": "t4-026",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "A customer asks the locksmith to stamp the key's code on new duplicates for easy reordering. What practice applies?",
  "choices": [
   "Codes must never be stamped on keys under any circumstances",
   "Stamp the code only with the customer's informed consent, since anyone who sees the key can have it cut from the code",
   "Stamping codes on duplicates is required by trade practice so that future locksmiths can verify the bitting before cutting more copies",
   "Stamp the code only on the master key, never on change keys"
  ],
  "answer": 1,
  "explanation": "A stamped code turns a glance at the key, or at a photo of it, into everything needed to cut a working copy. The customer should understand that risk and expressly agree before codes are marked on their keys."
 },
 {
  "id": "t4-027",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "What is the difference between a shoulder-stopped key and a tip-stopped key?",
  "choices": [
   "A shoulder-stopped key has a shoulder on both edges; a tip-stopped key has one",
   "A shoulder-stopped key works only in mortise cylinders, while a tip-stopped key works only in rim cylinders",
   "A shoulder-stopped key registers from its shoulder, while a tip-stopped key registers from the tip of the blade",
   "A shoulder-stopped key is always longer than a tip-stopped key"
  ],
  "answer": 2,
  "explanation": "The stop is the reference surface that halts the key at its seated position, and all cut spacing is measured from it. Most conventional keys stop on the shoulder near the bow, while tip-stopped keys seat against the far end of the keyway, so machines must gauge them from the tip."
 },
 {
  "id": "t4-028",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "When clamping a Best small format interchangeable core key for cutting, which reference point must be used?",
  "choices": [
   "The bow, because SFIC blades have no usable stop",
   "The shoulder, like a standard Schlage key",
   "The first cut, which doubles as the gauge point",
   "The tip, because Best SFIC keys are tip gauged"
  ],
  "answer": 3,
  "explanation": "Best SFIC keys are tip-stopped: they seat against the end of the keyway and their spacing is referenced from the tip, not the shoulder. Gauging one from the shoulder shifts every cut and produces a key that will not operate the core."
 },
 {
  "id": "t4-029",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "When writing out the bitting of a key such as 25473, in what order are the cuts read?",
  "choices": [
   "From the bow toward the tip",
   "From the tip toward the bow",
   "From the deepest cut to the shallowest",
   "In whatever order the code book lists them"
  ],
  "answer": 0,
  "explanation": "Standard practice records the cuts starting at the cut nearest the bow and proceeding toward the tip. Consistent order matters because reversing a bitting produces a completely different, wrong key."
 },
 {
  "id": "t4-030",
  "section": 4,
  "sectionName": "Key Duplication, Impressioning, and Code Work",
  "question": "On a depth and space chart, what do the space values define?",
  "choices": [
   "How much blade material remains under each cut",
   "The position of each cut along the blade, measured from the key's stop",
   "The width of the keyway broaching",
   "The clearance between the key and the plug face"
  ],
  "answer": 1,
  "explanation": "Spaces locate the centers of the cuts along the length of the blade, measured from the shoulder or tip reference. Depths state how deep each cut goes; together the two sets of numbers fully define a factory-spec key."
 },
 {
  "id": "t5-001",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What is the purpose of the plug follower used during a pin tumbler rekey?",
  "choices": [
   "It keeps the driver pins and their springs captive in the shell as the plug slides out",
   "It aligns each new bottom pin to the shear line while the plug is being reinserted by hand",
   "It sorts the loose bottom pins by their measured length in thousandths of an inch",
   "It supplies the rotational tension the plug needs in order to turn during service"
  ],
  "answer": 0,
  "explanation": "The plug follower, also called a following tool, replaces the plug as it is pushed out so the driver pins and their springs stay trapped in the shell instead of spilling out. This lets the technician work on the plug and bottom pins without disassembling the whole cylinder."
 },
 {
  "id": "t5-002",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "Why does a locksmith rekey an existing lock instead of replacing it?",
  "choices": [
   "Rekeying upgrades the existing lock body to a noticeably higher security grade",
   "The existing hardware stays in place while a new key is made to run it",
   "Rekeying lets the existing cylinder accept an entirely different keyway family",
   "Rekeying is the only route available for adding the lock to a master system"
  ],
  "answer": 1,
  "explanation": "Rekeying changes which key operates a cylinder while leaving the existing lock hardware in place, which is faster and cheaper than swapping the whole unit. It does not change the lock's grade or keyway."
 },
 {
  "id": "t5-003",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "When rekeying a pin tumbler cylinder, what happens to the old bottom pins?",
  "choices": [
   "They are carefully filed shorter so that they match the depths of the new key",
   "They are flipped end for end and then reused in the very same chambers",
   "They are dumped out and swapped for new pins sized to the new key",
   "They are pushed up into the shell so they sit above the cylinder shear line"
  ],
  "answer": 2,
  "explanation": "The old bottom pins are removed from the plug and discarded, then fresh bottom pins are selected so each one sits flush with the plug surface at the shear line for the new key. The driver pins and springs stay in the shell throughout."
 },
 {
  "id": "t5-004",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "In what unit are the bottom pins in a standard pinning kit measured and sorted?",
  "choices": [
   "Whole millimeters",
   "Sixteenths of an inch",
   "Standard wire gauge numbers",
   "Thousandths of an inch"
  ],
  "answer": 3,
  "explanation": "Pin lengths in a pinning kit are graduated in thousandths of an inch, with each depth increment a fixed number of thousandths taller than the last. Selecting the correct thousandth for each cut is what sets the key to the shear line."
 },
 {
  "id": "t5-005",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "A customer wants their Schlage-keyway lock rekeyed to accept a Kwikset key they already own. What must the locksmith explain?",
  "choices": [
   "Changing to a different keyway is not possible without changing the cylinder",
   "A standard pinning kit can be used to bridge the two different keyways easily",
   "The two keys can simply be filed down until they share one common bitting",
   "Rekeying the plug on its own can be made to match the other brand key"
  ],
  "answer": 0,
  "explanation": "Rekeying only changes the bottom pins within the existing keyway, so a key cut for a different keyway will not enter or turn the plug. Accepting a different keyway requires replacing the cylinder itself."
 },
 {
  "id": "t5-006",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What makes a Kwikset SmartKey-style lock different from a conventional pin tumbler lock?",
  "choices": [
   "It cannot be rekeyed by anyone at all once it has first been installed",
   "The owner can reset it to a new key with a learn tool and no disassembly",
   "It relies on a magnetic key that carries no mechanical cuts on the blade",
   "It has no shear line and instead depends entirely on the deadbolt throw"
  ],
  "answer": 1,
  "explanation": "User-rekeyable locks such as the SmartKey design let the owner reset the cylinder to a new key using the working key and a small learn tool, with no pinning or plug removal. This is a marketed convenience feature, not a security upgrade over standard pinning."
 },
 {
  "id": "t5-007",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "After new bottom pins are loaded for a rekey, how should each one sit relative to the plug?",
  "choices": [
   "Slightly above the plug face so that the pin visibly protrudes outward",
   "Recessed below the plug surface by a small margin of a few thousandths",
   "Flush with the plug surface at the shear line with the key seated",
   "At one single uniform height in every chamber no matter the cut"
  ],
  "answer": 2,
  "explanation": "Each new bottom pin must bring its cut to the shear line, sitting flush with the top of the plug when the correct key is fully seated. A pin that is too tall or too short will bind or fail to lift the driver clear."
 },
 {
  "id": "t5-008",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "How does shimming open a pin tumbler cylinder work?",
  "choices": [
   "A shim is forced into the keyway hard enough to snap off the bottom pins one after another",
   "A shim takes the place of the plug follower during the reassembly of the cylinder body",
   "A magnetized shim draws the driver pins upward and out of the plug so it can turn freely",
   "A shim reaches the shear line and slides under each stack as the key backs out cut by cut"
  ],
  "answer": 3,
  "explanation": "Shimming inserts a thin shim between plug and shell at the shear line, then captures each chamber as the key is pulled back cut by cut, freeing the plug without the key. It is a disassembly and diagnostic technique, not a destructive one."
 },
 {
  "id": "t5-009",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "Why is a tension wrench required whenever a lock is picked?",
  "choices": [
   "It applies the rotational pressure that holds set pins above the shear line",
   "It raises every one of the pins to the shear line entirely on its own",
   "It measures the depth of each individual pin cut at the moment it is set precisely",
   "It removes the need for a pick whenever spool security pins are present"
  ],
  "answer": 0,
  "explanation": "The tension wrench, also called a torsion wrench, applies light turning pressure to the plug so that each pin set at the shear line is held there by the resulting ledge. Without tension, lifted pins simply drop back down and nothing is accomplished."
 },
 {
  "id": "t5-010",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What distinguishes single-pin picking from raking?",
  "choices": [
   "Single-pin picking needs no tension wrench at all while raking always requires one",
   "Single-pin picking sets each pin individually while raking disturbs many pins at once",
   "Raking sets each pin in a precise front-to-back order while single-pin picking is random",
   "Raking can only ever be performed using a hook pick together with very light tension"
  ],
  "answer": 1,
  "explanation": "Single-pin picking manipulates one pin stack at a time until each sets at the shear line, while raking scrubs the pick across all pins quickly hoping several set together. Single-pin picking is slower but more reliable against tighter tolerances."
 },
 {
  "id": "t5-011",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "For what task is a hook pick best suited?",
  "choices": [
   "Scrubbing across all of the pins in one rapid pass",
   "Opening wafer locks with no tension applied at all",
   "Setting each of the individual pins one at a time",
   "Cutting the new bottom pins down to their depth"
  ],
  "answer": 2,
  "explanation": "The hook pick has a narrow tip that reaches a single pin stack, making it the standard tool for single-pin picking. Rakes and snakes, by contrast, are shaped to work many pins at once."
 },
 {
  "id": "t5-012",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "A rake or snake pick is designed primarily to do what?",
  "choices": [
   "Set one single stubborn spool pin slowly at a time",
   "Apply the rotational tension to the plug as it turns freely",
   "Extract a broken key blade lodged in the keyway",
   "Disturb many pins at once hoping several set together"
  ],
  "answer": 3,
  "explanation": "Rake and snake picks have multiple bumps or a wavy profile so that a quick scrubbing motion agitates several pin stacks simultaneously. This raking approach is fast on loose locks but less controlled than single-pin picking."
 },
 {
  "id": "t5-013",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "How does a pick gun, also called a snap gun, open a pin tumbler lock?",
  "choices": [
   "It transfers a sharp impact so the drivers jump above the shear line",
   "It grinds each of the pins down to the level of the cylinder shear line",
   "It magnetically pulls the driver pins upward and then holds them up there",
   "It rotates the plug far faster than a hand-held tension wrench ever could"
  ],
  "answer": 0,
  "explanation": "A pick gun snaps its blade against the bottom pins, and the transferred energy makes the driver pins bounce above the shear line for an instant while light tension turns the plug. Electric pick guns automate the same repeated snapping action."
 },
 {
  "id": "t5-014",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What defines a bump key for a given keyway?",
  "choices": [
   "Every cut is filed to the very shallowest depth available on that blade",
   "Every cut is filed to the maximum depth, giving the so-called 999 key",
   "The cuts alternate back and forth between the deepest and shallowest depths",
   "It carries no cuts at all along the blade and relies on turning tension alone"
  ],
  "answer": 1,
  "explanation": "A bump key has all of its cuts filed to the deepest position, which is why it is nicknamed a 999 key. This shape lets each key cut strike the corresponding bottom pin when the key is bumped."
 },
 {
  "id": "t5-015",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "How is a bump key used against a compatible lock?",
  "choices": [
   "It is turned very hard while the pins are lifted one by one by hand",
   "It is heated until the pins expand in their chambers and then release",
   "It is struck sharply while light turning pressure is applied to it",
   "It is left seated in the keyway until the pin springs finally relax"
  ],
  "answer": 2,
  "explanation": "The bump key is seated and then tapped so the energy jars the driver pins above the shear line, while a small amount of torque catches the plug at that instant. Security pins and tighter tolerances make many locks resist this."
 },
 {
  "id": "t5-016",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What is the security benefit of spool, serrated, or mushroom pins?",
  "choices": [
   "They let the whole lock be rekeyed without using any plug follower at all",
   "They allow one single key to operate several completely different keyways",
   "They do away with the need for driver pins to be fitted in the shell",
   "They resist picking and bumping by catching at false set positions"
  ],
  "answer": 3,
  "explanation": "These security pins are shaped so that the plug catches at a false set before the true shear line, giving misleading feedback and defeating simple picking and bumping. They raise the skill and time needed to open the lock."
 },
 {
  "id": "t5-017",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "Against what type of latch does loiding, or carding, with a shim succeed?",
  "choices": [
   "A plain beveled spring latch that has no deadlatching plunger beside it",
   "A deadlatch installed correctly with its plunger riding on the strike",
   "A deadbolt that has been fully thrown out into the frame of the door",
   "A mortise lockset that currently has its deadbolt extended into the jamb"
  ],
  "answer": 0,
  "explanation": "Loiding, also called carding, slips a shim past a beveled spring latch to push it back into the door. It cannot retract a deadbolt, and a correctly installed deadlatch blocks it entirely."
 },
 {
  "id": "t5-018",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "How does a deadlatch prevent a door from being carded open?",
  "choices": [
   "It swaps out the ordinary spring latch and replaces it with a magnetic catch",
   "Its plunger rides the strike and locks the main latch from being pushed back",
   "It adds a whole second keyway that an attacker must also pick open first",
   "It thickens the latchbolt so much that no shim can ever be slid beside it"
  ],
  "answer": 1,
  "explanation": "A deadlatch has a small plunger beside the main latchbolt that is held depressed by the strike plate when the door is closed. That depressed plunger locks the latchbolt so a shim cannot push it back, provided the strike is aligned correctly."
 },
 {
  "id": "t5-019",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "When drilling is used as a last resort on a pin tumbler lock, where is the hole aimed?",
  "choices": [
   "Straight through the center of the fully thrown deadbolt",
   "Into the spring cavity in order to release the pin tension",
   "Along the shear line so the pins shear and the plug turns",
   "Through the strike plate that is mounted on the door frame"
  ],
  "answer": 2,
  "explanation": "Destructive drilling is aimed at the shear line so the pin stacks are cut through, letting the plug rotate freely. It is chosen only when non-destructive methods fail or time does not allow them."
 },
 {
  "id": "t5-020",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What is the function of hardened anti-drill pins or plates in a cylinder?",
  "choices": [
   "They allow the lock owner to rekey the cylinder at home themselves",
   "They apply extra spring tension down against the seated driver pins constantly",
   "They let a master key bypass the change key cuts inside the plug",
   "They resist drill bits at the shear line to defeat destructive entry"
  ],
  "answer": 3,
  "explanation": "Hardened steel inserts or plates are placed to protect the shear line and other vulnerable points, spinning or dulling drill bits. They are a countermeasure specifically against drilling attacks."
 },
 {
  "id": "t5-021",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "When would a hole saw be chosen over a twist bit during a destructive opening?",
  "choices": [
   "To remove an entire cylinder or knob body rather than one narrow hole",
   "To measure the depths of the seated pins in thousandths of an inch accurately",
   "To apply the steady turning tension to the plug during the picking",
   "To reset a SmartKey style cylinder so it accepts a brand new key"
  ],
  "answer": 0,
  "explanation": "A hole saw cuts a large-diameter circle used to take out a whole cylinder or knob body, while a twist bit makes the narrow hole used to shear a pin line. The tool is matched to how much material must be removed."
 },
 {
  "id": "t5-022",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What is the characteristic shape and use of a half-diamond pick?",
  "choices": [
   "A wavy multi-bump profile that is intended only for fast raking",
   "A triangular tip useful for setting single pins and some wafer work",
   "A round ball tip that is made specifically for double wafer locks only",
   "A hooked tip meant only for extracting a broken key from a keyway"
  ],
  "answer": 1,
  "explanation": "The half-diamond has a triangular point that can set individual pins and also manipulate certain wafer locks. Its versatility makes it a common pick in a starter set alongside the hook."
 },
 {
  "id": "t5-023",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "A ball pick is shaped with a rounded tip mainly to work on which lock type?",
  "choices": [
   "High-security pin tumbler deadbolts",
   "Tubular automotive locks",
   "Wafer and disc-style locks",
   "Combination padlocks"
  ],
  "answer": 2,
  "explanation": "The rounded profile of a ball pick suits the flat wafers found in wafer and disc locks, letting it lift them to the shear line. It is less used on standard pin tumbler cylinders, where hooks dominate."
 },
 {
  "id": "t5-024",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What is a key extractor used for?",
  "choices": [
   "Cutting the fresh bottom pins down to depth",
   "Applying the turning tension while picking",
   "Reading the bitting off of a lost key",
   "Removing a broken key blade from a keyway"
  ],
  "answer": 3,
  "explanation": "A key extractor is a thin barbed or hooked tool that grips and pulls a broken key fragment out of the keyway. It restores the lock to service without disassembly when only the key has failed."
 },
 {
  "id": "t5-025",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What is the purpose of a letterbox or under-door tool?",
  "choices": [
   "To reach through an opening and operate an interior lever handle",
   "To shear off the seated pin stacks along the cylinder shear line",
   "To measure the depths of the pins from outside of the closed door",
   "To rekey a mounted cylinder without having to remove it first"
  ],
  "answer": 0,
  "explanation": "Letterbox and under-door tools extend through a mail slot or the gap beneath a door to reach and actuate an interior lever, thumbturn, or panic bar. They exploit egress hardware rather than defeating the cylinder itself."
 },
 {
  "id": "t5-026",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What does a locksmith's pinning kit primarily contain?",
  "choices": [
   "An assortment of drill bits and hole saws sorted by their diameter",
   "Graduated bottom pins, drivers, springs, and often master wafers",
   "A range of pre-cut working keys covering all of the common keyways",
   "A selection of tension wrenches and assorted picks sorted by size"
  ],
  "answer": 1,
  "explanation": "A pinning kit is a compartmented case of bottom pins, top drivers, springs, and usually master wafers, each sorted by size in thousandths. It supplies the parts needed to rekey and master key cylinders."
 },
 {
  "id": "t5-027",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What best describes non-destructive entry compared with forced entry?",
  "choices": [
   "It always takes far longer than force and is almost never justified",
   "It is preferred only when the customer happens to be in no hurry",
   "It opens the lock with no damage, leaving the hardware still usable",
   "It reliably damages neither the lock nor the door in every case"
  ],
  "answer": 2,
  "explanation": "Non-destructive entry, such as picking or shimming, opens the lock while leaving it functional afterward. Forced or destructive entry, such as drilling, damages hardware that must then be replaced."
 },
 {
  "id": "t5-028",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "When is destructive drilling generally justified on a lockout?",
  "choices": [
   "Whenever a pick set is not immediately close at hand for the technician",
   "On every high-security lock that is encountered, simply by default",
   "Only on the locks that the customer intends to keep in service",
   "When non-destructive methods fail or their time is not available"
  ],
  "answer": 3,
  "explanation": "Drilling is reserved for cases where picking, bumping, or shimming cannot open the lock, or where an emergency makes those slower methods impractical. It is a last resort because it destroys the cylinder."
 },
 {
  "id": "t5-029",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "In a pin tumbler lock, what is the shear line?",
  "choices": [
   "The boundary between plug and shell where the pin stacks align",
   "The narrow gap between the two milled halves of the key blade",
   "The point where the top spring meets the head of the driver pin",
   "The outer machined edge of the strike plate on the door frame"
  ],
  "answer": 0,
  "explanation": "The shear line is the meeting surface between the rotating plug and the fixed shell. When every pin stack is lifted so its split sits exactly at that line, the plug is free to rotate and the lock opens."
 },
 {
  "id": "t5-030",
  "section": 5,
  "sectionName": "Rekeying, Lock Picking, and Bypass",
  "question": "What is the working principle shared by an electric pick and a manual snap gun?",
  "choices": [
   "They read the cut bitting of the key through an electronic sensor",
   "They transfer sudden energy so drivers rise above the shear line",
   "They apply a steady rotational tension without any wrench being used",
   "They magnetically hold the plug in place at the cylinder shear line"
  ],
  "answer": 1,
  "explanation": "Both tools deliver a sharp impulse to the bottom pins so the driver pins bounce clear of the shear line for a moment, during which light tension turns the plug. The electric version simply repeats the motion automatically."
 },
 {
  "id": "t6-001",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What does a change key operate in a master keyed system?",
  "choices": [
   "Every single lock across the entire system",
   "All the locks that share one master key",
   "One specific lock and no others at all",
   "Only the locks placed under a grand master"
  ],
  "answer": 2,
  "explanation": "A change key, sometimes called the day key, is the individual key that operates a single lock in the system. It sits at the bottom of the keying hierarchy below the master keys."
 },
 {
  "id": "t6-002",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is a master key within a keying system?",
  "choices": [
   "A key that operates only its own single lock",
   "A stamped blank kept solely for record keeping",
   "A key used only to insert and pull interchangeable cores from their housings",
   "A key that runs a group of locks each having its own change key"
  ],
  "answer": 3,
  "explanation": "A master key operates every lock within its group even though each of those locks also works with its own change key. The master unifies control of that group above the individual change keys."
 },
 {
  "id": "t6-003",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "Where does a grand master key sit in the keying hierarchy?",
  "choices": [
   "Above several masters, operating all their groups",
   "One level down below all of the change keys",
   "At the very same level as an ordinary change key",
   "Outside the system, serving only as a control key"
  ],
  "answer": 0,
  "explanation": "A grand master key operates all the locks under two or more master keys, forming the level above the masters. It gives one key holder access across multiple master-keyed groups."
 },
 {
  "id": "t6-004",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What does a great-grand master key operate?",
  "choices": [
   "A single lock that is reserved only for the owner",
   "All groups under two or more grand master keys",
   "Only the interchangeable cores within the system",
   "One master group with nothing standing above it"
  ],
  "answer": 1,
  "explanation": "A great-grand master key stands one level above the grand masters, operating everything beneath two or more of them. It appears in large systems with four or more levels of keying."
 },
 {
  "id": "t6-005",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is the top master key in a system?",
  "choices": [
   "The first change key that is issued during the installation work",
   "The service key that only resets the interchangeable cores",
   "The single highest key that operates every lock in the system",
   "A spare backup duplicate held only by the lock manufacturer"
  ],
  "answer": 2,
  "explanation": "The top master key, abbreviated TMK, is the highest key in the hierarchy and operates every cylinder in the system. In key coding it is commonly given the symbol A."
 },
 {
  "id": "t6-006",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "In an interchangeable core system, what is the control key used for?",
  "choices": [
   "Operating every lock exactly the way a top master key does",
   "Setting the master wafers in each chamber to the right depth by hand",
   "Duplicating the individual change keys out in the field",
   "Removing and inserting the core without disassembling the lock"
  ],
  "answer": 3,
  "explanation": "The control key operates a second shear line in an interchangeable core to insert or pull the core out of its housing. It is a service key for swapping cores, not a key that unlocks doors."
 },
 {
  "id": "t6-007",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "How does a master wafer let a single chamber be operated by more than one key depth?",
  "choices": [
   "It adds a second split in the stack, making another shear line",
   "It magnetizes the pin stack so that it lifts far more easily when picked",
   "It removes the driver pin from that chamber altogether",
   "It widens the keyway so a second key blade can be admitted"
  ],
  "answer": 0,
  "explanation": "A master wafer is placed between the bottom pin and the driver, creating an extra break point so the chamber has two positions that reach the shear line. Each such wafer lets both a change key cut and a master key cut operate that chamber."
 },
 {
  "id": "t6-008",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is the effect on a chamber of adding one master wafer?",
  "choices": [
   "It cuts in half the number of keys able to operate that chamber",
   "It roughly doubles the key depths that reach the shear line",
   "It locks the chamber down so only one key depth works",
   "It removes the working shear line from that chamber"
  ],
  "answer": 1,
  "explanation": "Each master wafer added to a chamber creates an additional shear-line position, roughly doubling the theoretical number of cut depths that will operate it. This is how master keying multiplies the keys a system can accommodate."
 },
 {
  "id": "t6-009",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is a consequence of loading many master wafers into the chambers of a lock?",
  "choices": [
   "The lock becomes effectively impossible for anyone to pick",
   "The change key gradually stops working over a period of time from wear",
   "More unintended phantom keys operate it and the security weakens",
   "The keyway automatically converts into a restricted keyway"
  ],
  "answer": 2,
  "explanation": "Every extra shear line creates more incidental or phantom key combinations that were never intentionally cut but will still open the lock. The more heavily a cylinder is mastered, the more such keys exist and the weaker its security becomes."
 },
 {
  "id": "t6-010",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "In standard two-step progression, how do adjacent cut depths used at a position differ?",
  "choices": [
   "By exactly one single depth increment",
   "By no fixed amount at all",
   "By the full range of the pinning kit",
   "By at least two depth increments"
  ],
  "answer": 3,
  "explanation": "Two-step progression assigns depths that differ by two increments at each progressed position, leaving room for the master pin between the change and master cuts. This spacing also helps keep within the maximum adjacent cut specification and avoids weak pins."
 },
 {
  "id": "t6-011",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What does the maximum adjacent cut specification, or MACS, limit?",
  "choices": [
   "How much two neighboring cut depths on one key may differ",
   "The total number of master keys allowed within one system",
   "The total number of pin chambers built into the cylinder",
   "The overall length of the change key blade from tip to bow"
  ],
  "answer": 0,
  "explanation": "MACS defines the greatest allowable difference between depths of two adjacent cuts on the same key, set by the key blank and machine geometry. Exceeding it can leave a ridge that prevents the key from operating or being cut cleanly."
 },
 {
  "id": "t6-012",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "How does total position progression differ from rotating constant progression?",
  "choices": [
   "Total position progression instead holds one chosen position fixed for every key cut",
   "Total position progresses every position while rotating constant holds some fixed",
   "The two named progression methods are actually identical in ordinary practice",
   "Rotating constant progression manages to use no master pins whatsoever"
  ],
  "answer": 1,
  "explanation": "In total position progression every progressed position varies to generate keys, whereas rotating constant progression holds certain positions constant and rotates which positions serve that role. The choice affects system capacity and how key symbols are laid out."
 },
 {
  "id": "t6-013",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is the bitting array, or progression list, in a master key system?",
  "choices": [
   "The running record of which customer currently holds each issued key",
   "The set of marked drill points used during a destructive opening",
   "The organized chart of every depth combination and how keys progress",
   "The stored record of finish and function codes for all the hardware"
  ],
  "answer": 2,
  "explanation": "The bitting array is the master chart of all the depth combinations the system uses and how change and master keys are derived from them. A locksmith must have it before expanding a system so that new keys do not collide with existing ones."
 },
 {
  "id": "t6-014",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "In standard key coding, what does a symbol such as AA or AB designate?",
  "choices": [
   "A finish and function code stamped on the lock body",
   "The intended drill depth to be used on that cylinder during a destructive opening",
   "The keyway blank family that the key belongs to",
   "A specific master key and the group it controls in the system"
  ],
  "answer": 3,
  "explanation": "Key symbols such as AA, AB, and 1AA follow the standard coding that shows each key's place in the hierarchy, with letters and numbers naming the masters and their change keys. This lettering lets the system be documented and expanded consistently."
 },
 {
  "id": "t6-015",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "Under the standard key symbol convention, which key is marked with the symbol A?",
  "choices": [
   "The top master key",
   "The lowest change key",
   "The core control key",
   "A single keyed cylinder"
  ],
  "answer": 0,
  "explanation": "The top master key is assigned the symbol A at the head of the coding scheme. Grand masters, masters, and change keys receive symbols that branch downward from that A."
 },
 {
  "id": "t6-016",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What does the designation SKD mean on a cylinder in a keying schedule?",
  "choices": [
   "It is keyed alike with the rest of its lock group on the system",
   "It is single keyed, keyed different and on no master",
   "It carries the system master key directly on it",
   "It serves the system as its core control key"
  ],
  "answer": 1,
  "explanation": "SKD marks a cylinder that is single keyed, meaning it is keyed different from every other lock and is not operated by the system masters. It is used where a door must stand apart from the master system."
 },
 {
  "id": "t6-017",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What does KA indicate for a set of cylinders?",
  "choices": [
   "Each cylinder is given its own unique separate key",
   "The cylinders are placed onto the grand master only",
   "The cylinders are keyed alike so one key opens all",
   "The cylinders all take standard interchangeable cores"
  ],
  "answer": 2,
  "explanation": "KA means keyed alike, so the listed cylinders all share the same key and one key opens every one of them. It is common where a person needs a single key for several doors that need no separate control."
 },
 {
  "id": "t6-018",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What defines a two-level keying system?",
  "choices": [
   "Change keys with both a master and a grand master over them",
   "Two grand masters that sit under one shared top master",
   "Keyed-alike cylinders that have no master key at all above",
   "Change keys that a single master key above them operates"
  ],
  "answer": 3,
  "explanation": "A two-level system consists of individual change keys plus one master key that operates all of them. Adding a grand master over multiple masters would make it a three-level system."
 },
 {
  "id": "t6-019",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What does adding a grand master to a system that already has change keys and masters create?",
  "choices": [
   "A three-level system",
   "A single-level system",
   "A two-level system",
   "A maison-keyed system"
  ],
  "answer": 0,
  "explanation": "Change keys plus masters form two levels, and placing a grand master above the masters adds the third. Each additional level extends control upward over the groups beneath it."
 },
 {
  "id": "t6-020",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "Why must a change key and its master key never share all of their cuts?",
  "choices": [
   "Sharing every cut would make the change key too long to insert",
   "Matching every cut would make them one key with no separate access",
   "Matching all the cuts would exceed the system's stated MACS limit",
   "Sharing the cuts would keep the cylinder from ever being drilled open"
  ],
  "answer": 1,
  "explanation": "The whole point of master keying is that the change key and master differ, each reaching the shear line by a different route in at least one chamber. If they matched at every position they would simply be identical keys with no distinct access levels."
 },
 {
  "id": "t6-021",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "How does a master ring cylinder provide master key access?",
  "choices": [
   "By loading a set of extra master wafers into each pin chamber of the plug",
   "By encoding a small magnetic strip onto the master key blade",
   "By fitting a ring around the plug that forms a second shear line",
   "By progressing the change key cuts two full steps apart"
  ],
  "answer": 2,
  "explanation": "A master ring cylinder, an older technology, surrounds the plug with a separate ring whose outer edge forms a second shear line operated by the master key. The change key uses the inner shear line at the plug as usual."
 },
 {
  "id": "t6-022",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "How do sectional or multiplex keyways expand a master key system?",
  "choices": [
   "They shorten every one of the change keys in the whole system by a step",
   "They remove the need for master pins in any of the cylinders",
   "They limit the whole system to a single shared keyway only",
   "Different change-key sections are all passed by one master section"
  ],
  "answer": 3,
  "explanation": "In a multiplex system, several sectional keyways each take their own change keys, while a top master key ground to a section that fits them all can enter every cylinder. This multiplies system capacity without reusing bittings across the sections."
 },
 {
  "id": "t6-023",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is construction master keying used for?",
  "choices": [
   "Letting a temporary key work until the owner's key voids it",
   "Permanently keying a finished building down to one master",
   "Restricting the system keyway to only the licensed dealers",
   "Marking each of the keys for the sake of visual key control"
  ],
  "answer": 0,
  "explanation": "Construction master keying, or CMK, provides a temporary construction key that operates the locks while a building is being built. Once the permanent owner's key is first used, the construction key is voided so it no longer works."
 },
 {
  "id": "t6-024",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "In a common lost-ball construction master keying method, what voids the construction key?",
  "choices": [
   "A locksmith rekeying every cylinder in the building by hand",
   "Inserting the owner's key drops a small ball out of play",
   "The construction key wearing out after a set number of turns",
   "A control key being used to remove and reset each core"
  ],
  "answer": 1,
  "explanation": "In the lost-ball breakout method, a small ball or extra pin gives the construction key a temporary shear line. The first turn of the permanent key displaces that ball so it can no longer participate, permanently ending construction key access."
 },
 {
  "id": "t6-025",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is the core purpose of a key control program?",
  "choices": [
   "To speed up destructive entry when there is a lockout",
   "To progress the whole bitting array automatically",
   "To track who holds each key and govern duplication",
   "To set the finish codes on the installed hardware"
  ],
  "answer": 2,
  "explanation": "A key control program tracks which individuals hold which keys and requires signed authorization before any system key is duplicated. It preserves the integrity of a master system over its lifetime."
 },
 {
  "id": "t6-026",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "How does a restricted keyway support key control?",
  "choices": [
   "It makes each of the keys longer and more awkward to carry",
   "It removes all of the master pins from the system cylinders entirely",
   "It stamps a plainly visible code onto every issued key",
   "Its blanks are limited so keys are not freely copied elsewhere"
  ],
  "answer": 3,
  "explanation": "A restricted keyway uses blanks that are not sold openly, so copies can only be made by authorized dealers with permission. This enforces the paper controls of a key control program by physically limiting who can cut a key."
 },
 {
  "id": "t6-027",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is maison keying?",
  "choices": [
   "Keying one cylinder so many different change keys operate it",
   "Keying every apartment door alike to one shared change key",
   "Removing the master key from an existing system entirely",
   "Adding a grand master key above two of the existing master keys"
  ],
  "answer": 0,
  "explanation": "Maison keying sets up a single cylinder, such as a building entrance or laundry room, so that every tenant's individual change key will open it. Each tenant keeps their own unit key while sharing access to the common door."
 },
 {
  "id": "t6-028",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "Why is maison keying widely discouraged and restricted?",
  "choices": [
   "It requires an interchangeable core to be fitted in every door",
   "The common cylinder is so gutted with wafers that phantom keys open it",
   "It cannot be documented and tracked within a normal bitting array",
   "It functions only when it is paired with a restricted keyway blank family"
  ],
  "answer": 1,
  "explanation": "To accept many different tenant keys the maison cylinder is loaded with so many master wafers that its chambers are largely gutted, opening it to countless unintended keys. The resulting weak security is why the practice is discouraged and limited by rule in some jurisdictions."
 },
 {
  "id": "t6-029",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is visual key control, or VKC?",
  "choices": [
   "A security camera aimed directly at the key storage cabinet",
   "A magnetic reader that logs every single use of a system key automatically",
   "Stamping keys and cylinders with symbols for on-sight tracking",
   "A depth progression method used only for two-step systems"
  ],
  "answer": 2,
  "explanation": "Visual key control marks each key and often the cylinder with its assigned key symbol so staff can identify and track them by sight. It supports key control record keeping by making the hierarchy readable on the key itself."
 },
 {
  "id": "t6-030",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is a maid or housekeeping submaster in a hotel-style system?",
  "choices": [
   "A key that opens the whole property just like a top master key does",
   "A control key used only for the interchangeable cores",
   "A guest change key that opens just one single guest room",
   "A submaster running a housekeeper's block but not the system"
  ],
  "answer": 3,
  "explanation": "A maid or housekeeping submaster operates the group of rooms assigned to that staff member, sitting above the individual guest change keys but below the property master. It limits each housekeeper's access to their own section."
 },
 {
  "id": "t6-031",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What ultimately limits the practical size of a master key system?",
  "choices": [
   "The finite depth combinations within MACS avoiding crossover",
   "The number of key head colors the maker offers",
   "The total page length of the key control logbook",
   "The number of hardware finish codes that are offered by the manufacturer"
  ],
  "answer": 0,
  "explanation": "A system can only use as many distinct bittings as the pinning depths allow while respecting MACS and avoiding unintended crossover keys. Each level of masters consumes part of that finite array, so heavily mastered systems reach a practical ceiling."
 },
 {
  "id": "t6-032",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "Under a sound key control program, what should occur before a system key is duplicated?",
  "choices": [
   "The key is cut on demand with no paperwork completed at all beforehand",
   "A signed authorization from the responsible party is obtained",
   "The entire system is rekeyed before any single copy is cut",
   "The customer must permanently surrender their original key"
  ],
  "answer": 1,
  "explanation": "Duplicating a system key should require signed authorization from the person responsible for the system, with the request logged. This prevents unauthorized copies from eroding the control the system was built to provide."
 },
 {
  "id": "t6-033",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What should a locksmith obtain before adding new keys to an existing master system?",
  "choices": [
   "A brand new set of pinning kits before starting the job",
   "A grand master key shipped from the lock manufacturer",
   "The bitting array so new keys avoid colliding with old ones",
   "A dealer license for the system's restricted keyway blank family"
  ],
  "answer": 2,
  "explanation": "Standard practice is to work from the existing bitting array or key schedule before cutting additions, so new keys fit the hierarchy without creating conflicts or duplicate access. Guessing at new bittings risks crossover keys and lost system integrity."
 },
 {
  "id": "t6-034",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "What is a phantom or incidental key in a master keyed system?",
  "choices": [
   "A key deliberately cut and set aside for the owner's records and files",
   "A control key that is used to remove and swap out the cores",
   "A blank that has not yet been cut down to any depth at all",
   "An unplanned combination that opens a lock from extra shear lines"
  ],
  "answer": 3,
  "explanation": "Phantom or incidental keys are cut combinations no one designed but which still reach a shear line because master wafers created extra operating positions. They represent hidden access and are a security weakness of heavily mastered chambers."
 },
 {
  "id": "t6-035",
  "section": 6,
  "sectionName": "Master Keying",
  "question": "In common keying terminology, what does a submaster key operate compared with a master key?",
  "choices": [
   "A smaller subset, which the master above it also operates",
   "More total locks than the master key sitting above it does",
   "Exactly the same set of locks as the very top master key",
   "Only the interchangeable service cores found in the system"
  ],
  "answer": 0,
  "explanation": "A submaster operates a defined subset of the locks in a system, while the master above it operates that subset plus others. This nesting of access is the basic idea behind the multiple levels named in standard keying conventions."
 },
 {
  "id": "t7-001",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "When determining the handing of a door, from which position should the locksmith view the opening?",
  "choices": [
   "From the inside of the room the door protects",
   "From the outside, on the key or secure side of the door",
   "From the hinge edge, sighting along the closed door face toward the strike jamb",
   "From whichever side the door swings toward"
  ],
  "answer": 1,
  "explanation": "Handing is always determined from the outside of the opening, meaning the key side or secure side. Standing anywhere else can reverse the call and lead to ordering the wrong hardware."
 },
 {
  "id": "t7-002",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "You are standing on the key side of a door. The hinges are on your left and the door swings away from you. What is the handing?",
  "choices": [
   "Left hand (LH)",
   "Right hand (RH)",
   "Left hand reverse (LHR)",
   "Right hand reverse (RHR)"
  ],
  "answer": 0,
  "explanation": "Viewed from the outside, hinges on the left with the door swinging away from the viewer is a left hand (LH) door. Reverse handings apply only when the door swings toward the viewer."
 },
 {
  "id": "t7-003",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "A locksmith surveying an office door notes that, viewed from the secure side, its hinges are on the right and it pushes open away from the viewer. This door is handed as which of the following?",
  "choices": [
   "Left hand reverse (LHR)",
   "Right hand (RH)",
   "Right hand reverse (RHR)",
   "Left hand (LH)"
  ],
  "answer": 1,
  "explanation": "Hinges on the right with the door swinging away from the outside viewer makes a right hand (RH) door. It would only be a reverse handing if it opened toward the viewer."
 },
 {
  "id": "t7-004",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "From the outside of an opening, a door has hinges on the left and it pulls open toward you. Which handing applies?",
  "choices": [
   "Left hand (LH)",
   "Right hand (RH)",
   "Left hand reverse (LHR)",
   "Right hand reverse (RHR)"
  ],
  "answer": 2,
  "explanation": "A door that swings toward the outside viewer is a reverse bevel door. With the hinges on the left, it is a left hand reverse (LHR) door."
 },
 {
  "id": "t7-005",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Which arrangement, always judged from the key side, describes a right hand reverse (RHR) door?",
  "choices": [
   "Hinges on the right, door opening toward the viewer",
   "Hinges on the right, door opening away from the viewer",
   "Hinges on the left, door opening toward the viewer",
   "Hinges on the left, door opening away from the viewer"
  ],
  "answer": 0,
  "explanation": "Right hand reverse means the hinges are on the right and the door swings toward the person standing on the key side. The reverse designation always indicates the door opens toward the outside viewer."
 },
 {
  "id": "t7-006",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Under ADA accessibility guidelines, why are lever handles preferred over knobs on door hardware?",
  "choices": [
   "Levers retract the latchbolt farther into the door edge than a knob of the same grade",
   "Levers are less expensive to manufacture than knobs",
   "Levers hold up better in exterior weather exposure",
   "Levers can be operated without tight grasping, pinching, or twisting of the wrist"
  ],
  "answer": 3,
  "explanation": "ADA-compliant hardware must be operable with one hand and without tight grasping, tight pinching, or twisting of the wrist. A lever can be pushed down with a closed fist or elbow, while a round knob requires gripping and twisting."
 },
 {
  "id": "t7-007",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Why does a lockset with a beveled latchbolt have to match the handing of the door?",
  "choices": [
   "The bevel changes the backset measurement of the latch",
   "The bevel controls which way the key turns in the cylinder",
   "The sloped face of the latch must face the strike so the door can push closed and latch",
   "The bevel determines how far the latchbolt projects from the door edge when fully extended"
  ],
  "answer": 2,
  "explanation": "The angled face of a beveled latchbolt must contact the strike as the door closes so the latch is cammed back and then springs into the strike opening. If the bevel faces the wrong way, the flat side hits the strike and the door will not close and latch."
 },
 {
  "id": "t7-008",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Which lock family most commonly has a handed case that must be specified or field-reversed to match the door?",
  "choices": [
   "Tubular deadbolts",
   "Rim cylinders",
   "Mortise locks",
   "Key-in-knob cylindrical locks"
  ],
  "answer": 2,
  "explanation": "Many mortise lock bodies are handed because of the bevel of the latch and the position of internal parts, so the handing must be specified when ordering or reversed in the field. Most cylindrical locks and deadbolts are non-handed or easily reversible."
 },
 {
  "id": "t7-009",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Which lock type is the most widely installed on both residential and commercial doors in the United States?",
  "choices": [
   "The cylindrical (bored) lock",
   "The mortise lock with lever trim",
   "The rim lock",
   "The interconnected lock"
  ],
  "answer": 0,
  "explanation": "Cylindrical locks, also called bored locks, are the most common lock type in both residential and commercial work. They install quickly in standard round bores rather than requiring a mortised pocket or surface mounting."
 },
 {
  "id": "t7-010",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "How is a cylindrical lockset installed in a door?",
  "choices": [
   "It is screwed to the inside face of the door over a small cable hole",
   "The chassis passes through a large bore drilled through the door face, intersecting a smaller bore in the door edge",
   "The case slides into a deep rectangular pocket cut into the door edge and is secured through its faceplate with screws at the top and bottom",
   "It clamps over the top corner of the door without any drilling"
  ],
  "answer": 1,
  "explanation": "A cylindrical lock is through-bored: its round chassis fits a large cross bore drilled through the face of the door, and the latch passes through a smaller edge bore that intersects it. This simple two-hole prep is why bored locks dominate the market."
 },
 {
  "id": "t7-011",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "What distinguishes a tubular lock from a cylindrical lock?",
  "choices": [
   "A tubular lock mounts entirely on the door surface",
   "A tubular lock requires a full rectangular mortised pocket cut deep into the door edge for its case",
   "A tubular lock can only be installed on doors thicker than 1-3/4 inches",
   "A tubular lock carries its mechanism in a tube through the edge bore, with a smaller chassis"
  ],
  "answer": 3,
  "explanation": "A tubular lock carries its working parts in a tube that fits the edge bore, rather than in a large round chassis filling the cross bore. The design is common on deadbolts and light-duty latch sets."
 },
 {
  "id": "t7-012",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Where does the case of a mortise lock sit when installed?",
  "choices": [
   "In a rectangular pocket cut into the edge of the door",
   "In a round hole bored through the face of the door",
   "On the interior surface of the door, held by wood screws",
   "Inside the door frame behind the strike plate"
  ],
  "answer": 0,
  "explanation": "A mortise lock takes its name from the mortise, a rectangular pocket cut into the door edge that receives the lock case. This construction is more labor intensive than boring but produces a very strong installation."
 },
 {
  "id": "t7-013",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "How does a mortise cylinder attach to and operate its lock?",
  "choices": [
   "It snaps into a spring clip and turns a square spindle",
   "It is bolted through the door and pulls a connecting bar",
   "Its threaded body screws into the lock case, and a cam on its back actuates the mechanism",
   "It is pressed into a friction-fit hole and drives a long flat tailpiece into the lock body"
  ],
  "answer": 2,
  "explanation": "A mortise cylinder has a threaded housing that screws directly into the threaded opening of the mortise lock case, secured by a set screw. A rotating cam on the rear of the cylinder throws the bolt or retracts the latch."
 },
 {
  "id": "t7-014",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "On a fire-rated door assembly, which hardware condition is required for the opening to perform as rated?",
  "choices": [
   "A push plate and pull with no latching hardware",
   "Listed self-latching hardware that positively latches every time the door closes",
   "A latch with a hold-back feature so staff can keep it retracted during business hours",
   "Any residential-grade lockset as long as the door itself is rated"
  ],
  "answer": 1,
  "explanation": "Fire-rated openings must have listed hardware that latches positively and automatically every time the door closes, keeping the door shut against fire pressure. Plain passage sets, hold-back functions, and unlisted hardware defeat the rating."
 },
 {
  "id": "t7-015",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "What is the defining installation characteristic of a rim lock?",
  "choices": [
   "It fits into a shallow mortise in the door edge",
   "It is concealed entirely inside the hollow core thickness of the door",
   "It mounts on the surface of the door face, usually the inside",
   "It attaches only to the door frame, not the door"
  ],
  "answer": 2,
  "explanation": "A rim lock is surface mounted, screwed to the face of the door rather than set into it. Vertical deadbolts and older night latches are familiar examples."
 },
 {
  "id": "t7-016",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "How does a rim cylinder transfer key rotation to the lock it operates?",
  "choices": [
   "Through a flat tailpiece that extends through the door into the back of the lock",
   "Through a threaded cam on the rear of its housing that screws directly into the lock case",
   "Through a geared ring around the cylinder plug",
   "Through a push rod that slides vertically inside the door"
  ],
  "answer": 0,
  "explanation": "A rim cylinder mounts through the door and is held by a back plate and screws, with a long flat tailpiece projecting from its rear. The tailpiece enters the surface-mounted lock or exit device and turns with the key to operate it."
 },
 {
  "id": "t7-017",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "What is the functional purpose of an interconnected lock?",
  "choices": [
   "It lets two different keys operate one cylinder",
   "It links locks on a pair of doors so both open together",
   "It connects the latch and the deadbolt electrically to a remote access control release panel",
   "It retracts both the deadbolt and the latch in a single motion of the inside lever or knob"
  ],
  "answer": 3,
  "explanation": "An interconnected lock mechanically links a deadbolt and a latchbolt so that one turn of the inside lever or knob retracts both at once. This satisfies egress requirements for a single motion to exit while still allowing a deadbolt on the door."
 },
 {
  "id": "t7-018",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "ANSI/BHMA Grade 1 hardware is intended for which type of service?",
  "choices": [
   "Light-duty interior residential doors",
   "The heaviest duty commercial and institutional applications",
   "Temporary construction site doors only",
   "Decorative residential applications where strength is a secondary concern"
  ],
  "answer": 1,
  "explanation": "Grade 1 is the top ANSI/BHMA grade, built for heavy-use commercial and institutional openings such as schools and hospitals. Grade 2 covers light commercial work and Grade 3 covers basic residential duty."
 },
 {
  "id": "t7-019",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "A basic lockset intended for ordinary residential duty would typically carry which ANSI/BHMA grade?",
  "choices": [
   "Grade 1",
   "Grade 2",
   "Grade 3",
   "Grade 5"
  ],
  "answer": 2,
  "explanation": "Grade 3 is the entry residential grade in the ANSI/BHMA system. Grade 2 is light commercial and upgraded residential, while Grade 1 is heavy commercial duty; there is no Grade 5."
 },
 {
  "id": "t7-020",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "On what basis does the ANSI/BHMA system assign a grade to a lockset?",
  "choices": [
   "Performance in cycle testing and strength or abuse tests",
   "The retail price bracket of the product",
   "The number of pin chambers and security pins in its cylinder",
   "The type of finish applied to the trim"
  ],
  "answer": 0,
  "explanation": "ANSI/BHMA grades are earned through laboratory testing, primarily operational cycle counts plus strength, torque, and impact tests. Higher grades must survive more cycles and greater abuse, so the grade reflects durability, not appearance or price."
 },
 {
  "id": "t7-021",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "What is the standard backset for residential locksets in the United States?",
  "choices": [
   "2-1/8 inches",
   "2-3/8 inches",
   "2-3/4 inches",
   "3-3/4 inches"
  ],
  "answer": 1,
  "explanation": "Residential doors are normally prepped with a 2-3/8 inch backset, the distance from the door edge to the centerline of the cross bore. The 2-3/4 inch backset is the commercial standard."
 },
 {
  "id": "t7-022",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Commercial door preps in the United States use which standard backset?",
  "choices": [
   "2-3/8 inches",
   "2-1/2 inches",
   "2-3/4 inches",
   "5 inches"
  ],
  "answer": 2,
  "explanation": "The standard commercial backset is 2-3/4 inches, which places the lever or knob farther from the door edge and the frame. Residential preps use 2-3/8 inches, and 5 inches is an extended backset used only in special situations."
 },
 {
  "id": "t7-023",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "What does an adjustable latch on a modern bored lockset allow the installer to do?",
  "choices": [
   "Change the projection of the latchbolt from 1/2 inch to 1 inch",
   "Reverse the lock from left hand to right hand",
   "Fit doors of any thickness from 1 inch to 3 inches",
   "Set the latch for either a 2-3/8 inch or a 2-3/4 inch backset"
  ],
  "answer": 3,
  "explanation": "An adjustable latch extends or repositions to fit both common backsets, 2-3/8 inch and 2-3/4 inch. This lets one lockset fit either a residential or a commercial door prep without changing parts."
 },
 {
  "id": "t7-024",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "What is the standard diameter of the cross bore drilled through the door face for a bored lockset?",
  "choices": [
   "1 inch",
   "1-1/2 inches",
   "2-1/8 inches",
   "2-3/4 inches"
  ],
  "answer": 2,
  "explanation": "The standard cross bore for cylindrical locksets and deadbolts is 2-1/8 inches in diameter. This hole through the face of the door receives the lock chassis or deadbolt housing."
 },
 {
  "id": "t7-025",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "The edge bore that carries the latch into the door for a standard bored lock prep is drilled to what diameter?",
  "choices": [
   "1 inch",
   "7/8 inch",
   "1-1/2 inches",
   "2-1/8 inches"
  ],
  "answer": 0,
  "explanation": "The standard edge bore is 1 inch in diameter, drilled from the door edge to intersect the 2-1/8 inch cross bore. The latch assembly slides through this hole so its tube reaches the lock chassis."
 },
 {
  "id": "t7-026",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "What is the height of the standard ASA/ANSI strike used on commercial hollow metal frames?",
  "choices": [
   "3-1/2 inches",
   "4-7/8 inches",
   "6-7/8 inches",
   "2-3/4 inches"
  ],
  "answer": 1,
  "explanation": "The ASA strike, standardized in the ANSI prep, is 4-7/8 inches tall with a curved lip and is the universal strike cutout on commercial metal frames. Its size lets one frame prep accept strikes for many different locks."
 },
 {
  "id": "t7-027",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Which strike style is most commonly found with residential tubular and bored locksets on wood jambs?",
  "choices": [
   "The 4-7/8 inch ASA strike",
   "An open-back strike",
   "An electric strike",
   "The T-strike"
  ],
  "answer": 3,
  "explanation": "The small T-shaped strike, or T-strike, is the usual companion to residential latches on wood frames, while full-lip strikes are a common alternative. The larger 4-7/8 inch ASA strike is the commercial hollow metal frame standard."
 },
 {
  "id": "t7-028",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "In door preparation terminology, what does a 161 prep refer to?",
  "choices": [
   "The standard cutout for a cylindrical lockset",
   "The pocket and face cuts for a mortise lock",
   "The mounting pattern for a surface door closer",
   "The prep for a flush bolt on an inactive leaf"
  ],
  "answer": 0,
  "explanation": "A 161 prep is the standard machining for a cylindrical (bored) lock, including the 2-1/8 inch cross bore, edge bore, and latch face cutout. The number comes from the ANSI A115 prep standards used by door and frame manufacturers."
 },
 {
  "id": "t7-029",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "A hollow metal door ordered with an 86 edge prep is machined to accept which type of hardware?",
  "choices": [
   "A tubular deadbolt",
   "A rim exit device",
   "A mortise lock",
   "A surface-mounted closer"
  ],
  "answer": 2,
  "explanation": "The 86 prep is the standard edge cutout for a mortise lock case, sized so the lock body slides into the door edge. Like the 161 cylindrical prep, the designation comes from the ANSI A115 door preparation standards."
 },
 {
  "id": "t7-030",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "What does the dogging feature on an exit device do?",
  "choices": [
   "It locks the outside trim so the device is exit-only",
   "It holds the latch retracted so the door operates as a push-pull opening",
   "It sounds an alarm whenever the pushbar is pressed",
   "It delays the release of the latch for fifteen seconds after the bar is pressed"
  ],
  "answer": 1,
  "explanation": "Dogging mechanically holds the pushbar depressed and the latch retracted, typically with a hex key or cylinder, so the door can swing freely during business hours. Releasing the dogging restores normal latching."
 },
 {
  "id": "t7-031",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "How does fire exit hardware differ from a standard panic device?",
  "choices": [
   "It does not require a listed frame or door",
   "It can be locked against egress during a fire alarm",
   "It uses a wider pushbar that spans at least three quarters of the door width",
   "It has no mechanical dogging, so the latch can never be held retracted"
  ],
  "answer": 3,
  "explanation": "Fire exit hardware is listed for use on fire-rated doors and therefore omits mechanical dogging, because a fire door must positively latch every time it closes. Dogging a device on a rated opening would defeat the fire protection."
 },
 {
  "id": "t7-032",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Where panic hardware is required by code, how must a person be able to exit through the door?",
  "choices": [
   "With one motion, without a key and without any special knowledge or effort",
   "With no more than two separate motions using clearly labeled and lighted hardware",
   "By entering a memorized code posted near the opening",
   "With a key that is kept in a break-glass box beside the door"
  ],
  "answer": 0,
  "explanation": "Panic hardware must release the latch with a single pushing motion, with no key, tool, code, or special knowledge required. Any hardware arrangement that adds steps or requires a key on the egress side violates the requirement."
 },
 {
  "id": "t7-033",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "A pair of doors must allow egress through both leaves without a center mullion. Which exit device type is designed for this situation?",
  "choices": [
   "Rim devices on both leaves",
   "A mortise device on each leaf",
   "Surface or concealed vertical rod devices, latching at the head and sill",
   "A single rigid crossbar spanning both leaves and latching at the meeting stiles"
  ],
  "answer": 2,
  "explanation": "Vertical rod exit devices latch into the frame head and the floor or threshold, so each leaf secures independently without a mullion or the other leaf. Rim devices on a mullion-less pair would have nothing solid to latch against."
 },
 {
  "id": "t7-034",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "What does the backcheck function of a hydraulic door closer control?",
  "choices": [
   "The speed of the door during the last few degrees of travel before latching",
   "Resistance that cushions the door near the end of its opening swing",
   "The force needed to push the door open from the closed position",
   "The delay before the door begins to close after being opened"
  ],
  "answer": 1,
  "explanation": "Backcheck is hydraulic resistance that slows the door as it approaches full open, preventing it from being flung into the wall or stop by wind or an aggressive user. It does not control closing speed, which is handled by the sweep and latch valves."
 },
 {
  "id": "t7-035",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "On a door closer, what do the sweep speed and latch speed adjustment valves regulate?",
  "choices": [
   "Sweep controls the main closing swing, and latch controls the final few degrees into the strike",
   "Sweep controls the opening cycle resistance, and latch controls the hold-open position of the closer arm",
   "Sweep controls spring power, and latch controls the delayed action timer",
   "Sweep controls backcheck intensity, and latch controls the total spring size"
  ],
  "answer": 0,
  "explanation": "The sweep valve governs closing speed through most of the swing, and the latch valve governs the last few degrees, usually sped up slightly so the door overcomes the latch and seals. Balancing the two gives a controlled close that still latches reliably."
 },
 {
  "id": "t7-036",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "For ADA compliance, the force required to push open an interior non-fire door is commonly limited to what maximum?",
  "choices": [
   "15 pounds of force",
   "10 pounds of force",
   "8-1/2 pounds of force",
   "5 pounds of force"
  ],
  "answer": 3,
  "explanation": "Accessibility standards limit the opening force of interior hinged doors to 5 pounds of force, which is why closers on accessible routes must be adjusted carefully. Fire doors are allowed the minimum force needed for reliable closing as set by the authority having jurisdiction."
 },
 {
  "id": "t7-037",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Why are NRP (non-removable pin) hinges specified for outswinging exterior doors?",
  "choices": [
   "They allow the door to swing a full 180 degrees",
   "A set screw in the barrel keeps the exposed hinge pins from being pulled to lift the door out",
   "They carry more weight than standard ball bearing hinges",
   "They eliminate the need for a latch guard or astragal protector plate on the strike side of the door"
  ],
  "answer": 1,
  "explanation": "An outswinging door exposes its hinge barrels to the unsecure side, so an intruder could drive out standard pins and lift the door free. NRP hinges use a set screw in the barrel, accessible only with the door open, to lock the pin in place."
 },
 {
  "id": "t7-038",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "Ball bearing hinges are the appropriate choice for which application?",
  "choices": [
   "Lightweight interior closet doors that see only occasional residential use",
   "Cabinet doors under 20 pounds",
   "Any door where the hinges must be paintable",
   "Heavy doors and high-frequency doors, especially those with closers"
  ],
  "answer": 3,
  "explanation": "Ball bearings between the knuckles carry vertical load smoothly and resist wear, so these hinges are specified for heavy doors, high-traffic openings, and any door equipped with a closer. Plain bearing hinges on such doors wear quickly and begin to sag and squeak."
 },
 {
  "id": "t7-039",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "On a pair of doors with an overlapping astragal, what does a coordinator do?",
  "choices": [
   "It makes sure the inactive leaf closes before the active leaf so both can latch",
   "It forces both leaves to swing open at the same time",
   "It transfers power from the frame to locks on the doors",
   "It holds both leaves open until the fire alarm system releases them to close together"
  ],
  "answer": 0,
  "explanation": "A coordinator, mounted at the head of the frame, holds the active leaf briefly so the inactive leaf always closes first. Without it, the active leaf and its astragal could close first and block the inactive leaf from seating and latching."
 },
 {
  "id": "t7-040",
  "section": 7,
  "sectionName": "Door Hardware and Handing",
  "question": "When a deadlatching lockset is installed correctly, where should the small deadlatch plunger rest when the door is closed?",
  "choices": [
   "Inside the strike opening alongside the latchbolt",
   "Fully extended past the strike plate, projecting into the frame beside the latch",
   "Depressed against the flat lip of the strike, outside the strike opening",
   "Retracted inside the door edge behind the faceplate"
  ],
  "answer": 2,
  "explanation": "The deadlatch plunger must be held depressed by the strike lip; that deadlocks the latchbolt so it cannot be pushed back with a card or shim. If the strike is misaligned and the plunger falls into the strike opening, the deadlocking feature is defeated and the latch can be carded open."
 },
 {
  "id": "t8-001",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "What appearance does hardware in the US26D finish have?",
  "choices": [
   "Bright polished brass",
   "Dark oil-rubbed bronze",
   "Dull satin chrome",
   "Mirror-bright chrome"
  ],
  "answer": 2,
  "explanation": "US26D is satin chrome, a dull silver-gray chrome plating with a brushed rather than mirror appearance. The D in older US finish codes generally signals a dull or satin version of the bright finish."
 },
 {
  "id": "t8-002",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Which BHMA 600-series number is the modern equivalent of the US26D finish designation?",
  "choices": [
   "625",
   "626",
   "630",
   "605"
  ],
  "answer": 1,
  "explanation": "US26D crosses over to BHMA 626, both meaning satin chrome. BHMA 625 is bright chrome (US26), 630 is satin stainless steel, and 605 is bright brass."
 },
 {
  "id": "t8-003",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Which finish is by far the most commonly specified on commercial door hardware?",
  "choices": [
   "626 satin chrome",
   "605 bright brass",
   "613 oil-rubbed bronze",
   "622 flat black"
  ],
  "answer": 0,
  "explanation": "Satin chrome, 626/US26D, is the default commercial finish because it is durable, neutral in appearance, and hides fingerprints and wear. Decorative finishes like bright brass and oil-rubbed bronze are far less common on commercial jobs."
 },
 {
  "id": "t8-004",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Hardware marked US3 has which appearance?",
  "choices": [
   "Satin nickel",
   "Oxidized satin bronze",
   "Flat black",
   "Bright polished brass"
  ],
  "answer": 3,
  "explanation": "US3 is bright brass, a polished gold-toned finish that was the traditional residential standard for decades. Its satin counterpart is US4, satin brass."
 },
 {
  "id": "t8-005",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "A schedule calls for BHMA finish 605 on all lever trim. What color hardware should arrive?",
  "choices": [
   "Brushed silver-gray chrome",
   "Polished bright brass",
   "Dark brown bronze",
   "Brushed stainless steel"
  ],
  "answer": 1,
  "explanation": "BHMA 605 is bright brass, the polished gold-colored finish, equivalent to the older US3 designation. Silver-gray brushed finishes would be 626 or 630, and dark bronze tones fall in the 61x range."
 },
 {
  "id": "t8-006",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Which US number identifies satin brass, BHMA 606?",
  "choices": [
   "US4",
   "US3",
   "US10",
   "US15"
  ],
  "answer": 0,
  "explanation": "US4 is satin brass, the brushed version of brass, and equals BHMA 606. US3 is bright brass, US10 is satin bronze, and US15 is satin nickel."
 },
 {
  "id": "t8-007",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "How is the antique brass finish, US5/BHMA 609, produced and how does it look?",
  "choices": [
   "Polished brass buffed to a mirror shine and sealed with a clear coat",
   "Nickel plating with a gray-brown oxide",
   "Satin brass that is darkened or blackened to an aged appearance",
   "Aluminum anodized to a gold tone"
  ],
  "answer": 2,
  "explanation": "Antique brass, US5 or BHMA 609, starts as satin brass and is chemically darkened so the highlights and recesses give an aged, antiqued look. It is a brass-based finish, not nickel or aluminum."
 },
 {
  "id": "t8-008",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Hardware finished in US10 shows which appearance?",
  "choices": [
   "Bright polished bronze",
   "Satin chrome",
   "Antique nickel",
   "Satin bronze"
  ],
  "answer": 3,
  "explanation": "US10 is satin bronze, a brushed brownish-gold finish on a bronze base, equivalent to BHMA 612. It is lighter in color than US10B, the oil-rubbed bronze finish."
 },
 {
  "id": "t8-009",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "What does the US10B finish look like?",
  "choices": [
   "A brushed light silver tone",
   "A dark brown to near-black oxidized surface over bronze",
   "A bright gold mirror polish",
   "A flat medium-gray painted surface with no visible metal grain"
  ],
  "answer": 1,
  "explanation": "US10B is oil-rubbed bronze: bronze that has been oxidized to a deep dark brown, almost black color, often with lighter undertones showing at edges. It is one of the darkest of the traditional bronze finishes."
 },
 {
  "id": "t8-010",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Which BHMA number corresponds to oil-rubbed bronze, US10B?",
  "choices": [
   "609",
   "612",
   "613",
   "619"
  ],
  "answer": 2,
  "explanation": "US10B crosses over to BHMA 613, oil-rubbed bronze. BHMA 612 is satin bronze (US10), 609 is antique brass (US5), and 619 is satin nickel (US15)."
 },
 {
  "id": "t8-011",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Oil-rubbed bronze is often called a living finish. What does that term mean?",
  "choices": [
   "The finish is intended to wear and change color with handling over time",
   "The finish contains an antimicrobial additive",
   "The finish must be re-oiled by the installer every year to keep the warranty valid",
   "The finish glows slightly in low light for safety"
  ],
  "answer": 0,
  "explanation": "A living finish has no protective clear coat, so oils from hands and everyday rubbing gradually lighten and vary the surface. With US10B this evolving, worn-through look is intentional and is not considered a defect."
 },
 {
  "id": "t8-012",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "What appearance does the US15 finish give a lockset?",
  "choices": [
   "Bright chrome",
   "Flat black",
   "Satin brass",
   "Satin nickel"
  ],
  "answer": 3,
  "explanation": "US15 is satin nickel, a soft brushed silver finish with a slightly warmer tone than satin chrome, equivalent to BHMA 619. It has become one of the most popular residential finishes."
 },
 {
  "id": "t8-013",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "BHMA finish 620 describes which appearance?",
  "choices": [
   "Bright polished nickel with a mirror shine",
   "Antique nickel, a darkened satin nickel",
   "Clear anodized aluminum",
   "Polished stainless steel"
  ],
  "answer": 1,
  "explanation": "BHMA 620 is antique nickel, the US15A finish, made by darkening satin nickel to a shadowed, aged gray. It relates to satin nickel the way antique brass relates to satin brass."
 },
 {
  "id": "t8-014",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Hardware ordered in US26 will have which look?",
  "choices": [
   "Mirror-bright polished chrome",
   "Dull brushed satin chrome plating",
   "Bright polished brass",
   "Dark oxidized bronze"
  ],
  "answer": 0,
  "explanation": "US26 is bright chrome, a mirror-polished chrome plating equivalent to BHMA 625. The brushed version is US26D/626, satin chrome."
 },
 {
  "id": "t8-015",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "What material and treatment does BHMA finish 628 indicate?",
  "choices": [
   "Stainless steel with a fine satin directional polish",
   "Zinc with a bright chrome plate",
   "Aluminum with a satin, clear anodized surface",
   "Brass with a nickel plate"
  ],
  "answer": 2,
  "explanation": "BHMA 628, the old US28, is satin aluminum with a clear anodized coating. It is common on aluminum storefront hardware, exit devices, and closer covers."
 },
 {
  "id": "t8-016",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "The US32 finish designation describes which surface?",
  "choices": [
   "Satin stainless steel",
   "Bright chrome plating over a brass base",
   "Polished aluminum",
   "Bright polished stainless steel"
  ],
  "answer": 3,
  "explanation": "US32 is bright stainless steel, polished to a mirror finish, and equals BHMA 629. Its brushed counterpart is US32D, satin stainless steel."
 },
 {
  "id": "t8-017",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Which BHMA number should be specified to get satin stainless steel, the US32D finish?",
  "choices": [
   "626",
   "630",
   "629",
   "628"
  ],
  "answer": 1,
  "explanation": "US32D, satin stainless steel, crosses over to BHMA 630. It looks similar to 626 satin chrome, but 630 is solid stainless rather than plating, while 629 is bright stainless and 628 is satin aluminum."
 },
 {
  "id": "t8-018",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "What appearance does hardware in the US19 finish, BHMA 622, present?",
  "choices": [
   "Flat black",
   "Glossy dark green",
   "Matte dark bronze",
   "Charcoal gray nickel"
  ],
  "answer": 0,
  "explanation": "US19, equivalent to BHMA 622, is flat black. It is a true black finish rather than a very dark bronze like oil-rubbed bronze."
 },
 {
  "id": "t8-019",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "BHMA finish 689, seen constantly on door closers and exit devices, is which of the following?",
  "choices": [
   "Clear anodized aluminum",
   "Satin chrome plating",
   "Aluminum-colored paint",
   "Brushed solid aluminum"
  ],
  "answer": 2,
  "explanation": "BHMA 689 is sprayed aluminum-colored paint, not bare or anodized metal. It is the standard low-cost silver finish on closers, exit devices, and other painted hardware."
 },
 {
  "id": "t8-020",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Although 626 and 630 look similar, how do the two finishes differ in construction?",
  "choices": [
   "626 is solid stainless steel all the way through, while 630 is a clear anodized aluminum finish",
   "630 is painted steel and 626 is solid nickel",
   "They are identical except for the level of polish",
   "626 is chrome plating over a brass, bronze, or zinc base, while 630 is solid stainless steel"
  ],
  "answer": 3,
  "explanation": "626 satin chrome is a plated finish applied over base metals such as brass, bronze, or zinc castings, while 630 satin stainless steel is the actual stainless base material brushed to a satin surface. If 626 plating wears through, the different base metal shows; 630 stays the same metal all the way through."
 },
 {
  "id": "t8-021",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Why are stainless steel finishes such as 630 preferred for hardware installed near the coast?",
  "choices": [
   "Stainless steel resists corrosion from salt air far better than plated finishes",
   "Stainless steel hardware is lighter, which reduces hinge wear in humid coastal climates",
   "Stainless steel is cheaper than plated brass hardware",
   "Building codes prohibit brass hardware in coastal counties"
  ],
  "answer": 0,
  "explanation": "Salt-laden coastal air attacks plated finishes, causing pitting and peeling once the plating is breached, while solid stainless steel resists that corrosion throughout its thickness. Choosing 630 over look-alike 626 greatly extends hardware life near salt water."
 },
 {
  "id": "t8-022",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "What advantage does a PVD finish offer on decorative brass hardware?",
  "choices": [
   "It allows the color to be changed in the field with a refinishing kit",
   "It bonds a hard coating that keeps the bright finish from tarnishing",
   "It makes the hardware pick-resistant",
   "It eliminates the need for any base metal polishing"
  ],
  "answer": 1,
  "explanation": "PVD, physical vapor deposition, deposits an extremely hard, thin coating that seals the finish against tarnish, wear, and most chemicals. It is common on lifetime-warranty bright brass hardware that must stay bright outdoors."
 },
 {
  "id": "t8-023",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "A customer is adding a deadbolt above an existing satin nickel entry knob. As a matter of good practice, what finish should the locksmith recommend for the deadbolt?",
  "choices": [
   "Bright brass, to make the deadbolt easy to find",
   "Any finish, since deadbolts are not visible from the street",
   "Satin nickel, so all hardware on the door matches",
   "Bright chrome, because it is more durable than nickel"
  ],
  "answer": 2,
  "explanation": "Standard practice is to match finishes across all hardware on a door, so a satin nickel knob calls for a satin nickel (US15/619) deadbolt. Mismatched finishes on one door look like an error and generate callbacks."
 },
 {
  "id": "t8-024",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "Alongside traditional bright brass, which finish became one of the most popular choices for residential locksets in recent decades?",
  "choices": [
   "Bright stainless steel",
   "Clear anodized aluminum",
   "Antique nickel",
   "Satin nickel"
  ],
  "answer": 3,
  "explanation": "Satin nickel, US15/619, rose to dominate residential hardware sales as tastes shifted away from bright brass toward brushed silver tones. Bright brass remains common in existing homes, so both finishes are stocked heavily for residential work."
 },
 {
  "id": "t8-025",
  "section": 8,
  "sectionName": "Hardware Finishes",
  "question": "What does the E suffix indicate in a finish designation such as 613E?",
  "choices": [
   "The finish imitates oil-rubbed bronze but is applied over a steel base",
   "The finish is electropolished for extra shine",
   "The hardware is rated for exterior exposure",
   "The finish is an exact color match certified by the factory to BHMA samples"
  ],
  "answer": 0,
  "explanation": "An E suffix marks an equivalent finish: 613E gives the dark oil-rubbed bronze appearance of 613 using a coating over steel instead of a true oxidized bronze base. Manufacturers use these equivalents on steel parts such as hinges and closers so they blend with genuine bronze trim."
 },
 {
  "id": "t9-001",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Which type of lock mechanism is found in the vast majority of automotive door and ignition locks?",
  "choices": [
   "Pin tumbler",
   "Wafer tumbler",
   "Lever tumbler",
   "Disc detainer"
  ],
  "answer": 1,
  "explanation": "Automotive locks overwhelmingly use wafer tumblers, which are cheaper to make and tolerate dirt and vibration better than pin tumbler designs. Pin tumblers dominate residential and commercial door hardware instead."
 },
 {
  "id": "t9-002",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What is the main structural difference between a wafer tumbler and a pin tumbler?",
  "choices": [
   "A wafer is spring loaded from below while a pin stack is spring loaded from the side",
   "A wafer rotates around its own axis while a pin slides along the length of its chamber",
   "A wafer is stamped from brass sheet while a pin must be machined from steel rod",
   "A wafer is a single flat piece while a pin chamber uses two or more stacked pieces"
  ],
  "answer": 3,
  "explanation": "A wafer tumbler is one flat plate that moves as a unit within the plug, while a pin tumbler chamber holds a stack of at least a bottom pin and a top pin. Both types must align at a shear line before the plug can turn."
 },
 {
  "id": "t9-003",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "In addition to wafers, many General Motors locks contain what secondary locking element?",
  "choices": [
   "A sidebar that must seat into notches in the wafers",
   "A magnetic slug that must align with the keyway",
   "A secondary pin stack hidden behind the plug",
   "A rotating disc pack mounted at the rear of the cylinder"
  ],
  "answer": 0,
  "explanation": "Many GM locks use a sidebar design: even with all wafers raised, a spring loaded sidebar must drop into notches in the wafers before the plug can rotate. This adds pick resistance beyond a plain wafer lock."
 },
 {
  "id": "t9-004",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "A customer's worn original key still opens the car doors but no longer turns the ignition. What is the most likely reason?",
  "choices": [
   "The door locks were replaced with aftermarket cylinders at some point",
   "The ignition uses a different keyway and blank than the door locks",
   "The ignition wears fastest because it is used on nearly every trip",
   "The transponder chip in the key head has failed from age"
  ],
  "answer": 2,
  "explanation": "The ignition lock sees a key insertion and turn on nearly every trip, so its wafers and the key cuts that operate it wear fastest. A worn key often keeps working in the less used door lock after the ignition rejects it."
 },
 {
  "id": "t9-005",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "On many vehicles the trunk and glove box are keyed so that they can be opened by the owner's key but NOT by the valet key. What is this arrangement an example of?",
  "choices": [
   "Construction keying of the vehicle locks",
   "Master keying within the vehicle",
   "Maison keying of the vehicle locks",
   "Cross keying between two vehicles"
  ],
  "answer": 1,
  "explanation": "The owner's key acts as a master that operates every lock on the car, while the valet key is a change key limited to the doors and ignition. This is a simple master keyed system built into one vehicle."
 },
 {
  "id": "t9-006",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Which feature identifies a sidewinder or laser cut automotive key?",
  "choices": [
   "A milled track cut into the face of a thicker blade",
   "Angled cut faces arranged around a round blade",
   "A resistor pellet embedded partway down the blade",
   "V shaped cuts spaced along both edges of a thinner blade"
  ],
  "answer": 0,
  "explanation": "Sidewinder keys, also called laser cut or internal cut keys, carry a wavy milled track in the center of a noticeably thicker blade. The cuts are read by the lock from the track rather than from the blade edge."
 },
 {
  "id": "t9-007",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What equipment is required to duplicate a sidewinder key?",
  "choices": [
   "A standard edge cut duplicating machine fitted with a fine cutter wheel",
   "A code cutter equipped with a standard slotter wheel",
   "A hand file, a vise, and a depth gauge",
   "A dedicated milling type machine designed for track keys"
  ],
  "answer": 3,
  "explanation": "The center track of a sidewinder key is milled into the blade, so it must be cut on a machine with an end mill style cutter made for high security track keys. A standard edge cut duplicator cannot produce the internal track."
 },
 {
  "id": "t9-008",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What distinguishes an edge cut key from an internal cut key?",
  "choices": [
   "Edge cut keys are always double sided while internal cut keys can only be single sided",
   "Edge cut keys are used only on doors and trunks while internal cut keys are used only in ignitions",
   "The bitting is on the blade edge for edge cut keys and in a milled face groove for internal cut keys",
   "Edge cut keys always contain a transponder while internal cut keys never do"
  ],
  "answer": 2,
  "explanation": "Edge cut keys have their cuts notched into the edge of the blade, the traditional style. Internal cut keys carry the combination in a track milled into the flat surface of the blade."
 },
 {
  "id": "t9-009",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "When high security automotive keys are described as 2 track or 4 track, what does the number refer to?",
  "choices": [
   "How many milled cut paths the blade carries",
   "How many wafers the matching lock contains",
   "How many transponder channels the key uses",
   "How many depths are possible at each cut position"
  ],
  "answer": 0,
  "explanation": "The track count describes how many separate milled cut paths run along the key blade. A 4 track key carries more cut paths than a 2 track key, which the matching cylinder reads with additional tumblers."
 },
 {
  "id": "t9-010",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "The Tibbe key, used on certain Ford, Merkur, and Jaguar vehicles, is recognized by what feature?",
  "choices": [
   "A flat blade with a milled center channel",
   "Angled cuts arranged around a round blade",
   "A rectangular blade with holes drilled through it",
   "A folding blade that pivots out of the bow"
  ],
  "answer": 1,
  "explanation": "The Tibbe key has a roughly round blade with a series of angled cut faces around it, operating a rotating disc style lock. It requires its own dedicated cutting equipment and decoding tools."
 },
 {
  "id": "t9-011",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What makes a double sided automotive key a so called convenience key?",
  "choices": [
   "It operates both the doors and the trunk of the vehicle",
   "It can be duplicated on either side of a duplicating machine",
   "It enters and operates the lock with either edge facing up",
   "It fits two different vehicle makes on one blank"
  ],
  "answer": 2,
  "explanation": "A double sided convenience key is cut identically on both edges, so the driver can insert it either way up and it still operates the lock. The lock reads whichever edge faces the tumblers."
 },
 {
  "id": "t9-012",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "In a transponder key system, what does the chip in the key bow actually do?",
  "choices": [
   "It completes an electrical circuit through metal contacts inside the ignition switch",
   "It unlocks the doors automatically when the driver approaches the car",
   "It stores a backup copy of the mechanical cut depths of the blade",
   "It answers a radio challenge from the vehicle immobilizer with a stored code"
  ],
  "answer": 3,
  "explanation": "The transponder is a small RFID chip in the plastic head of the key. When the key is inserted, an antenna ring around the ignition energizes the chip and the chip replies with its code; the immobilizer allows the engine to run only if the reply is recognized."
 },
 {
  "id": "t9-013",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "A correctly cut copy of a transponder key was made but the chip was never programmed to the car. What symptom should be expected?",
  "choices": [
   "The engine cranks but will not start, or starts and immediately dies",
   "The key will not physically enter the ignition lock keyway",
   "The key turns the ignition switch but the doors will no longer unlock",
   "The engine starts normally but the security warning light stays on"
  ],
  "answer": 0,
  "explanation": "The mechanical cuts let the key turn the lock, so the starter cranks, but the immobilizer never receives a recognized transponder reply and cuts fuel or spark. On some vehicles the engine fires briefly and then stalls."
 },
 {
  "id": "t9-014",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Why is cutting the blade alone NOT sufficient when making a working key for a transponder equipped vehicle?",
  "choices": [
   "The blade must also be engraved with the factory key code",
   "The chip must also be cloned or programmed so the immobilizer accepts it",
   "The blade must be demagnetized before it can pass the antenna ring",
   "The ignition cylinder must be replaced whenever a new key is added to the car"
  ],
  "answer": 1,
  "explanation": "A transponder vehicle checks the chip electronically every time the engine is started. A key with correct cuts but an unrecognized chip will operate the locks mechanically yet the immobilizer will still prevent the engine from running."
 },
 {
  "id": "t9-015",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What happens during transponder key cloning?",
  "choices": [
   "The vehicle computer is reflashed so it will accept any chip presented",
   "A brand new chip identity is registered in the vehicle through the diagnostic port",
   "The identity of a working chip is copied onto a clonable chip in the new key",
   "The chip is physically moved from the old key head into the new key head"
  ],
  "answer": 2,
  "explanation": "Cloning reads the data from an existing working key and writes it to a special clonable chip, so the vehicle sees the copy as the very same key. Nothing is changed in the vehicle itself, which is why cloning requires a working original."
 },
 {
  "id": "t9-016",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "How does OBD key programming differ from cloning?",
  "choices": [
   "It works without needing any physical access to the vehicle at all",
   "It only works on older keys that do not contain transponder chips",
   "It copies the old chip identity onto the new chip so the vehicle cannot tell them apart",
   "It registers the new key's own chip identity in the vehicle through the diagnostic port"
  ],
  "answer": 3,
  "explanation": "With OBD programming, a tool connected to the vehicle's diagnostic port instructs the immobilizer to learn the new chip as an additional authorized key. The new key keeps its own identity instead of impersonating an existing one."
 },
 {
  "id": "t9-017",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "In an all keys lost situation on a transponder vehicle, why is cloning NOT an option?",
  "choices": [
   "Clonable chips only work while the original key is present in the car",
   "Cloning requires a working original key to copy from, and none exists",
   "Cloning is only possible with equipment restricted to the dealership",
   "The immobilizer erases all stored keys as soon as one is reported lost"
  ],
  "answer": 1,
  "explanation": "Cloning duplicates the data of an existing working key, so with every key lost there is nothing to read. The locksmith must instead cut a key from code and program it to the vehicle, typically through the OBD port."
 },
 {
  "id": "t9-018",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "In the GM VATS or PassKey system, what security element is built into the key blade?",
  "choices": [
   "A resistor pellet with a specific resistance value",
   "A radio transponder chip molded into the blade tip",
   "A magnetic strip laminated along one side of the blade",
   "A microswitch that closes when the key bottoms out"
  ],
  "answer": 0,
  "explanation": "VATS keys carry a visible resistor pellet in the blade. Contacts in the ignition lock read the pellet's resistance, and the vehicle allows starting only if the value matches the one it expects."
 },
 {
  "id": "t9-019",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "How many standard resistance values were used for GM VATS resistor pellets?",
  "choices": [
   "5",
   "10",
   "15",
   "30"
  ],
  "answer": 2,
  "explanation": "The VATS system used 15 standard pellet resistance values. A locksmith making a VATS key must identify or measure the correct value in addition to cutting the blade correctly."
 },
 {
  "id": "t9-020",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What does a GM VATS system do when a key with the wrong resistor pellet value is used?",
  "choices": [
   "It permanently disables the ignition until the dealer resets it",
   "It allows the engine to start but sounds the alarm continuously",
   "It ejects the key partway out of the ignition cylinder",
   "It locks out further starting attempts for a timed interval"
  ],
  "answer": 3,
  "explanation": "A wrong pellet value triggers a timed lockout, typically a few minutes, during which the car will not start even with the correct key. This defeats rapid trial and error of pellet values."
 },
 {
  "id": "t9-021",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "How does the GM PassLock system differ from a transponder key system?",
  "choices": [
   "The key is purely mechanical because the sensing is built into the lock cylinder",
   "The key carries two separate transponder chips instead of just one",
   "PassLock protects only the door locks and leaves the ignition unprotected",
   "PassLock keys can only be duplicated with dealership cloning equipment"
  ],
  "answer": 0,
  "explanation": "PassLock builds the security sensing into the ignition lock cylinder, which signals the immobilizer when it is rotated by a proper key. Because the key is purely mechanical, a correctly cut copy works without any programming."
 },
 {
  "id": "t9-022",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "In a PEPS or push button proximity system, how does the vehicle authorize starting?",
  "choices": [
   "The driver enters a PIN code on the dash display before pressing the button",
   "Antennas in the vehicle detect and authenticate the fob wirelessly inside the cabin",
   "The fob must be docked in a console slot that reads its electrical contacts",
   "The mechanical blade hidden inside the fob must first be inserted into a console lock"
  ],
  "answer": 1,
  "explanation": "Passive entry passive start systems communicate with the fob by radio through antennas in and around the vehicle. When the fob is authenticated inside the cabin, pressing the start button is allowed with no key insertion at all."
 },
 {
  "id": "t9-023",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "A locksmith clones a customer's transponder key onto a new remote head key and the car starts, but the lock and unlock buttons do nothing. What was missed?",
  "choices": [
   "The blade was cut to the wrong depths in the last two positions",
   "The transponder chip was cloned onto the wrong chip generation",
   "The keyless entry remote requires its own separate programming to the vehicle",
   "The remote's battery must first be recharged by holding it near the ignition antenna"
  ],
  "answer": 2,
  "explanation": "The transponder and the keyless entry remote are separate systems in the same key. Cloning or programming the chip satisfies the immobilizer, but the remote buttons must still be programmed to the vehicle's receiver by their own procedure."
 },
 {
  "id": "t9-024",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Which locks will a typical valet key operate?",
  "choices": [
   "The trunk and the glove box but none of the door locks",
   "Every lock on the vehicle including the glove box",
   "The door locks only, and nothing else on the car",
   "The doors and ignition, but not the trunk or glove box"
  ],
  "answer": 3,
  "explanation": "A valet key lets an attendant drive and lock the car while keeping the trunk and glove box secure. The owner's full key operates all of the vehicle's locks."
 },
 {
  "id": "t9-025",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Through what channel can a locksmith legitimately obtain a vehicle's key code from its VIN?",
  "choices": [
   "A secure data release program such as NASTF, with proof of ownership on file",
   "Any public VIN decoder website that lists factory build data",
   "A written records request to the state DMV titling office where the car is registered",
   "The National Insurance Crime Bureau vehicle theft hotline"
  ],
  "answer": 0,
  "explanation": "Registered locksmiths can obtain key codes and security information through the NASTF secure data release model or similar authorized services. The locksmith must document the owner's identity and proof of ownership for each request."
 },
 {
  "id": "t9-026",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What does it mean to originate a car key by decoding the door lock?",
  "choices": [
   "Tracing the outline of the door lock keyway onto an uncut blank",
   "Reading the wafer positions to learn the cuts and cutting a key to that combination",
   "Measuring a worn door key with calipers and copying its dimensions",
   "Removing the door lock and mailing it to the lock manufacturer to request the factory code"
  ],
  "answer": 1,
  "explanation": "By reading the positions of the wafers through the keyway, or by disassembling the removed lock, the locksmith learns the bitting and can cut a working key by code. This avoids needing an existing key."
 },
 {
  "id": "t9-027",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "A locksmith decodes a car's door lock but the resulting key will not turn the ignition. What is the usual explanation and next step?",
  "choices": [
   "The door lock was decoded backwards, so it must be read again in reverse order",
   "The ignition uses an entirely different keyway, so a second blank must be sourced",
   "The transponder ring is blocking rotation, so the chip must be programmed before the lock will turn",
   "The door lock lacks some cut positions, so the missing cuts must be progressed"
  ],
  "answer": 3,
  "explanation": "On many vehicles the door lock holds fewer wafer positions than the ignition. The locksmith fills the known cuts from the door and progresses the remaining positions through their possible depths until the ignition turns."
 },
 {
  "id": "t9-028",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What two functions does a Lishi style 2 in 1 automotive tool combine?",
  "choices": [
   "Key cutting and transponder chip cloning",
   "Plug removal and wafer spring replacement",
   "Picking the lock and decoding the wafer depths",
   "Wedging the door and manipulating the inside linkage"
  ],
  "answer": 2,
  "explanation": "A 2 in 1 tool for a specific vehicle keyway lets the locksmith pick the lock open and read the depth of each wafer at the same time. The decoded depths can then be used to cut a working key."
 },
 {
  "id": "t9-029",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What is the standard technique for a car lockout using a wedge and long reach tool?",
  "choices": [
   "Wedge a gap at the door frame and guide a rod inside to press the unlock button",
   "Wedge the window glass down its track and turn the lock cylinder tailpiece directly",
   "Wedge the hood open and disconnect the battery so the power locks release",
   "Wedge the door bottom and hook the latch cable running under the sill"
  ],
  "answer": 0,
  "explanation": "An inflatable or plastic wedge opens a small gap between the door frame and body, and a long reach rod passes through it to operate the interior unlock button, switch, or handle. Done carefully it avoids damage to the door and its internals."
 },
 {
  "id": "t9-030",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Why are slim jim tools considered risky on modern vehicle doors?",
  "choices": [
   "Modern laminated door glass is too thick for the tool to pass alongside it",
   "The tool can snag airbag wiring or bend rods, and many linkages are shielded",
   "Modern doors no longer contain any mechanical linkage rods to reach",
   "Using one can drain the vehicle battery by shorting the door harness to ground"
  ],
  "answer": 1,
  "explanation": "Modern doors are crowded with wiring for side airbags, sensors, and power accessories, and manufacturers often shield the lock linkage. A blindly inserted slim jim can bend rods, cut wires, or disable the lock entirely."
 },
 {
  "id": "t9-031",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "When manipulating door lock linkage on older vehicles, what is the practical difference between vertical button and horizontal linkage designs?",
  "choices": [
   "Vertical buttons can only be unlocked from outside while horizontal linkages unlock only from inside",
   "Vertical buttons are always electric while horizontal linkages are always mechanical",
   "A vertical button is lifted upward while horizontal linkage slides sideways or rotates",
   "There is no difference in the direction the tool must move the linkage"
  ],
  "answer": 2,
  "explanation": "The tool motion must match the linkage: a vertical post is pulled straight up to unlock, while horizontal linkage moves in a sliding or rotating direction inside the door. Identifying the linkage type before inserting a tool reduces damage."
 },
 {
  "id": "t9-032",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Before unlocking a vehicle for a customer, what documentation should a North Carolina locksmith require?",
  "choices": [
   "A signed liability waiver releasing the locksmith from damage claims",
   "The key code card that was originally supplied with the vehicle",
   "A notarized letter of authorization from the vehicle's lienholder or leasing company",
   "Photo ID plus proof of ownership such as registration, title, or an insurance card"
  ],
  "answer": 3,
  "explanation": "The locksmith must reasonably verify that the person requesting entry is entitled to the vehicle, normally by matching photo ID against the registration, title, or insurance card. Verifying ownership before opening a car is also a legal duty for licensed locksmiths in North Carolina."
 },
 {
  "id": "t9-033",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What are the two common methods for releasing an automotive ignition lock cylinder from its housing?",
  "choices": [
   "Depressing an active retainer, or reaching a fixed retainer through a release hole",
   "Heating the housing with a torch, or freezing the cylinder with refrigerant",
   "Unscrewing the cylinder counterclockwise, or prying off the face cap with a screwdriver",
   "Removing the steering wheel, or disconnecting the battery ground cable"
  ],
  "answer": 0,
  "explanation": "Most ignition cylinders are held by a retainer: either an active retainer the key motion exposes so it can be depressed, or a fixed retainer reached with a pick through a small release hole. Knowing which type the column uses prevents damage during removal."
 },
 {
  "id": "t9-034",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Why must many ignition cylinders be rotated to the accessory or run position before they can be removed?",
  "choices": [
   "Rotation disconnects the transponder antenna ring from its harness",
   "The retainer only lines up with its release opening in that position",
   "The steering wheel must be unlocked before the mounting screws can be reached",
   "Rotation safely discharges the airbag system capacitor"
  ],
  "answer": 1,
  "explanation": "In the off position the retainer is captive inside the housing. Turning the cylinder, commonly to ACC or RUN, aligns the retainer with the release opening so it can be depressed and the cylinder withdrawn."
 },
 {
  "id": "t9-035",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "A customer's keys are locked in the trunk of a car whose rear seats do not fold and which has no cabin pass through. After unlocking the doors, how is the trunk usually opened?",
  "choices": [
   "By drilling out the trunk lid hinge pins from inside the cabin",
   "By removing the rear bumper cover and reaching the trunk latch mechanism from below",
   "Through the interior trunk release, or by picking or decoding the trunk lock itself",
   "By prying the trunk lid upward at the latch with a padded pry bar"
  ],
  "answer": 2,
  "explanation": "With no pass through, the trunk must be opened through its own release or its own lock. The locksmith uses the cabin trunk release if it works, and otherwise picks or decodes the trunk cylinder or generates a key rather than causing body damage."
 },
 {
  "id": "t9-036",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "A customer needs a spare key for a 1990 pickup with its original equipment ignition. What does making a working copy involve?",
  "choices": [
   "Cutting the blade and then cloning the transponder chip",
   "Cutting the blade and then programming it to the truck through the OBD port",
   "Measuring the resistor pellet value and matching it in the new blade",
   "Duplicating the mechanical cuts only, since the truck predates immobilizers"
  ],
  "answer": 3,
  "explanation": "Vehicles from before the mid 1990s generally have purely mechanical keys with no transponder or immobilizer. An accurately cut duplicate is a complete working key with no electronic steps."
 },
 {
  "id": "t9-037",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Compared with modern car keys, keys for most motorcycles and older vehicles are best described as what?",
  "choices": [
   "Simple mechanical wafer keys with no electronics to program",
   "High security track keys requiring dedicated milling equipment",
   "Transponder keys that must be cloned from a working original",
   "Tubular keys requiring a special tubular cutting machine"
  ],
  "answer": 0,
  "explanation": "Most motorcycles and pre immobilizer vehicles use straightforward wafer locks operated by plain mechanical keys. They can be duplicated, decoded, and originated with basic equipment."
 },
 {
  "id": "t9-038",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Is a franchised dealership the only business that can legally make a new transponder key for a vehicle?",
  "choices": [
   "Yes, federal law reserves key origination to the manufacturer's dealers",
   "No, equipped locksmiths can also cut and program keys using secure code access",
   "Yes, unless the vehicle is more than ten model years old at the time",
   "No, but the locksmith must purchase every key blank through the dealership parts counter"
  ],
  "answer": 1,
  "explanation": "Independent locksmiths with the right cutting and programming equipment can originate keys for most vehicles. Secure data release programs give registered locksmiths access to key codes and immobilizer information when ownership is documented, so customers are not limited to the dealer."
 },
 {
  "id": "t9-039",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "What is the proper first approach to removing a key broken off inside an ignition lock?",
  "choices": [
   "Push the fragment all the way through the lock with a follower tool",
   "Drill out the plug immediately and replace the entire cylinder",
   "Hook the fragment's cuts with a spiral extractor and draw it straight out",
   "Glue the fragment to an uncut blank with adhesive and pull them out together"
  ],
  "answer": 2,
  "explanation": "A broken key extractor grips the cuts of the fragment so it can be pulled out along the keyway. Pushing the piece deeper or resorting to drilling risks turning a simple extraction into a cylinder replacement."
 },
 {
  "id": "t9-040",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Besides switching the electrical system, what anti theft function does the ignition lock in a locking steering column provide?",
  "choices": [
   "It sounds the horn repeatedly if the cylinder is forced",
   "It isolates the fuel pump relay whenever the key is out",
   "It disables the interior door lock switches when the key is removed",
   "It engages a bolt that locks the steering when the key is removed"
  ],
  "answer": 3,
  "explanation": "In a locking column, removing the key lets a spring loaded bolt engage the steering shaft so the wheel cannot be turned. This mechanical lock is why column and ignition work must be done with care to avoid locking the steering unexpectedly."
 },
 {
  "id": "t9-041",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "A tow truck operator unlocks a car door in the ordinary course of a towing job in North Carolina. What is that operator's status under the state locksmith licensing law?",
  "choices": [
   "Exempt, like repossession agents, repair shops, and dealers in their normal business",
   "In violation of the law unless a licensed locksmith is physically present at the scene",
   "Required to hold at least an apprentice locksmith designation",
   "Required to file a report of each unlock with the licensing board"
  ],
  "answer": 0,
  "explanation": "North Carolina's locksmith licensing law exempts towing companies, repossession professionals, auto repair shops, and motor vehicle dealers when they perform such services within the normal course of their own business. The licensing requirement targets those offering locksmith services to the public as their trade."
 },
 {
  "id": "t9-042",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "Beyond pick resistance, what practical security advantage do high security milled automotive keys offer vehicle owners?",
  "choices": [
   "They never wear out from normal insertion and use",
   "They are hard to copy casually because few shops have the machines",
   "They cannot be lost because they attach permanently to the fob",
   "They cannot be decoded through the keyway even with vehicle specific tools"
  ],
  "answer": 1,
  "explanation": "Because internal cut keys require specialized milling equipment, they cannot be copied at an ordinary hardware store duplicator. This limits unauthorized duplication compared with common edge cut keys."
 },
 {
  "id": "t9-043",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "The battery in a proximity fob is dead. How is the owner typically still able to enter and start the vehicle?",
  "choices": [
   "The vehicle unlocks automatically whenever the dead fob is close to the door",
   "Jump starting the car sends power to the fob and reactivates it",
   "Use the fob's hidden emergency blade for the door, then hold the fob at the backup antenna spot",
   "Enter a fallback code on the door keypad, which every proximity equipped vehicle includes as standard equipment"
  ],
  "answer": 2,
  "explanation": "Proximity fobs contain a concealed mechanical emergency blade that opens a door lock cylinder, often hidden behind a cap on the handle. Inside, a backup antenna location, commonly at the start button or a marked pocket, can power and read the fob's chip passively so the engine can still be started."
 },
 {
  "id": "t9-044",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "When originating a key for a vehicle, why do locksmiths usually prefer to work from the door lock rather than the ignition?",
  "choices": [
   "The door lock always contains more cut positions than the ignition does",
   "Door locks are the only automotive locks that are legal to pick",
   "The ignition can no longer be decoded once a transponder system is present in the car",
   "The door lock can be read or removed without tearing into the steering column"
  ],
  "answer": 3,
  "explanation": "The door lock is accessible from outside and can be picked, decoded through the keyway, or pulled from the door with modest disassembly. Reaching the ignition cylinder means opening up the steering column, which takes longer and carries more risk of damage."
 },
 {
  "id": "t9-045",
  "section": 9,
  "sectionName": "Automotive Locksmithing",
  "question": "In an automotive lock built for a double sided key, how are the wafers arranged to read the key?",
  "choices": [
   "Alternating wafers read opposite edges of the blade",
   "All of the wafers read only the top edge of the blade",
   "The wafers read the milled center face of the blade",
   "Each wafer reads both edges at once through a split follower"
  ],
  "answer": 0,
  "explanation": "In many double sided wafer locks, successive wafers face in opposite directions so some read one edge of the key while the rest read the other. Because both edges are cut identically, the lock operates with the key inserted either way up."
 },
 {
  "id": "t10-001",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "When determining the handing of a safe, from which position is the door viewed?",
  "choices": [
   "From inside the safe looking out through the opening",
   "From the hinge side edge of the door",
   "From the front, standing outside and facing the door",
   "From whichever side the lock is mounted on"
  ],
  "answer": 2,
  "explanation": "Safe handing, like door handing, is always described from the front or outside of the safe. Hinges on the right with the door swinging toward you makes the safe right-handed."
 },
 {
  "id": "t10-002",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "A locksmith orders parts for a safe whose hinges are on the right when viewed from the front, with the door swinging out toward the viewer. How should the handing be called out on the order?",
  "choices": [
   "Right-hand",
   "Left-hand",
   "Right-hand reverse",
   "Left-hand reverse"
  ],
  "answer": 0,
  "explanation": "Viewed from the front, hinges on the right with the door opening toward you is a right-hand safe. Handing must be stated correctly when ordering doors, boltwork, and hinge parts because they are not reversible."
 },
 {
  "id": "t10-003",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "In a mechanical safe lock, which part passes through the safe door and connects the dial to the drive cam?",
  "choices": [
   "The fence",
   "The lever",
   "The relock trigger",
   "The spindle"
  ],
  "answer": 3,
  "explanation": "The spindle is the shaft that runs from the dial through the door and threads into or engages the drive cam, so turning the dial turns the cam inside the lock case."
 },
 {
  "id": "t10-004",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What is the function of the drive cam in a mechanical combination lock?",
  "choices": [
   "It holds the sealed change key records for the lock",
   "It transfers dial rotation to the wheel pack and provides the gate that the lever nose enters",
   "It springs the boltwork open when the handle is turned",
   "It permanently blocks the boltwork whenever the lock case is punched or the dial is torn off the spindle"
  ],
  "answer": 1,
  "explanation": "The drive cam turns with the spindle, picks up the wheels through the drive pin and flies, and has its own gate that the lever nose drops into so the bolt can be retracted."
 },
 {
  "id": "t10-005",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "A mechanical safe lock set to a three-number combination normally contains how many wheels in its wheel pack?",
  "choices": [
   "2 wheels",
   "3 wheels",
   "4 wheels",
   "6 wheels"
  ],
  "answer": 1,
  "explanation": "There is one wheel, also called a tumbler, for each number in the combination, so a three-number combination uses a three-wheel pack."
 },
 {
  "id": "t10-006",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What is the gate on a combination lock wheel?",
  "choices": [
   "A raised pin on the side of the wheel that drives the next wheel in the pack",
   "The hole in the center of the wheel that rides on the post",
   "A spring clip that keeps tension on the wheel",
   "A notch cut into the edge of the wheel that accepts the fence"
  ],
  "answer": 3,
  "explanation": "Each wheel has a gate, a notch in its edge. When the correct combination is dialed, all the gates line up under the fence."
 },
 {
  "id": "t10-007",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "In a mechanical safe lock, what is the fence?",
  "choices": [
   "A bar on the lever that drops into the wheel gates when they align",
   "A hardened barrier that surrounds the outside of the lock case",
   "The stop that limits how far the dial can rotate",
   "A fine screen that keeps drill shavings and debris out of the wheel pack"
  ],
  "answer": 0,
  "explanation": "The fence is the projection carried on the lever. It rides on the wheel edges until every gate aligns beneath it, then drops in so the lock can open."
 },
 {
  "id": "t10-008",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What role does the lever play in a mechanical safe lock?",
  "choices": [
   "It winds the mainspring that powers the wheels",
   "It automatically scrambles the wheels to a random setting each time the safe door is closed and locked",
   "It carries the fence and, when its nose enters the drive cam gate, allows the bolt to retract",
   "It ejects the change key after a combination change"
  ],
  "answer": 2,
  "explanation": "The lever holds the fence over the wheel pack. When the gates align and the fence drops, the lever nose can enter the drive cam gate and the continued dial rotation pulls the lock bolt back."
 },
 {
  "id": "t10-009",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "Using a typical Group 2 dialing convention, how is a three-number safe combination dialed?",
  "choices": [
   "Four turns left to the first number, three right to the second, two left to the third, then right to open",
   "One turn left to the first number, two turns right to the second, three left to the third, then right to open",
   "Three turns right to each number in order, then a full turn left to open",
   "Two turns left to the first number, two right to the second, two left to the third, then left to open"
  ],
  "answer": 0,
  "explanation": "The common convention is 4 left, 3 right, 2 left, then 1 right until the dial stops; the number of turns decreases by one for each number. Direction conventions vary by manufacturer, so always follow the maker's dialing instructions."
 },
 {
  "id": "t10-010",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "Under UL 768, which lock group is the standard rating found on most ordinary commercial safe locks?",
  "choices": [
   "Group 1",
   "Group 1R",
   "Group 2",
   "Group 2M"
  ],
  "answer": 2,
  "explanation": "Group 2 is the baseline UL rating for mechanical combination locks and is what most commercial safes ship with. Groups 2M, 1, and 1R add increasing levels of manipulation or radiological resistance."
 },
 {
  "id": "t10-011",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What does the M indicate in a UL Group 2M combination lock rating?",
  "choices": [
   "The dial is graduated in metric increments",
   "The lock has been tested for resistance to manipulation",
   "The lock uses a motorized bolt mechanism",
   "The lock is approved for use on media and data storage safes"
  ],
  "answer": 1,
  "explanation": "Group 2M locks meet the Group 2 standard plus a tested degree of manipulation resistance, making them harder to open by feel than a plain Group 2 lock."
 },
 {
  "id": "t10-012",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "For how many hours must a UL Group 1 combination lock resist expert manipulation?",
  "choices": [
   "5 hours",
   "10 hours",
   "15 hours",
   "20 hours"
  ],
  "answer": 3,
  "explanation": "A Group 1 lock must withstand skilled manipulation attempts for 20 hours, which is why these locks are specified for high-security containers."
 },
 {
  "id": "t10-013",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What added protection distinguishes a UL Group 1R combination lock from a Group 1 lock?",
  "choices": [
   "A built-in relock trigger inside the lock case",
   "Wheels that can be recombinated by the owner without using a change key",
   "A corrosion-proof case for marine installations",
   "Resistance to radiological attack such as X-ray reading of the wheels"
  ],
  "answer": 3,
  "explanation": "The R in Group 1R stands for radiological resistance. Its wheels are made of materials that cannot be read with X-ray equipment, in addition to meeting the Group 1 manipulation standard."
 },
 {
  "id": "t10-014",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What typically happens after several consecutive wrong codes are entered on an electronic safe lock?",
  "choices": [
   "The keypad shuts down permanently and cannot be used again until a full factory reset",
   "The lock ignores all input for a penalty lockout period before accepting more tries",
   "The stored combination is erased and must be reprogrammed",
   "The internal relocker fires and blocks the boltwork"
  ],
  "answer": 1,
  "explanation": "Electronic safe locks use a penalty lockout, commonly several minutes of dead keypad after a string of wrong entries, to defeat trial-and-error code guessing."
 },
 {
  "id": "t10-015",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "Where are the batteries for a typical electronic safe lock located?",
  "choices": [
   "Inside the lock case behind the door boltwork",
   "In a sealed compartment welded inside the safe body",
   "In the keypad housing on the outside of the door",
   "In a wall transformer that plugs in near the safe"
  ],
  "answer": 2,
  "explanation": "Batteries normally live in the keypad outside the door so a dead battery can be replaced without opening the safe; the code and lock state are retained in nonvolatile memory."
 },
 {
  "id": "t10-016",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "How is the combination changed on a typical electronic safe lock?",
  "choices": [
   "By entering a programming sequence or using a change key while the door is open",
   "By removing the lock body from the door and rearranging the internal jumper pins",
   "By returning the keypad to the factory for reprogramming",
   "By dialing the old code backward and then the new code twice"
  ],
  "answer": 0,
  "explanation": "Electronic locks are recombinated at the keypad with a change code or sequence, or with a change key on some models, and the change should always be made and verified with the door open."
 },
 {
  "id": "t10-017",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What is a relocker, or relock device, in a safe?",
  "choices": [
   "A backup dial that opens the safe if the main dial fails",
   "A timer that automatically relocks the door each night",
   "An internal device that blocks the boltwork independently of the lock when the safe is attacked",
   "A secondary key-operated lock the owner can engage on the boltwork while away on extended travel"
  ],
  "answer": 2,
  "explanation": "A relocker is a hidden trigger inside the safe that, once fired by an attack, deadlocks the boltwork on its own, so opening the lock no longer opens the door."
 },
 {
  "id": "t10-018",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "Which event would typically fire a safe's relock device?",
  "choices": [
   "The spindle being punched through into the lock case",
   "The correct combination being dialed too quickly",
   "Three wrong combinations dialed in a row",
   "The door being slammed shut with the locking bolts extended"
  ],
  "answer": 0,
  "explanation": "Relockers fire on attack conditions such as a punched spindle, a torn-off dial, or torch heat, not on normal use or dialing errors."
 },
 {
  "id": "t10-019",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "How does a glass-plate relocker respond to a torch attack on the safe door?",
  "choices": [
   "The glass expands and jams the dial spindle",
   "The plate slides down over the lock case to act as a heat shield",
   "The glass insulates the lock until the flame is removed",
   "Thermal links melt and release spring-loaded relocking bolts"
  ],
  "answer": 3,
  "explanation": "Glass-plate relockers fire two ways: drilling shatters the tempered plate, and torch heat melts fusible thermal links; either releases spring-loaded bolts that deadlock the boltwork."
 },
 {
  "id": "t10-020",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "While servicing a safe, a locksmith finds it necessary to bypass a relock device to complete the opening. What must be done about the relocker afterward?",
  "choices": [
   "Note the bypass on the invoice and leave it as found",
   "Restore the relocker to full working order before the job is complete",
   "Remove the relocker entirely since it has already served its purpose",
   "Wire the relocker in the open position so future service calls are easier"
  ],
  "answer": 1,
  "explanation": "A relock device must never be left disabled. Restoring the safe's protective devices is both trade practice and an ethics requirement for North Carolina licensees."
 },
 {
  "id": "t10-021",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What is the purpose of the hardplate in a safe door?",
  "choices": [
   "It stiffens the door slab so it cannot be pried open at the corners",
   "It shields the lock case and critical areas from drill attack",
   "It insulates the lock from fire damage",
   "It provides a mounting surface for the hinges"
  ],
  "answer": 1,
  "explanation": "Hardplate is a layer of extremely hard material placed over the lock case and drill points so that ordinary drill bits are destroyed before reaching the lock."
 },
 {
  "id": "t10-022",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "Where are time locks most commonly installed, and what do they do?",
  "choices": [
   "On retail registers, delaying the drawer for a short interval",
   "On gun safes, limiting access to certain hours that the owner programs each week",
   "On residential safes, relocking the door after ten minutes",
   "On bank vault doors, preventing opening until a preset time period has elapsed"
  ],
  "answer": 3,
  "explanation": "A time lock blocks a vault door from opening until its set time has run out, even for someone with the correct combination, protecting against after-hours coercion of employees."
 },
 {
  "id": "t10-023",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "Why do vault time locks contain two or three separate clock movements?",
  "choices": [
   "For redundancy, so the door can still open on time if a movement fails",
   "So that different employees can each set their own separate opening time",
   "To divide the timing load and reduce spring wear",
   "Because codes require one movement for each vault bolt"
  ],
  "answer": 0,
  "explanation": "Multiple movements are wound together and any one of them can release the lock. If a movement stops, the others still open the vault at the set time, avoiding an expensive lockout."
 },
 {
  "id": "t10-024",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What is the purpose of a time-delay lock on a retail store safe?",
  "choices": [
   "To keep the safe locked outside posted business hours",
   "To give the manager time to personally verify the identity of each safe user",
   "To deter robbery by forcing a wait between code entry and the lock releasing",
   "To slow down employees who open the safe too often"
  ],
  "answer": 2,
  "explanation": "A time-delay lock opens only after a short programmed wait, commonly around ten to fifteen minutes, making a quick armed robbery impractical. This differs from a time lock, which blocks opening entirely until a set time."
 },
 {
  "id": "t10-025",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What do the B-rate and C-rate safe classifications describe?",
  "choices": [
   "Construction specifications such as steel thickness, not tested attack resistance",
   "The number of minutes the safe body and door survived a standardized UL tool attack test",
   "The fire endurance of the safe body and door",
   "The insurance payout class assigned after a loss"
  ],
  "answer": 0,
  "explanation": "B-rate and C-rate are construction ratings based on the thickness of the body and door steel. Unlike UL TL ratings, they involve no performance testing against an actual attack."
 },
 {
  "id": "t10-026",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What does a UL TL-15 burglary rating certify about a safe?",
  "choices": [
   "It survives 15 minutes in a standard fire test",
   "Its combination lock resists expert manipulation attempts for a total of 15 hours",
   "Its door and front face resist a tool attack for 15 minutes of working time",
   "It withstands 15 drop tests from a standard height"
  ],
  "answer": 2,
  "explanation": "TL ratings are performance tests: TL-15 means UL technicians with common tools could not open the door within 15 minutes of net working time. TL-30 extends the attack time to 30 minutes."
 },
 {
  "id": "t10-027",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "How does a TL-30x6 rating differ from a plain TL-30 rating?",
  "choices": [
   "The attack test is extended to six hours instead of 30 minutes",
   "The safe resists the 30-minute tool attack on all six sides, not just the door",
   "Six different tool sets are used against the door in sequence",
   "The safe body must weigh at least six times the minimum weight required for a TL-30 rating"
  ],
  "answer": 1,
  "explanation": "The x6 suffix means the tool-attack test applies to every side of the container, while a plain TL rating covers only the door and front face."
 },
 {
  "id": "t10-028",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "In UL safe burglary ratings, what does the TRTL prefix indicate?",
  "choices": [
   "Resistance to tampering with the relock devices",
   "A rating limited to torch attacks only",
   "A transferable rating that follows the safe when resold",
   "Resistance to attack by both cutting torches and tools"
  ],
  "answer": 3,
  "explanation": "TRTL ratings, such as TRTL-30x6, certify resistance to combined torch and tool attacks for the stated time, a step above tool-only TL ratings."
 },
 {
  "id": "t10-029",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What attack resistance does a TXTL rating add beyond a TRTL rating?",
  "choices": [
   "Resistance to X-ray reading of the combination",
   "Resistance to extended attacks lasting a full day",
   "Resistance to attacks using liquid nitrogen",
   "Resistance to attacks using explosives"
  ],
  "answer": 3,
  "explanation": "TXTL is the highest UL burglary class: the container must resist torches, tools, and a limited charge of explosives for the rated time."
 },
 {
  "id": "t10-030",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "A customer wants to protect cash from theft and points to a safe that carries only a UL fire label. What should the locksmith explain?",
  "choices": [
   "The fire label also certifies at least 15 minutes of burglary resistance",
   "Fire ratings say nothing about burglary resistance, so a burglary-rated safe is needed",
   "Any safe over 750 pounds is automatically burglary rated",
   "Fire safes resist burglary attacks just as well so long as they are properly anchored down"
  ],
  "answer": 1,
  "explanation": "Fire ratings and burglary ratings are separate systems. A fire safe has thin steel around insulating fill and offers little attack resistance; cash and valuables call for a burglary rating such as B-rate or TL-15."
 },
 {
  "id": "t10-031",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What does a UL Class 350 one-hour fire rating guarantee?",
  "choices": [
   "The safe exterior stays below 350 degrees F for one hour",
   "The contents survive a drop test from 350 feet after one full hour of fire exposure",
   "The interior stays below 350 degrees F during one hour of standard fire exposure",
   "The safe can be reused after one fire lasting under 350 minutes"
  ],
  "answer": 2,
  "explanation": "Class 350 ratings, offered in 1, 2, and 4 hour versions, certify the interior temperature stays under 350 degrees F during the test fire. That threshold protects paper, which chars at roughly 420 degrees F."
 },
 {
  "id": "t10-032",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "Which UL fire rating is required for a safe that stores computer media and magnetic data?",
  "choices": [
   "Class 125",
   "Class 150",
   "Class 350",
   "TL-15"
  ],
  "answer": 0,
  "explanation": "Digital media is damaged by heat and humidity well below the point where paper chars, so media safes must hold the interior under 125 degrees F, the UL Class 125 standard."
 },
 {
  "id": "t10-033",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What is the main security advantage of a wall safe?",
  "choices": [
   "Its steel body is thicker than a comparable floor safe",
   "The wall cavity surrounding it provides extra insulation during a house fire",
   "Concealment, since it hides in the wall behind furnishings or artwork",
   "Its anchoring makes it impossible to remove intact"
  ],
  "answer": 2,
  "explanation": "A wall safe fits between studs, which limits its depth and steel, so its real value is concealment. A floor safe set in concrete offers much better burglary protection because the surrounding concrete shields it."
 },
 {
  "id": "t10-034",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What is the defining feature of a depository or drop safe?",
  "choices": [
   "Deposits can be made through a slot or hopper without opening the storage compartment",
   "The door opens automatically at scheduled deposit times",
   "It is built so that it can be emptied only by an armored carrier service under contract",
   "It stores each deposit in a separately keyed drawer"
  ],
  "answer": 0,
  "explanation": "Drop safes let clerks feed cash through a rotary hopper or slot into a locked compartment they cannot open, limiting how much money is exposed during a robbery."
 },
 {
  "id": "t10-035",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What does the RSC label commonly found on gun safes stand for?",
  "choices": [
   "Rated Steel Cabinet",
   "Reinforced Security Chest",
   "Restricted Security Compartment",
   "Residential Security Container"
  ],
  "answer": 3,
  "explanation": "RSC stands for Residential Security Container, a UL entry-level burglary rating requiring the unit to resist a brief hand-tool attack. Most consumer gun safes carry an RSC rating rather than a TL rating."
 },
 {
  "id": "t10-036",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "How is a safe-deposit box lock in a bank vault normally opened?",
  "choices": [
   "The renter key alone opens it during banking hours",
   "The bank's guard key and the renter's key must both be turned",
   "The guard key alone opens it while the vault door is open",
   "A combination is dialed first and then the renter key is turned"
  ],
  "answer": 1,
  "explanation": "Safe-deposit locks require two keys: the bank employee turns the guard key first, then the renter's key completes the opening. Neither key can open the box by itself."
 },
 {
  "id": "t10-037",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What type of lock is the trade standard on safe-deposit boxes?",
  "choices": [
   "A small pin tumbler deadbolt with a removable interchangeable core",
   "A dual-nose lever lock with separate guard and renter noses",
   "A single-bitted warded lock with a barrel key",
   "A wafer cam lock keyed to the branch master"
  ],
  "answer": 1,
  "explanation": "Safe-deposit locks are lever locks with two noses: the guard nose is operated by the bank's guard key and the renter nose by the customer's key. Both must be turned to withdraw the bolt."
 },
 {
  "id": "t10-038",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "What is a day gate on a vault?",
  "choices": [
   "A timer mechanism that unlocks the vault door automatically at its posted opening time each business day",
   "A steel shutter that covers the vault door dial overnight",
   "A log sheet recording each entry during the business day",
   "A lighter gate that controls access while the main vault door stands open during business hours"
  ],
  "answer": 3,
  "explanation": "The massive vault door is swung open for the business day, and a day gate, usually a locked grille, keeps casual traffic out of the vault while still allowing supervised access."
 },
 {
  "id": "t10-039",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "When moving a safe, which practice must always be avoided?",
  "choices": [
   "Rolling or resting the safe on its dial side",
   "Using pipe rollers under the safe body",
   "Strapping the safe upright to a heavy-duty dolly",
   "Removing the door to reduce the moving weight"
  ],
  "answer": 0,
  "explanation": "Laying a safe on its dial side can bend the spindle, crush the dial, and fire the relocker, turning a move into a lockout. Always confirm the weight and the floor path capacity before the move."
 },
 {
  "id": "t10-040",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "During a last-resort safe drilling, why does the locksmith drill a small hole at a carefully chosen drill point?",
  "choices": [
   "To relieve internal pressure so that the door can afterward be pried open without injury",
   "To inject lubricant into the seized boltwork",
   "To insert a borescope and view the wheel pack so the gates can be read and dialed open",
   "To reach the hinge pins and lift the door off"
  ],
  "answer": 2,
  "explanation": "Drilling is a last resort after other methods fail. A precise hole at a known drill point lets the locksmith scope the wheels, read the gate positions, and dial the safe open with minimal damage."
 },
 {
  "id": "t10-041",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "After a safe has been opened by drilling, how should the drilled hole be repaired?",
  "choices": [
   "By fitting a hardened repair plug so the opening cannot be exploited again",
   "By filling it with body filler and repainting the door",
   "By leaving the hole open but documented on the invoice for future service access",
   "By covering it with the manufacturer's label plate"
  ],
  "answer": 0,
  "explanation": "The professional repair is a hardened steel plug driven or threaded into the hole, restoring the door's drill resistance. Cosmetic fills or open holes leave a ready-made attack path."
 },
 {
  "id": "t10-042",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "In safe work, what does the term manipulation mean?",
  "choices": [
   "Forcing the boltwork with pry bars and wedges",
   "Adjusting the wheel pack during a combination change",
   "Opening a combination lock without the combination by feeling and charting contact points on the dial",
   "Turning the dial rapidly back and forth in both directions to bounce the fence down into the wheel gates"
  ],
  "answer": 2,
  "explanation": "Manipulation is the nondestructive skill of sensing where the fence contacts the drive cam, graphing those contact points, and deducing the combination. It is practical mainly against standard Group 2 locks; 2M and Group 1 locks are built to resist it."
 },
 {
  "id": "t10-043",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "When changing the combination of a mechanical safe lock with a change key, where is the key inserted and what must the door position be?",
  "choices": [
   "Into the front of the dial spindle, with the safe door closed and fully locked",
   "Into the change hole in the back of the lock case, with the safe door open",
   "Into the keyway beside the dial ring, with the door closed but unlocked",
   "Into the bolt slot on the door edge, with the door standing open"
  ],
  "answer": 1,
  "explanation": "The change key enters a hole in the rear of the lock case, reached only with the door open. It unlocks the wheels so new gate positions can be set while the changing combination is dialed."
 },
 {
  "id": "t10-044",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "After setting a new combination on a safe lock, what must the locksmith do before closing the door?",
  "choices": [
   "Lubricate the wheel pack and spin the dial twenty times",
   "Record the new combination inside the safe door",
   "Reset the relock trigger and re-torque every one of the lock case mounting screws",
   "Dial the new combination several times with the door open to confirm it works"
  ],
  "answer": 3,
  "explanation": "The classic rule of combination changing: prove the new combination works repeatedly while the door is still open. Closing the door on an unverified combination risks an immediate lockout."
 },
 {
  "id": "t10-045",
  "section": 10,
  "sectionName": "Safes and Vaults",
  "question": "A caller has lost the combination and asks a locksmith to open a safe at a residence. What must the locksmith do before starting work?",
  "choices": [
   "Get a deposit large enough to cover a drilling job",
   "Notify the safe manufacturer of the opening",
   "File a written report of the planned opening with the local law enforcement agency first",
   "Verify the caller's ownership or authority over the safe, as with any other opening"
  ],
  "answer": 3,
  "explanation": "A safe opening is treated like any other opening job: the locksmith must verify that the person requesting it owns the safe or is authorized, and document that verification, before defeating the lock."
 },
 {
  "id": "t11-001",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What does the term fail-safe mean when applied to an electrified lock?",
  "choices": [
   "The lock stays locked when electrical power is lost",
   "The lock unlocks when electrical power is lost",
   "The lock switches to battery power when mains power is lost",
   "The lock sounds an alarm when electrical power is lost"
  ],
  "answer": 1,
  "explanation": "Fail-safe hardware requires power to stay locked, so a power loss releases the door. It is used where life safety demands the door open, such as fire-related egress paths."
 },
 {
  "id": "t11-002",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "How does fail-secure electrified hardware behave during a power failure?",
  "choices": [
   "It unlocks in both directions until power returns",
   "It locks against entry and locks against exit equally until power has been restored",
   "It stays locked against entry, while mechanical egress hardware still allows exit",
   "It cycles locked and unlocked until the battery drains"
  ],
  "answer": 2,
  "explanation": "Fail-secure hardware uses power to unlock, so a dead circuit leaves the door secured from the outside. Free egress from the inside must still be provided mechanically."
 },
 {
  "id": "t11-003",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "Why is an electromagnetic lock inherently fail-safe?",
  "choices": [
   "It holds the door only while its coil is energized, so removing power releases the door",
   "Its internal battery always releases the armature after an outage",
   "Building codes require a normally-open release relay to be wired on every maglock circuit",
   "Its armature is spring-loaded to push the door open on power loss"
  ],
  "answer": 0,
  "explanation": "A maglock is just an electromagnet and an armature plate; with no current there is no magnetic bond. There is no way to make a standard maglock hold without power, so it is fail-safe by nature."
 },
 {
  "id": "t11-004",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "How are most electric strikes in commercial installations configured?",
  "choices": [
   "Fail-safe, so the latch releases automatically whenever the power drops",
   "Half-cycle, alternating locked and unlocked states",
   "Fail-secure, so the door stays latched during a power failure",
   "Normally open, relying on the closer to hold the door"
  ],
  "answer": 2,
  "explanation": "Electric strikes can be ordered either way, but most are set up fail-secure so a power outage does not leave the entrance unlocked. Egress is unaffected because the latch still retracts from the inside lever."
 },
 {
  "id": "t11-005",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What determines whether a particular opening must use fail-safe or fail-secure electrified hardware?",
  "choices": [
   "The adopted life-safety and building codes for that occupancy and door",
   "The preference of the building owner paying for the work",
   "The default configuration the lock manufacturer ships",
   "The written requirements of the building owner's property insurance carrier"
  ],
  "answer": 0,
  "explanation": "Life-safety and building codes, enforced by the authority having jurisdiction, dictate where each mode is permitted. Egress and fire department access requirements override customer preference."
 },
 {
  "id": "t11-006",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "Stairwell doors in high-rise buildings that must allow reentry from the stair side are required to use which type of electrified hardware?",
  "choices": [
   "Fail-secure strikes with local key override",
   "Delayed egress devices with code-approved 15-second timers",
   "Mechanical locks with no electrification allowed",
   "Fail-safe locks that unlock on fire alarm or power loss"
  ],
  "answer": 3,
  "explanation": "Stairwell reentry doors must unlock when the fire alarm activates or power fails so occupants are never trapped in a smoke-filled stairwell. That requires fail-safe electrified locks or trim."
 },
 {
  "id": "t11-007",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What holding force is typical of an electromagnetic lock intended for residential or light interior doors?",
  "choices": [
   "About 300 pounds",
   "About 600 pounds",
   "About 900 pounds",
   "About 1500 pounds"
  ],
  "answer": 1,
  "explanation": "Interior and residential maglocks are commonly rated around 600 pounds of holding force, enough for traffic control but below the commercial security standard."
 },
 {
  "id": "t11-008",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What is the standard holding force for a commercial-duty electromagnetic lock on a perimeter door?",
  "choices": [
   "About 600 pounds",
   "About 1200 pounds",
   "About 2400 pounds",
   "About 4000 pounds"
  ],
  "answer": 1,
  "explanation": "The commercial standard is roughly 1200 pounds of holding force per maglock, with higher-security doors sometimes using stronger units or a pair of locks."
 },
 {
  "id": "t11-009",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "Beyond a request-to-exit device, what do many code adoptions require before a maglock installation is approved?",
  "choices": [
   "A dedicated standby generator that keeps the lock circuit energized through power outages",
   "A second maglock mounted at the bottom of the door",
   "A key switch on the exterior for police access",
   "A release sensor on the egress side and a fire alarm connection that cuts lock power"
  ],
  "answer": 3,
  "explanation": "Many adoptions require a sensor that releases the maglock on approach from the egress side, plus a tie into the fire alarm so alarm activation drops lock power. The authority having jurisdiction must approve the arrangement."
 },
 {
  "id": "t11-010",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "Which door component does an electric strike replace, and how does it release the door?",
  "choices": [
   "The strike plate; its keeper swings aside to release the latchbolt on command",
   "The latchbolt; an internal solenoid pulls the bolt back into the lock body on command",
   "The hinges; motorized hinges swing the door open on command",
   "The lock cylinder; a motor turns the plug electronically"
  ],
  "answer": 0,
  "explanation": "An electric strike installs in the frame in place of the ordinary strike plate. When actuated, its keeper pivots so the extended latchbolt can pull free without retracting."
 },
 {
  "id": "t11-011",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What advantage does an electric strike retain when it is paired with a standard mechanical lockset?",
  "choices": [
   "The strike can hold the door against far greater force than the lockset",
   "The lockset no longer needs a latchbolt of its own",
   "The mechanical key override of the lockset continues to work normally",
   "The strike recharges its battery from the lockset motion"
  ],
  "answer": 2,
  "explanation": "Because the original lockset and cylinder stay in place, a key can still retract the latch if the access system or its power fails. This built-in mechanical override is a major reason strikes are chosen."
 },
 {
  "id": "t11-012",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What does electrifying the lever trim of a mortise or cylindrical lockset allow the access system to do?",
  "choices": [
   "Lock or unlock the outside lever remotely while the latch itself stays mechanical",
   "Throw and retract the deadbolt automatically at every valid card read at the reader",
   "Spin the lever freely at all times so the door cannot latch",
   "Report the lever position to the fire alarm panel"
  ],
  "answer": 0,
  "explanation": "Electrified trim controls whether the outside lever will operate the latch. The latch and inside lever remain mechanical, so egress is always free while entry is switched by the access system."
 },
 {
  "id": "t11-013",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What does an electric latch retraction (EL) exit device do?",
  "choices": [
   "It slows down the pushbar stroke so that the door alarm system has enough time to shunt before the door opens",
   "It converts the exit device to delayed egress operation",
   "It retracts the latch electrically so the door can be pulled open or left push-pull for traffic",
   "It locks the pushbar against operation during a lockdown"
  ],
  "answer": 2,
  "explanation": "EL devices use a solenoid or motor to hold the latch retracted on command, letting an access system or timer put the opening into free entry without touching the egress function of the pushbar."
 },
 {
  "id": "t11-014",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What is the purpose of an electric power transfer (EPT), electrified hinge, or door cord?",
  "choices": [
   "To boost the voltage available at the reader",
   "To carry low-voltage wiring from the frame onto the swinging door for door-mounted hardware",
   "To ground the door leaf against static discharge",
   "To supply line-voltage mains power to an automatic swing-door operator mounted on the header"
  ],
  "answer": 1,
  "explanation": "Hardware mounted on the door itself, such as electrified trim or EL exit devices, needs power across the hinge edge. EPTs, electric hinges, and flexible door cords make that transfer without pinching the wires."
 },
 {
  "id": "t11-015",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What does a request-to-exit (REX) device do in an access control system?",
  "choices": [
   "It records the identity of each person who leaves",
   "It requires a credential before the door will open outbound",
   "It signals the guard station so that an operator can remotely unlock the door for each exit",
   "It shunts the door alarm and, on maglock doors, releases the lock for free egress"
  ],
  "answer": 3,
  "explanation": "A REX, either a PIR motion sensor over the door or a switch inside the pushbar, tells the system a legitimate exit is happening so the forced-door alarm is bypassed, and on maglocks it drops the lock power."
 },
 {
  "id": "t11-016",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What information does a door position switch (DPS) report to the access control panel?",
  "choices": [
   "Whether the lock bolt is fully thrown",
   "Which user credential most recently operated the door",
   "How many people passed through the opening",
   "Whether the door is currently open or closed"
  ],
  "answer": 3,
  "explanation": "The DPS is a simple contact, usually magnetic, that tells the panel the door's open or closed state, enabling door-forced and door-held-open alarms."
 },
 {
  "id": "t11-017",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What is the main security weakness of a shared PIN keypad as the only credential on a door?",
  "choices": [
   "The keypad buttons physically wear out after only a few thousand code entries",
   "Codes can be shoulder surfed or shared, and a shared code identifies no one",
   "Keypads cannot be connected to networked panels",
   "PIN codes cannot be changed once programmed"
  ],
  "answer": 1,
  "explanation": "Anyone can watch a code being entered or be told the code, and a shared PIN identifies no individual. Worn keys can even reveal which digits are used."
 },
 {
  "id": "t11-018",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "Why are 125 kHz proximity cards considered a weak credential today?",
  "choices": [
   "Their read range is too short for convenient use",
   "They require battery replacement every year",
   "They transmit an unencrypted ID that inexpensive tools can read and clone",
   "They stop working reliably near fluorescent lighting and motor interference"
  ],
  "answer": 2,
  "explanation": "Legacy 125 kHz prox cards broadcast a fixed, unencrypted number. Cheap handheld cloners can copy one in seconds, so they provide convenience but little real security."
 },
 {
  "id": "t11-019",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What security advantage do 13.56 MHz smart cards such as MIFARE DESFire have over older prox cards?",
  "choices": [
   "Encrypted mutual authentication between the card and the reader",
   "A read range measured in tens of feet rather than just a few inches",
   "Immunity to physical loss or theft",
   "No need for a reader at the door at all"
  ],
  "answer": 0,
  "explanation": "Smart cards carry a processor that performs encrypted challenge-response authentication with the reader, so the credential data cannot simply be sniffed and replayed the way a 125 kHz ID can."
 },
 {
  "id": "t11-020",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "In authentication terms, which factor category does a fingerprint or iris reader verify?",
  "choices": [
   "Something you have",
   "Something you know",
   "Something you are",
   "Somewhere you are"
  ],
  "answer": 2,
  "explanation": "Biometrics measure a physical characteristic of the user, the something-you-are factor, as opposed to a card (something you have) or a PIN (something you know)."
 },
 {
  "id": "t11-021",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "Which credential combination is true two-factor authentication?",
  "choices": [
   "A proximity card plus a memorized PIN",
   "Two different proximity cards issued to one user",
   "A PIN plus a second memorized password",
   "A card plus a fob programmed identically"
  ],
  "answer": 0,
  "explanation": "Two-factor authentication combines two different categories: something you have, know, or are. A card plus a PIN mixes have and know; two cards or two codes are still only one factor."
 },
 {
  "id": "t11-022",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What characterizes the legacy Wiegand interface between a card reader and the control panel?",
  "choices": [
   "Encrypted data packets carried over a standard twisted-pair network cable",
   "Wireless transmission on the 900 MHz band",
   "Two-way polling with tamper supervision",
   "One-way, unencrypted signaling over dedicated data wires"
  ],
  "answer": 3,
  "explanation": "Wiegand sends the credential number one way, in the clear, on Data0/Data1 conductors, with no supervision. A tap on the wires can capture and replay credentials."
 },
 {
  "id": "t11-023",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What does OSDP provide that Wiegand reader wiring does not?",
  "choices": [
   "A separate dedicated wire pair for every single bit of transmitted card data",
   "Encrypted, supervised, two-way communication between reader and panel",
   "Power for the door lock over the same two wires",
   "Compatibility limited to a single manufacturer's readers"
  ],
  "answer": 1,
  "explanation": "OSDP is the newer open standard: the panel and reader talk both directions over a supervised RS-485 bus with encryption, so cut wires are detected and captured data is useless."
 },
 {
  "id": "t11-024",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "Which statement describes a classic Simplex/Unican pushbutton lock?",
  "choices": [
   "A battery-powered keypad lock storing up to one hundred individual user codes",
   "A fully mechanical lock with one shared code and no audit trail",
   "A networked lock that reports each opening to a panel",
   "An electrified mortise lock released by the fire alarm"
  ],
  "answer": 1,
  "explanation": "The classic Simplex pushbutton lock is purely mechanical: no wiring or batteries, a single combination shared by all users, and no record of who entered or when."
 },
 {
  "id": "t11-025",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What is the biggest advantage of a networked access control system over a mechanical master key system?",
  "choices": [
   "Networked doors cost less per opening to install",
   "Networked hardware never requires maintenance",
   "Electronic credentials cannot be lost, stolen, or duplicated by employees",
   "A lost credential can be revoked instantly without rekeying any doors"
  ],
  "answer": 3,
  "explanation": "When a key is lost from a master key system, affected locks must be rekeyed. A networked system simply deletes the credential from the database, and its audit trail also records every use."
 },
 {
  "id": "t11-026",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What behavior does an anti-passback rule in an access control system prevent?",
  "choices": [
   "A user passing a credential back so a second person can enter on the same card",
   "A user exiting through an entry-only turnstile lane",
   "A credential being used after its schedule expires",
   "A visitor badge being used at two different company sites on the same business day"
  ],
  "answer": 0,
  "explanation": "Anti-passback requires a card to log out of an area before it can enter again, defeating the trick of badging in and handing the card back through the door for someone else."
 },
 {
  "id": "t11-027",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "How does code-compliant delayed egress hardware operate when someone pushes the exit bar?",
  "choices": [
   "It stays locked until a guard remotely releases it",
   "It opens the door immediately but sounds a local alarm at the opening for a full 15 seconds",
   "It alarms and releases the door after a 15-second delay, with required signage posted",
   "It releases after two pushes spaced at least 15 seconds apart"
  ],
  "answer": 2,
  "explanation": "Delayed egress locks hold the door for a code-limited delay, normally 15 seconds, while alarming, and posted signage must explain the operation. Fire alarm or power loss releases them immediately."
 },
 {
  "id": "t11-028",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "Where are controlled egress door locks, which lock against exit with no automatic delay release, permitted?",
  "choices": [
   "Only in special occupancies such as memory care and infant nursery units, under strict code conditions",
   "In any commercial building whose owner has signed a written waiver accepting full liability for the doors",
   "On all exterior doors of banks and jewelry stores",
   "Wherever a guard is stationed within sight of the door"
  ],
  "answer": 0,
  "explanation": "Locking a door against egress is normally prohibited. Codes carve out narrow exceptions for occupancies like memory care and maternity units where patient elopement or abduction is the hazard, with staff and alarm safeguards required."
 },
 {
  "id": "t11-029",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What operating voltage is typical for electrified locks and access control hardware?",
  "choices": [
   "120 volts AC from the branch circuit",
   "48 volts DC delivered over Ethernet network cabling only",
   "12 or 24 volts DC from a low-voltage power supply",
   "6 volts AC from a bell transformer"
  ],
  "answer": 2,
  "explanation": "Access hardware runs on low-voltage DC, usually 12 or 24 volts, fed from a supervised power supply that includes battery backup so doors behave predictably during outages."
 },
 {
  "id": "t11-030",
  "section": 11,
  "sectionName": "Access Control and Electronic Locks",
  "question": "What does the bond sensor built into many electromagnetic locks report?",
  "choices": [
   "The exact amount of current the magnet coil is drawing from its power supply at any moment",
   "Whether the armature is fully seated and the rated holding force is being achieved",
   "The number of times the door has been forced",
   "The remaining service life of the magnet coil"
  ],
  "answer": 1,
  "explanation": "A bond sensor monitors the magnetic bond between the lock and its armature plate. It alerts the system when the plate is misaligned or blocked, meaning the door may look secured while holding far less than rated force."
 },
 {
  "id": "l12-001",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What is the official short title of Chapter 74F of the North Carolina General Statutes?",
  "choices": [
   "The North Carolina Locksmith Licensing Act",
   "The North Carolina Locksmith Practice Act",
   "The North Carolina Security Trades Regulation Act",
   "The North Carolina Lock and Safe Services Act"
  ],
  "answer": 0,
  "explanation": "Chapter 74F is officially known as the North Carolina Locksmith Licensing Act.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-1"
 },
 {
  "id": "l12-002",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "According to the stated purpose of the Locksmith Licensing Act, why is the licensing of locksmiths necessary?",
  "choices": [
   "To guarantee fair pricing for consumers of security services",
   "To protect established locksmiths from unfair competition",
   "To protect public health, safety, and welfare",
   "To standardize the training curriculum of the locksmith trade"
  ],
  "answer": 2,
  "explanation": "Locksmiths have the knowledge and tools to bypass security devices, and licensing protects the public from untrained persons or those with criminal intent. The Act exists to protect public health, safety, and welfare, not to protect the trade itself.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-2"
 },
 {
  "id": "l12-003",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A person performs locksmith services in North Carolina without a license. Absent a law providing greater punishment, a first offense is classified as what?",
  "choices": [
   "An infraction punishable by fine only",
   "A Class 1 misdemeanor",
   "A Class I felony",
   "A Class 3 misdemeanor"
  ],
  "answer": 1,
  "explanation": "Unlicensed locksmithing is a Class 1 misdemeanor for the first offense unless other law provides greater punishment.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-3(b)"
 },
 {
  "id": "l12-004",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "How is a second or subsequent offense of performing locksmith services without a license classified?",
  "choices": [
   "A Class 2 misdemeanor",
   "A Class A1 misdemeanor",
   "A Class H felony",
   "A Class I felony"
  ],
  "answer": 3,
  "explanation": "While a first offense is a Class 1 misdemeanor, a second or subsequent offense of unlicensed locksmithing rises to a Class I felony.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-3(b)"
 },
 {
  "id": "l12-005",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "An in-house maintenance employee rekeys door locks at a hospital whose buildings contain medical records. Under the Act, this employee",
  "choices": [
   "is exempt because the hospital owns the property being serviced",
   "needs only an apprentice designation from the Board",
   "must be licensed as a locksmith under Chapter 74F",
   "is exempt because the work is not done for outside customers"
  ],
  "answer": 2,
  "explanation": "Anyone providing locksmith services to buildings containing medical, pharmaceutical, educational, criminal, voting, tax, legal, or personnel records must be licensed, including persons employed by schools, colleges, hospitals, companies, institutions, or government facilities.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-3(a)"
 },
 {
  "id": "l12-006",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "As defined in the Act, a \"code book\" is a compilation, in any form, of what?",
  "choices": [
   "Key codes and combinations",
   "Building codes and lock standards",
   "Manufacturer part numbers and keyway specifications",
   "Board rules and ethics provisions"
  ],
  "answer": 0,
  "explanation": "The statute defines a code book as a compilation, in any form, of key codes and combinations.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-4(2)"
 },
 {
  "id": "l12-007",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Which activity falls within the statutory definition of \"locksmith services\"?",
  "choices": [
   "Selling padlocks at a retail counter without installing them",
   "Manufacturing lock cylinders for wholesale distribution",
   "Teaching a lock-servicing class to hobbyists for a fee",
   "Bypassing a vehicle's locking mechanism for compensation"
  ],
  "answer": 3,
  "explanation": "Locksmith services include repairing, rekeying, servicing, or installing locks, access and egress control devices, safes, vaults, and safe-deposit boxes for compensation, including safe technician work. Any method of bypassing a locking mechanism in a commercial, residential, or automotive setting for compensation is also included.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-4(5)"
 },
 {
  "id": "l12-008",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Under the Act, what makes a tool a \"locksmith tool\"?",
  "choices": [
   "It is sold exclusively through wholesale locksmith supply distributors",
   "It is designed or used to open a locking device in a way other than the maker intended",
   "It is capable of duplicating or originating keys by code",
   "It is listed on a locksmith tool inventory that the licensee files annually with the Board"
  ],
  "answer": 1,
  "explanation": "Locksmith tools are any tools designed or used to open a mechanical or electrical locking device in a way other than that which was intended by the manufacturer.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-4(6)"
 },
 {
  "id": "l12-009",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "How many members serve on the North Carolina Locksmith Licensing Board?",
  "choices": [
   "Nine",
   "Seven",
   "Eleven",
   "Five"
  ],
  "answer": 0,
  "explanation": "The Board consists of nine members serving staggered terms: six locksmiths and three members representing the public.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(a)"
 },
 {
  "id": "l12-010",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "How many of the Board's members must represent the public rather than the locksmith trade?",
  "choices": [
   "4",
   "2",
   "3",
   "6"
  ],
  "answer": 2,
  "explanation": "Of the nine Board members, three represent the public and the other six are locksmiths.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(a)"
 },
 {
  "id": "l12-011",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Who appoints the public members of the Locksmith Licensing Board?",
  "choices": [
   "The Speaker of the House of Representatives",
   "The President Pro Tempore of the Senate",
   "The sitting members of the Board",
   "The Governor"
  ],
  "answer": 3,
  "explanation": "The Governor appoints the three public members of the Board.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(a)(3)"
 },
 {
  "id": "l12-012",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "How are the six locksmith members of the Board selected?",
  "choices": [
   "The Governor appoints all six locksmith members from lists of qualified nominees submitted by recognized locksmith trade organizations across the State",
   "The General Assembly appoints three on the recommendation of the Senate President Pro Tempore and three on the recommendation of the House Speaker",
   "The State's licensed locksmiths elect all six locksmith members by mailed statewide ballot at the beginning of every three-year term",
   "The Board itself nominates six qualified candidates whose appointments are then confirmed by the North Carolina Secretary of State"
  ],
  "answer": 1,
  "explanation": "The General Assembly appoints the locksmith members: three upon the recommendation of the President Pro Tempore of the Senate and three upon the recommendation of the Speaker of the House of Representatives.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(a)"
 },
 {
  "id": "l12-013",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "After the initial staggered appointments expired, each Board member is appointed for a term of how many years?",
  "choices": [
   "2 years",
   "4 years",
   "3 years",
   "5 years"
  ],
  "answer": 2,
  "explanation": "Following the initial staggered terms, every Board member is appointed for a three-year term and serves until a successor is appointed.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(a)"
 },
 {
  "id": "l12-014",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What limit does the Act place on how long a person may keep serving on the Board?",
  "choices": [
   "No member may serve more than two consecutive terms",
   "No member may serve more than three consecutive terms",
   "No member may serve more than one term in a lifetime",
   "No member may serve more than six years total, whether consecutive or not"
  ],
  "answer": 0,
  "explanation": "A Board member may not serve more than two consecutive terms.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(a)"
 },
 {
  "id": "l12-015",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "To qualify for a locksmith seat on the Board, a person must have how much experience in locksmith services?",
  "choices": [
   "At least three years",
   "At least five years",
   "At least ten years",
   "At least seven years"
  ],
  "answer": 1,
  "explanation": "Locksmith members must have at least five years' experience in locksmith services and must remain engaged in the business for the duration of their Board term.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(b)"
 },
 {
  "id": "l12-016",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Which person would be DISQUALIFIED from serving as a public member of the Board?",
  "choices": [
   "A retired schoolteacher who once hired a locksmith to rekey the locks in her home",
   "An accountant whose clients include a hardware store",
   "A county commissioner from a rural part of the State",
   "The spouse of a person who owns a financial interest in a locksmith business"
  ],
  "answer": 3,
  "explanation": "Public members may not be trained or experienced in locksmith services, hold a financial interest in a locksmith business, or be the spouse of someone who is so trained or has such an interest. All members must also reside in North Carolina.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(b)"
 },
 {
  "id": "l12-017",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "When does the Board elect its chair, vice-chair, and other officers?",
  "choices": [
   "Annually, during the first meeting of the calendar year",
   "Every three years, when the newly appointed members are seated",
   "Annually, at the last meeting of the calendar year",
   "Every two years, at a special election meeting"
  ],
  "answer": 0,
  "explanation": "Officers are elected annually by the Board during the first meeting of the calendar year, serve one-year terms, and hold office until their successors are elected and qualified.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(f)"
 },
 {
  "id": "l12-018",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "At a minimum, how often must the Board meet to conduct business and review licensing standards and rules?",
  "choices": [
   "At least once every two years",
   "At least once each quarter",
   "At least two times each year",
   "At least once each month"
  ],
  "answer": 2,
  "explanation": "The Board must hold at least two meetings each year to conduct business and review the standards and rules for issuing licenses.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(g)"
 },
 {
  "id": "l12-019",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "How many Board members constitute a quorum for conducting business?",
  "choices": [
   "Two-thirds of the members",
   "A majority of the members",
   "All nine members",
   "Any four members"
  ],
  "answer": 1,
  "explanation": "A majority of Board members constitutes a quorum, so five of the nine members are enough to conduct business.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(g)"
 },
 {
  "id": "l12-020",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "On which grounds may the Board remove one of its own members?",
  "choices": [
   "Missing two consecutive meetings, resigning a license, or moving within the State",
   "Failure to pay renewal fees, poor attendance, or public criticism of the Board",
   "Any grounds, at the discretion of the Governor who appointed the member",
   "Neglect of duty, incompetence, or unprofessional conduct"
  ],
  "answer": 3,
  "explanation": "The Board may remove any of its members for neglect of duty, incompetence, or unprofessional conduct. A member facing disciplinary proceedings as a licensee is also disqualified from Board business until the charges are resolved.",
  "manual": "law",
  "page": "1",
  "ref": "§ 74F-5(d)"
 },
 {
  "id": "l12-021",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "How may a subpoena be issued to obtain the records of a company offering locksmith services, including its invoices and receipts for locksmith tools?",
  "choices": [
   "Any single Board member may issue one during an investigation",
   "The Board's attorney issues one after first notifying the Attorney General",
   "The chair may issue one when authorized by a majority vote of the Board",
   "Only a superior court judge may issue one on the Board's petition"
  ],
  "answer": 2,
  "explanation": "The Board may authorize the chair, by majority vote, to issue subpoenas for the records of a person or company offering locksmith services, including employees, contractors, and subcontractors. The records include invoices and receipts, specifically those pertaining to locksmith tools, equipment, or parts.",
  "manual": "law",
  "page": "2",
  "ref": "§ 74F-6(17)"
 },
 {
  "id": "l12-022",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What duty does the Act give the Board with respect to a code of ethics for the trade?",
  "choices": [
   "The Board must adopt and publish a code of ethics",
   "The Board must adopt the code of ethics written by a national locksmith association",
   "The Board may only recommend a voluntary code of ethics to licensees",
   "The Board must submit a proposed code of ethics to the General Assembly for approval"
  ],
  "answer": 0,
  "explanation": "Among its statutory powers and duties, the Board must adopt and publish a code of ethics.",
  "manual": "law",
  "page": "2",
  "ref": "§ 74F-6(13)"
 },
 {
  "id": "l12-023",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Which agency may the Board ask to conduct criminal history record checks of license and apprenticeship applicants?",
  "choices": [
   "The county sheriff of the applicant's residence",
   "The Federal Bureau of Investigation's field office",
   "The North Carolina Department of Justice licensing unit",
   "The State Bureau of Investigation"
  ],
  "answer": 3,
  "explanation": "The Board has the power to request that the State Bureau of Investigation conduct criminal history record checks of applicants for licensure and apprenticeships.",
  "manual": "law",
  "page": "2",
  "ref": "§ 74F-6(16)"
 },
 {
  "id": "l12-024",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Who establishes and approves continuing education requirements for licensed locksmiths in North Carolina?",
  "choices": [
   "The Community College System, under contract with the trade",
   "The Locksmith Licensing Board",
   "A national locksmith certification body designated by statute",
   "The Department of Labor's apprenticeship division"
  ],
  "answer": 1,
  "explanation": "The Board has the statutory power to establish and approve continuing education requirements for persons licensed under the Chapter.",
  "manual": "law",
  "page": "2",
  "ref": "§ 74F-6(6)"
 },
 {
  "id": "l12-025",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What is the minimum age to qualify for a North Carolina locksmith license?",
  "choices": [
   "18 years",
   "21 years",
   "16 years",
   "25 years"
  ],
  "answer": 0,
  "explanation": "An applicant for licensure must be at least 18 years of age.",
  "manual": "law",
  "page": "3",
  "ref": "§ 74F-7(2)"
 },
 {
  "id": "l12-026",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "The Board's licensure examination must measure the applicant's knowledge and skill in which two areas?",
  "choices": [
   "Business management practices and customer identification procedures",
   "Safe deposit work and masterkeying systems",
   "Locksmith services and the laws applicable to licensed locksmiths",
   "Electronic access control and alarm system installation"
  ],
  "answer": 2,
  "explanation": "The examination administered by the Board measures the applicant's knowledge and skill in locksmith services and in the laws applicable to licensed locksmiths.",
  "manual": "law",
  "page": "3",
  "ref": "§ 74F-7(3)"
 },
 {
  "id": "l12-027",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Which of the following is NOT a statutory qualification for a locksmith license?",
  "choices": [
   "Good moral and ethical character, shown in part by a criminal history record check",
   "Successful completion of the examination administered by the Board",
   "Payment of the required fee to the Board",
   "A minimum number of years of documented work experience in the trade"
  ],
  "answer": 3,
  "explanation": "The four qualifications are good moral and ethical character, being at least 18, passing the Board's examination, and paying the required fee. The statute does not require a set amount of prior work experience for a standard license.",
  "manual": "law",
  "page": "3",
  "ref": "§ 74F-7"
 },
 {
  "id": "l12-028",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "How do the requirements for an apprentice designation differ from those for a full locksmith license?",
  "choices": [
   "An apprentice must be only 16 rather than 18 years of age",
   "An apprentice does not have to pass the licensure examination to receive the designation",
   "An apprentice is excused from the criminal history record check",
   "An apprentice pays no fee to the Board until the designation is converted to a full license"
  ],
  "answer": 1,
  "explanation": "An apprentice applicant must show good moral and ethical character, be at least 18, and pay the required fee, but no examination is required to receive the designation. The exam comes later, before the apprenticeship period expires.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-7.1(a)"
 },
 {
  "id": "l12-029",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What credential does the Board issue to identify a working apprentice?",
  "choices": [
   "A laminated wallet certificate signed by the supervising licensed locksmith",
   "A temporary license bearing a three-year expiration date",
   "A colored badge card that identifies the individual as an apprentice",
   "A metal badge engraved with the Board's seal"
  ],
  "answer": 2,
  "explanation": "The Board issues each apprentice a colored badge card that identifies the individual as an apprentice and includes the apprentice designation. Apprentices work under the supervision of a licensed locksmith.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-7.1(b)"
 },
 {
  "id": "l12-030",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What is the longest a person may hold an apprentice designation?",
  "choices": [
   "3 years",
   "1 year",
   "5 years",
   "2 years"
  ],
  "answer": 0,
  "explanation": "An apprentice may hold the designation for no longer than three years and must take the licensure examination on or before the three-year period expires.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-7.1(c)"
 },
 {
  "id": "l12-031",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "An apprentice fails the licensure exam and does not retake it before the three-year designation period runs out. What happens?",
  "choices": [
   "The apprentice may petition the Board for a one-year extension of the designation",
   "The apprentice receives no license and may not be granted another apprenticeship",
   "The designation renews automatically once the retake fee is paid to the Board",
   "The apprentice must wait one year and then reapply for a new apprenticeship"
  ],
  "answer": 1,
  "explanation": "If an apprentice fails to take the exam within the three-year period, or fails it and does not retake it before the period expires, the apprentice shall not receive licensure and shall not be granted another apprenticeship. The designation is never renewed or re-granted.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-7.1(c)"
 },
 {
  "id": "l12-032",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "An apprentice quits the licensed locksmith under whom the apprenticeship was originally received. To keep the designation, the apprentice must do what?",
  "choices": [
   "Notify the Board within 30 days and continue working independently",
   "Retake the criminal history record check and pay a new application fee",
   "Pass the licensure examination within 90 days of the separation",
   "Find employment with another licensed locksmith and pay a transfer fee"
  ],
  "answer": 3,
  "explanation": "An apprentice who terminates employment with the original supervising locksmith must find employment with another licensed locksmith to maintain the designation and must pay the transfer fee set under G.S. 74F-9.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-7.1(d)"
 },
 {
  "id": "l12-033",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "How many apprentices may a licensed locksmith ordinarily supervise at one time?",
  "choices": [
   "No more than two",
   "No more than one",
   "No more than three",
   "No more than four"
  ],
  "answer": 0,
  "explanation": "Each licensed locksmith may have no more than two apprentices at one time, subject to a limited 90-day grace period for certain newly hired apprentices.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-7.1(d)"
 },
 {
  "id": "l12-034",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Under what circumstances may a licensed locksmith temporarily supervise more than two apprentices?",
  "choices": [
   "Whenever the locksmith obtains written approval from the Board chair in advance",
   "During any period when one of the locksmith's existing apprentices is within six months of taking the licensure examination",
   "For a 90-day grace period, when the new hire follows a prior termination of employment or another locksmith's inability to supervise",
   "For up to one year, if the additional apprentice is a member of the supervising locksmith's immediate family and works at the same location"
  ],
  "answer": 2,
  "explanation": "A licensed locksmith has a 90-day grace period to accommodate more than two apprentices when the extra apprentice is newly hired following a previous termination of employment or the inability of another licensed locksmith to supervise the apprentice.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-7.1(d)"
 },
 {
  "id": "l12-035",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A locksmith lets an additional apprentice go at the end of a grace period. How long does the locksmith remain legally responsible for that apprentice's work?",
  "choices": [
   "Until the end of the calendar quarter in which the apprentice's employment was terminated",
   "Until the locksmith contacts the Board and the Board is notified of the termination",
   "Until the apprentice signs on with a new supervising locksmith",
   "Until 90 days after the apprentice's last day of employment"
  ],
  "answer": 1,
  "explanation": "The licensed locksmith must contact the Board upon terminating the additional apprentice and remains legally responsible for the apprentice's work until the Board is notified otherwise.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-7.1(d)"
 },
 {
  "id": "l12-036",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A North Carolina resident was a licensed locksmith in another state for several years. The Board may license this person based on experience if the applicant has at least how many years as a licensed locksmith in a state with substantially equivalent standards?",
  "choices": [
   "5 years",
   "2 years",
   "3 years",
   "4 years"
  ],
  "answer": 2,
  "explanation": "The Board may grant a license, on application and payment of fees, to a North Carolina resident with at least three years' experience as a licensed locksmith in another state whose standards of competency are substantially equivalent to this Chapter's.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-8(a)"
 },
 {
  "id": "l12-037",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "On what basis may the Board license a locksmith who does NOT reside in North Carolina?",
  "choices": [
   "The nonresident meets this Chapter's requirements or resides in a state that recognizes licenses issued by the Board",
   "The nonresident posts a surety bond with the Board and agrees to work only under a written contract to a North Carolina resident licensee",
   "The nonresident holds any active locksmith license from any other United States jurisdiction",
   "The nonresident maintains a registered agent and a branch office within North Carolina"
  ],
  "answer": 0,
  "explanation": "A nonresident may be licensed, upon application and payment of fees, either by meeting the Chapter's requirements or by residing in a state that recognizes North Carolina Board licenses, which is the reciprocity route.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-8(b)"
 },
 {
  "id": "l12-038",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What is the maximum fee the Board may charge for the licensure examination?",
  "choices": [
   "$100.00",
   "$250.00",
   "$300.00",
   "$200.00"
  ],
  "answer": 3,
  "explanation": "The statutory cap on the examination fee is $200.00.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-9(3)"
 },
 {
  "id": "l12-039",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "The Board's reinstatement fee may not exceed what amount?",
  "choices": [
   "$300.00",
   "$250.00",
   "$200.00",
   "$150.00"
  ],
  "answer": 1,
  "explanation": "Reinstatement of a license is capped at $250.00, which is lower than the $300.00 caps on issuance, renewal, and late fees.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-9(4)"
 },
 {
  "id": "l12-040",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "How much may the Board charge, at most, when an apprentice transfers to a new supervising locksmith?",
  "choices": [
   "$25.00",
   "$50.00",
   "$75.00",
   "$100.00"
  ],
  "answer": 0,
  "explanation": "The apprentice transfer fee is capped at $25.00, the smallest fee listed in the statute.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-9(7)"
 },
 {
  "id": "l12-041",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "The statute caps the fee for issuance of a locksmith license at what amount?",
  "choices": [
   "$150.00",
   "$200.00",
   "$300.00",
   "$400.00"
  ],
  "answer": 2,
  "explanation": "Issuance of a license may cost no more than $300.00. The same $300.00 cap applies to renewal, late fees, and the apprentice license fee.",
  "manual": "law",
  "page": "4",
  "ref": "§ 74F-9(1)"
 },
 {
  "id": "l12-042",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Whose signatures must appear on a locksmith license issued by the Board?",
  "choices": [
   "The Governor and the Board chair",
   "The chair and the Board's executive director",
   "The chair and the licensee being licensed",
   "The chair and one other officer of the Board"
  ],
  "answer": 3,
  "explanation": "Licenses show the licensee's full name and an identification number and must be signed by the chair and one other officer of the Board.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-10(a)"
 },
 {
  "id": "l12-043",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Unless renewed, a locksmith license expires how long after the date it was issued?",
  "choices": [
   "5 years",
   "3 years",
   "1 year",
   "2 years"
  ],
  "answer": 1,
  "explanation": "All licenses expire three years after the date of issuance unless renewed, with the renewal application filed with the Board along with the renewal fee.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-10(b)"
 },
 {
  "id": "l12-044",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A locksmith's license expired because the locksmith failed to renew it. What must the locksmith pay to have it reinstated?",
  "choices": [
   "The renewal fee only, since the license simply lapsed",
   "The examination fee, because the exam must be retaken first",
   "The late fee and the reinstatement fee",
   "Double the renewal fee as a statutory penalty"
  ],
  "answer": 2,
  "explanation": "A license that expired for failure to renew may be reinstated after the applicant pays the late and reinstatement fees. If the applicant shows good cause for letting the license expire, the Board may in its discretion adjust the fees.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-10(b)"
 },
 {
  "id": "l12-045",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A retiring locksmith wants to sign his license over to the technician buying his shop. Is this permitted?",
  "choices": [
   "Yes, if the buyer already meets all qualifications for licensure",
   "Yes, provided the Board approves the transfer and collects a fee",
   "No, but the license may be assigned to the business entity rather than a person",
   "No, a license may not be transferred or assigned to anyone"
  ],
  "answer": 3,
  "explanation": "A locksmith license may not be transferred or assigned under any circumstances. The buyer must qualify for and obtain a license in his own right.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-10(d)"
 },
 {
  "id": "l12-046",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "When must a licensee have the Board-issued photo identification card available for inspection?",
  "choices": [
   "While performing locksmith services",
   "Only when a law enforcement officer asks for identification",
   "Only while working at the licensee's place of business",
   "During Board audits and renewal inspections"
  ],
  "answer": 0,
  "explanation": "Every licensee receives a photo identification card from the Board and must have it available for inspection while performing locksmith services.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-11"
 },
 {
  "id": "l12-047",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Along with a current photograph, what information must appear on the licensee's photo identification card?",
  "choices": [
   "The licensee's name, license expiration date, and blood type",
   "The licensee's name, address, and telephone number",
   "The licensee's name, date of birth, and driver's license number",
   "The licensee's name, employer, and supervising Board member"
  ],
  "answer": 1,
  "explanation": "The Board-issued card displays a current photograph of the person along with the person's name, address, and telephone number.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-11"
 },
 {
  "id": "l12-048",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What does the Act require a locksmith to do with the license certificate itself?",
  "choices": [
   "Carry it in the service vehicle at all times",
   "File it with the register of deeds in the county of business",
   "Keep it in a fireproof location with the business records",
   "Display it prominently in the locksmith's place of business"
  ],
  "answer": 3,
  "explanation": "Every licensed locksmith must display the license prominently in the locksmith's place of business.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-12(a)"
 },
 {
  "id": "l12-049",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What must every advertisement for locksmith services include?",
  "choices": [
   "A valid license number issued by the Board",
   "The Board's complaint telephone number",
   "The full street address of the licensed business location",
   "The names of all licensed locksmiths employed by the company"
  ],
  "answer": 0,
  "explanation": "All advertisements for locksmith services must include a valid license number issued by the Board. The license number of the owner of the locksmith company satisfies this requirement.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-12(b)"
 },
 {
  "id": "l12-050",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Which employees must a licensee report by name to the Board?",
  "choices": [
   "Only employees who hold their own locksmith licenses or apprentice designations",
   "Every employee on the payroll, regardless of duties",
   "Each employee who performs locksmith services or has access to locksmith tools",
   "Only employees who deal directly with customers in the field"
  ],
  "answer": 2,
  "explanation": "Every licensee must provide the Board the names of each employee who either performs locksmith services or has access to locksmith tools. Access to the tools alone triggers the reporting duty even if the employee never performs services.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-13"
 },
 {
  "id": "l12-051",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Within how many days must a licensee notify the Board of a change in the employee information previously reported?",
  "choices": [
   "10 days",
   "30 days",
   "60 days",
   "90 days"
  ],
  "answer": 1,
  "explanation": "The licensee must notify the Board within 30 days of any change in the reported information about employees who perform locksmith services or have access to locksmith tools.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-13"
 },
 {
  "id": "l12-052",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Before opening a locked door to a vehicle or a residential or commercial property, what does the Act require of the licensee?",
  "choices": [
   "Written authorization signed by the property owner and retained on file before any door-opening work begins",
   "A photograph of the customer's identification retained for three years",
   "Confirmation of the customer's ownership through a law enforcement query or Division of Motor Vehicles title records",
   "A reasonable effort to verify the customer is the legal owner or is authorized by the owner to gain access"
  ],
  "answer": 3,
  "explanation": "When opening a locked door to any vehicle or residential or commercial property, the licensee must make a reasonable effort to verify that the customer is the legal owner or is authorized by the legal owner to gain access. The standard is reasonable effort, not absolute proof.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-14"
 },
 {
  "id": "l12-053",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Which of the following is a statutory ground for the Board to deny, refuse to renew, suspend, or revoke a license?",
  "choices": [
   "Charging fees that exceed the local market rate for comparable work",
   "Advertising in a county where the licensee has no place of business",
   "Giving false information to or withholding information from the Board in procuring a license",
   "Employing an apprentice who has already held the apprentice designation for more than one year"
  ],
  "answer": 2,
  "explanation": "Grounds for discipline include giving false information to or withholding information from the Board when procuring a license, conviction of a listed crime, gross negligence, incompetency, or misconduct in performing locksmith services, and willful violation of the Chapter.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-15(a)"
 },
 {
  "id": "l12-054",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "When a licensee is found in violation of the Chapter or Board rules, what costs may the Board assess against that licensee?",
  "choices": [
   "The costs of the disciplinary action, including attorneys' fees",
   "A civil penalty of up to $1,000 per violation, but no litigation costs",
   "Only the direct hearing costs, with attorneys' fees expressly excluded",
   "Restitution to customers plus the Board's annual operating expenses"
  ],
  "answer": 0,
  "explanation": "The Board may assess the costs of disciplinary action, including attorneys' fees, against an applicant or licensee found to be in violation of the Chapter or of Board rules.",
  "manual": "law",
  "page": "5",
  "ref": "§ 74F-15(b)"
 },
 {
  "id": "l12-055",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "For the exemption covering an unlicensed employee working under a licensed locksmith's \"direct control and supervision,\" what does that phrase require?",
  "choices": [
   "The licensee must review and personally sign off on all of the employee's completed work at the end of each day",
   "The licensee must be reachable by phone or radio while the employee works",
   "The licensee must remain within the same county as the job site",
   "The licensee must physically accompany the employee to the premises where the services are performed"
  ],
  "answer": 3,
  "explanation": "An employee of a licensed locksmith is exempt only when acting under direct control and supervision, which the statute defines to mean the licensed locksmith is required to physically accompany the employee to the premises where the services are performed.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(1)"
 },
 {
  "id": "l12-056",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A locksmith company's office worker answers telephones, does clerical tasks, and greets customers but performs no other work. Does this person need a license?",
  "choices": [
   "Yes, because every employee of a locksmith company must be licensed or designated",
   "No, an employee performing administrative duties only is exempt from the Chapter",
   "Yes, unless the worker is reported to the Board as an administrative employee",
   "No, but only if the worker has been employed for fewer than 90 days"
  ],
  "answer": 1,
  "explanation": "Employees of a locksmith company performing administrative duties only are exempt. Administrative duties means managing the daily operations of an office, including performing clerical tasks, answering telephones, and greeting customers.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(1a)"
 },
 {
  "id": "l12-057",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Why can a person with an apprentice designation lawfully work on locks without holding a locksmith license?",
  "choices": [
   "Persons working as apprentices under G.S. 74F-7.1 are expressly exempted from the licensing requirement",
   "The apprentice's badge card functions as a restricted locksmith license",
   "The supervising locksmith's license legally covers up to two employees of any kind",
   "Apprentices hold a provisional locksmith license issued jointly by the Board and the supervising employer"
  ],
  "answer": 0,
  "explanation": "The exemptions section expressly excludes a person working as an apprentice pursuant to G.S. 74F-7.1 from the Chapter's licensing requirement, provided the apprentice works under the required supervision.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(2)"
 },
 {
  "id": "l12-058",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A technician registered under the Alarm Systems Licensing Board installs an electronic access control device as part of an alarm job. Under Chapter 74F, the technician is",
  "choices": [
   "required to also hold a locksmith license for any access control work",
   "exempt for all lock-related work of any kind, on any job",
   "exempt while acting within the scope and course of the Chapter 74D alarm license or registration",
   "required to have a licensed locksmith physically present for the access control portion of the job"
  ],
  "answer": 2,
  "explanation": "Persons or businesses required to be licensed or registered by the North Carolina Alarm Systems Licensing Board under Chapter 74D are exempt from the locksmith licensing law when acting within the scope and course of that alarm license or registration.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(3)"
 },
 {
  "id": "l12-059",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A towing operator unlocks car doors in the normal course of the towing business, and a motor club opens automotive locks for its members. What condition keeps these activities exempt from locksmith licensing?",
  "choices": [
   "The vehicles involved must be opened only with the owner physically present",
   "Each unlock must be reported to the Board within 30 days of the service",
   "The businesses must employ at least one licensed locksmith as a supervisor",
   "The person or business must not represent itself as a locksmith"
  ],
  "answer": 3,
  "explanation": "Towing services, automotive repair businesses opening vehicles to service them, repossessing companies, motor vehicle dealers, and motor clubs opening automotive locks in the normal course of business are all exempt, so long as they do not represent themselves as locksmiths.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(4)"
 },
 {
  "id": "l12-060",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A hotel's maintenance employee rekeys guest room locks on the hotel's own property and never claims to be a locksmith. Under the exemptions, this work is",
  "choices": [
   "a violation, because hotel buildings contain guest and personnel records covered by G.S. 74F-3",
   "lawful, because a property owner or the owner's employee may work on the owner's own property",
   "lawful only if the employee holds an apprentice designation from the Board",
   "a violation unless the hotel registers the employee with the Board annually"
  ],
  "answer": 1,
  "explanation": "A property owner, or the owner's employee, is exempt when providing locksmith services on the owner's own property, so long as neither represents himself or herself as a locksmith. Property expressly includes hotels, motels, apartments, condominiums, and commercial and residential rental property.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(5)"
 },
 {
  "id": "l12-061",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A hardware store duplicates keys and rekeys locks without a locksmith license. The exemption requires all of the following EXCEPT",
  "choices": [
   "maintaining a physical business location in the State of North Carolina",
   "maintaining a sales and use tax permit",
   "employing at least one Board-licensed locksmith on staff",
   "refraining from representing itself as a locksmith"
  ],
  "answer": 2,
  "explanation": "A merchant or retail or hardware store is exempt if it lawfully duplicates keys or installs, services, repairs, rebuilds, reprograms, rekeys, or maintains locks in the normal course of business, maintains a physical location in this State, maintains a sales and use tax permit, and does not represent itself as a locksmith. Employing a licensed locksmith is not one of the conditions.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(6)"
 },
 {
  "id": "l12-062",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "When is a police officer or firefighter exempt from the locksmith licensing law while opening locked doors to vehicles, homes, or businesses?",
  "choices": [
   "When acting within the scope and course of employment with the agency or department",
   "Only when responding to a declared emergency or dispatched on an active call for service",
   "Only when a supervisor authorizes the entry in writing beforehand",
   "At all times, including off-duty side work for private customers"
  ],
  "answer": 0,
  "explanation": "Members of a law enforcement agency, fire department, or other government agency are exempt when opening locked doors to vehicles, homes, or businesses within the scope and course of their employment with the agency or department.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(7)"
 },
 {
  "id": "l12-063",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A factory sales representative uses lock picks during a product demonstration in North Carolina. This is exempt from licensing only if the demonstration is given to whom?",
  "choices": [
   "Any audience attending a registered trade show",
   "Persons licensed under the locksmith licensing Chapter",
   "Prospective customers who sign a liability waiver",
   "Security industry professionals of any kind, licensed or not"
  ],
  "answer": 1,
  "explanation": "A salesperson is exempt while demonstrating the use of locksmith tools to persons licensed under the Chapter. Demonstrating to the general public is not covered by this exemption.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(8)"
 },
 {
  "id": "l12-064",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A general contractor licensed under Article 1 of Chapter 87 installs locksets on a new building. Which statement describes the contractor's position under the locksmith law?",
  "choices": [
   "The contractor must subcontract all lock installation to a licensed locksmith",
   "The contractor must obtain a separate locksmith license for any lock work performed beyond the initial construction",
   "The contractor's crew members are exempt only when a Board-licensed locksmith physically accompanies them to each premises where locks are installed",
   "The contractor is exempt within the scope of that license, and so are its agents and subcontractors acting in the ordinary course of business"
  ],
  "answer": 3,
  "explanation": "A licensed general contractor acting within the scope and course of the general contractor license is exempt, and so is an agent or subcontractor of the licensed general contractor acting within the ordinary course of business.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(9)"
 },
 {
  "id": "l12-065",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Installing a safety lock device on a wastewater system is exempt from locksmith licensing under which conditions?",
  "choices": [
   "The device is a mechanical rather than an electronic locking device and is inspected annually",
   "The installer holds a valid plumbing license and files an installation notice with the local health department",
   "The device is required by permit or requested by the system owner, and the installer does not claim to be a locksmith",
   "The wastewater system serves a single-family residence and the installation is performed without any compensation to the installer"
  ],
  "answer": 2,
  "explanation": "A person or business lawfully installing or maintaining a safety lock device on a wastewater system is exempt when the device is required by permit or requested by the owner of the wastewater system, provided the installer does not represent itself as a locksmith.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(10)"
 },
 {
  "id": "l12-066",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A sporting goods store sets up combination gun safes and firearm locking devices for buyers as part of each sale. Under Chapter 74F, this activity is",
  "choices": [
   "restricted to retail stores that also hold a valid federal firearms dealer license",
   "exempt only if a Board-licensed locksmith personally performs the final combination change on each safe sold",
   "unlawful unless the store obtains a limited safe-technician license",
   "exempt during the sale, so long as no one involved represents himself, herself, or itself as a locksmith"
  ],
  "answer": 3,
  "explanation": "Any person or firm selling gun safes or locking devices for firearms is exempt during the course of that sale, provided the person, firm, or firm's employee does not represent himself, herself, or itself as a locksmith.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(11)"
 },
 {
  "id": "l12-067",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "A bystander with lock knowledge opens a car for a stranded motorist in an emergency, takes no payment, and does not advertise such help. Under the Act, the bystander",
  "choices": [
   "has committed a Class 1 misdemeanor by performing an unlicensed unlock",
   "exempt, because unpaid emergency locksmith services that are not advertised fall outside the Chapter",
   "is exempt only if a law enforcement officer was present at the scene",
   "must report the emergency unlock to the Board within 30 days of the service in order to avoid a violation"
  ],
  "answer": 1,
  "explanation": "A person performing a locksmith service in an emergency situation is exempt when the person receives no compensation for the service and does not advertise those services.",
  "manual": "law",
  "page": "6",
  "ref": "§ 74F-16(12)"
 },
 {
  "id": "l12-068",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "When someone is violating the locksmith licensing law, to which court may the Board apply for an order enjoining the violations?",
  "choices": [
   "The district court in the violator's home county",
   "The North Carolina Court of Appeals",
   "The Office of Administrative Hearings",
   "The superior court"
  ],
  "answer": 3,
  "explanation": "The Board may apply to the superior court for an order enjoining violations of the Chapter, and upon a showing that a person has violated the Chapter, the court may grant injunctive relief.",
  "manual": "law",
  "page": "7",
  "ref": "§ 74F-17"
 },
 {
  "id": "l12-069",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "What may happen if an applicant refuses to consent to the required criminal history record check?",
  "choices": [
   "The application is automatically denied by operation of law",
   "The applicant must instead submit three notarized character references",
   "The refusal may constitute grounds for the Board to deny licensure or the apprentice designation",
   "The Board must give the applicant one full year to reconsider consenting before acting on the application"
  ],
  "answer": 2,
  "explanation": "All applicants for licensure or apprentice designation must consent to a criminal history record check, and refusal to consent may constitute grounds for the Board to deny the application. Denial is discretionary rather than automatic.",
  "manual": "law",
  "page": "7",
  "ref": "§ 74F-18(b)"
 },
 {
  "id": "l12-070",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Who is responsible for providing an applicant's fingerprints and signed consent form to the State Bureau of Investigation for the record check?",
  "choices": [
   "The Board",
   "The applicant, by mailing them directly to the SBI",
   "The applicant's supervising locksmith or employer",
   "The clerk of court in the applicant's county"
  ],
  "answer": 0,
  "explanation": "The Board is responsible for providing the SBI with the applicant's fingerprints, a signed consent form, and any additional required information, and it must ensure both the State and national criminal history are checked. The Board keeps all information obtained confidential and collects and remits the SBI's fees.",
  "manual": "law",
  "page": "7",
  "ref": "§ 74F-18(b)"
 },
 {
  "id": "l12-071",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "An applicant's record check reveals a conviction on the statute's list of relevant crimes. What is the immediate legal effect on the application?",
  "choices": [
   "The application is denied automatically and permanently",
   "The applicant must wait five years from the date of the conviction before submitting a new application",
   "The application converts to an apprentice application pending review",
   "The conviction does not automatically bar licensure; the Board must weigh the statutory factors"
  ],
  "answer": 3,
  "explanation": "A listed conviction shall not automatically bar licensure. The Board must consider statutory factors about the conviction before deciding whether the criminal history disqualifies the applicant.",
  "manual": "law",
  "page": "7",
  "ref": "§ 74F-18(c)"
 },
 {
  "id": "l12-072",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "Which of the following is one of the factors the Board must consider when evaluating an applicant's prior conviction?",
  "choices": [
   "The applicant's household income and outstanding debts",
   "The nexus between the criminal conduct and the job duties of the position to be filled",
   "The number of character witnesses the applicant can produce at a hearing",
   "The written recommendation of the sentencing judge concerning the applicant's fitness for licensure"
  ],
  "answer": 1,
  "explanation": "The factors include the seriousness and date of the crime, the person's age at conviction, the circumstances of the crime, the nexus between the criminal conduct and the job duties, the person's prison, probation, parole, rehabilitation, and employment records since the crime, and any subsequent listed crimes.",
  "manual": "law",
  "page": "7",
  "ref": "§ 74F-18(c)"
 },
 {
  "id": "l12-073",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "After denying licensure based on a criminal history record check, what may the Board share with the applicant about the check?",
  "choices": [
   "Information from the record check relevant to the denial, but never a copy of the record check itself",
   "A complete certified copy of the record check upon written request",
   "Nothing at all, since the entire criminal history record check is confidential even from the applicant",
   "A copy of the record check, but only through the applicant's attorney"
  ],
  "answer": 0,
  "explanation": "The Board may disclose to the applicant information contained in the criminal history record check that is relevant to the denial, but it shall not provide the applicant a copy of the record check.",
  "manual": "law",
  "page": "7",
  "ref": "§ 74F-18(c)"
 },
 {
  "id": "l12-074",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "An applicant denied for criminal history appeals by appearing before the full Board. What is the legal effect of that appearance?",
  "choices": [
   "It begins a new contested case that must go before an administrative law judge",
   "It entitles the applicant to a second appearance before a Board committee",
   "It constitutes an exhaustion of administrative remedies under Chapter 150B",
   "It suspends the denial until the next regularly scheduled Board meeting"
  ],
  "answer": 2,
  "explanation": "The applicant has the right to appear before the Board to appeal the denial, but an appearance before the full Board constitutes an exhaustion of administrative remedies in accordance with Chapter 150B.",
  "manual": "law",
  "page": "7",
  "ref": "§ 74F-18(c)"
 },
 {
  "id": "l12-075",
  "section": 12,
  "sectionName": "NC Locksmith Licensing Act (G.S. 74F)",
  "question": "The Board denies an apprentice designation based on the applicant's criminal history record check, acting in good faith and in compliance with the statute. What protection does the Board have if the applicant sues?",
  "choices": [
   "No special protection; the Board must defend the suit like any private party",
   "The Board, its officers, and employees are immune from civil liability for the denial",
   "Immunity applies to the Board as a body but never to individual officers or employees",
   "The State indemnifies the Board only if the applicant's suit is ruled frivolous"
  ],
  "answer": 1,
  "explanation": "The Board, its officers, and employees, acting in good faith and in compliance with the criminal history section, are immune from civil liability for denying licensure or an apprentice designation based on information in the applicant's criminal history record check.",
  "manual": "law",
  "page": "7",
  "ref": "§ 74F-18(d)"
 },
 {
  "id": "r13-001",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "How much is the fee for the Locksmith licensing examination, and when must an applicant remit it to the Board?",
  "choices": [
   "$100.00, paid to the proctor at the testing session",
   "$200.00, remitted along with the license application",
   "$250.00, remitted after passing the examination",
   "$300.00, remitted along with the license application"
  ],
  "answer": 1,
  "explanation": "The examination fee is $200.00 and must be sent to the Board together with the application. Any separate charge by a commercial testing center is paid by the applicant, not the Board.",
  "manual": "rules",
  "page": "1",
  "ref": ".0201(a)"
 },
 {
  "id": "r13-002",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "An applicant wants to sit for the licensing examination on a particular date. By when must the registration application reach the Board's office?",
  "choices": [
   "At least 10 days before the requested examination date",
   "At least 15 days before the requested examination date",
   "At least 30 days before the requested examination date",
   "At least 45 days before the requested examination date"
  ],
  "answer": 1,
  "explanation": "Examination registration must be submitted on the Board's prescribed form and reach the Board's office at least 15 days before the requested examination date.",
  "manual": "rules",
  "page": "1",
  "ref": ".0202(a)"
 },
 {
  "id": "r13-003",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A license application must list every address at which the applicant has lived during what period?",
  "choices": [
   "The past 5 years",
   "The past 3 years",
   "The past 7 years",
   "The past 10 years"
  ],
  "answer": 0,
  "explanation": "Applicants must provide a list of all addresses at which they have lived during the past five years.",
  "manual": "rules",
  "page": "1",
  "ref": ".0202(c)(5)"
 },
 {
  "id": "r13-004",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "How many character references must an individual give on the license application, and what details are required for each?",
  "choices": [
   "One reference, with the reference's occupation and daytime phone number",
   "Two references, with each one's name, email, home address, and length of relationship",
   "Three references, with each one's name, employer, and years acquainted",
   "Two references, both of whom must be locksmiths licensed in North Carolina for at least five years"
  ],
  "answer": 1,
  "explanation": "The application requires two character references, giving each one's name, email address, home address, and the length of the relationship. The references do not have to be locksmiths.",
  "manual": "rules",
  "page": "1",
  "ref": ".0202(c)(6)"
 },
 {
  "id": "r13-005",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Along with the business name, address, and website, what federal identifier must an applicant supply for the business under which locksmith services will be provided?",
  "choices": [
   "A DUNS business credit number",
   "A North Carolina sales and use tax registration number",
   "A federal Employer Identification Number (EIN)",
   "A federal contractor registration number"
  ],
  "answer": 2,
  "explanation": "The application must include the business name and trade name, address, website, and federal Employer Identification Number (EIN) of the businesses under which the applicant provides locksmith services.",
  "manual": "rules",
  "page": "1",
  "ref": ".0202(c)(13)"
 },
 {
  "id": "r13-006",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "What is the minimum passing score on the North Carolina Locksmith Licensing Examination?",
  "choices": [
   "60 percent",
   "65 percent",
   "70 percent",
   "75 percent"
  ],
  "answer": 2,
  "explanation": "The passing score for the Locksmith Licensing Examination is 70 percent.",
  "manual": "rules",
  "page": "2",
  "ref": ".0203"
 },
 {
  "id": "r13-007",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Before the examination session begins, what must every applicant present to the proctor?",
  "choices": [
   "A government-issued photo identification card",
   "A copy of the Board's examination admission letter",
   "A notarized copy of the license application",
   "Two passport-style photographs"
  ],
  "answer": 0,
  "explanation": "Each applicant must present a government-issued photo identification card to the proctor before the beginning of the examination session.",
  "manual": "rules",
  "page": "2",
  "ref": ".0204(a)"
 },
 {
  "id": "r13-008",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "An examinee's cell phone is silenced and stored in a pocket during the licensing exam. Is this permitted under the Board's examinee conduct rules?",
  "choices": [
   "Yes, as long as the phone remains silenced the whole session",
   "Yes, but only if the proctor is notified before the exam starts",
   "No, electronic devices are not allowed in the examination room",
   "No, unless the phone is used only to keep track of the time"
  ],
  "answer": 2,
  "explanation": "Electronic devices are not allowed in the examination room during the examination. Books, calculators, and other items that could compromise the security and validity of the exam are also barred.",
  "manual": "rules",
  "page": "2",
  "ref": ".0204(c)"
 },
 {
  "id": "r13-009",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "During the examination session, with whom may an applicant speak?",
  "choices": [
   "Only the proctor",
   "Other examinees, in a whisper",
   "Anyone, once the applicant has finished the exam",
   "A Board member observing the session"
  ],
  "answer": 0,
  "explanation": "Applicants may not speak with anyone except the proctor during the examination session, and must obey the proctor's instructions on when to begin and stop work.",
  "manual": "rules",
  "page": "2",
  "ref": ".0204(c)"
 },
 {
  "id": "r13-010",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "While working through the exam, an applicant wants to underline key words in the printed examination book. What does the Board's rule say?",
  "choices": [
   "Underlining is allowed but handwritten notes are not",
   "Marks are permitted if they are made in pencil only",
   "Marking is allowed only on scratch paper that the applicant brings from home",
   "No written markings of any kind may be made on the examination book"
  ],
  "answer": 3,
  "explanation": "Applicants may not make any written markings on the examination book provided by the proctor. Failing to abide by any of the examinee conduct requirements results in invalidation of the applicant's examination results.",
  "manual": "rules",
  "page": "2",
  "ref": ".0204(g)"
 },
 {
  "id": "r13-011",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A proctor requires an applicant to exit the room for disrupting the examination. What happens to the examination fee?",
  "choices": [
   "It is refunded in full",
   "Half of it is refunded",
   "It is not refunded",
   "It is automatically credited toward the next session"
  ],
  "answer": 2,
  "explanation": "If the proctor determines an applicant is disrupting the exam or breaking the conduct rules and requires the applicant to exit, the examination fees are not refunded. An applicant may otherwise leave the room only with the proctor's permission.",
  "manual": "rules",
  "page": "2",
  "ref": ".0204(h)"
 },
 {
  "id": "r13-012",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "How does an applicant learn whether he or she passed the licensing examination?",
  "choices": [
   "The proctor announces results at the testing site",
   "Results are mailed by certified letter",
   "Results are sent to the applicant by email",
   "Results are posted on the Board's website by applicant number"
  ],
  "answer": 2,
  "explanation": "Applicants are informed of their examination results by email. The proctor is not permitted to provide results at the testing site.",
  "manual": "rules",
  "page": "2",
  "ref": ".0204(i)"
 },
 {
  "id": "r13-013",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "An applicant misses a scheduled examination session because of a car accident on the way to the test. What does the rule provide?",
  "choices": [
   "The examination fee is forfeited and no waiver of the replacement fee is available under any circumstances",
   "The applicant is automatically rescheduled to the next session at no additional cost",
   "The applicant must wait one full year before registering for another session",
   "The Board waives the new examination fee on request if the absence resulted from hardship or emergency"
  ],
  "answer": 3,
  "explanation": "A no-show without prior notice to the Board forfeits the examination fee, and a new fee is normally required for another session. The Board waives the new fee upon the applicant's request if the failure to attend resulted from a hardship or emergency.",
  "manual": "rules",
  "page": "2",
  "ref": ".0205"
 },
 {
  "id": "r13-014",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "How far in advance of the desired testing date must an applicant submit a request for ADA testing accommodations to the Board?",
  "choices": [
   "At least 15 days",
   "At least 30 days",
   "At least 45 days",
   "At least 60 days"
  ],
  "answer": 1,
  "explanation": "Requests for testing accommodations under the ADA, with the required supporting information, must be provided to the Board at least 30 days before the desired testing date. Special administrations are kept as comparable as possible to a standard administration.",
  "manual": "rules",
  "page": "3",
  "ref": ".0206(b)"
 },
 {
  "id": "r13-015",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Who must certify the accuracy of the medical information in an applicant's ADA accommodation request?",
  "choices": [
   "The applicant's treating healthcare provider",
   "Any notary public in the applicant's county",
   "An independent physician selected and paid for by the Board",
   "The proctor assigned to the testing session"
  ],
  "answer": 0,
  "explanation": "The request must include medical certification from the applicant's treating healthcare provider attesting to the accuracy of the information, along with the type of accommodation requested, a description of the limitations, how they affect taking the exam, and whether an accommodation was previously provided.",
  "manual": "rules",
  "page": "3",
  "ref": ".0206(b)(5)"
 },
 {
  "id": "r13-016",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "How are an applicant's fingerprints normally routed for the criminal background check?",
  "choices": [
   "The applicant mails ink fingerprint cards directly to the FBI",
   "The Board takes the applicant's fingerprints at the examination site",
   "Local law enforcement takes the prints and delivers them directly to the SBI",
   "A private fingerprinting vendor uploads the prints to the Board's public website"
  ],
  "answer": 2,
  "explanation": "Applicants document that their fingerprints were submitted to local law enforcement for delivery directly to the State Bureau of Investigation, or provide a copy of the prints to the Board. A signed electronic fingerprint submission authorizes the SBI to perform a national criminal history record check.",
  "manual": "rules",
  "page": "3",
  "ref": ".0401(b)(2)"
 },
 {
  "id": "r13-017",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Under the Board's moral character rules, which convictions make up Category I?",
  "choices": [
   "All Class A and B felonies",
   "All Class C through F felonies",
   "All felonies of any class",
   "Class A1 and Class 1 misdemeanors"
  ],
  "answer": 0,
  "explanation": "Category I consists of all Class A and B felonies, the most serious category. An applicant with a Category I conviction may be ineligible for licensure, and a licensee with one may face revocation.",
  "manual": "rules",
  "page": "4",
  "ref": ".0402(c)(1)"
 },
 {
  "id": "r13-018",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "An applicant's most serious conviction is a Class D felony, a Category II offense. How long must the applicant have been clear of that sentence to be eligible for licensure?",
  "choices": [
   "At least 7 years since completing all aspects of the sentence",
   "At least 10 years since completing all aspects of the sentence",
   "At least 12 years since completing all aspects of the sentence",
   "At least 15 years since completing all aspects of the sentence"
  ],
  "answer": 2,
  "explanation": "Category II covers Class C through F felonies. Eligibility requires at least 12 years since the applicant completed all aspects of the sentence for the last Category II conviction. An applicant's category is set by the most serious offense on the record.",
  "manual": "rules",
  "page": "4",
  "ref": ".0402(g)(2)"
 },
 {
  "id": "r13-019",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "What waiting period applies to an applicant whose most serious conviction is a Category III offense, such as a Class 1 misdemeanor?",
  "choices": [
   "At least 5 years since completing all aspects of the sentence",
   "At least 12 years since completing all aspects of the sentence",
   "At least 3 years since completing all aspects of the sentence",
   "At least 7 years since completing all aspects of the sentence"
  ],
  "answer": 3,
  "explanation": "Category III consists of felonies of Class G or lesser plus Class A1 and Class 1 misdemeanors, and requires at least seven years since the applicant completed all aspects of the sentence for the last Category III conviction.",
  "manual": "rules",
  "page": "4",
  "ref": ".0402(g)(3)"
 },
 {
  "id": "r13-020",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "An applicant has three Category III convictions arising from separate incidents. How does the Board classify this record?",
  "choices": [
   "As three separate Category III offenses, each with its own 7-year period",
   "As a Category IV record because the offenses were minor",
   "As a Category II offense",
   "As grounds for permanent ineligibility for licensure"
  ],
  "answer": 2,
  "explanation": "Three or more Category III convictions committed as separate incidents are reclassified as a Category II offense, which carries the 12-year eligibility period. Similarly, three or more Category IV convictions are reclassified as Category III.",
  "manual": "rules",
  "page": "4",
  "ref": ".0402(c)(3)"
 },
 {
  "id": "r13-021",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "How long must an applicant with a single Category IV conviction, such as a Class 3 misdemeanor, wait after completing the sentence to be eligible?",
  "choices": [
   "At least 2 years",
   "At least 5 years",
   "At least 1 year",
   "At least 3 years"
  ],
  "answer": 3,
  "explanation": "Category IV consists of Class 2 and 3 misdemeanors. Eligibility requires at least three years since the applicant completed all aspects of the sentence for the last Category IV conviction.",
  "manual": "rules",
  "page": "4",
  "ref": ".0402(g)(4)"
 },
 {
  "id": "r13-022",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "An applicant self-reports past criminal activity related to chemical dependency. What must the applicant demonstrate to the Board?",
  "choices": [
   "Evidence of treatment or rehabilitation and at least two years of sustained sobriety",
   "A physician's letter and at least one year of sustained sobriety",
   "Documentation of completed probation along with at least five years of sustained sobriety",
   "Enrollment in a support group and at least six months of sobriety"
  ],
  "answer": 0,
  "explanation": "Where criminal activity is related to chemical dependency, applicants must show evidence of treatment or rehabilitation and a minimum of two years of sustained sobriety, and the Board considers their efforts and success in maintaining recovery.",
  "manual": "rules",
  "page": "4",
  "ref": ".0402(i)"
 },
 {
  "id": "r13-023",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "When the Board evaluates the present fitness of an applicant with a conviction related to locksmith duties, the letters of recommendation it considers must come from whom?",
  "choices": [
   "Two employers from the past five years",
   "Two licensed locksmiths",
   "One judge and one probation officer",
   "Three character witnesses of the applicant's choosing"
  ],
  "answer": 1,
  "explanation": "The fitness factors include two letters of recommendation from licensed locksmiths, along with the applicant's age at the offense, conduct and work history, rehabilitation evidence, and other indicators such as a mental health status report or substance abuse assessment.",
  "manual": "rules",
  "page": "4",
  "ref": ".0402(h)(5)"
 },
 {
  "id": "r13-024",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "The Board denies a license application on moral character grounds. What recourse does the applicant have?",
  "choices": [
   "File a civil suit in superior court within 30 days",
   "Request reconsideration by the Board chair alone",
   "Request a hearing under the procedures of G.S. 150B, Article 3A",
   "Submit an entirely new application immediately with a second application fee"
  ],
  "answer": 2,
  "explanation": "An individual whose application is denied, or whose license is suspended or revoked, may request a hearing under the procedures established in G.S. 150B, Article 3A.",
  "manual": "rules",
  "page": "4",
  "ref": ".0402(j)"
 },
 {
  "id": "r13-025",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "When may the Board begin considering an individual's application for licensure?",
  "choices": [
   "As soon as the application fee has cleared the Board's account",
   "Once the criminal background check is complete, even while exam results are still pending",
   "Immediately upon the Board's receipt of the completed application",
   "Not until the applicant's examination results are determined and available to the Board"
  ],
  "answer": 3,
  "explanation": "An application for licensure is not considered by the Board until the results of the applicant's Board-administered examination are determined and available to the Board.",
  "manual": "rules",
  "page": "5",
  "ref": ".0403"
 },
 {
  "id": "r13-026",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "What is the license issuance fee, and when is it paid?",
  "choices": [
   "$200.00, paid after the Board approves the application",
   "$250.00, paid when the license certificate is mailed",
   "$300.00, accompanying the application for licensure",
   "$350.00, paid at the time of the first renewal"
  ],
  "answer": 2,
  "explanation": "The license issuance fee is $300.00 and must accompany the application for licensure.",
  "manual": "rules",
  "page": "5",
  "ref": ".0404"
 },
 {
  "id": "r13-027",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A licensee loses the license certificate and asks the Board for another copy. What does a replacement license cost?",
  "choices": [
   "$5.00",
   "$10.00",
   "$25.00",
   "$50.00"
  ],
  "answer": 1,
  "explanation": "Replacement licenses are available upon written request, and the fee for issuing a replacement license is $10.00.",
  "manual": "rules",
  "page": "5",
  "ref": ".0404"
 },
 {
  "id": "r13-028",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A veteran locksmith holding an ALOA certification asks to skip the North Carolina licensing examination. What is the current rule?",
  "choices": [
   "A current national certification substitutes for the exam if it was earned within the past five years",
   "The Board may grant a case-by-case examination waiver for nationally certified applicants",
   "Nationally certified applicants sit for a shortened practical version of the exam",
   "No exemption exists; the old exemption rule was repealed, so every applicant must pass the exam"
  ],
  "answer": 3,
  "explanation": "The former exemption-from-examination rule was repealed effective April 1, 2012. Every applicant must now pass the licensing examination regardless of ALOA or other national certifications, though copies of national certifications are still submitted with the application.",
  "manual": "rules",
  "page": "5",
  "ref": ".0405"
 },
 {
  "id": "r13-029",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A helper employed by a licensed locksmith damages a customer's lock while working under the licensee's direct supervision. Who answers to the Board for that work?",
  "choices": [
   "Only the helper personally, once the Board identifies the individual",
   "The licensed locksmith, who is responsible for employees under direct supervision",
   "No one, because unlicensed helpers fall entirely outside the Board's disciplinary jurisdiction",
   "The business entity as a whole, but never an individual licensee"
  ],
  "answer": 1,
  "explanation": "Licensees are responsible for the actions of employees acting under their direct control and supervision. The term employee is broad, covering express or implied and oral or written employment, including non-citizens and minors, whether lawfully or unlawfully employed.",
  "manual": "rules",
  "page": "5",
  "ref": ".0501(b)"
 },
 {
  "id": "r13-030",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "What employment relationship must exist between a licensed locksmith and the apprentice locksmiths he or she supervises?",
  "choices": [
   "The licensee must employ every apprentice under his or her supervision",
   "Apprentices may be independent contractors if a written agreement exists",
   "Apprentices may work for any company as long as a licensee is available by phone",
   "The Board employs apprentices and assigns them to supervising licensees"
  ],
  "answer": 0,
  "explanation": "A licensed locksmith must employ all apprentices under their supervision, provide supervision, and handle their instruction and training in locksmith services and tools. The licensee is responsible for the quality of the apprentice's services.",
  "manual": "rules",
  "page": "5",
  "ref": ".0501(c)"
 },
 {
  "id": "r13-031",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Before dispatching an apprentice to a job, a supervising licensee must know the client's name and location, the services required, the apprentice's ability to perform them, and what else?",
  "choices": [
   "The fee the apprentice will charge for the services",
   "The make and model of every lock installed at the job site",
   "The client's intended method of payment",
   "The apprentice's estimated arrival time"
  ],
  "answer": 0,
  "explanation": "When dispatching an apprentice locksmith, the licensee must be aware of the name and location of the client, the locksmith services required, the apprentice's ability to perform those services, and the fee the apprentice will charge for them.",
  "manual": "rules",
  "page": "5",
  "ref": ".0501(d)"
 },
 {
  "id": "r13-032",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A supervising locksmith concludes that an apprentice showed gross negligence on a service call. What does the ethics code require?",
  "choices": [
   "Dismiss the apprentice and take no further action",
   "Retrain the apprentice and document it in personnel files",
   "Report the apprentice's conduct to the Board",
   "Suspend the apprentice from field work for 30 days"
  ],
  "answer": 2,
  "explanation": "A licensed locksmith must report to the Board any gross negligence, incompetency, or misconduct that an apprentice demonstrates in performing locksmith services under the licensee's supervision.",
  "manual": "rules",
  "page": "5",
  "ref": ".0501(f)"
 },
 {
  "id": "r13-033",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "While providing locksmith services, what does the ethics code require of locksmiths and apprentices regarding identification?",
  "choices": [
   "They must identify themselves and their company or business name truthfully",
   "They must show the customer a Board-issued identification badge before starting any work",
   "They need only identify the company, never the individual technician",
   "They must leave a printed business card at the end of every job"
  ],
  "answer": 0,
  "explanation": "Licensed locksmiths and apprentice locksmiths must identify themselves and their company or business name truthfully while providing locksmith services.",
  "manual": "rules",
  "page": "5",
  "ref": ".0501(g)"
 },
 {
  "id": "r13-034",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "When analyzing a client's security problem, what solution does the fair business practices rule require a locksmith to advance?",
  "choices": [
   "The least expensive option currently available",
   "The best practicable solution for the protection of the client",
   "Whatever product line the shop keeps in stock",
   "The newest and most advanced product line offered by the manufacturer"
  ],
  "answer": 1,
  "explanation": "Locksmiths must analyze security problems and advance the best practicable solution for the protection of the client, and must conduct all business in compliance with applicable local, State, and federal laws.",
  "manual": "rules",
  "page": "6",
  "ref": ".0502(b)"
 },
 {
  "id": "r13-035",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A customer asks whether a key stamped 'Do Not Duplicate' can still be copied at a hardware store. What may the locksmith truthfully tell the customer?",
  "choices": [
   "The stamp legally prevents duplication anywhere in North Carolina",
   "The stamp guarantees that only shops licensed by the Board are legally permitted to copy the key",
   "The stamp protects the key from duplication for five years",
   "The stamp offers no real assurance, because non-restricted keys can still be duplicated"
  ],
  "answer": 3,
  "explanation": "Representing to a client that non-restricted or widely available keys, whether stamped 'Do Not Duplicate' or not, provide any measure of assurance against unauthorized duplication is a prohibited misrepresentation.",
  "manual": "rules",
  "page": "6",
  "ref": ".0502(d)(1)"
 },
 {
  "id": "r13-036",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A shop has a refurbished deadbolt in like-new condition. Under the fair business practices rule, how may it be sold?",
  "choices": [
   "As new, if it carries a full manufacturer warranty",
   "As new, as long as the customer does not ask about its history",
   "Only as a used product, never represented as new",
   "As new, if it was never actually installed anywhere"
  ],
  "answer": 2,
  "explanation": "Selling a used product as new is listed as a prohibited misrepresentation of the features of a product or service.",
  "manual": "rules",
  "page": "6",
  "ref": ".0502(d)(2)"
 },
 {
  "id": "r13-037",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A locksmith wants to leave an advertising sticker on the customer's door frame after finishing a job. What must the locksmith obtain first?",
  "choices": [
   "Verbal permission from whoever answers the door",
   "Nothing, provided the sticker is easily removable",
   "Written notice filed with the Board describing the advertising",
   "The property owner's express written consent"
  ],
  "answer": 3,
  "explanation": "Affixing stickers to permanent fixtures such as doors or door frames, or in any way defacing a person's property, is a prohibited solicitation practice unless the person gives express written consent.",
  "manual": "rules",
  "page": "6",
  "ref": ".0502(e)(1)"
 },
 {
  "id": "r13-038",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Why does the ethics code prohibit placing a company's service sticker on hardware that the company never actually worked on?",
  "choices": [
   "It falsely represents that the locksmith previously serviced the hardware at that location",
   "Because adhesive stickers can cause permanent damage to decorative hardware finishes over time",
   "Because only the original manufacturer may place labels on hardware",
   "Because service stickers void the manufacturer's hardware warranty"
  ],
  "answer": 0,
  "explanation": "Installing stickers or other promotions in a fashion that falsely represents that the locksmith or company previously serviced the hardware at that location is listed as an improper means of soliciting business.",
  "manual": "rules",
  "page": "6",
  "ref": ".0502(e)(2)"
 },
 {
  "id": "r13-039",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A locksmith proposes installing proprietary hardware that only his own company will be able to service later. When is this permitted?",
  "choices": [
   "Whenever the proprietary hardware offers higher security",
   "Only with the customer's express written consent",
   "Only when the customer is a commercial account",
   "Never, under any circumstances whatsoever"
  ],
  "answer": 1,
  "explanation": "Installing, supplying, or modifying hardware in a way that curtails the customer's ability to choose a different company or technician for later support or service, or that causes added expense to do so, requires the customer's express written consent.",
  "manual": "rules",
  "page": "6",
  "ref": ".0502(e)(3)"
 },
 {
  "id": "r13-040",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "An employee of a locksmith company, still bound by a non-compete agreement, quietly offers competing bids to the employer's customers. How does the ethics code treat this conduct?",
  "choices": [
   "As acceptable free-market competition between technicians",
   "As a private matter solely between the employee and employer",
   "As an improper means of soliciting business",
   "As permissible whenever the competing bids are lower"
  ],
  "answer": 2,
  "explanation": "Direct solicitation in violation of a non-compete agreement, such as an employee offering competing bids to his or her employer's customers, is listed as an improper means of soliciting business.",
  "manual": "rules",
  "page": "6",
  "ref": ".0502(e)(5)"
 },
 {
  "id": "r13-041",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A licensee wants to advertise locksmith services under a new trade name. What must happen before that name appears in advertising?",
  "choices": [
   "The name must be registered with the Board",
   "The name must be trademarked at the federal level",
   "The name needs approval only from the Secretary of State",
   "Nothing, if the licensee's legal name appears somewhere in the ad"
  ],
  "answer": 0,
  "explanation": "Locksmiths must register with the Board the business names they use for locksmith services, and all advertising and related documents in North Carolina must be in the registered names. Using a name confusingly similar to a competitor's is also prohibited.",
  "manual": "rules",
  "page": "6",
  "ref": ".0502(f)"
 },
 {
  "id": "r13-042",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A caller wants a house opened at night, cannot show any proof of ownership, and gives evasive answers that make the locksmith suspect a break-in. What does the ethics code direct?",
  "choices": [
   "Open the door but photograph the caller for the job file first",
   "Refuse the job and take no further action of any kind",
   "Refuse service and notify law enforcement in the jurisdiction",
   "Complete the job, then file an incident report with the Board"
  ],
  "answer": 2,
  "explanation": "Locksmiths reserve the right to refuse service when intent and ownership cannot be verified, and they must notify law enforcement within the jurisdiction when they suspect criminal intent.",
  "manual": "rules",
  "page": "7",
  "ref": ".0503(b)"
 },
 {
  "id": "r13-043",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A customer offers extra money to have a copy made of a key on a restricted keyway without authorization from the system's owner. What must the locksmith do?",
  "choices": [
   "Cut the key but stamp it as an unauthorized copy",
   "Decline, because deliberately breaching a restricted key system is prohibited",
   "Cut the key if the customer signs a liability waiver",
   "Cut the key and then promptly notify the manufacturer of the restricted keyway"
  ],
  "answer": 1,
  "explanation": "Locksmiths may not deliberately breach a restricted key system, regardless of payment offered or paperwork signed by the customer.",
  "manual": "rules",
  "page": "7",
  "ref": ".0503(c)"
 },
 {
  "id": "r13-044",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "For which service calls must a locksmith record the identity of the customer?",
  "choices": [
   "Vehicle unlock calls that occur after normal business hours",
   "Service calls in which the customer pays with cash instead of a card",
   "Safe and vault opening jobs in which the contents exceed the declared insured value set by the customer",
   "Every call in which the locksmith opens property, originates a key, or otherwise provides access"
  ],
  "answer": 3,
  "explanation": "The customer's identity must be recorded for all service calls in which the locksmith opens a vehicle, building, room, or secured container, originates a key, or in any other fashion provides the customer with access to such property.",
  "manual": "rules",
  "page": "7",
  "ref": ".0503(d)"
 },
 {
  "id": "r13-045",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A customer requests an inexpensive lock installation that would leave an exit door unable to be opened from inside during an emergency. What must the locksmith do?",
  "choices": [
   "Refuse to install a locking device that produces a threat to life or safety",
   "Install it after the customer signs a liability waiver",
   "Install it and post a printed warning label on the door",
   "Install it as long as the local fire marshal is notified of the installation in writing"
  ],
  "answer": 0,
  "explanation": "Locksmiths must not install a locking device that produces a threat to life or safety. Installations should comply with the International Building Code, NFPA codes, the ADA, and local codes or ordinances governing architectural hardware.",
  "manual": "rules",
  "page": "7",
  "ref": ".0503(e)"
 },
 {
  "id": "r13-046",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "During a service call, a locksmith discovers a pre-existing installation that traps occupants behind a keyed door with no inside release, creating a life-safety hazard. What does the ethics code call for?",
  "choices": [
   "Remove the hazardous hardware immediately without asking the client",
   "Report the property owner to the local fire marshal right away",
   "Ignore the condition unless the locksmith was hired specifically to work on that door",
   "Inform the client of the condition, and optionally recommend remedial action"
  ],
  "answer": 3,
  "explanation": "When a pre-existing condition that threatens life or safety is encountered, the locksmith must inform the client and may recommend appropriate remedial action.",
  "manual": "rules",
  "page": "7",
  "ref": ".0503(e)"
 },
 {
  "id": "r13-047",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Two business partners are fighting over their shop, and each tells the locksmith the other has no authority. What alone can resolve the dispute so service may proceed?",
  "choices": [
   "A notarized statement from either one of the partners",
   "Instructions from a uniformed law enforcement officer or a court order",
   "A majority vote taken among the partners' employees",
   "A written legal opinion provided by either one of the partners' private attorneys"
  ],
  "answer": 1,
  "explanation": "Locksmiths must refuse to provide service while a dispute of ownership or authority is unresolved. Only instructions from a uniformed law enforcement officer or a court order are accepted as resolution of such a dispute.",
  "manual": "rules",
  "page": "7",
  "ref": ".0503(f)"
 },
 {
  "id": "r13-048",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A customer hands over a working key to a master keyed cylinder but does not present the corresponding master key. How must the locksmith treat that key?",
  "choices": [
   "As the top-level master key for the entire system",
   "As sufficient proof of full authority over the cylinder",
   "As a presumed subordinate key until otherwise determined",
   "As an unauthorized duplicate that must be confiscated on the spot"
  ],
  "answer": 2,
  "explanation": "When master keyed cylinders are encountered, a key presented without its corresponding master key is presumed to be a subordinate key until otherwise determined.",
  "manual": "rules",
  "page": "7",
  "ref": ".0503(g)"
 },
 {
  "id": "r13-049",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Before rekeying a cylinder that belongs to a known master key system, what must the locksmith attempt to do?",
  "choices": [
   "Determine the holder of the master key and seek authorization for the work",
   "Notify the cylinder's original manufacturer of the planned keying change in advance",
   "File a keying change notice with the Board's office",
   "Replace the entire cylinder rather than rekey it"
  ],
  "answer": 0,
  "explanation": "Locksmiths must not interfere with the maintenance of a known master key system. Before cylinder changes or key origination, they must attempt to determine the master key holder and seek authorization for the work.",
  "manual": "rules",
  "page": "7",
  "ref": ".0503(g)"
 },
 {
  "id": "r13-050",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A caller who says he is the new office manager asks a locksmith for the combination to the company safe. What must the locksmith do before releasing it?",
  "choices": [
   "Release it once the caller correctly states the company address",
   "Release it only in writing, never over the telephone",
   "Refuse; safe combinations may never be released to anyone",
   "Verify with the owner that the caller is entitled to receive it"
  ],
  "answer": 3,
  "explanation": "Key bitting arrays, file keys, and all client information must be kept confidential. No information or security device, such as a master key or safe combination, may be released to any person without verifying with the owner that the recipient is entitled to it.",
  "manual": "rules",
  "page": "7",
  "ref": ".0503(h)"
 },
 {
  "id": "r13-051",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "At what security level must a locksmith service and install a security product?",
  "choices": [
   "The minimum level that fits the customer's stated budget",
   "Any level the servicing technician considers adequate",
   "The highest level of security afforded by the product's manufacturer",
   "The level specified by the local building codes and no higher than that"
  ],
  "answer": 2,
  "explanation": "Locksmiths must service and install security devices at the highest level of security afforded by the manufacturer of the product.",
  "manual": "rules",
  "page": "7",
  "ref": ".0504(a)"
 },
 {
  "id": "r13-052",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A client insists on adding new keys to a master keyed system even though the original bitting array is unavailable. What must the locksmith obtain before proceeding?",
  "choices": [
   "The client's signature on a written warning notice about the compromised system",
   "A verbal acknowledgment from the client recorded in the job notes",
   "Written approval issued by the lock manufacturer's engineering support department",
   "A substitute bitting array generated by masterkeying software"
  ],
  "answer": 0,
  "explanation": "Locksmiths must inform clients of the dangers of introducing new keys into a master keyed system without reference to the original bitting array, and may not introduce random keys into such a system without the client's signature on a written warning notice of the compromised system.",
  "manual": "rules",
  "page": "7",
  "ref": ".0504(b)"
 },
 {
  "id": "r13-053",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "In the Board's rules, what practice is described as maison keying?",
  "choices": [
   "Originating a single key that operates cylinders from several different manufacturers",
   "Keying a lock to several keys by leaving chambers empty or stacking over two master wafers in a chamber",
   "Master keying an entire apartment building under one top-level master key",
   "Combinating every lock cylinder throughout an entire building so that one single change key operates all of them"
  ],
  "answer": 1,
  "explanation": "Maison keying makes a mechanical lock operate on several keys by leaving multiple chambers empty or stacking more than two master wafers in a chamber. A locksmith may key a cylinder this way only after warning the client and obtaining the client's signature on a written warning notice.",
  "manual": "rules",
  "page": "7",
  "ref": ".0504(c)"
 },
 {
  "id": "r13-054",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "To save time, a technician sets the same standard combination on safes for many different customers. Why is this prohibited?",
  "choices": [
   "It violates the requirement of random and complete recombination for optimal security",
   "Because repeated use of one combination wears the dial and lock components faster",
   "Because every combination change must first be registered with the Board",
   "Because only the safe's original manufacturer is authorized to set new factory combinations"
  ],
  "answer": 0,
  "explanation": "The repeated use of a standard key or combination for multiple customers or job sites violates the duty to follow industry and manufacturer standards and ensure random and complete recombination of cylinders and combination locks.",
  "manual": "rules",
  "page": "7",
  "ref": ".0504(d)(1)"
 },
 {
  "id": "r13-055",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A pin tumbler cylinder binds slightly, and a technician considers filing the plug to enlarge the shear line. How do the Board's rules treat this shortcut?",
  "choices": [
   "It is acceptable as long as only a few thousandths of an inch of material are removed",
   "It is acceptable on non-restricted cylinders only",
   "It is prohibited as a violation of proper recombination and security standards",
   "It is the recommended practice for worn or sticking cylinders"
  ],
  "answer": 2,
  "explanation": "Filing the plug on a mechanical lock cylinder as a means to enlarge the shear line is expressly listed as a practice that violates the technical integrity rule.",
  "manual": "rules",
  "page": "7",
  "ref": ".0504(d)(2)"
 },
 {
  "id": "r13-056",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "After drilling open a safe, the customer asks the locksmith to leave the relocking assembly out so future openings are easier. What must the locksmith do?",
  "choices": [
   "Comply, provided the customer signs a written release",
   "Restore the relocker; security features may not be omitted or disabled to the client's detriment",
   "Leave it out, but note the omission clearly on the invoice",
   "Replace the factory relocking assembly with a less expensive aftermarket part of similar appearance"
  ],
  "answer": 1,
  "explanation": "Locksmiths must follow manufacturer recommendations for proper installation and may not omit or disable any security feature, such as a safe relocking assembly or a deadlatch, to the detriment of the client's safety and security.",
  "manual": "rules",
  "page": "7",
  "ref": ".0504(e)"
 },
 {
  "id": "r13-057",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A locksmith wants the Board to amend one of its rules. Besides the petitioner's name and address and a citation to the rule, what must the written rulemaking petition include?",
  "choices": [
   "A petition filing fee of $50.00",
   "Supporting signatures from ten licensed locksmiths",
   "An economic impact study of the change",
   "A draft of the proposed new or amended rule"
  ],
  "answer": 3,
  "explanation": "A petition entitled 'Petition for Rulemaking' is sent to the Chair at the Board's address and must include the petitioner's name and address, a citation for any rule to be amended or repealed, and a draft of the proposed new or amended rule.",
  "manual": "rules",
  "page": "8",
  "ref": ".0601(a)"
 },
 {
  "id": "r13-058",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "To be automatically considered timely, when must a party file an affidavit seeking disqualification of a Board member from a contested case?",
  "choices": [
   "At least 5 days before the hearing commences",
   "Ten days before the hearing commences",
   "At least 20 days before the hearing commences",
   "Any time before the Board votes on the case"
  ],
  "answer": 1,
  "explanation": "An affidavit of disqualification is timely if filed ten days before commencement of the hearing. A later affidavit is timely only if filed at the first opportunity after the party learns the facts suggesting disqualification.",
  "manual": "rules",
  "page": "9",
  "ref": ".0611(d)"
 },
 {
  "id": "r13-059",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "What happens if five or more Board members are disqualified from hearing a contested case?",
  "choices": [
   "The remaining Board members hear the case regardless of how few remain",
   "The contested case is dismissed with prejudice and cannot be refiled",
   "The Governor appoints enough temporary replacement Board members to hear and then decide the case",
   "The Board petitions the Office of Administrative Hearings to appoint an administrative law judge"
  ],
  "answer": 3,
  "explanation": "If five or more members are disqualified, the Board must petition the Office of Administrative Hearings to appoint an administrative law judge to hear the contested case. With fewer disqualifications, the hearing continues as long as the remaining members are a majority of the Board.",
  "manual": "rules",
  "page": "9",
  "ref": ".0611(f)(6)"
 },
 {
  "id": "r13-060",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "After receiving a proper written request for a subpoena in a contested case, how quickly must the Board issue it?",
  "choices": [
   "Within 3 days of receiving the request",
   "Within 5 days of receiving the request",
   "Within 10 days of receiving the request",
   "Within 30 days of receiving the request"
  ],
  "answer": 0,
  "explanation": "The Board must issue requested subpoenas within three days of receipt of the written request. A person served may object by filing a written objection with the Board's office, and the requesting party has five working days to respond.",
  "manual": "rules",
  "page": "10",
  "ref": ".0613(a)"
 },
 {
  "id": "r13-061",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "When an administrative law judge hears a contested case for the Board, how soon after the hearing must the judge's proposal for decision be rendered?",
  "choices": [
   "Within 30 days of the hearing",
   "Within 45 days of the hearing",
   "Within 60 days of the hearing",
   "Within 90 days of the hearing"
  ],
  "answer": 1,
  "explanation": "The administrative law judge's proposal for decision is due within 45 days of the hearing. Parties then have ten days after receiving it to file written exceptions, and the Board renders its final decision within 60 days of the next regularly scheduled meeting.",
  "manual": "rules",
  "page": "11",
  "ref": ".0616(a)"
 },
 {
  "id": "r13-062",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Which continuing education record must accompany a license renewal application?",
  "choices": [
   "Original framed certificates for every course completed",
   "A sworn affidavit stating only the total hours earned",
   "A log of CE hours listing sponsor, instructor, date, hours, and subject matter",
   "A confirmation letter from each course sponsor mailed directly to the Board's office"
  ],
  "answer": 2,
  "explanation": "Renewal applications must include a log, in the Board's specified format, of continuing education hours earned during the previous license period, showing the sponsor, the instructor or lecturer, the date, the number of hours, and a description of the subject matter. Licensees must also keep supporting records such as attendance certificates or sponsor transcripts.",
  "manual": "rules",
  "page": "12",
  "ref": ".0701(6)"
 },
 {
  "id": "r13-063",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "What photographs must accompany a license renewal application?",
  "choices": [
   "Two frontal face photos, one inch by one inch, taken within the preceding three months",
   "One passport photo, two inches by two inches, taken within the past year",
   "Two profile photos of any convenient size taken within the six months before the submission",
   "A single digital photo uploaded through the Board's website portal"
  ],
  "answer": 0,
  "explanation": "Renewal requires two frontal photos of the applicant's face, sized one inch by one inch, taken within the three months preceding submission of the application. The renewal also includes consent to a nationwide criminal history check performed by the Department of Public Safety.",
  "manual": "rules",
  "page": "12",
  "ref": ".0701(1)"
 },
 {
  "id": "r13-064",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A license expired four months ago and the locksmith now applies to renew. What fees are owed?",
  "choices": [
   "Only the $300.00 renewal fee",
   "The $300.00 renewal fee plus a $150.00 late fee",
   "The $300.00 renewal fee plus a $250.00 reinstatement fee",
   "The $300.00 renewal fee plus a $300.00 late fee"
  ],
  "answer": 3,
  "explanation": "A licensee who renews after expiration but within twelve months pays a $300.00 late fee in addition to the $300.00 renewal fee, for a total of $600.00.",
  "manual": "rules",
  "page": "12",
  "ref": ".0702(b)"
 },
 {
  "id": "r13-065",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A locksmith seeks to reinstate a license that expired fourteen months ago. What total amount must be paid?",
  "choices": [
   "$850.00: the $300.00 renewal fee, $300.00 late fee, and $250.00 reinstatement fee",
   "$600.00: the $300.00 renewal fee plus the $300.00 late fee",
   "$550.00: the $300.00 renewal fee plus the $250.00 reinstatement fee",
   "$300.00: only the renewal fee, because the other fees reset after twelve months have passed"
  ],
  "answer": 0,
  "explanation": "Reinstatement more than twelve months after expiration requires a $250.00 reinstatement fee in addition to the $300.00 late fee and the $300.00 renewal fee, a combined total of $850.00.",
  "manual": "rules",
  "page": "12",
  "ref": ".0702(b)"
 },
 {
  "id": "r13-066",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Beyond fees, what continuing education must a locksmith show to reinstate a license that has been expired for more than one year?",
  "choices": [
   "At least 4 contact hours completed at any time in the past",
   "At least 8 contact hours completed within the year preceding the application",
   "At least 16 contact hours completed within the prior renewal cycle",
   "A complete 24-hour requalification course from a sponsor approved by the Board"
  ],
  "answer": 1,
  "explanation": "A licensee whose license has been expired for more than one year may apply for reinstatement only after completing at least eight contact hours of continuing education within the one year preceding the application.",
  "manual": "rules",
  "page": "12",
  "ref": ".0703"
 },
 {
  "id": "r13-067",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "At renewal, a licensee omits a conviction that occurred during the license period. How may the Board respond?",
  "choices": [
   "It must ignore any conviction that occurred after original licensure",
   "It may deny renewal, since failure to disclose a conviction is grounds for denial",
   "It may only assess a monetary fine against the licensee",
   "It must renew the license but refer the undisclosed conviction to the district attorney"
  ],
  "answer": 1,
  "explanation": "Renewal applicants must disclose all criminal convictions not included on previous applications, and failure to disclose any conviction may be grounds for denial of renewal or reinstatement. The Board applies the same moral character standards from Rule .0402 at renewal, and may also deny renewal for Code of Ethics violations.",
  "manual": "rules",
  "page": "13",
  "ref": ".0704(b)"
 },
 {
  "id": "r13-068",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "For continuing education purposes, how much instruction time counts as one contact hour?",
  "choices": [
   "A minimum of 45 minutes of contact",
   "A full 60 minutes of contact",
   "Any class period, regardless of its length",
   "A minimum of 50 minutes of contact"
  ],
  "answer": 3,
  "explanation": "A contact hour is defined as a minimum of 50 minutes of contact.",
  "manual": "rules",
  "page": "13",
  "ref": ".0801"
 },
 {
  "id": "r13-069",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "How many contact hours of continuing education must a licensee complete in each renewal cycle?",
  "choices": [
   "8 contact hours during each 2-year cycle",
   "12 contact hours during each 3-year cycle",
   "16 contact hours during each 3-year cycle",
   "24 contact hours during each 4-year cycle"
  ],
  "answer": 2,
  "explanation": "Every licensee must obtain 16 contact hours of continuing education during each 3-year renewal cycle, in technical and professional subjects related to the practice of locksmithing.",
  "manual": "rules",
  "page": "13",
  "ref": ".0802(a)"
 },
 {
  "id": "r13-070",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A licensee finishes 20 contact hours during one renewal cycle. What happens to the extra 4 hours?",
  "choices": [
   "They carry forward into the next renewal cycle",
   "They may be transferred to another licensed locksmith working in the same shop",
   "Half of them carry forward and half are lost",
   "They are lost; no contact hours carry forward to the next renewal period"
  ],
  "answer": 3,
  "explanation": "Licensees may not carry forward any contact hours of continuing education into the subsequent renewal period.",
  "manual": "rules",
  "page": "13",
  "ref": ".0802(c)"
 },
 {
  "id": "r13-071",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "Which licensee qualifies for the full age-and-experience exemption from continuing education?",
  "choices": [
   "Age 60, with 20 years of locksmith experience, 5 years licensed in North Carolina, and no complaints on file",
   "Age 62, with 15 years of experience, 9 years licensed in North Carolina, and not under Board investigation",
   "Age 65, with 10 years of locksmith experience, whether or not under investigation",
   "Any licensee with 25 years of continuous locksmith experience, at any age"
  ],
  "answer": 1,
  "explanation": "The exemption requires all four conditions: at least 62 years of age, at least 15 years of experience as a locksmith, at least nine years as a North Carolina licensed locksmith, and no pending Board investigation.",
  "manual": "rules",
  "page": "13",
  "ref": ".0802(a)(2)"
 },
 {
  "id": "r13-072",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "How does the Board approve continuing education offerings?",
  "choices": [
   "It approves sponsors by agreement, not individual courses or programs",
   "It pre-approves each individual course syllabus before the course can be taught",
   "It licenses each instructor annually after a Board interview",
   "It accepts any course a licensee chooses without any review"
  ],
  "answer": 0,
  "explanation": "The Board does not pre-approve individual courses or programs; it approves sponsors, who agree to offer qualifying courses, keep course content and attendance records for four years, and allow Board monitoring. Instructors of qualifying courses earn credit at the same rate as participants.",
  "manual": "rules",
  "page": "13",
  "ref": ".0803(b)"
 },
 {
  "id": "r13-073",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "How long must a licensee serve on temporary active military duty within a year to be exempt from eight hours of the continuing education requirement?",
  "choices": [
   "More than 60 consecutive days",
   "More than 90 consecutive days",
   "More than 120 consecutive days",
   "More than 180 consecutive days"
  ],
  "answer": 2,
  "explanation": "Temporary active duty in the armed forces of the United States for a period exceeding 120 consecutive days within the year exempts the licensee from eight hours of the CE requirement for the cycle. A documented physical disability or illness can support the same eight-hour exemption.",
  "manual": "rules",
  "page": "14",
  "ref": ".0805(1)"
 },
 {
  "id": "r13-074",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "A supervising licensee's apprentice passes the North Carolina Locksmith Licensing Exam and receives a license. What does the supervising licensee earn?",
  "choices": [
   "A one-year extension of the licensee's renewal deadline",
   "A $100.00 credit toward the licensee's renewal fees",
   "Automatic renewal of the license without filing a renewal application",
   "Exemption from eight hours of the continuing education requirement"
  ],
  "answer": 3,
  "explanation": "A licensee whose licensed apprentice passes the North Carolina Locksmith Licensing Exam and receives a North Carolina Locksmith License is exempt from eight hours of the continuing education requirement for the renewal cycle.",
  "manual": "rules",
  "page": "14",
  "ref": ".0805(3)"
 },
 {
  "id": "r13-075",
  "section": 13,
  "sectionName": "Board Rules and Code of Ethics (21 NCAC 29)",
  "question": "The Board rejects some of the continuing education credits a licensee claimed. How long does the licensee have to substantiate the claim or earn replacement hours?",
  "choices": [
   "30 calendar days after written notification",
   "60 calendar days after written notification",
   "90 calendar days after written notification",
   "120 calendar days after written notification"
  ],
  "answer": 2,
  "explanation": "After written notification that claimed credits are not approved, the licensee has 90 calendar days to substantiate the original claim or obtain other contact hours meeting the minimum requirements. Failure to do so within the 90 days causes the license to expire.",
  "manual": "rules",
  "page": "14",
  "ref": ".0806"
 }
];
