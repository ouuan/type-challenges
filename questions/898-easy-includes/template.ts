type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

// type Includes<T extends readonly any[], U> = true extends {
//   [index in keyof T]: Equal<T[index], U>;
// }[number] ? true : false

type Includes<T extends readonly unknown[], U> = T extends [infer L, ...infer R] ? (Equal<L, U> extends true ? true : Includes<R, U>) : false
