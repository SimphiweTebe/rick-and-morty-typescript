import { useEffect } from 'react'

function useScrollTop() {
    useEffect(()=>{
        window.scrollTo(0,0);
    })
  return true
}

export default useScrollTop