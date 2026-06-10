function createEnumObject<T extends string>(array: readonly T[]): { [K in T]: K } {
  const accumulator = {} as { [K in T]: K }
  for (const current of array) {
    accumulator[current] = current
  }
  return accumulator
}

export const GenderEnumValues = ['Man', 'Woman'] as const
export const GenderEnum = createEnumObject(GenderEnumValues)
export type GenderEnum = (typeof GenderEnumValues)[number]
