module.exports = {
    isPangram: function(N) {
        if(N.length < 26) return 0;
        var pangram = N.toLowerCase();
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        var letterPresent = alphabet.split('')
                .map((letter) => {
                    if(pangram.indexOf(letter) !== -1) {
                        return true;
                    } else {
                        return false;
                    }
                    });
        var isPangram = letterPresent.indexOf(false) === -1;
        return isPangram ? 1: 0;
    }
}