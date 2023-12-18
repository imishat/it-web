"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Products({tableData}) {
  const router = usePathname();
  console.log(router);

  const productData = tableData?.data


  // slice
  const products = router === "/dashboard" ? productData?.slice(0, 5) : productData;
  return (
    <div className="relative flex flex-col bg-clip-border rounded-t-xl bg-base-100 text-gray-700 shadow-md   xl:col-span-2">
      <div className="relative bg-clip-border rounded-t-xl bg-base-300 text-gray-700 shadow-none m-0 flex items-center justify-between px-6 py-2">
        <div>
          <p
            className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1"
          >
            {tableData?.type}
          </p>
        </div>
        <button
          aria-expanded="false"
          aria-haspopup="menu"
          id=":r5:"
          className="relative middle none font-sans font-medium text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          type="button"
        >
          <Link
            href={`${tableData?.type==='Blogs' ? '/dashboard/blogs/create':'/dashboard/products/create'}`}
            className="absolute rounded-full bg-base-100 font-bold px-4 py-2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            Create
          </Link>
        </button>
      </div>
      {/* table */}
      <div className="p-6 overflow-x-auto px-0 overflow-y-hidden flex justify-center w-full pt-0 pb-2">
        <table className="w-full overflow-y-hidden min-w-[440px] table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  products
                </p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  price
                </p>
              </th>
              <th className="border-b border-blue-gray-50 w-12 py-3 px-6 text-left">
                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((table, i) => {
              return (
                <tr key={i}>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                        {table?.title}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                      ${table?.price}
                    </p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12 flex items-center gap-1">
                    <Link href={'/dashboard/products/update'}>
                    <button className="px-3 py-1 bg-green-100 text-green-600">
                        Edit
                      </button>
                      </Link>
                      <div className="dropdown dropdown-content dropdown-left dropdown-top relative">
                        <button
                          tabIndex={0}
                          role="button"
                          className="px-3 py-1 bg-rose-100 text-rose-600"
                        >
                          Delete
                        </button>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] flex justify-end absolute menu p-2 bg-base-100 w-80 border rounded-md border-gray-400 shadow-lg"
                        >
                          <div className="w-full">
                           <div className="flex items-center justify-between w-full gap-2">
                            <p>Confirm to delete this Product</p>
                            <button className="bg-rose-600 text-white px-4 py-2 rounded">Confirm</button>
                           </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        {router === "/dashboard" ? (
          <Link
            href={`/dashboard/products`}
            className="btn btn-ghost mx-auto w-full btn-link"
          >
            See More
          </Link>
        ) : (
          <div className="join flex w-full justify-center py-4 items-center mx-auto">
            {[...Array(12).keys()].map((item, i) => {
              return (
                <button className="btn join-item btn-sm btn-active" key={i}>
                  {i + 1}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
