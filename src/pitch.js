export default class Pitch {
  constructor(note, octave) {
    this.note = note
    this.octave = octave
  }
}

const OCTAVE = 12

const C = 0
const D = 2
const E = 4
const F = 5
const G = 7
const A = 9
const B = 11

var pitches = {
  C,
  D,
  E,
  F,
  G,
  A,
  B
}

Object.keys(pitches).forEach((key) => {

  var pitch = pitches[key]
  var flat = pitch - 1;
  var sharp = pitch + 1;
  var doubleFlat = pitch - 2;
  var doubleSharp = pitch + 2;

  pitches[key + 'NATURAL'] = pitches[key + '\u266E'] = pitch
  pitches[key + 'FLAT'] = pitches[key + 'b'] = pitches[key + '\u266D'] = flat;
  pitches[key + 'SHARP'] = pitches[key + '#'] = pitches[key + '\u266F'] = sharp;
  pitches[key + 'DOUBLEFLAT'] = pitches[key + 'bb'] = pitches[key + '\uD834\uDD2B'] = doubleFlat;
  pitches[key + 'DOUBLESHARP'] = pitches[key + '##'] = pitches[key + '\uD834\uDD2A'] = doubleSharp;

})

Object.keys(pitches).forEach((key) => {
  Pitch[key] = pitches[key]
})

Pitch['8ve'] = Pitch.OCTAVE = OCTAVE
