import {useEffect, useState} from "react"

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
        <>
        <ul className="art-list">
        <li>
        <div className="frame">
            {filteredData.map((art, index) => (
                <div key={index}>
                <ul>
                    <h3>{art.title}</h3>
                    <img src ={url + art.imageURL} />
                    <p>Artist: {art.artist}</p>
                    <ul>
                        <h3>Publication History</h3>
                        <li>{art.publicationHistory[0]}</li>
                        <li>{art.publicationHistory[1]}</li>
                        <li>{art.publicationHistory[2]}</li>
                    </ul>
                </ul>
                </div>
            ))}
    
        </div>
        </li>
        </ul>
        </>

    )
}

export default ArtListItem;