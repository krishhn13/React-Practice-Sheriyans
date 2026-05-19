import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState(["No Data Available"])

  const [idx, setIdx] = useState(1);

  const prevPage = () => {
    if (idx > 1) {
      console.log("Page Going back")
      setIdx(idx - 1);
    }
  }
  const nextPage = () => {
    console.log("Page Rendering Start");
    setIdx(idx + 1);
  }

  const helloData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${idx}&limit=30`
      )

      console.log(response.data)

      setUserData(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    helloData();
  }, [idx])

  return (
    <div className='min-h-screen bg-black text-white font-bold'>
      <div className='flex gap-5 flex-wrap p-10'>
        {userData.map((elem) => {
          return (
            <div key={elem.id}>
              <a href={elem.url} target='_blank'>
                <img
                  src={`https://picsum.photos/id/${elem.id}/300/300`}
                  alt=""
                  className='h-40 w-50 object-cover rounded'
                />
                <h1>
                  {elem.author}
                </h1>
              </a>
            </div>
          )
        })}

      </div>
      <div className='text-sm text-black gap-4 flex justify-center items-center'>
        <button className='bg-amber-500 px-5 py-2 rounded active:scale-90 cursor-pointer' onClick={prevPage}>
          Prev
        </button>
        <h4 className='text-white'> Page {idx}</h4>
        <button className='bg-amber-500 px-5 py-2 rounded active:scale-90 cursor-pointer' onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App