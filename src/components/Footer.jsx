import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="container bg-blue-950/10 shadow-lg mt-4 p-8">
      <Link to="/" className="text-teal-400">HankoChat.inc</Link>
      <div className="mt-6">
        <h3 className="uppercase text-md mb-8">Hot Links</h3>
        <a href="https://github.com/codewitgabi/hankochat" className="block my-3 w-max text-sm text-teal-400">Github</a>
        <a href="https://github.com/codewitgabi/hankochat/issues" className="block my-3 w-max text-sm text-teal-400">Issues</a>
        <a href="https://github.com/codewitgabi/hankochat/issues" className="block my-3 w-max text-sm text-teal-400">Bugs</a>
        <a href="https://github.com/codewitgabi/hankochat/issues" className="block my-3 w-max text-sm text-teal-400">Contributing</a>
      </div>

      <div className="mt-6">
        <h3 className="uppercase text-md mb-8">Contact</h3>
        <p className="my-3">+234 902-061-7734</p>
        <p className="my-3">codewitgabi222@gmail.com</p>
      </div>
    </footer>
  );
}


export default Footer;
