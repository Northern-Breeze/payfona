import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="navbar py-4">
            <div className="container is-fluid">
                <div className="navbar-brand">
                    <div className='navbar-item'>
                        <Link href="/">
                            <Image className="image" src="/images/logo.png" alt="2pay logo" height="50" width="50" />
                        </Link>
                    </div>
                    <button className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-item">
                        <Link href="/about">
                            <div className="navbar-item">
                                About
                            </div>
                        </Link>
                        <Link className="navbar-item" href="/contact-us">
                            <div className='navbar-item'>
                                Contact Us
                            </div>
                        </Link>
                        <Link className="navbar-item" href="/services">
                            <div className='navbar-item'>
                                Services
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
