function PublicationHistoryList({art}) {
    return (
        <>
            <h4>Publication History:</h4>
            <ul>
            <li>{art.publicationHistory[0]}</li>
            <li>{art.publicationHistory[1]}</li>
            <li>{art.publicationHistory[2]}</li>
            </ul>
        </>
    )
}


export default PublicationHistoryList;