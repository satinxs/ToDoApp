import { useState } from 'react';

export const nanoid = () => [...crypto.getRandomValues(new Uint32Array(4))].map(c => c.toString(16)).join('-');

export const clone = v => JSON.parse(JSON.stringify(v));

export const makeObservable = (initialValue) => {
    const [value, set] = useState(initialValue);

    return {
        value,
        set,
        delete: () => set(clone(initialValue))
    };
};