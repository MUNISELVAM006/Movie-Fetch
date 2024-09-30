import React from 'react'

const Footer = () => {
  return (
    <div>
   <footer className="footer bg-neutral text-neutral-content p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Services</h6>
          <a className="link link-hover block">Branding</a>
          <a className="link link-hover block">Design</a>
          <a className="link link-hover block">Marketing</a>
          <a className="link link-hover block">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Jobs</a>
          <a className="link link-hover block">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Legal</h6>
          <a className="link link-hover block">Terms of use</a>
          <a className="link link-hover block">Privacy policy</a>
          <a className="link link-hover block">Cookie policy</a>
        </nav>
      </div>
    </footer>
    </div>
  )
}

export default Footer  
