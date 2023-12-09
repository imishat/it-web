'use client'
import { CiCircleList, CiGrid41, CiHeart, CiSettings, CiShop, CiShoppingCart } from "react-icons/ci";
import { LiaDoorOpenSolid } from "react-icons/lia";


function Layout({children}) {
    
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content m-6">
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
                <li className="bg-base-300">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <CiGrid41 size={22} />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <CiShop size={22} />
                    <span>Products</span>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <CiCircleList  size={22}/>
                    <span>Blogs</span>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                   <CiShoppingCart size={22} />
                    <span>Orders</span>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                   <CiHeart size={22} />
                    <span>Wishlist</span>
                  </a>
                </li>
              </ul>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <CiSettings size={22} />
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                   <LiaDoorOpenSolid size={22} />
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    );
}

export default Layout;