import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image width={48} height={24} src="/logo.webp" alt="Logo" />
    </Link>
  );
}
