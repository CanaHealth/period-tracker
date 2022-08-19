import { useCallback, useEffect, useState } from 'react'

type LocalStorageStateNoInit<T> = [
  value: T | undefined,
  setValue: (value: T | ((oldValue: T | undefined) => T | undefined)) => void,
  isLoading: boolean
]
type LocalStorageStateWithInit<T> = [
  value: T,
  setValue: (value: T | ((oldValue: T) => T)) => void,
  isLoading: boolean
]
export type LocalStorageState<T> =
  | LocalStorageStateNoInit<T>
  | LocalStorageStateWithInit<T>

/**
 *
 * @param key A unique key to store the value in local storage.
 * @param initialValue The initial value to use if there is no value in local storage.
 * @returns
 */
export function useIsomorphicLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): Readonly<LocalStorageStateWithInit<T>>
export function useIsomorphicLocalStorage<T>(
  key: string
): Readonly<LocalStorageStateNoInit<T>>
export function useIsomorphicLocalStorage<T>(
  key: string,
  initialValue?: T | (() => T)
): Readonly<LocalStorageState<T>> {
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState<T | undefined>(initialValue)

  // read from local storage on mount
  useEffect(() => {
    const item = window.localStorage.getItem(key)
    if (item) {
      setValue(JSON.parse(item))
    }
    setIsLoading(false)
  }, [setValue, key])

  const syncValue = useCallback(
    (newValue: T | ((oldVal: T | undefined) => T)) => {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue

      setValue(valueToStore)

      if (valueToStore === undefined) {
        window.localStorage.removeItem(key)
      } else {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    },
    [key, value]
  )

  return [value, syncValue, isLoading] as Readonly<LocalStorageState<T>>
}
