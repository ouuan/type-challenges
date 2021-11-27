type Awaited<T extends Promise<any>> = T extends Promise<infer U> ? (U extends Promise<any> ? Awaited<U> : U) : never
