type Flatten<A> = A extends [infer L, ...infer R] ? [...Flatten<L>, ...Flatten<R>] : A extends [] ? [] : [A]
