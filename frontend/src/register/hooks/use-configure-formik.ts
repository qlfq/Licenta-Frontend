import { validations } from '../helpers/validations'
import { useSubmit } from './use-submit'

const initialValues = {
  username: '',
  password: '',
  email: '',
}

export const useConfigureFormik = () => ({
  initialValues,
  onSubmit: useSubmit(),
  validationSchema: validations,
})
