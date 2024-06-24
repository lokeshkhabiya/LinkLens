import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
        <main className="min-h-screen container">

            <Outlet />
        </main>

        <div className="p-10 text-center bg-gray-800  mt-10">
          Made with ❤️ by <a href="https://twitter.com/lokeshstwt" className="font-bold">@lokeshstwt</a>
        </div>          
    </div>
  )
}

export default AppLayout;