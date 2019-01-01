var musicality = require('./');
var Tuning = musicality.Tuning;
var Pitch = musicality.Pitch;
var Degree = musicality.Degree;
var Beat = musicality.Beat;
var fns = require('./fns');
var oscillate = fns.oscillate;
var playDegrees = fns.playDegrees;
var app = document.querySelector('.app');

var AudioContext = (window.AudioContext || window.webkitAudioContext);
var context = new AudioContext();

function createOutputGainAt(context, value) {
  var gain = context.createGain();
  gain.gain.value = value;
  gain.connect(context.destination);
  return gain;
}

var osc1 = oscillate('triangle', context, createOutputGainAt(context, 0.08));
var osc2 = oscillate('square', context, createOutputGainAt(context, 0.08));
var osc3 = oscillate('sawtooth', context, createOutputGainAt(context, 0.08));

var detuned1 = new Tuning(new Pitch(Pitch.E, 4), 432);
var detuned2 = new Tuning(new Pitch(Pitch.A, 5), 445);

var tempo = musicality.createTempo(musicality.Beat.CROTCHET, 200);
var tuning = musicality.Tuning.A440;
var key = musicality.createKey(musicality.Pitch.CSHARP, musicality.Scale.DORIAN); // A - Major

// var melodyDegrees = [
//     new DegreeNote(new Degree(Degree.ROOT, 4), Beat.QUAVER),
//     new DegreeNote(new Degree(Degree.SECOND, 4), Beat.QUAVER),
//     new DegreeNote(new Degree(Degree.ROOT, 5), Beat.QUAVER),
//     new DegreeNote(new Degree(Degree.SECOND, 5), Beat.QUAVER),
//     new DegreeNote(new Degree(Degree.FIFTH, 4), Beat.SEMIQUAVER),
//     new DegreeNote(new Degree(Degree.THIRD, 4), Beat.SEMIQUAVER),
//     new DegreeNote(new Degree(Degree.ROOT, 4), Beat.SEMIQUAVER),
//     new DegreeNote(new Degree(Degree.THIRD, 4), Beat.SEMIQUAVER),
//     new DegreeNote(new Degree(Degree.FIFTH, 4), Beat.CROTCHET),
//     new DegreeNote(new Degree(Degree.ROOT, 5), Beat.CROTCHET),
//     new DegreeNote(new Degree(Degree.FIFTH, 4), Beat.CROTCHET),
//     new DegreeNote(new Degree(Degree.ROOT, 5), Beat.MINIM)
// ];

// var synth = synthesizer.oscillator('triangle');

// var part = musicality.part()
//     .degrees()
//         .root(4).quaver().then
//         .second(4).quaver().then
//         .third(4).quaver().then
//         .fourth(4).quaver().then
//         .fifth(4).quaver().then
//         .sixth(4).quaver().then
//         .seventh(4).quaver().then
//         .root(5).quaver();

// synth.play(
//     part
//         .key().pitch('C#').scale().altered()
//         .tempo().crotchet(120)
//         .tuning().a440()
// );

// musicality.note()
    // .atDegree('R')
    // .atOctive(4)
    // .ofLength(0.5)

// import { note, R, QUAVER } from 'musicality'
//
// note({
//   degree: R,
//   octave: 4,
//   length: QUAVER
// })

// note is a builder? How to decide how to partially apply...
// is there combinatorial complexity in this? we need to map
// the requirements backwards, i.e. what information is required
// to print the music, what information is required to play the
// music? We also need to map out independence, i.e. tuning only
// affects a note if it needs to be turned into a frequency. Then
// we also have the case of default implementations, if no tuning
// is provided, we want to use standard A440. For example.
// note.degree(R).octave(4).duration(QUAVER)
// note.octave(4).degree(R).duration(QUAVER)
// note.duration(QUAVER).octave(4).degree(R)

// note(R, 4, QUAVER)
// note(A, 5, CROTCHET)

var scaleDegrees = [
    musicality.createDegreeNote(musicality.createDegree(Degree.ROOT, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.SECOND, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.THIRD, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.FOURTH, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.FIFTH, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.SIXTH, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.SEVENTH, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.ROOT, 5), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.SEVENTH, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.SIXTH, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.FIFTH, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.FOURTH, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.THIRD, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.SECOND, 4), Beat.QUAVER),
    musicality.createDegreeNote(musicality.createDegree(Degree.ROOT, 4), Beat.BREVE)
]

// var melody = [
//     new Note(new Pitch(Pitch.A, 4), Beat.CROTCHET),
//     new Note(new Pitch(Pitch.A, 5), Beat.CROTCHET),
//     new Note(new Pitch(Pitch.E, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.A, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.E, 4), Beat.CROTCHET),

//     new Note(new Pitch(Pitch.A, 5), Beat.CROTCHET),
//     new Note(new Pitch(Pitch.E, 4), Beat.CROTCHET),
//     new Note(new Pitch(Pitch.A, 5), Beat.MINIM),
// ];

// var harmony = [
//     new Note(new Pitch(Pitch.A, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.A, 5), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.E, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.A, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.E, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),

//     new Note(new Pitch(Pitch.A, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.A, 5), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.E, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.A, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.E, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),

//     new Note(new Pitch(Pitch.A, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.A, 5), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.E, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.A, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.E, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),

//     new Note(new Pitch(Pitch.A, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.A, 5), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.E, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.A, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.E, 4), Beat.SEMIQUAVER),
//     new Note(new Pitch(Pitch.CSHARP, 4), Beat.SEMIQUAVER),
// ];

// var bass = [
//     new Note(new Pitch(Pitch.A, 2), Beat.MINIM),
//     new Note(new Pitch(Pitch.E, 1), Beat.MINIM),
//     new Note(new Pitch(Pitch.CSHARP, 2), Beat.MINIM),
//     new Note(new Pitch(Pitch.A, 2), Beat.MINIM)
// ];

playDegrees(osc1, scaleDegrees, key, tempo, tuning);
playDegrees(osc2, scaleDegrees, key, tempo, detuned1);
playDegrees(osc3, scaleDegrees, key, tempo, detuned2);
// playDegrees(oscillate('sawtooth', context, gain), melodyDegrees, key, tempo, tuning);
// playNotes(oscillate('sawtooth', context, gain), melody, tempo, tuning);
// playNotes(oscillate('square', context, gain), bass, tempo, tuning);
// playNotes(oscillate('sine', context, gain), harmony, tempo, tuning);
