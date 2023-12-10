import Image from "next/image";
import Link from "next/link";
import Categories from "./Categories/Categories";

function Blogs() {
    return (
           <div class="mt-10 container mx-auto">
      <div class="block md:flex w-full flex-col md:space-x-2 px-2 lg:p-0">
      <div className="flex">
      <Link 
          class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block h-[24em]" 
          
          href={`/blog/12`}
        >
          <div class="absolute left-0 bottom-0 w-full h-full z-10"
            ></div>
          <Image width={400} height={500} alt="" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
          <div class="p-4 absolute bottom-0 left-0 z-20">
            <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</span>
            <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
              Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
            </h2>
            <div class="flex mt-3">
              <Image height={400} width={500} alt="" src="https://randomuser.me/api/portraits/men/97.jpg"
                class="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
              </div>
            </div>
          </div>
        </Link>

        <a class="w-full md:w-1/3 relative rounded h-[24em]" 
          href={`/blog/12`}
        >
          <div class="absolute left-0 top-0 w-full h-full z-10"></div>
          <Image width={400} height={400} alt="" src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
          <div class="p-4 absolute bottom-0 left-0 z-20">
            <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Science</span>
            <h2 class="text-3xl font-semibold text-gray-100 leading-tight">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.</h2>
            <div class="flex mt-3">
              <Image width={400} height={400} alt=""
                src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                class="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p class="font-semibold text-gray-200 text-sm"> Chrishell Staus </p>
                <p class="font-semibold text-gray-400 text-xs"> 15 Aug </p>
              </div>
            </div>
          </div>
        
      </a>

      </div>
      <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        {/* <!-- post cards --> */}
        <div class="w-full lg:w-2/3">

          <Link class="block rounded w-full lg:flex mb-10"
            href={`/blog/12`}
          >
            <div 
              class="h-48 lg:w-48 flex-none bg-cover text-center   opacity-75 bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')]"
              
              title="deit is very important"
            >
            </div>
            <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
                </div>
                <p class="text-gray-700 text-base">
                  Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. 
                  Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
                </p>
              </div>
              <div class="flex mt-3">
                <Image width={400} height={400} alt="" src="https://randomuser.me/api/portraits/men/86.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p class="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                  <p class="text-gray-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </Link>

          <div class="rounded w-full lg:flex mb-10">
            <div class="h-48 lg:w-48 flex-none bg-cover text-center   opacity-75 bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')]"
               title="deit is very important">
            </div>
            <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Integer commodo, sapien ut vulputate viverra
                </div>
                <p class="text-gray-700 text-base">
                  Nam malesuada aliquet metus, ac commodo augue mollis sit amet. 
                  Nam bibendum risus sit amet metus semper consectetur.
                  Proin consequat ullamcorper eleifend.
                  Nam bibendum risus sit amet metus semper consectetur.
                </p>
              </div>
              <div class="flex mt-3">
                <Image width={400} height={400} alt="" src="https://randomuser.me/api/portraits/women/54.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p class="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                  <p class="text-gray-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded w-full lg:flex mb-10">
            <div class="h-48 lg:w-48 flex-none bg-cover text-center   opacity-75 bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')]"
              title="deit is very important">
            </div>
            <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
                </div>
                <p class="text-gray-700 text-base">
                  Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui, 
                  vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit. 
                </p>
              </div>
              <div class="flex mt-3">
                <Image width={400} height={400} alt="" src="https://randomuser.me/api/portraits/men/86.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p class="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                  <p class="text-gray-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* <!-- right sidebar --> */}
        <Categories />
      </div>
      </div>
    </div>

    );
}

export default Blogs;