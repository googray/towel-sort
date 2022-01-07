// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        let aRR = [];
        if (matrix.length === 0) return aRR;
        matrix.map((ar, i) => {
            i % 2 === 1 ? aRR.push(ar.reverse()) : aRR.push(ar);
        });
        return aRR.flat();
    }
};
