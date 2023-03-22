import { useEffect, useState } from "react"

const useDebounce = (value:any, delay=500) => {
  const [deboucedValue, setDeboucedValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeboucedValue(value)
    }, delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay])
  
  return deboucedValue
}

export default useDebounce