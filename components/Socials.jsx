import Link from "next/link";
import { InstagramIcon, TwitchIcon, FacebookIcon } from "lucide-react";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href={"/"}>
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <TwitchIcon />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FacebookIcon />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
