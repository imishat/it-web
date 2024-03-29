'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { CiCircleList, CiGrid41, CiMenuFries, CiShop, CiStar } from "react-icons/ci";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { AuthContext } from "../../../context/ContextProvider";


function Layout({children}) {
    const router = usePathname()

    // push router
    const routerPush = useRouter()
    // context
    const {logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
      logOut().then(res=>{
        routerPush.push('/')
      })
    }
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content md:m-6">
            {/* Children */}
         {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="divide-y divide-base-200">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className={`${router === '/dashboard' ? 'bg-base-300':''}`}>
                  <Link rel="noopener noreferrer"
                    href="/dashboard"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <CiGrid41 size={22} />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className={`${router === '/dashboard/products' ? 'bg-base-300':''}`}>
                  <Link
                    rel="noopener noreferrer"
                    href="/dashboard/products"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <CiShop size={22} />
                    <span>Products</span>
                  </Link>
                </li>
                <li className={`${router === '/dashboard/blogs' ? 'bg-base-300':''}`}>
                <Link
                    rel="noopener noreferrer"
                    href="/dashboard/blogs"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <CiCircleList  size={22}/>
                    <span>Blogs</span>
                  </Link>
                </li>
                <li className={`${router === '/dashboard/categories' ? 'bg-base-300':''}`}>
                  <Link
                    rel="noopener noreferrer"
                    href="/dashboard/categories"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                   <CiMenuFries size={22} />
                    <span>Categories</span>
                  </Link>
                </li>
                <li className={`${router === '/dashboard/reviews' ? 'bg-base-300':''}`}>
                  <Link
                    rel="noopener noreferrer"
                    href="/dashboard/reviews"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                   <CiStar size={22} />
                    <span>Reviews</span>
                  </Link>
                </li>
              </ul>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                {/* <li className={`${router === '/dashboard/settings' ? 'bg-base-300':''}`}>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <CiSettings size={22} />
                    <span>Settings</span>
                  </a>
                </li> */}
                <li className={``}>
                  <button
                    rel="noopener noreferrer"
                   onClick={()=>handleLogOut()}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                   <LiaDoorOpenSolid size={22} />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    );
}

export default Layout;