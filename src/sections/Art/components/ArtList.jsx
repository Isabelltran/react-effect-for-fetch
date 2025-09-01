import ArtListItem from "./ArtListItem"

function ArtList({art, url}) {

    return (
        <div className = "scroll-container">
            <ArtListItem art = {art} url = {url} />
        </div>
        
    )
}

export default ArtList;