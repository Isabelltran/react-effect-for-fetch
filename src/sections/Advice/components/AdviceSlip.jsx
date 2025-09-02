function AdviceSlip({random, fetchData, handleAddFavourites}) {
    return (    
        <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{random && random.slip ? random.slip.advice : "Loading..."}</p>
        <button onClick={fetchData}>Get More Advice</button>
        <button onClick={handleAddFavourites}>Save to Favourties</button>
      </section>
        
    )
}


export default AdviceSlip;