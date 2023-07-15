import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useConfigureFormik } from './hooks/use-configure-formik'

interface Props {
  signIn: boolean,
  setSignIn: Function,
}

export const Context = React.createContext<Props>({
  signIn: false,
  setSignIn: () => null,
})

export const useContext = (): Props => React.useContext(Context)

export const useDefaultValue = () => {
  const formik = useFormik<any>(useConfigureFormik())

  return {
    ...formik,
  }
}

export const ContextProvider = ({ children }) => <Context.Provider value={useDefaultValue()}>
  {children}
</Context.Provider>
