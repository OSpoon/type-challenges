type NOT_EQUAL_INTERNAL<VALUE, EXPECTED> = UnionToIntersection<VALUE> extends UnionToIntersection<EXPECTED>
  ? UnionToIntersection<EXPECTED> extends UnionToIntersection<VALUE>
    ? false
    : true
  : true

export type Expect<T extends true> = T
export type ExpectTrue<T extends true> = T
export type ExpectFalse<T extends false> = T

export type NotEqual<VALUE, EXPECTED> = true extends NOT_EQUAL_INTERNAL<VALUE, EXPECTED> ? true : false
export type Equal<VALUE extends EXPECTED, EXPECTED> = NotEqual<VALUE, EXPECTED> extends false ? true : false

export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false
export type ExpectValidArgs<FUNC extends (...args: any[]) => any, ARGS extends any[]> = ARGS extends Parameters<FUNC>
  ? true
  : false

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
