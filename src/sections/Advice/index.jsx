import { useEffect, useState } from "react"
import FavouriteSlipsList from "./components/FavouriteSlipsList";
import AdviceSlip from "./components/AdviceSlip";

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [random, setRandom] = useState("");
  const [favourites, setFavourites] = useState([]);

    
    const fetchData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setRandom(jsonData);
    };
    useEffect(() => {
    fetchData();
      }, []);

    const handleAddFavourites = () => {
      if (random && random.slip ){
        if (!favourites.some(fav => fav.id === random.slip.id)) {
          setFavourites([...favourites, random.slip]);
      }
    }
  }
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip random={random} fetchData={fetchData} handleAddFavourites={handleAddFavourites} />
      <FavouriteSlipsList favourites={favourites} />
    </section>
  )
}

export default AdviceSection
