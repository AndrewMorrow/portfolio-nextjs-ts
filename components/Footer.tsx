import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="mb-4 bg-gray-300 bg-opacity-50 w-full">
      <Contact />
      <p className="text-center">
        <small>&#169;</small> Andrew Morrow {new Date().getFullYear()}
      </p>
    </footer>
  );
}
