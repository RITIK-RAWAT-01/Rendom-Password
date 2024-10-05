import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length , setlength] = useState(6);
  const [number , setnumber] = useState(false);
  const [charactor , setcharactor] = useState(false);
  const [password , setpassword] = useState("")

  const randomcopy = useRef()

  const textcopy = useCallback(()=>{
    randomcopy.current?.select();

    randomcopy.current?.setSelectionRange(0,4);

    window.navigator.clipboard.writeText(password);
    
  } , [password]);

  const rendompassword = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(charactor) str += "!@#$%^&*)(_-><?/"

    for(let i = 1; i<=length; i++){

      let num = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(num)
    }

    setpassword(pass)

  } , [length ,number , charactor, setpassword])

  useEffect(()=>{
    rendompassword()
  }, [length , number , charactor , setpassword])

  return(
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center'>Passwordgeneretor</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" className='outline-none w-full py-1 px-3' readOnly placeholder='password' ref={randomcopy} value={password} onChange={length}/>
        <label onClick={textcopy} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</label>
      </div>

      <div className='flex text-sm gap-x-2 py-2'>
        <div className='flex item-center gap-x-1'>
            <input type="range" min={0} max={100} value={length} className='cursor-pointer' onChange={(e)=> setlength(e.target.value)}/>
            <label>length{length}</label>
        </div>

        <div className="flex item-center gap-x-1">
          <input type="checkbox" id='number' defaultChecked={number} onChange={() => setnumber((prev) => !prev)}/>
          <label htmlFor='number'>Numbers</label>
        </div>

        <div className="flex item-center gap-x-1">
          <input type="checkbox" id='charactor' defaultChecked={charactor} onChange={() => setcharactor((prev) => !prev)}/>
          <label htmlFor='charactor'>Charactor</label>
        </div>
      </div>
    </div>
  )
}

export default App
