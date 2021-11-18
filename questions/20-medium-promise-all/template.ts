declare function PromiseAll<T extends readonly unknown[]>(values: readonly [...T]): Promise<{ [key in keyof T]: T[key] extends Promise<infer U> ? U : T[key]; }>
