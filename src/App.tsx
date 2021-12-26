import './App.css'

import data from './Main/data.json'

const App = (): JSX.Element => {
  return (
    <ul>
      {data.list.map((d, i) => {
        const key = `data-${i}`
        return (
          <li key={key}>
            <p className='title'>{d.title}</p>
            <img src={`/images/jjal/${d.url}`} alt='' />
          </li>
        )
      })}
    </ul>
  )
}

export default App
