import { useState } from 'react'
import './App.scss'
import Masonry from 'react-masonry-css'
import data from './Main/data.json'
import doooughLogo from './assets/images/dooough_logo.svg'
import search from './assets/images/search.svg'

const App = (): JSX.Element => {
  // input value
  const [inputValue, setInputValue] = useState('')

  // search input keypress event handler
  const inputHandler = (event: any) => {}

  // search input value handler
  const inputValueHandler = (event: any) => {
    setInputValue(event.target.value)
  }

  // search button handler
  const searchHandler = () => {}

  // Masonry
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <>
      <h1>
        <img src={doooughLogo} alt='Dooough' />
        <span>D’ooough,,!</span>
      </h1>
      <div className='search_container'>
        <input
          type='text'
          className='search_input'
          placeholder='검색어를 입력해주세요'
          onKeyPress={inputHandler}
          onChange={inputValueHandler}
        />
        <button type='button' className='search_button' onClick={searchHandler}>
          <img src={search} alt='검색' />
        </button>
      </div>
      <ul>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {data.list.map((d, i) => {
            const key = `data-${i}`
            return (
              <li key={key}>
                <div className='image_area'>
                  <p className='tag'>{d.tags.map((tag) => `#${tag} `)}</p>
                  <img src={`/images/jjal/${d.url}`} alt={d.title} title={d.title} />
                </div>
                <div className='speech_bubble'>
                  <p className='title'>{d.title}</p>
                </div>
              </li>
            )
          })}
        </Masonry>
      </ul>
    </>
  )
}

export default App
