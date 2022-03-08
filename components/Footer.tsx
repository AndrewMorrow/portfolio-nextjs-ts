import { forwardRef } from "react";
import Contact from "./Contact";

export default forwardRef<HTMLElement>(function Footer(_, ref) {
  return (
    <footer ref={ref} className=" p-6">
      <Contact />
      <p className="text-center">
        <small>&#169;</small> Andrew Morrow {new Date().getFullYear()}
      </p>
    </footer>
  );
});
