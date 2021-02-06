function CategorySelector () {
  return (
    <div className="flex flex-auto h-full w-1/4 justify-center items-center p-4 rounded-lg">
      <div className="flex flex-col w-full h-full bg-red-300 rounded-md overflow-x-hidden">
        <div className="flex justify-center items-center bg-yellow-200">
          <h1>Select Category</h1>
        </div>
        <div className="flex flex-col flex-auto w-full bg-yellow-500 overflow-y-auto">

          <div className="cursor-pointer w-full hover:bg-yellow-600">
            <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-4 relative hover:border-yellow-800">
              <div className="w-full items-center flex">
                <div className="mx-2 leading-6  ">Not Selected</div>
              </div>
            </div>
          </div>

          <div className="cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700">
            <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-4 relative border-yellow-800">
              <div className="w-full items-center flex">
                <div className="mx-2 leading-6  ">Selected </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CategorySelector;