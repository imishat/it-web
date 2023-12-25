import Link from "next/link";

function Footer() {

  return (
    <div className="container mx-auto">
      <div className="grid px-4 grid-cols-1 sm:grid-cols-2 gap-4 md:flex justify-between border-b py-6">
        <div className="w-full">
          <img className="h-12" src="/images/logo.png" alt="" />
        </div>
       <div className="grid grid-cols-2 gap-5 md:flex justify-between">
       <div className="w-full">
          <h3 className="text-xl font-bold">About</h3>
          <Link href={`/page/about-us`} className="inline-block w-full py-1.5">
            About Us
          </Link>
          <Link href={`/page/terms`} className="inline-block w-full py-1.5">
            Terms of Condition
          </Link>
          {/* <Link href={`/page/privacy-policy`} className="inline-block w-full py-1.5">
            Privacy Policy
          </Link> */}
          <Link href={`/page/contact-us`} className="inline-block w-full py-1.5">
            Contact us
          </Link>
        </div>
       
       </div>
      </div>
     
    </div>
  );
}

export default Footer;
