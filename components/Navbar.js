import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "About", href: "/About" },
    { text: "Portfolio", href: "/Portfolio" },
    { text: "Contact", href: "/Contact" },
    // {text: 'Contact', href: 'Contact'}, bisa ditambah
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link href="/">
            <a className="logo">Aefar.</a>
          </Link>
          <ul className="nav-links">
            {navs.map(nav => (
              <li key = {nav}>
                <Link href={nav.href}>
                  <a className={`nav-item ${ router.pathname == nav.href ? 'active' : '' }`}>{nav.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav> 
    </div>
  );
}

export default withRouter (Navbar);


// for each  = ga bisa return dalam html ga bakal muncul
// variable ? maka  variabel : ga sesuai variabel 
// condition ? expriftrue : expriffalse