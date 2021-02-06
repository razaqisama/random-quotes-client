import github from './Github.png';
import linkedIn from './Linkedin.png';
import medium from './Medium.png';

function Footer () {
  return (
    <div className="flex h-12 justify-center items-center pb-4">
      <div className="bg-opacity-50 flex h-12 bg-gray-500 space-x-4 justify-center items-center px-4 rounded-lg">
        <img 
          src={github} 
          alt="github" 
          className="border-gray-900 border-2 rounded-full cursor-pointer w-14 h-14 bg-gray-900 -translate-y-2 transform hover:-translate-y-6 hover:scale-150 transition duration-200 ease-in-out"
          onClick={()=>{
            console.log('Github')
          }}
          >
        </img>
        <img 
          src={linkedIn}
          alt="linkedin"
          className="border-gray-900 border-2 rounded-xl cursor-pointer w-14 h-14 bg-gray-900 -translate-y-2 transform hover:-translate-y-6 hover:scale-150 transition duration-200 ease-in-out"
          onClick={()=>{
            console.log('Linkedin')
          }}
          >
        </img>
        <img 
          src={medium} 
          alt="github" 
          className="border-gray-900 border-2 rounded-full cursor-pointer w-14 h-14 bg-gray-900 -translate-y-2 transform hover:-translate-y-6 hover:scale-150 transition duration-200 ease-in-out"
          onClick={()=>{
            console.log('Github')
          }}
          >
        </img>
      </div>
    </div>
  )
}

export default Footer;