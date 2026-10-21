import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white  tracking-wide">
          <span className="text-pink-500">*</span>
          Akanksha
          <span className="text-pink-500">*</span>
        </h1>

        {/* Social Icons */}
        <div className="flex items-center gap-4">

        <Link href="https://www.instagram.com/" >
        <Image
          
            src="/instagram.png"
            alt="Instagram"
            width={40}
            height={40}
            className="rounded-md object-contain"
          />
        </Link>


         <Link href="https://www.Linkedin.com/" >
        <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={40}
            height={40}
            className="rounded-md object-contain"
          />
        </Link>

        <Link href="https://www.facebook.com/" >
        <Image
            src="/Facebook.png"
            alt="LinkedIn"
            width={25}
            height={25}
            className="rounded-md object-contain"
          />
        </Link>
          

          
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-white border-t max-w-7xl mx-auto pt-6 text-center text-xs md:text-sm tracking-wide">
        All the rights are reserved Since 2026
      </div>
    </footer>
  );
}