# Corrections and open points

## Corrections made to sheet text
- "Asisstant" -> "Assistant" (Day 1 guest line).
- "disbursal" / "Disbursal" -> "dispersal" / "Dispersal" (the sheet's own Notes tab uses "dispersal").
- "Ex- ISRO" -> "Ex-ISRO".
- "CANSAT" / "CanSAT" -> "CanSat" (one spelling everywhere, matching the "CanSat" nav heading).
- "visualization" -> "visualisation" (Day 2), to match "visualisation" and "centre" elsewhere in the sheet.
- "Snacks break" -> "Snack Break"; "Snack break" -> "Snack Break"; "Rocket launches" -> "Rocket Launches" (consistent capitalization).
- "his Team" -> "his team"; "Pickup by Parents" / "Pick Up by Parents" -> "Pick up by parents".
- "Teams 1 – 8" (en dash) -> "Teams 1 - 8", like the other ranges.
- "11:00 - 11:15 - Am" -> "11:00 - 11:15 AM" (stray dash).
- Times: all shown as 12-hour "h:mm AM/PM" (the sheet mixed 24-hour, "Am", "Pm", "pm", "5pm"). Clock values are unchanged.
- Trailing spaces and line breaks inside cells removed.
- Five start times stored as time values in the sheet are shown as clock times: 7:00 AM and 8:00 AM (Day 1), 7:30 AM (Day 2), 6:30 AM (Day 4), 9:00 AM (Day 5).

## Wording changed to remove the word "Batch"
- Day 4 "Safety briefing and Batch 1 final checks" -> "Safety briefing and final checks".
- Day 4 "Batch 3 launches (Teams 18 - 21)" -> "Rocket Launches (Teams 18 - 21)".
- Day 5 sheet heading "Day 5 Batch 2" is not shown; the design board heading is used.

## Unresolved / please confirm
1. Group 1 / Group 2: the sheet's first tab has one schedule for Days 4-5 and there is no participant-to-group mapping. Everyone sees that schedule. Integration point: `src/participant/group.js`.
2. Design board Day 4 heading "Mission Simulation & Launch Prep" and Day 5 "Final Launch & Valedictory" do not describe this tab's content (Day 4 here is launch day, Day 5 is workshops and closing). Kept unchanged as instructed.
3. "Facilitation ceremony" may be meant as "Felicitation ceremony". Left unchanged.
4. "SNIS" is not expanded in the sheet. Left unchanged.
5. "Teams report at Vidyashilp, attendance" reads awkwardly; left unchanged.
6. Dates are not in the itinerary tab. 1-5 December come from the Notes tab; weekdays (Tue-Sat) are the design board's and match 2026.
7. Locations: the sheet has no venue column. The design board's invented venue lines (for example "Main Auditorium") are not used. Venues appear only where the sheet states them (Vidyashilp Academy, the Venue, SNIS).
8. The design board's time-span line (for example "08:30 - 17:15") is not in the sheet and is not shown.

# Itinerary verification: sheet vs website data

Source: Google Sheet `1LGqES6PjPQu07g23_qTasQdUQrprBjeP`, first itinerary tab (export identical to `INACC_Day4_Day5_Itinerary.xlsx`). Rows compared 1:1 in sheet order.
Status: `same` = same time and identical text (time only re-formatted to 12-hour AM/PM, whitespace collapsed); `CORRECTED` = wording/punctuation change, shown side by side. Times are compared by clock value, so every time shown is equal to the sheet.

Totals: 47 rows compared, 16 rows with wording corrections, 31 identical. No rows missing, added or reordered.

## Day 1 - Registration & Orientation, Tue 01 Dec (sheet heading: "Day 1")

| # | Sheet time | Sheet session | Sheet activity | Site time | Site title | Site detail | Status |
|---|---|---|---|---|---|---|---|
| 1 | 7:00 AM (sheet time value) | Assemble at Vidyashilp Academy |  | 7:00 AM | Assemble at Vidyashilp Academy |  | same |
| 2 | 8:00 AM (sheet time value) | Orientation & Welcome |  | 8:00 AM | Orientation & Welcome |  | same |
| 3 | 8:00 - 9:00 | Opening Ceremony and Guest Talks | Dr. Deepak Singh - Asisstant Professor - IIT Bombay | 8:00 - 9:00 AM | Opening Ceremony and Guest Talks | Dr. Deepak Singh - Assistant Professor - IIT Bombay | CORRECTED |
| 4 | 9:00 - 9:50 | Fundamentals of Rocketry | Theoretical session with experiential activities for the explanation of thrust, rocket CG & CP, etc. | 9:00 - 9:50 AM | Fundamentals of Rocketry | Theoretical session with experiential activities for the explanation of thrust, rocket CG & CP, etc. | same |
| 5 | 9:50 - 10:00 | Snack Break |  | 9:50 - 10:00 AM | Snack Break |  | same |
| 6 | 10:00 - 10:50 | Fundamentals of CANSAT | Theoretical session with visual activities and videos | 10:00 - 10:50 AM | Fundamentals of CanSat | Theoretical session with visual activities and videos | CORRECTED |
| 7 | 10:50 - 11:00 | Movement to Breakout Rooms |  | 10:50 - 11:00 AM | Movement to Breakout Rooms |  | same |
| 8 | 11:00 - 13:00 | Rocket Integration | Component visualisation, shroud line fixation & parachute folding + lower body assembly - fixation of aeropack and centre rings. | 11:00 AM - 1:00 PM | Rocket Integration | Component visualisation, shroud line fixation & parachute folding + lower body assembly - fixation of aeropack and centre rings. | same |
| 9 | 13:00 - 13:45 | Lunch |  | 1:00 - 1:45 PM | Lunch |  | same |
| 10 | 13:45 - 15:15 | Rocket Integration | Lower body assembly - fin alignment and fixation + Outer body preparation + briefing for next day's plan | 1:45 - 3:15 PM | Rocket Integration | Lower body assembly - fin alignment and fixation + Outer body preparation + briefing for next day's plan | same |
| 11 | 15:15 - 15:30 | Snack Break followed by disbursal | Pick up by parents from Vidyashilp between 3:45 - 4:00 pm | 3:15 - 3:30 PM | Snack Break followed by dispersal | Pick up by parents from Vidyashilp between 3:45 - 4:00 PM | CORRECTED |

## Day 2 - Rocketry Fundamentals, Wed 02 Dec (sheet heading: "Day 2")

| # | Sheet time | Sheet session | Sheet activity | Site time | Site title | Site detail | Status |
|---|---|---|---|---|---|---|---|
| 1 | 7:30 AM (sheet time value) | Assemble at Vidyashilp Academy |  | 7:30 AM | Assemble at Vidyashilp Academy |  | same |
| 2 | 7:45 - 8:00 | Welcome Note |  | 7:45 - 8:00 AM | Welcome Note |  | same |
| 3 | 8:00 - 8:30 | Guest Talk | Ms. Ishita Ganju - ISRO Scientist | 8:00 - 8:30 AM | Guest Talk | Ms. Ishita Ganju - ISRO Scientist | same |
| 4 | 8:30 - 9:15 | Fundamentals of Rocket Onboard Flight Computers | Theoretical session with visual activities and videos | 8:30 - 9:15 AM | Fundamentals of Rocket Onboard Flight Computers | Theoretical session with visual activities and videos | same |
| 5 | 9:15 - 9:30 | Movement to Breakout Rooms |  | 9:15 - 9:30 AM | Movement to Breakout Rooms |  | same |
| 6 | 9:30 - 11:15 | Rocket Integration | Component visualization and on-board flight computer (avionics) testing | 9:30 - 11:15 AM | Rocket Integration | Component visualisation and on-board flight computer (avionics) testing | CORRECTED |
| 7 | 11:15 - 11:30 | Break |  | 11:15 - 11:30 AM | Break |  | same |
| 8 | 11:30 - 13:15 | Rocket Integration | PCB Mounting + Ground control integration test and coupler integration with rocket body | 11:30 AM - 1:15 PM | Rocket Integration | PCB Mounting + Ground control integration test and coupler integration with rocket body | same |
| 9 | 13:15 - 14:00 | Lunch |  | 1:15 - 2:00 PM | Lunch |  | same |
| 10 | 14:00 - 15:30 | CANSAT Integration | Circuit testing on breadboard + CanSAT PCB integration and CanSAT parachute integration | 2:00 - 3:30 PM | CanSat Integration | Circuit testing on breadboard + CanSat PCB integration and CanSat parachute integration | CORRECTED |
| 11 | 15:30 - 15:45 | Snack Break followed by disbursal | Pick up by parents from Vidyashilp between 3:45 - 4:00 pm | 3:30 - 3:45 PM | Snack Break followed by dispersal | Pick up by parents from Vidyashilp between 3:45 - 4:00 PM | CORRECTED |

## Day 3 - CanSat Engineering, Thu 03 Dec (sheet heading: "Day 3")

| # | Sheet time | Sheet session | Sheet activity | Site time | Site title | Site detail | Status |
|---|---|---|---|---|---|---|---|
| 1 | 7:00 - 7:30 | Assemble at the Venue | Vidyashilp Academy | 7:00 - 7:30 AM | Assemble at the Venue | Vidyashilp Academy | same |
| 2 | 7:45 - 8:15 | Guest Talk | Dr. Venkateshwarlu Andra - Ex- ISRO Scientist | 7:45 - 8:15 AM | Guest Talk | Dr. Venkateshwarlu Andra - Ex-ISRO Scientist | CORRECTED |
| 3 | 8:15 - 9:00 | Fundamentals of Rocket Propulsion | Theoretical session with visual activities and videos | 8:15 - 9:00 AM | Fundamentals of Rocket Propulsion | Theoretical session with visual activities and videos | same |
| 4 | 9:00 - 9:15 | Movement to Breakout Rooms |  | 9:00 - 9:15 AM | Movement to Breakout Rooms |  | same |
| 5 | 9:15 - 11:00 | Rocket Integration | Recovery mechanism integration | 9:15 - 11:00 AM | Rocket Integration | Recovery mechanism integration | same |
| 6 | 11:00 - 11:15 | Snack Break |  | 11:00 - 11:15 AM | Snack Break |  | same |
| 7 | 11:15 - 13:00 | Rocket Integration | Upper body + coupler + lower body rocket integration and final assembly | 11:15 AM - 1:00 PM | Rocket Integration | Upper body + coupler + lower body rocket integration and final assembly | same |
| 8 | 13:00 - 13:45 | Lunch |  | 1:00 - 1:45 PM | Lunch |  | same |
| 9 | 13:45 - 15:15 | Rocket Inspection | Final rocket inspection and propulsion system integration test | 1:45 - 3:15 PM | Rocket Inspection | Final rocket inspection and propulsion system integration test | same |
| 10 | 15:15 - 16:00 | Snack Break followed by disbursal | Pick up by parents from Vidyashilp between 3:45 - 4:00 pm | 3:15 - 4:00 PM | Snack Break followed by dispersal | Pick up by parents from Vidyashilp between 3:45 - 4:00 PM | CORRECTED |

## Day 4 - Mission Simulation & Launch Prep, Fri 04 Dec (sheet heading: "Day 4")

| # | Sheet time | Sheet session | Sheet activity | Site time | Site title | Site detail | Status |
|---|---|---|---|---|---|---|---|
| 1 | 6:30 AM (sheet time value) | Teams report and register at SNIS |  | 6:30 AM | Teams report and register at SNIS |  | same |
| 2 | 6:45 - 7:00 AM | Safety briefing and Batch 1 final checks |  | 6:45 - 7:00 AM | Safety briefing and final checks |  | CORRECTED |
| 3 | 7:00 - 9:00 AM | Rocket launches (Teams 1 – 8) |  | 7:00 - 9:00 AM | Rocket Launches (Teams 1 - 8) |  | CORRECTED |
| 4 | 9:00 - 9:15 Am | Snack Break |  | 9:00 - 9:15 AM | Snack Break |  | same |
| 5 | 9:15 - 12:00 pm | Rocket Launches (Teams 9 - 17) |  | 9:15 AM - 12:00 PM | Rocket Launches (Teams 9 - 17) |  | same |
| 6 | 12:00 - 12:45 Pm | Lunch |  | 12:00 - 12:45 PM | Lunch |  | same |
| 7 | 12:45 - 2:45 PM | Batch 3 launches (Teams 18 - 21) |  | 12:45 - 2:45 PM | Rocket Launches (Teams 18 - 21) |  | CORRECTED |
| 8 | 2:45 - 3:00pm | Snacks break followed by disbursal - Pick Up by Parents from Vidyashilp |  | 2:45 - 3:00 PM | Snack Break followed by dispersal - Pick up by parents from Vidyashilp |  | CORRECTED |

## Day 5 - Final Launch & Valedictory, Sat 05 Dec (sheet heading: "Day 5 Batch 2")

| # | Sheet time | Sheet session | Sheet activity | Site time | Site title | Site detail | Status |
|---|---|---|---|---|---|---|---|
| 1 | 9:00 AM (sheet time value) | Teams report at Vidyashilp, attendance | Assemble at Vidyashilp Academy | 9:00 AM | Teams report at Vidyashilp, attendance | Assemble at Vidyashilp Academy | same |
| 2 | 9:30 - 11:00 am | Workshop Session 1 |  | 9:30 - 11:00 AM | Workshop Session 1 |  | same |
| 3 | 11:00 - 11:15 - Am | Snack break |  | 11:00 - 11:15 AM | Snack Break |  | CORRECTED |
| 4 | 11:15 - 1:00 Pm | Workshop Session 2 | Software workshop by Mr. Prakhar Jain and his Team | 11:15 AM - 1:00 PM | Workshop Session 2 | Software workshop by Mr. Prakhar Jain and his team | CORRECTED |
| 5 | 1:00 - 2:00 Pm | Lunch |  | 1:00 - 2:00 PM | Lunch |  | same |
| 6 | 2 pm Onwards - Facilitation ceremony |  | Closing ceremony and certificate distribution | 2:00 PM Onwards | Facilitation ceremony | Closing ceremony and certificate distribution | CORRECTED |
| 7 | 4:45 - 5pm | Disbursal | Pickup by Parents at 4:45 - 5pm from Vidyashilp | 4:45 - 5:00 PM | Dispersal | Pick up by parents at 4:45 - 5:00 PM from Vidyashilp | CORRECTED |
