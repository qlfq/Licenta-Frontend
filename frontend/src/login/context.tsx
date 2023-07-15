import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useConfigureFormik } from './hooks/use-configure-formik'

export const Context = React.createContext({})

export const useContext = () => React.useContext(Context)

export const useDefaultValue = () => {
  const formik = useFormik<any>(useConfigureFormik())

  return {
    ...formik,
  }
}

export const ContextProvider = ({ children }) => <Context.Provider value={useDefaultValue()}>
  {children}
</Context.Provider>
