import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
    <nav className="navbar py-4">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <Image
                className="image"
                src="/images/logo.png"
                alt="2pay logo"
                height="50"
                width="50"
              />
            </Link>
          </div>
          <button
            className="navbar-burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="navbar-menu">
          <div className="navbar-item">
            <Link href="/about">
              <div className="navbar-item">About</div>
            </Link>
            <Link className="navbar-item" href="/contact">
              <div className="navbar-item">Contact Us</div>
            </Link>
            <Link className="navbar-item" href="/blog">
              <div className="navbar-item">Blog</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-outlined" onClick={() => {
                router.push("https://app.payfona.com/login");
            }} >Login</button>
            <button className="button is-primary" onClick={() => {
                router.push("https://app.payfona.com/register");
            }}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
