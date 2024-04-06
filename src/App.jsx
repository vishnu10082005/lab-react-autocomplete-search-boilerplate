import React, { useState } from 'react'
import countryData from './resources/countryData.json'

const App = () => {

  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(true)

  const searchHandler= (e)=>{
    setSearch(e.target.value)
    setDropdown(true)
  }

  const escapeHandler = (e)=>{
    if(e.code == 'Escape'){
      setDropdown(false)
      console.log('Escape')
    }
  }
  const countries = countryData.filter((country)=>country.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))

  return (
      <div className='main'>
        <div className='left'>
            <input type="text" placeholder='Search Here...' onChange={searchHandler} onKeyDown={escapeHandler}/>
            {search && dropdown&& countries.length !==0 && <select size={countries.length}>
              {countries.map((country, i)=>{
                return <option key={i} value={country.name}>{country.name}</option>
              })}
              </select>}
        </div>
        <button type='submit'>Search</button>
      </div>
  )
}

export default App
