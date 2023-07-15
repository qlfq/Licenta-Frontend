import React, { forwardRef } from 'react'
import SnackbarComponent from 'react-native-flash-message'

export const Snackbar = forwardRef((props, ref) => <SnackbarComponent ref={ref} position="top" />)
