const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const curry = function(fn) {
	var arity = fn.length;

	return (function resolver() {
		var memory = Array.prototype.slice.call(arguments);
		return function() {
			var local = memory.slice(), next;

			Array.prototype.push.apply(local, arguments);
			next = local.length >= arity ? fn : resolver;

			return next.apply(null, local);
		};
	}());
};

const map = curry((f, x) => Array.prototype.map.call(x, f));

const filter = curry((f, x) => Array.prototype.filter.call(x, f));

const reduce = curry(function(callback, initialValue, array) {
	var working = initialValue, i;

	for(i = 0; i < array.length; i = i + 1) {
		working = callback(working, array[i]);
	}
	return working;
});

const trace = curry(function(tag, x) {
	console.log(tag, x);
	return x;
});

export {
	pipe,
	curry,
	map,
	reduce,
	filter,
	trace
};
