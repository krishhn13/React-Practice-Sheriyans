import React, { useState } from 'react'

const App = () => {
  const [obj, setObj] = useState(
    {
      user: "Krishan",
      age : 20
    }
  )
  return (
    <div>
      <button >
        Change Me
      </button>
    </div>
  )
}

export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [arr, setarr] = useState([10, 20, 30])
//   const btnClick = () => {
//     const temp = [...arr]
//     for(var i  = 0; i < arr.length; i++) {
//       temp[i] = Infinity;
//     }
//     setarr(temp)
//   }
//   return (
//     <div>
//       <h1>
//         {arr.map(function (ele) {
//           return ele + " "
//         })}
//       </h1>
//       <button onClick={btnClick}>
//         Hey there
//       </button>
//     </div>
//   )
// }

// export default App

// // import React, { useState } from 'react'
// // const App = () => {
// //   const [user, setuser] = useState({
// //     user : "Krishan", 
// //     age : 20
// //   })

// //   const btnClicked = () => {
// //     const newNum = {...user};
// //     newNum.user = "Radhe!"
// //     setuser(newNum)
// //   }

// //   return (
// //     <div>
// //       <h1>
// //         {user.user + " " + user.age}
// //       </h1>
// //       <button onClick={btnClicked}>
// //         Hey There! Click me please!!
// //       </button>
// //     </div>
// //   )
// // }

// // export default App




// // // import React, { useState } from 'react'

// // // const App = () => {
// // //   const [num, setNum] = useState({user:"Krishan", age:20})
// // //   return (
// // //     <div>
// // //       <h1 className='p-10 bg-red-900 m-10 rounded-4xl w-25'>
// // //         {num}
// // //       </h1>
// // //       <div className='flex flex-col space-between gap-10'>
// // //         <button className='p-10 bg-amber-300 rounded-full cursor-pointer' onClick={function () {
// // //           setNum(num + 1);
// // //         }}>Increase</button>
// // //         <button className=' p-10 bg-amber-300 rounded-full cursor-pointer' onClick={function () {
// // //           setNum(num - 1)
// // //         }}>Decrease</button>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default App