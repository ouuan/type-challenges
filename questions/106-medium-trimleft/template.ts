type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer T}` ? TrimLeft<T> : S
