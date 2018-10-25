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
            if (this[this.length - pos])
                return this.sort()[this.length - pos];
            else
                return null;
        }
    }

    //to find frequency of elements of array
    var frequency = function () {
        if (this.length === 0)
            return {};
        else {
            return this.reduce((obj, item) => {
                if (obj[item]) {
                    obj[item] += 1;
                }
                else {
                    obj[item] = 1;
                }
                return obj;
            }, {})
        }
    }


    //to find gcd of elements of array
    var gcdOfTwo = function (a, b) {
        if (b == 0)
            return a;
        return gcdOfTwo(b, a % b);
    }

    var gcd = function () {
        if (this.length === 0)
            return 0;

        else if (!this.every((i) => typeof i === 'number'))
            return 0;

        else {
            var gcd = 0;
            this.forEach((i) => {
                gcd = gcdOfTwo(gcd, i);
            })
            return gcd;
        }
    }


    Array.prototype.sum = sum;
    Array.prototype.multiply = multiply;
    Array.prototype.min = min;
    Array.prototype.max = max;
    Array.prototype.frequency = frequency;
    Array.prototype.gcd = gcd;

} ())