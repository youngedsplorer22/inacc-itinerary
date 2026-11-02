// TEMPORARY placeholder itinerary data.
// The real dates and schedule will be provided later. Nothing here is real event information.
//
// To update later: edit this file only. The page reads from DAYS and needs no changes
// for plain text content.
//
// groupSpecific: Days 4 and 5 will differ between Group 1 and Group 2. How a participant ID
// maps to a group has NOT been decided, so this flag is only a reminder for now.
// When it is decided, `content` for those days can become { group1: '…', group2: '…' }
// and the page can pick one using the participant ID.
export const DAYS = [
  { id: 'day-1', label: 'Day 1', date: 'Date to be announced', groupSpecific: false, content: 'Testing' },
  { id: 'day-2', label: 'Day 2', date: 'Date to be announced', groupSpecific: false, content: 'Testing' },
  { id: 'day-3', label: 'Day 3', date: 'Date to be announced', groupSpecific: false, content: 'Testing' },
  { id: 'day-4', label: 'Day 4', date: 'Date to be announced', groupSpecific: true, content: 'Testing' },
  { id: 'day-5', label: 'Day 5', date: 'Date to be announced', groupSpecific: true, content: 'Testing' },
]
