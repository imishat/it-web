import Image from "next/image";

function Description() {
    return (
        <div className="container mx-auto my-6">
           <Image width={1000} height={800} src="/images/banner.png" className="w-full h-full object-cover bg-no-repeat" alt="" />
        </div>
    );
}

export default Description;