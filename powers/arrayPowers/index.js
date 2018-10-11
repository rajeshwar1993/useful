(function () {

    //to find sum of array: will only work if all are numbers, will skip all others
    var sum = function (initial, shouldConvertToNumber) {
        return this.reduce((a, i) => {
            if (typeof i === "number" && !isNaN(i))
                return a += i;
            else {
                if (shouldConvertToNumber)
                    return a += parseFloat(i)
                else
                    return a;
            }
        }, initial || 0)
    }


    //to find sum of array: will only work if all are numbers, will skip all others
    var multiply = function (initial, shouldConvertToNumber) {
        return this.reduce((a, i) => {
            if (typeof i === "number" && !isNaN(i))
                return a *= i;
            else {
                if (shouldConvertToNumber)
                    return a *= parseFloat(i)
                else
                    return a;
            }
        }, initial || 1)
    }

    //to find minimum of array: will only work if all are numbers, or string with only numbers
    var min = function (pos) {
        if (this.length === 0)
            return Infinity;
        else if (!pos)
            return Math.min(...this);
        else {
            if (this[pos - 1])
                return this.sort()[pos - 1];
            else
                return null;
        }
    }


    //to find maximum of array: will only work if all are numbers, or string with only numbers
    var max = function (pos) {
        if (this.length === 0)
            return -Infinity;
        else if (!pos)
            return Math.max(...this);
        else {
            if (this[length - pos])
                return this.sort()[length - pos];
            else
                return null;
        }
    }


    Array.prototype.sum = sum;
    Array.prototype.multiply = multiply;
    Array.prototype.min = min;
    Array.prototype.max = max;


} ())