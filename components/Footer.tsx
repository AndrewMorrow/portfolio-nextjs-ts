import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className=" p-6">
      <Contact />
      <p className="text-center">
        <small>&#169;</small> Andrew Morrow {new Date().getFullYear()}
      </p>
    </footer>
  );
}
