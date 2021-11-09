type MyParameters<T extends (...args: never[]) => void> = T extends (...args: infer A) => void ? A : never
