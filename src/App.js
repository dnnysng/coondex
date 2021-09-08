import { useState } from 'react'
import CoonCard from './Components/CoonCard'

function App() {
  const [query, setQuery] = useState('')
  const [coon, setCoon] = useState('')

  const searchCoon = async (e) => {
    e.preventDefault();

    const url = `https://gateway.ipfs.io/ipfs/QmZRgokt2eqMgA3691wzCWuRY4FQAMT1ZiRrJ1yctfNo4z/${query}`

    try {
      const res = await fetch(url)
      const data = await res.json();
      setCoon(data)
    } catch (err) {
      console.error(err)
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
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Submit</button>
      </form>
      {coon.image && true ? (
        <CoonCard
          image={coon.image.replace("ipfs://", "")}
          attributes={coon.attributes}
        />
      ) : ""}
    </div>
  );
}

export default App;