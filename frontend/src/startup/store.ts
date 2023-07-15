import AsyncStorage from '@react-native-async-storage/async-storage'
import { createEpicMiddleware } from 'redux-observable'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { rootReducers } from './root-reducers'
import { rootEpics } from './root-epics'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const epicMiddleware = createEpicMiddleware()
const middlewareConfig = { serializableCheck: false }

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(middlewareConfig).concat(epicMiddleware),
  reducer: rootReducers
  },
  epicMiddleware,
)

epicMiddleware.run(rootEpics)

// export const persistor = persistStore(store)
