import './App.scss'
import data from './Main/data.json'

const App = (): JSX.Element => {
  return (
    <>
      <input type='text' placeholder='검색어를 입력해주세요' />
      <button type='button'>검색</button>
      <ul>
        {data.list.map((d, i) => {
          const key = `data-${i}`
          return (
            <li key={key}>
              <p className='title'>{d.title}</p>
              <img src={`/images/jjal/${d.url}`} alt={d.title} />
              <p className='tag'>{d.tags.map((tag) => `#${tag} `)}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
