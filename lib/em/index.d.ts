export default function ObjectIterator(object: any): (string[] | {
    [Symbol.iterator]: () => {
        next: () => {
            value: any;
            done: boolean;
        } | {
            done: boolean;
            value?: undefined;
        };
    };
})[];
export declare function asyncObjectIterator(object: any): (string[] | AsyncGenerator<any, void, unknown>)[];
//# sourceMappingURL=index.d.ts.map