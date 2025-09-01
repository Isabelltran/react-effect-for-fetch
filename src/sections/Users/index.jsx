import { useEffect, useState } from 'react'
import UsersListItem from './components/UsersListItem';

function UsersSection() {

  const url = "https://boolean-uk-api-server.fly.dev/isabelltran/contact";

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    };
    fetchData();  
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      {filteredData.map((user, index) => (
        <UsersListItem key={index} user={user} />
      ))}
    </section>
  )
}

export default UsersSection
