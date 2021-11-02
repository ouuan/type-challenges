type First<T extends any[]> = T extends { 0: T[0] } ? T[0] : never
