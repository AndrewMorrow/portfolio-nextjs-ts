/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import Image from "next/image";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

export default function Example() {
  return (
    <div>
      <section>
        <h2 className="text-3xl">See my projects</h2>
        <Image
          src="/images/LaptopSmerrimentquest.png"
          alt="merriment"
          width="400"
          height="300"
        />
      </section>
    </div>
  );
}
