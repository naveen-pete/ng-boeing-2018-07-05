function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            (function (x) {
                return function () {
                    console.log(x);
                };
            })(i)
        )

    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// 0, 1, 2
// 2, 2, 2

// IIFE
// (function (x) {
//     console.log('hi:', x);
// }(10));