type Permutation<T, K = T> = [T] extends [never] ? [] : T extends T ? [T, ...Permutation<Exclude<K, T>>] : []

// `[T] extends [never]` checks that T is never, while `T extends never` does not
// `T extends T` iterates in T, and then T becomes one of the original T so we need K as the original T
