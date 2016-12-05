module.exports = {
    jumpingJack: function(N, K) {
        var firstStep = true;
        var sum = 0;
        for (var i = 1; i<= N; i++) {
            sum += i;
            if (sum === K) {
                firstStep = false;
            }
        };
        if (!firstStep) sum--;
        return sum;
    }
}