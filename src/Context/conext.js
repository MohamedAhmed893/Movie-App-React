import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let populerThings=createContext(0)

export function PopularContextProvider(props){
    
    let [TrandingMovie, setTrandingMovie] = useState([])
    let [TrandingTv, setTrandingTv] = useState([])
    let [TrandingPeople, setTrandingPeople] = useState([])
  
    async function getTrandingData(trend, callBack) {
      let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${trend}/week?api_key=cf6e1e93ce151ae9136d1dd00b931342`)
      callBack(data.results.slice(0, 10))
    }
  
    useEffect(() => {
      getTrandingData('movie', setTrandingMovie)
      getTrandingData('tv', setTrandingTv)
      getTrandingData('person', setTrandingPeople)
    }, [])
    return <populerThings.Provider value={{TrandingMovie ,TrandingPeople ,TrandingTv}}>
        {props.children}
    </populerThings.Provider>
}