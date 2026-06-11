export const GenderEnum = ['Man', 'Woman'] as const
export type GenderEnum = (typeof GenderEnum)[number]
