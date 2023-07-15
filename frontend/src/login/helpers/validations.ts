import * as Yup from 'yup'

export const validations = Yup.object().shape({
  username: Yup.string()
    .min(3, 'The username should have at least 3 characters.')
    .max(50, 'The username should not exceed 50 characters.')
    .nonNullable(),
  password: Yup.string()
    .min(3, 'The password should have at least 3 characters.')
    .max(50, 'The password should not exceed 50 characters.')
    .nonNullable()
})
