import Link from "next/link";

function SubNavbar() {
    return (
        <div className="w-full hidden border-b lg:block">
            <ul className="flex text-sm items-center justify-between">
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'#'}>Design</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'#'}>Development & IT</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'#'}>Writing & Translations</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'#'}>SEO & Web Traffic</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'#'}>Digital Marketing & SMM</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'#'}>Audio & Video</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'#'}>Business & Lifestyle</Link>
                </li>
            </ul>
        </div>
    );
}

export default SubNavbar;