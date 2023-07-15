import * as Yup from 'yup'

export const validations = Yup.object().shape({
  name: Yup.string()
    .min(3, 'The username should have at least 3 characters.')
    .max(50, 'The username should not exceed 50 characters.')
    .nonNullable(),
  isOpen: Yup.boolean(),
})
