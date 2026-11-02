import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { DAYS } from '../data/itinerary.js'
import ItineraryPage from './ItineraryPage.jsx'

afterEach(cleanup)

function renderPage() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<ItineraryPage />} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('ItineraryPage', () => {
  it('shows the heading and temporary placeholder text', () => {
    renderPage()
    expect(screen.getByRole('heading', { level: 1, name: 'INACC Event Itinerary' })).toBeTruthy()
    expect(screen.getAllByText('Testing').length).toBeGreaterThan(0)
  })

  it('shows all five day buttons, in order', () => {
    renderPage()
    const labels = screen.getAllByRole('button').map((b) => b.textContent)
    expect(labels).toEqual(['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'])
  })

  it('starts on Day 1 with a date placeholder and placeholder content', () => {
    renderPage()
    expect(screen.getByRole('heading', { level: 2, name: 'Day 1' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Day 1' }).getAttribute('aria-pressed')).toBe('true')
    expect(screen.getByText('Date to be announced')).toBeTruthy()
  })

  it.each(['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'])('clicking %s shows that day', (label) => {
    renderPage()
    fireEvent.click(screen.getByRole('button', { name: label }))
    expect(screen.getByRole('heading', { level: 2, name: label })).toBeTruthy()
    expect(screen.getByRole('button', { name: label }).getAttribute('aria-pressed')).toBe('true')
    // exactly one day is selected at a time
    expect(
      screen.getAllByRole('button').filter((b) => b.getAttribute('aria-pressed') === 'true'),
    ).toHaveLength(1)
    // placeholder content + date placeholder visible for that day
    expect(screen.getAllByText('Testing').length).toBeGreaterThan(1)
    expect(screen.getByText('Date to be announced')).toBeTruthy()
  })

  it('has no invented event data: every day uses placeholder text only', () => {
    expect(DAYS).toHaveLength(5)
    for (const day of DAYS) {
      expect(day.content).toBe('Testing')
      expect(day.date).toBe('Date to be announced')
    }
    expect(DAYS.map((d) => d.groupSpecific)).toEqual([false, false, false, true, true])
  })
})
