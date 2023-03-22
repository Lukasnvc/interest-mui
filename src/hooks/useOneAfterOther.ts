import { useEffect, useState } from "react"

const useOneAfterOther = (arr:any, delay = 500) => {
  const [sentence, setSentence] = useState<string>('')

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i === arr.length-1) {
        clearInterval(interval);
      } else {
        setSentence(prevSentence => prevSentence + arr[i] + ' ');
        i++;
      }
      }, delay * 1000);
    return () => clearInterval(interval);
    }, [arr, delay])
  return sentence
  
}

export default useOneAfterOther