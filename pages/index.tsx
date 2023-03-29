import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import NewsLatterForm from '../components/Newsletter';
import format from 'date-fns/format';

export default function Home() {
  return (
    <div>
      <div className="columns is-multiline">
      </div>
      <section className="section header">
        <div className="container">
          <div className="mb-6 pb-3 columns is-multiline">
            <div className="column is-12 is-6-desktop mx-auto has-text-centered">
              <h2 className="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">Payfona</h2>
              <p className="subtitle mb-5">We provide accurate invoicing solutions for businesses of all sizes. Our software is easy to use and customizable to fit your specific needs. Try us out today!</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="section">
        <div className="container">
          <div className="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
            <div className="mr-auto mb-2">
              <Link className="is-inline-block" href="/">
                <Image className="image" src="/images/logo.png" alt="" width="96" height="25" />
              </Link>
            </div>
            <div>
              <ul className="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
                <li className="mr-4"><Link className="button is-white" href="/about">About</Link></li>
                <li className="mr-4"><Link className="button is-white" href="/contact-us">Contact Us</Link></li>
                <li className="mr-4"><Link className="button is-white" href="/services">Services</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5" style={{ borderTop: '1px solid #dee2e6' }}></div>
        <div className="container">
          <div className="is-flex-tablet is-justify-content-between is-align-items-center">
            <p>All rights reserved © Payfona {format(new Date(), 'yyyy')}</p>
            <div className="py-2 is-hidden-tablet"></div>
            <div className="ml-auto">
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
