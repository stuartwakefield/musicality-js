import Pitch from './pitch'

var Tempo = require('./tempo');
var Beat = require('./beat');
var Key = require('./key');
var DegreeNote = require('./degree-note');
var Degree = require('./degree');
var Scale = require('./scale');
var Tuning = require('./tuning');

function createTempo(beat, bpm) {
  return new Tempo(beat, bpm);
}

function createKey(pitch, scale) {
  return new Key(pitch, scale);
}

function createPitch(note, octave) {
  return new Pitch(note, octave);
}

function createDegreeNote(degree, beat) {
  return new DegreeNote(degree, beat);
}

function createDegree(degree, octave) {
  return new Degree(degree, octave);
}

createPitch.A = Pitch.A
createPitch.BFLAT = Pitch.BFLAT
createPitch.B = Pitch.B
createPitch.C = Pitch.C
createPitch.CSHARP = Pitch.CSHARP
createPitch.D = Pitch.D
createPitch.EFLAT = Pitch.EFLAT
createPitch.E = Pitch.E
createPitch.F = Pitch.F
createPitch.FSHARP = Pitch.FSHARP
createPitch.G = Pitch.G
createPitch.AFLAT = Pitch.AFLAT

module.exports = {

  createTempo,
  createKey,

  createPitch,
  pitch: createPitch,
  Pitch: Pitch,

  createDegreeNote,
  createDegree,

  Tempo: Tempo,
  Beat: Beat,
  Key: Key,

  Scale: Scale,
  Tuning: Tuning,
  DegreeNote: DegreeNote,
  Degree: Degree

}
