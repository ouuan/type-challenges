type DeepReadonly<T> = T extends object ? T extends Function ? T : {
  readonly [key in keyof T]: DeepReadonly<T[key]>;
} : T
