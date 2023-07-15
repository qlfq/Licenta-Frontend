import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useConfigureFormik } from './hooks/use-configure-formik'
import { User } from '../slices/users'

interface Props {
  modalRoom: boolean,
  setModalRoom: (v: boolean) => null,
  directMessageModal: boolean,
  setDirectMessageModal: (v: boolean) => null,
  singleRoom: User,
  setSingleRoom: (v: User) => null
}

const defaultUser: User = {
  id: 0,
  username: '',
}

export const Context = React.createContext<Props>({
  modalRoom: false,
  setModalRoom: () => null,
  directMessageModal: false,
  setDirectMessageModal: () => null,
  singleRoom: defaultUser,
  setSingleRoom: () => null,

})

export const useContext = (): Props => React.useContext(Context)

export const useDefaultValue = () => {
  const [modalRoom, setModalRoom] = useState(false)
  const [directMessageModal, setDirectMessageModal] = useState(false)
  const formik = useFormik<any>(useConfigureFormik())
  const [singleRoom, setSingleRoom] = useState<User>(defaultUser)

  return {
    modalRoom,
    setModalRoom,
    directMessageModal,
    setDirectMessageModal,
    singleRoom,
    setSingleRoom,
    ...formik,
  }
}

export const ContextProvider = ({children}) => <Context.Provider value={useDefaultValue()}>
  {children}
</Context.Provider>
