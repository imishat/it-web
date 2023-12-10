import Image from "next/image";
import Categories from "./Categories/Categories";

function Blog() {
    return (
        <div className="p-5 flex mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex w-full flex-col max-w-4xl   rounded">
            <Image height={200} width={400} src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-base-200">
                <div className="space-y-2">
                    <p rel="noopener noreferrer" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</p>
                    <p className="text-xs dark:text-gray-400">
                       <p>1 day ago</p>
                    </p>
                </div>
                <div className="dark:text-gray-100">
                    <p>Insert the actual text content here...</p>
                </div>
            </div>
        </div>
        {/* Categories */}
        <Categories />
    </div>
    );
}

export default Blog;