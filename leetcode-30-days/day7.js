/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        now = x;
        for (i = functions.length - 1; i > -1; i--) {
            now = functions[i](now);
        }
        return now;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */