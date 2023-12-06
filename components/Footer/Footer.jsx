import Link from "next/link";

function Footer() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between border-b py-6">
        <div className="w-full">
          <img className="h-12" src="/images/logo.png" alt="" />
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold">About</h3>
          <Link href={`#`} className="inline-block w-full py-1.5">
            About Work
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Buyer Protection Program
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Terms of Service
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Privacy Policy
          </Link>
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold">Resources</h3>
          <Link href={`#`} className="inline-block w-full py-1.5">
            For Freelancers
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            How to Earn on Kwork
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Categories
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Affiliate Program
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Kwork Reviews
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Kwork Mobile App
          </Link>
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold">Help Center</h3>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Prohibited Services
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Approval process for kworks
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            FAQ
          </Link>
          <Link href={`#`} className="inline-block w-full py-1.5">
            Contact Support
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between my-6">
        <div className="text-gray-400">
          <p> 2015 - 2023 Kwork ©</p>
          <p></p>
          <p>KWORK Technologies OÜ</p>
          <p></p>
          <p>Harju maakond, Tallinn, Kesklinna linnaosa</p>
          <p></p>
          <p>Narva mnt 7,634, Estonia</p>
        </div>
        <div className="flex items-center gap-1">
        <img className="w-44 h-auto" src="https://cdn.kwork.com/images/footer/app-appstore-en.png" alt="" />
        <img className="w-44 h-auto" src="https://cdn.kwork.com/images/footer/app-gplay-en.png" alt="" />

        </div>
      </div>
    </div>
  );
}

export default Footer;
