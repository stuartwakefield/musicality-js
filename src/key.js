import Pitch from './pitch';
import Scale from './scale';

function Key(tonic, scale) {
    this.tonic = tonic;
    this.scale = scale;
    this.degrees = scale.intervals.reduce(function (intervals, interval) {
        return intervals.concat(intervals[intervals.length - 1] + interval);
    }, [0]);
}

Key.pitch = function (key, degree) {
    return new Pitch(key.tonic + key.degrees[degree.position], degree.octave);
};

Key.AMIN = new Key(Pitch.A, Scale.MIN);
Key.AMAJ = new Key(Pitch.A, Scale.MAJ);

module.exports = Key;
