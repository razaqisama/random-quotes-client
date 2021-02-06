import CategorySelector from './CategorySelector'

function Main () {
  return (
    <div className="flex flex-row flex-auto p-1 space-x-2 overflow-y-auto">
      <CategorySelector />
      <div className="p-4 flex flex-col flex-auto h-full w-3/4 justify-center items-center space-y-4">
        <div className="rounded-xl flex flex-col justify-center items-center h-3/4 w-full bg-red-300 ">
          <div className="flex p-4 overflow-y-auto">
            <p className="font-serif text-3xl text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros sem. Vivamus dictum, lectus ac elementum auctor, tellus est pretium lacus, nec gravida neque orci in ipsum. Aliquam et consequat velit, et tristique magna. Aenean suscipit nibh fermentum sollicitudin pulvinar. Vestibulum justo lacus, condimentum non nunc at, consectetur placerat tellus. Nam rhoncus placerat augue porta placerat. Donec aliquet commodo diam, facilisis egestas dui malesuada in. In felis ex, rhoncus vitae dolor at, placerat varius ante. Donec sagittis, neque eget scelerisque volutpat, nisi justo pellentesque risus, quis sodales ante tellus vel urna. In at quam in sapien congue tincidunt ac id diam. Aliquam efficitur, augue vel blandit eleifend, dui turpis porttitor erat, at dictum augue augue vitae sem. Cras at elementum magna, in viverra ligula. Sed at sapien ligula. Aliquam ac sem turpis. Sed in finibus nibh."</p>
          </div>
          <div className="flex w-full justify-center border-t-2 border-gray-900">
            <p className="font-serif text-3xl text-center">Amet</p>
          </div>
        </div>
        <div className="flex justify-center items-center h-1/4 w-full">
          <div className="cursor-pointer border-2 border-gray-400 hover:bg-gray-200 rounded-xl shadow-xl flex justify-center items-center bg-gray-100 h-2/3 w-2/3">
            <div className="text-3xl font-bold italic">GENERATE QUOTES</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;