

import { DataContext } from "../Context"
import { useContext } from "react"
import { Helmet } from 'react-helmet';
import Card from "./Card";

export default function Next() {

    const data = useContext(DataContext)
    
  
    return (
        <>
            <Helmet>
                <title>Hasindu | Next.js</title>
                <meta name="description" content="Hasindu Sithmin's Next.js projects" />
            </Helmet>
            <div className="w3-content w3-section w3-padding">
                <div className="w3-center w3-padding-large">
                    <img className="w3-image" alt="Next" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="150" height="150" />
                </div>
                {
                    data &&
                    data['Next'].map((description) => <Card key={Math.random()} description={description} />)
                }
            </div>
        </>
    )
}