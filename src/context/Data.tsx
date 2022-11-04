import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react'

import { flowData } from '@/components/period/flowData/utils'

type state = [flowData, Dispatch<SetStateAction<flowData>>]

// eslint-disable-next-line @typescript-eslint/no-empty-function
const initialValue: state = [{}, () => {}]

export const Data = createContext(initialValue)

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState({})
  const value = { state, setState }

  return <Data.Provider value={value}>{children}</Data.Provider>
}
