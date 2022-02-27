import { IoAccessibility } from "react-icons/io5";
import { RiShieldStarFill } from "react-icons/ri";
import { GiBookCover } from "react-icons/gi";
import AboutCardItem from "./AboutCardItem";

export default function AboutCardSection() {
  return (
    <>
      <section className="lg-gap-6 flex flex-wrap justify-evenly gap-y-28 gap-x-6 py-14">
        <AboutCardItem />
        {/* <div className="relative h-max w-72 rounded-lg bg-slate-800 p-6">
          <span className="absolute left-1/2 flex h-24 w-24 -translate-y-full -translate-x-1/2 items-center  justify-center rounded-full border-8 border-slate-900 bg-slate-900">
            <i className="justify-center">
              <IoAccessibility size="40" />
            </i>
          </span>
          <h2 className="mb-6 mt-2 border-b border-slate-50 border-opacity-10 p-2 text-center font-bold">
            {" "}
            Section 508 Trusted Tester Conformance
          </h2>
          <p className=" text-center font-light">
            I am a 508 accessibility certified through the trusted tester
            training offered by the Department of Homeland Security. Which deals
            with the latest accessibility standards and design.
          </p>
        </div>
        <div className="relative h-max w-72 rounded-lg bg-slate-800 p-6">
          <span className="absolute left-1/2 flex h-24 w-24 -translate-y-full -translate-x-1/2 items-center  justify-center rounded-full border-8 border-slate-900 bg-slate-900">
            <i className="justify-center">
              <RiShieldStarFill size="40" />
            </i>
          </span>
          <h2 className="mb-6 mt-2 border-b border-slate-50 border-opacity-10 p-2 text-center font-bold">
            {" "}
            Public Trust Security Clearance
          </h2>
          <p className="text-center font-light">
            I have public trust security clearance through the Department of
            Homeland Security. This proves my trustworthiness and allows me to
            work on higher requirement government contracts.
          </p>
        </div>
        <div className="relative h-max w-72 rounded-lg bg-slate-800 p-6">
          <span className="absolute left-1/2 flex h-24 w-24 -translate-y-full -translate-x-1/2 items-center  justify-center rounded-full border-8 border-slate-900 bg-slate-900">
            <i className="justify-center">
              <GiBookCover size="40" />
            </i>
          </span>
          <h2 className="mb-6 mt-2 border-b border-slate-50 border-opacity-10 p-2 text-center font-bold">
            {" "}
            Mentorship and Lifelong Learning
          </h2>
          <p className="text-center font-light">
            I currently mentor students through Trilogy Education from
            prestigious colleges around the world. These students continuously
            present new technologies and challenges that keep me learning and
            adapting.
          </p>
        </div> */}
      </section>
    </>
  );
}
