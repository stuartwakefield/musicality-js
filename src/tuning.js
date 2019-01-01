import Pitch from './pitch'

function Tuning(pitch, frequency) {
    this.pitch = pitch;
    this.frequency = frequency;
}

Tuning.frequency = function frequency(tuning, pitch) {

    var o = pitch.octave - tuning.pitch.octave;
    var n = 12*o + pitch.note - tuning.pitch.note;

    return tuning.frequency * Math.pow(2, n/12);

};

// 17 ET Math.pow(2, n/17)
// 34 ET Math.pow(2, n/34)

Tuning.A440 = new Tuning(new Pitch(Pitch.A, 4), 440);

module.exports = Tuning;
