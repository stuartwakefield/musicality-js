function Scale(intervals) {
    this.intervals = intervals;
}

// Chromatic scale
Scale.CHROMATIC = new Scale([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

// Octatonic scales


// Heptatonic scales
Scale.MAJ = Scale.MAJOR = Scale.IONIAN = new Scale([2, 2, 1, 2, 2, 2]);
Scale.DORIAN = new Scale([2, 1, 2, 2, 2, 1]);
Scale.PHRYGIAN = new Scale([1, 2, 2, 2, 1, 2]);
Scale.LYDIAN = new Scale([2, 2, 2, 1, 2, 2]);
Scale.MIXOLYDIAN = new Scale([2, 2, 1, 2, 2, 1]);
Scale.MIN = Scale.MINOR = Scale.AEOLIAN = new Scale([2, 1, 2, 2, 1, 2]);
Scale.LOCRIAN = new Scale([1, 2, 2, 1, 2, 2]);
Scale.ACOUSTIC = new Scale([2, 2, 2, 1, 2, 1]);
Scale.ALGERIAN = new Scale([2, 1, 3, 1, 1, 3]);
Scale.ALTERED = new Scale([1, 2, 1, 2, 2, 2]);

// Hexatonic

// Pentatonic

// Tetratonic

// Tritonic

// Ditonic

// Monotonic

module.exports = Scale;
