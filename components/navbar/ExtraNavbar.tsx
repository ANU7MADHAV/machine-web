import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";

const ExtraNavbar = () => {
  const navLinks = [
    {
      path: "/#products",
      value: "Products",
    },
    {
      path: "/about-us",
      value: "About Us",
    },
    {
      path: "/",
      value: <FiPhone />,
    },
  ];
  return (
    <div className="hidden items-center justify-between p-4 md:flex">
      <Link href="/">
        <Image src={logo} alt="logo" width={120} />
      </Link>

      <ul className="flex items-center  gap-x-8 pr-[100px]">
        {navLinks.map((link, key) => (
          <Link key={key} href={link.path}>
            <li>{link.value}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ExtraNavbar;
