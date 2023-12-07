import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute w-full max-w-[1440px] py-7 xl:py-9">
      <div className="container m-auto">
        {/* logo, nav (desktop), btn */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href={"/"}>
            {/* <h1 className="text-2xl font-bold text-white">Green Pure House</h1> */}
            <Image
              src={"/footer/logo.svg"}
              width={120}
              height={30}
              alt=""
              className="w-[125px] xl:w-[430px]"
            />
          </Link>
          {/* nav & btn */}
          <div className="hidden xl:flex">
            <div className="flex items-center gap-x-12">
              <Nav
                containerStyles={"flex items-center justify-between"}
                listStyles={"flex gap-x-12 text-white"}
              />
              <Button variant="outline" className="px-10 h-[50px]">
                Login
              </Button>
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden absolute right-9 top-9">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
