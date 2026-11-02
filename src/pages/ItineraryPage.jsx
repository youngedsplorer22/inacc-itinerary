import { useState } from 'react'
import { DAYS } from '../data/itinerary.js'
import { useParticipantId } from '../participant/useParticipantId.js'
import './ItineraryPage.css'

// TEMPORARY, basic page. The final design and content will come later.
export default function ItineraryPage() {
  const { participantId, isInvalid } = useParticipantId()
  const [selectedDayId, setSelectedDayId] = useState(DAYS[0].id)
  const selectedDay = DAYS.find((day) => day.id === selectedDayId)

  return (
    <main className="itinerary">
      <h1>INACC Event Itinerary</h1>
      <p>Testing</p>

      {/* Temporary: shows the ID reached the page. Remove or restyle in the final design. */}
      {participantId && (
        <p className="itinerary-participant">
          Participant ID: <strong data-testid="participant-id">{participantId}</strong>
        </p>
      )}

      {/* Wording is a placeholder, to be confirmed with the lead. */}
      {isInvalid && (
        <p className="itinerary-notice" role="status">
          This participant ID was not recognised. Showing the general itinerary.
        </p>
      )}

      <div className="itinerary-days" role="group" aria-label="Event days">
        {DAYS.map((day) => (
          <button
            key={day.id}
            type="button"
            aria-pressed={day.id === selectedDayId}
            onClick={() => setSelectedDayId(day.id)}
          >
            {day.label}
          </button>
        ))}
      </div>

      <section className="itinerary-day" aria-label={selectedDay.label}>
        <h2>{selectedDay.label}</h2>
        <p>{selectedDay.date}</p>
        <p>{selectedDay.content}</p>
      </section>
    </main>
  )
}
