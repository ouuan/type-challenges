type LengthOfString<S extends string, T extends null[] = []> = S extends `${string}${infer R}` ? LengthOfString<R, [...T, null]> : T['length']
