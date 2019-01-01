import musicality from '../src'
import pitch from '../src/pitch'
import expect from 'expect'

describe('.pitch(note, octave)', () => {
  it('Accepts a note and an octave and returns a pitch object', () => {
    const { A } = pitch
    const p = musicality.pitch(A, 4)
    expect(p.note).toEqual(A)
    expect(p.octave).toEqual(4)
  })
})
