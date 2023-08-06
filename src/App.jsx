import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
     <Header value = {searchValue} setValue = {searchValue} />
     <Main/>
    </>
  )
}

export default App
