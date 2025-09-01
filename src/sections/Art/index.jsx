import {useEffect, useState} from "react"
import ArtList from "./components/ArtList";

function ArtListItem() {

    const url = "https://boolean-uk-api-server.fly.dev";

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);   

    useEffect(() => {
        const fetchData = async () => {
            const reponse = await fetch(url+"/art");
            const jsonData = await reponse.json();
            setData(jsonData);
            setFilteredData(jsonData);
        };
        fetchData();
    }, []);

    return (
        <section>
        <h2>Arts Section</h2>
        {filteredData.map((art, index) => (
          <ArtList key = {index} art = {art} url = {url}/>
        ))}
      </section>

    )
}

export default ArtListItem;