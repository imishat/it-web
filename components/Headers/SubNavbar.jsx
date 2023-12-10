import Link from "next/link";

function SubNavbar() {
    return (
        <div className="w-full hidden container mx-auto border-b lg:block">
            <ul className="flex text-sm items-center justify-between">
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'/shop/12'}>Design</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'/shop/12'}>Development & IT</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'/shop/12'}>Writing & Translations</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'/shop/12'}>SEO & Web Traffic</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'/shop/12'}>Digital Marketing & SMM</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'/shop/12'}>Audio & Video</Link>
                </li>
                <li className="w-full flex items-center border-r justify-center">
                    <Link className="w-auto flex justify-center py-2 border-b-2 border-transparent hover:border-blue-500" href={'/shop/12'}>Business & Lifestyle</Link>
                </li>
            </ul>
        </div>
    );
}

export default SubNavbar;