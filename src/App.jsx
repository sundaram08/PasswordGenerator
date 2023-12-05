import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [length, setlength] = useState(0)
//   const [numberAllowed, setNumberAllowed] = useState(0)
//   const [charAllowed, setCharAllowed] = useState(0)
//   const [password, setPassword] = useState(0)
//   const generatePassword =useCallback(()=>{
//       let pass=""
//       let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//       if(numberAllowed) str+="0123456789"
//       if(charAllowed) str+="!@#$%^&*()_+"

//       for (let i = 1; i < length; i++){
//         const char = Math.floor(Math.random() * str.length +1)
//         pass += str.charAt(char)      
//       }
//       setPassword(pass)
//   },[length,charAllowed,numberAllowed])

//   const copyPasswordtoClipboard =()=>{
//     window.navigator.clipboard.writeText(password)
//     passwordRef.current.select() 
//   }

//   useEffect(()=>{
//     generatePassword()
//   },[length,numberAllowed,charAllowed])

//   const passwordRef = useRef()


//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
//         <h1 className='text-white text-center my-3'>Password Generator</h1>
//         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//           <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder="Generated Password"  readOnly 
//           ref = { passwordRef}/>
//           <button onClick={copyPasswordtoClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
//         </div>
//         <div className='flex text-sm gap-x-2'>
//           <div className='flex items-center gap-x-1'>
//               <input type="range"
//               min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setlength(e.target.value)}
//               name=""
//               id=" " />
//               <label htmlFor="length">Length: {length}</label>
//           </div>
//           <div className='flex items-center gap-x-1'>
//               <input type="checkbox"
//               defaultChecked={numberAllowed}
//               onChange={()=>{
//                 setNumberAllowed((prev)=> !prev)
//               }}
//               name=""
//               id=" " />
//               <label htmlFor="number">number</label>
//           </div>
//           <div className='flex items-center gap-x-1'>
//               <input type="checkbox"
//               defaultChecked={charAllowed}
//               onChange={()=>{
//                 setCharAllowed((prev)=> !prev)
//               }}
//               name=""
//               id=" " />
//               <label htmlFor="char">character</label>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(0);
  const [charAllowed, setCharAllowed] = useState(0);
  const [password, setPassword] = useState(0);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  const copyPasswordtoClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const passwordRef = useRef();

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4">
          <h1 className="text-center text-3xl font-bold mb-4">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-2 px-3 bg-gray-800 text-white"
              placeholder="Generated Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordtoClipboard}
              className="outline-none bg-blue-700 text-white px-3 py-2"
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="number">Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="char">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default App
