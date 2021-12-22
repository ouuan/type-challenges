type AppendToObject<T, U extends string, V> = {
  [index in (U | keyof T)]: index extends U ? V : index extends keyof T ? T[index] : never
}
