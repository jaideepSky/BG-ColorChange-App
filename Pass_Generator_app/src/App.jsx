import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // State variables for password generation
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");
  
  const passRef = useRef(null);

  // Function to generate password based on conditions
  const passwordGenerator = useCallback(() => {
    let password = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    if (includeNumbers) {
      characters += numbers;
    }
    if (includeSpecialChars) {
      characters += specialChars;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length + 1);
      password += characters.charAt(randomIndex);
    }
    setPassword(password);
  }, [length, includeNumbers, includeSpecialChars]);

  const copyToClipboard = ()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(passRef.current.value)
    
  }

  useEffect(()=>{
    passwordGenerator()
  },[length, includeNumbers, includeSpecialChars]);


  return (
    <>
      <div className=" body h-screen w-screen bg-gray-900 flex justify-center ">
        <div className="h-[200px] w-[55%] bg-gray-800 rounded-lg shadow-lg shadow-gray-600 mt-10">
          {/* for input field */}
          <div className="w-full flex justify-center h-10 relative ">
            <input
              type="text" 
              value={password}
              readOnly
              ref={passRef}
              className="bg-white w-[80%] h-full mt-7 outline-0 rounded-2xl pl-2 text-orange-500 font-medium "
            />
            <button className="bg-blue-600 h-full mt-7 w-[65px] rounded-r-2xl absolute right-[80px] font-semibold "
            onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>

          {/* for password conditions */}
          <div className="flex  w-full justify-evenly mt-17 text-white">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="font-medium text-orange-500">
                Length : {length}
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={includeNumbers}
                onChange={(e) => setIncludeNumbers((prev) => !prev)}
              />
              <label className="font-medium text-orange-500">Numbers</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={includeSpecialChars}
                onChange={(e) => setIncludeSpecialChars((prev) => !prev)}
              />
              <label className="font-medium text-orange-500">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
