// Long answer:
// type Helper<T, U> = {
//   [key in T as key extends U ? never : string]: key;
// }
// type MyExclude<T, U> = Helper<T, U>[keyof Helper<T, U>]

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
type MyExclude<T, U> = T extends U ? never : T
