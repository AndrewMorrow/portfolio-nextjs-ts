import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="mb-4">
      <Contact />
      <p className="text-center">
       <small>&#169;</small>  Andrew Morrow {new Date().getFullYear()}
      </p>
    </footer>
  );
}
