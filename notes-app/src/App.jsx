import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [arr, setArr] = useState([]);
  const addItems = (e) => {
    e.preventDefault();
    setArr(prev => [...prev, { title, content }]);
    setTitle('');
    setContent('');
  }
  return (
    <div className='h-full bg-black text-white'>
      <h1 className='flex items-center text-4xl justify-center font-bold p-7'>NOTES APP BY KRISHAN</h1>
      <div className='flex justify-between p-10'>
        <div>
          <img src="https://imgs.search.brave.com/mO_Nk44TszdUL_SlsoZlEm1ulGUw8bfrB2-0l7X2da8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MzQ2LzYxOC9zbWFs/bC9wZXJzb24td3Jp/dGluZy1pbi1hLW5v/dGVib29rLWZvY3Vz/aW5nLW9uLXRha2lu/Zy1ub3Rlcy1hbmQt/b3JnYW5pemluZy10/aG91Z2h0cy1wbmcu/cG5n" alt="" className='w-full rounded-full mt-4' />
        </div>
        <div className='w-2/3'>
          <form className='flex flex-col items-start gap-5  justify-between p-10' onSubmit={function (e, val1, val2) {
            addItems(e);
          }}>
            <input type="text" placeholder='Enter Notes Heading' className='w-full px-5 py-2 border-5 rounded font-bold outline-0' value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <input type="text" className='h-50 w-full px-5 py-2 border-5 rounded font-bold outline-0' placeholder='Enter details' value={content} onChange={(e) => { setContent(e.target.value) }} />
            <button className='px-5 py-2 bg-white w-full  text-black rounded '>
              Add Your Note
            </button>
          </form>
        </div>
      </div>
      <h1 className='h-10 text-5xl font-extrabold items-center'>
        Recent Tasks
      </h1>
      <div className='flex flex-wrap gap-5 p-5'>
        {arr.map(function (elem, idx) {
          return <Card
            key={idx}
            title={elem.title}
            content={elem.content} />
        })}
      </div>
    </div>
  )
}

export default App