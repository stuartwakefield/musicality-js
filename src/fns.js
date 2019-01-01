var WaveSegment = require('./wave-segment');
var Note = require('./note');
var Key = require('./key');
var Tuning = require('./tuning');
var Tempo = require('./tempo');

var playSegments = exports.playSegments = function playSegments(fn, segments) {
    segments.reduce(function (start, segment) {
        var end = start + segment.duration;
        fn(segment.frequency, segment.duration, start);
        return end;
    }, 0);
}

var playNotes = exports.playNotes = function playNotes(fn, notes, tempo, tuning) {
    playSegments(fn, notes.map(function (note) {
        return new WaveSegment(Tuning.frequency(tuning, note.pitch), Tempo.duration(tempo, note.beat));
    }));
}

exports.playDegrees = function playDegrees(fn, degrees, key, tempo, tuning) {
    playNotes(fn, degrees.map(function (note) {
        return new Note(Key.pitch(key, note.degree), note.beat);
    }), tempo, tuning);
}

exports.oscillate = function oscillate(type, context, destination) {
    return function (frequency, duration, offset) {
        var oscillator = context.createOscillator();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        oscillator.connect(destination);
        oscillator.start(context.currentTime + (offset || 0)/1000);
        oscillator.stop(context.currentTime + (offset || 0)/1000 + duration/1000);
    };
}
