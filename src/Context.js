
import { createContext, useEffect, useState } from "react";


export const DataContext = createContext()


export default function Context({ children }) {


    const [Data, setData] = useState(null)

    useEffect(() => {

        fetch('https://gist.githubusercontent.com/hasindusithmin/66844ddfe8500798cbb8610e2345c777/raw/bc201bbf08f9974b951e4990bb184ca9a51605da/projects-categories.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(error => {
                console.error({error:error.message});
            })
    }, [])

    return (
        <DataContext.Provider value={Data}>
            {children}
        </DataContext.Provider>
    )

}