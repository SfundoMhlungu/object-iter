var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
export default function ObjectIterator(object) {
    let keys = Object.keys(object);
    let len = keys.length;
    let index = 0;
    let obj = {
        [Symbol.iterator]: () => {
            return {
                next: () => {
                    if (len > 0) {
                        let key = keys[index];
                        index++;
                        len--;
                        return {
                            value: object[key],
                            done: false
                        };
                    }
                    return { done: true };
                }
            };
        }
    };
    return [obj, keys];
}
// async iterator
export function asyncObjectIterator(object) {
    let keys = Object.keys(object);
    let len = keys.length;
    let index = 0;
    function iter() {
        return __asyncGenerator(this, arguments, function* iter_1() {
            while (true) {
                if (len === index)
                    return yield __await(void 0);
                let key = keys[index];
                index++;
                yield yield __await(object[key]);
            }
        });
    }
    let iterobj = iter();
    return [iterobj, keys];
}
//# sourceMappingURL=index.js.map