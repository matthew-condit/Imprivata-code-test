module.exports = {
    mergeArrays: function(a, b, M) {
        // int[] a, int[] b, int M
        //Merges sorted arrays a & b such that result is also sorted.
        return [];
    },
    mergeArraysFunctional: function(a, b) {
        var c = [],
            j =0,
            k = 0,
            alen = a.length,
            blen = b.length,
            aval = a[j],
            bval = b[k];
        while (j !== alen || k !== blen) {
            if (aval > bval) {
                c.push(bval);
                bval = b[++k] || Infinity;
            }
            else if (bval > aval) {
                c.push(aval);
                aval = a[++j] || Infinity;
            }
            else if (bval === aval) {
                c.push(aval);
                c.push(bval);
                aval = a[++j] || Infinity;
                bval = b[++k] || Infinity;
            }
        };
        return c;
    }
}