

import { DataContext } from "../Context"
import { useContext } from "react"
import { Helmet } from 'react-helmet';
import Card from "./Card";

export default function API() {

    const data = useContext(DataContext)
    
  
    return (
        <>
            <Helmet>
                <title>Hasindu | APIs</title>
                <meta name="description" content="Hasindu Sithmin's API related projects" />
            </Helmet>
            <div className="w3-content w3-section w3-padding">
                <div className="w3-center w3-padding-large">
                    <img className="w3-image" alt="API" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain-wordmark.svg" width="150" height="150" />
                </div>
                {
                    data &&
                    data['API'].map((description) => <Card key={Math.random()} description={description} />)
                }
            </div>
        </>
    )
}