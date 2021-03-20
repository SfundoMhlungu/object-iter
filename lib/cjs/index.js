"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ObjectIterator(object) {
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
exports.default = ObjectIterator;
// alternate
// export default function ObjectIterator(object: any){
//     let keys:Array<string> = Object.keys(object);
//     let len:number = keys.length;
//     let index: number = 0;
//     function* iter(){
//         while(true){
//             if(len === index) return;
//             let key:string = keys[index];
//             index++;
//             yield object[key]
//         }
//     }
//     let iterobj = iter()
//     return [iterobj, keys]
// }
//# sourceMappingURL=index.js.map