import {useState} from 'react';

function App() {
  const color = [
    "bg-blue-400",
    "bg-indigo-400",
    "bg-pink-500",
    "bg-purple-600"
  ]

  const hoverColor = [
    "bg-blue-600",
    "bg-indigo-600",
    "bg-pink-700",
    "bg-purple-800"
  ]

  const [count, setCount] = useState(0);

  function changeColor () {
    setCount(count + 1);
  }
  console.log(count % 4);
  console.log((count + 1) % 4);
  console.log((count + 2) % 4);
  console.log((count + 3) % 4);

  return (
    <div className="grid h-screen place-items-center relative bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="absolute h-4/5 w-9/12 transform bg-gray-100 rounded-full overflow-hidden shadow-xl">
        <div className="absolute h-screen w-96 transform rotate-12 bg-yellow-500 bottom-0 -left-40"></div>
        <div className="absolute h-screen w-96 transform rotate-12 bg-yellow-400 top-0 -right-40"></div>
      </div>
      <div className="relative h-96 w-96">
        <div className={`card ${color[(count + 3) % 4]} transition duration-1000 ease-in-out shadow-md inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-12`}></div>
        <div className={`card ${color[(count + 2) % 4]} transition duration-1000 ease-in-out shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-6`}></div>
        <div className={`card ${color[(count + 1) % 4]} transition duration-1000 ease-in-out shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform rotate-8`}></div>
        <div className={`card ${color[(count + 0) % 4]} transition duration-1000 ease-in-out shadow-xl inline-block w-96 h-96 rounded-3xl absolute bottom-0 z-10 grid place-items-center transform rotate-6`}>
          <div className="card bg-white shadow-inner h-4/5 w-3/4 rounded-2xl overflow-hidden relative transform -rotate-6">
            <h1 className="shadow-md text-xl font-thin text-center text-gray-600 uppercase p-3">Nonsense card</h1>
            <img src="https://images.unsplash.com/photo-1611500730105-02d129cd71f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500" alt="cute" />
            <div className={`bg-gray-200 w-full h-1/6 absolute bottom-0 border-8`}>
              <button 
                className={`card ${color[(count + 0) % 4]} hover:${hoverColor[(count + 0) % 4]} w-full h-full animate-bounce hover:bg-yellow-600 transition duration-500 ease-in-out text-white`}
                onClick={(e)=> {
                  e.preventDefault();
                  changeColor();
                }} 
                >Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
