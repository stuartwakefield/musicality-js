function Tempo(beat, bpm) {
    this.beat = beat;
    this.bpm = bpm;
}

Tempo.bpm = function (tempo, beat) {

    var n = (beat.numerator / tempo.beat.numerator);
    var d = (beat.divisor / tempo.beat.divisor);

    return tempo.bpm / n * d;
};

Tempo.duration = function (tempo, beat) {
    return 60/Tempo.bpm(tempo, beat) * 1000;
}

module.exports = Tempo;
