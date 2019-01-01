function Beat(numerator, divisor) {
    this.numerator = numerator;
    this.divisor = divisor;
}

Beat.BREVE = new Beat(2, 1);
Beat.SEMIBREVE = new Beat(1, 1);
Beat.MINIM = new Beat(1, 2);
Beat.CROTCHET = new Beat(1, 4);
Beat.QUAVER = new Beat(1, 8);
Beat.SEMIQUAVER = new Beat(1, 16);
Beat.DEMISEMIQUAVER = new Beat(1, 32);
Beat.HEMIDEMISEMIQUAVER = new Beat(1, 64);

module.exports = Beat;
