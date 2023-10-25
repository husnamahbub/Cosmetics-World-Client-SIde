
const Footer = () => {
    return (
        <div>
          <footer className="footer p-10 bg-orange-300 text-black lg:w-full w-[330px]">
  <nav className="">
    <header className="footer-title">Services</header> 
    <a className="text-black link link-hover">Branding</a>
    <a className="text-black link link-hover">Design</a>
    <a className="text-black link link-hover">Marketing</a>
    <a className="text-black link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="text-black link link-hover">About us</a>
    <a className="text-black link link-hover">Contact</a>
    <a className="text-black link link-hover">Jobs</a>
    <a className="text-black link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="text-black link link-hover">Terms of use</a>
    <a className="text-black link link-hover">Privacy policy</a>
    <a className="text-black link link-hover">Cookie policy</a>
  </nav>
</footer>  
        </div>
    );
};

export default Footer;