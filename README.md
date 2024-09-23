# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



const [length , setlength] = useState("6");
  const [password , setpassword] = useState("");
  const [number , setnumber] = useState(false);
  const [char , setchar] = useState(false);


  const rendomcopy = useRef()

  const copytext = useCallback(()=>{
    rendomcopy.current?.select()
    rendomcopy.current?.setSelectionRange(0 , 4)
    window.navigator.clipboard.writeText(password)
  } , [password])


  const randompassword = useCallback(()=>{
    let num = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*)(_-|/"

    for(let i = 1; i<=length; i++){

      let pass = Math.floor(Math.random() * str.length + 1);
      console.log(pass)

      num += str.charAt(pass);
    }


    setpassword(num)

  },[length , number , char , setpassword])

  useEffect(()=>{
      randompassword()
  },[length , number , char , setpassword])

  return (
    <div className="container">
      <div className="main">
        <input type="text" placeholder='password' value={password} ref={rendomcopy} onChange={() => setlength()}/>
        <label onClick={copytext}>Copy</label>
      </div>

      <div className="main">
        <input type="range" value={length} min={6} max={100} onChange={(e) => setlength(e.target.value)}/>
        <label>length{length}</label>
      </div>

      <div className="main">
        <input type="checkbox" defaultChecked={number} id='numberinput' onChange={()=> setnumber((prev) => !prev)}/>
        <label htmlFor='numberinput'>number</label>
      </div>

      <div className="main">
        <input type="checkbox" defaultChecked={number} id='Charactorinput' onChange={()=> setchar((prev) => !prev)}/>
        <label htmlFor='Charactorinput'>Charactor</label>
      </div>

      
    </div>