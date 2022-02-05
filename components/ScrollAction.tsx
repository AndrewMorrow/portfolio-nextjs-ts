import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function ScrollAction() {
  return (
    <Link href="#">
      <a className="justify-center animate-bounce flex">
        <ChevronDoubleDownIcon width={15} className="flex items-end" /> Scroll
        To Projects <ChevronDoubleDownIcon width={15} />
      </a>
    </Link>
  );
}
