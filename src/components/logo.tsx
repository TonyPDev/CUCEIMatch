import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src="/img/logo.svg"
        width={350}
        height={101}
        alt="Logo"
        className="cursor-pointer"
      />
    </Link>
  );
}
