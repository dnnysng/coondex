import { useState } from 'react'
import CoonCard from './Components/CoonCard'

function App() {
  const [query, setQuery] = useState('')
  const [coon, setCoon] = useState('')
  const [zombie, setZombie] = useState('')

  const searchCoon = async (e) => {
    e.preventDefault();

    if (parseInt(query) < 0) {
      alert('Why you even try this? 😂')
    } else if (parseInt(query) > 10000) {
      alert(`Bruh, there's only 10,000 try again. 😂`)
    } else {
      const coonLink = `https://gateway.ipfs.io/ipfs/QmZRgokt2eqMgA3691wzCWuRY4FQAMT1ZiRrJ1yctfNo4z/${query % 10 === 3 ? parseInt(query) + 10000 : query}`
      const zombieLink = `https://gateway.ipfs.io/ipfs/QmWh6HrDmgWQZaCzUckywNNJNdHa7uSgiNzYUrmc9xzfHz/${query % 10 === 3 ? parseInt(query) + 10000 : query}`

      try {
        const res = await fetch(coonLink)
        const data = await res.json();
        setCoon(data)
      } catch (err) {
        console.error(err)
      }

      try {
        const res2 = await fetch(zombieLink)
        const data2 = await res2.json();
        setZombie(data2)
      } catch (err) {
        console.error(err)
      }
    }

  }

  return (
    <div className="App">
      <form action="" className="form" onSubmit={searchCoon}>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="Enter ID here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Search</button>
      </form>
      {(zombie.image && true) ? (
        <CoonCard
          coonImage={coon.image.replace("ipfs://", "")}
          zombieImage={zombie.image.replace("ipfs://", "")}
          attributes={coon.attributes}
        />
      ) : ""}
    </div>
  );
}

export default App;