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
//# sourceMappingURL=index.d.ts.map