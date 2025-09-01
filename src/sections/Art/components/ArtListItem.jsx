import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({art, url}) { 

    return (
        <>
        <ul className="art-list">
        <li>
            <div className="frame">
            <img
                src={url + art.imageURL}
            />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
            <PublicationHistoryList art={art}/>
        </li>
        </ul>
        </>

    )
}

export default ArtListItem;