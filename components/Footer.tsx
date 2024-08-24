export default function Footer() {
  return (
    <footer className="text-center fixed bottom-0 flex justify-center items-center w-screen">
      <p className="text-sm text-center">
        Copyright © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
