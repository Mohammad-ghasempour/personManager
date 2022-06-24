import { FC } from "react"

interface Iprops {
    link:string,
    PI: number
}

export const ShowVideo = ({link , PI}: Iprops)=>{

    return <> 
    
    <img src={link} alt="Click to load a picture"/>
    the number of PI is approximately: <h3>{PI}</h3>
    </>
}