type Last<T extends unknown[]> = T extends [...infer _, infer R] ? R : never
