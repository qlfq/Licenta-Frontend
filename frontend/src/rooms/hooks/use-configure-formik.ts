import { validations } from '../helpers/validations'
import { useCreateRoom } from './use-create-room'

const initialValues = {
  name: '',
  persons: [],
  isOpen: false,
}

export const useConfigureFormik = () => ({
  initialValues,
  onSubmit: useCreateRoom(),
  validationSchema: validations,
})
