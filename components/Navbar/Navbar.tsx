import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();

  const [isNavCollapsed, setIsNavCollapsed] = React.useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar py-4">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <Image
                className="image"
                src="/images/payfona.png"
                alt="Payfona logo"
                height="100"
                width="50"
              />
            </Link>
          </div>
          <button
            className={`${isNavCollapsed ? "is-active" : ""} navbar-burger`}
            role="button"
            aria-label="menu"
            aria-expanded="false"
            onClick={handleNavCollapse}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`${isNavCollapsed ? "is-active" : ""} navbar-menu`}>
          <div className="navbar-item">
            <Link className="navbar-item" href="#about-section">
              About
            </Link>
          </div>
          <div className="navbar-item">
            <Link className="navbar-item" href="#contact-us">
              Contact Us
            </Link>
          </div>
          <div className="navbar-item">
            <Link className="navbar-item" href="/blog">
              Blog
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="button is-outlined"
          onClick={() => {
            router.push("https://app.payfona.com/login");
          }}
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="button is-primary"
          onClick={() => {
            router.push("https://app.payfona.com/login");
          }}
        >
          Login
        </motion.button>
      </div>
    </nav>
  );
}
