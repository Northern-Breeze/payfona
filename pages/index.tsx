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
      <section className="section">
        <div className="container">
          <div className="mb-6 pb-3 columns is-multiline">
            <div className="column is-12 is-6-desktop mx-auto has-text-centered">
              <h2 className="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold" style={{ color: '#31004a' }}>KashWallet</h2>
              <p className="subtitle mb-5">Peer to peer and business orientated payment solution, you can trust</p>
              <div className="buttons is-centered">
                <Link href="https://google.com" className="mr-3">
                    <Image src="https://bulmatemplates.github.io/bulma-templates/images/app-page/images/buttons/app-store.svg" alt="" width="150" height="150" />
                </Link>
                <Link href="https://google.com" className="mr-3">
                    <Image src="https://bulmatemplates.github.io/bulma-templates/images/app-page/images/buttons/google-play.svg" alt="" width='150' height="150" />
                </Link>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-12 is-4-desktop">

            </div>
            <div className="column is-4 is-block-desktop is-hidden-touch">
              <AnimatePresence>
                <motion.img
                  className="mx-auto mt-0-widescreen is-block show-image"
                  src="/images/Phone_Screenshot_.jpg"
                  alt=""
                  initial={{ x: 0, opacity: 0, scale: 0.5 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ x: 0, opacity: 0 }}
                />
              </AnimatePresence>
            </div>
            <div className="column is-12 is-4-desktop">

            </div>
          </div>
        </div>
      </section>

      <section className="section landing-section">
        <div className="container">
          <div className="is-vcentered columns is-multiline">
            <div className="column is-6 is-5-desktop mb-4">
              <span className="has-text-white">Our Mailing list</span>
              <h2 className="has-text-white mt-2 mb-3 is-size-1 is-size-3-mobile has-text-weight-bold">Subscribe to our newsletter</h2>
              <p className="has-text-white">Subscribe to our newsletter and get exciting news and updates about our product.</p>
            </div>
            <div className="column is-5 ml-auto">
              <div className="mx-auto box p-6 has-background-light has-text-centered">
                <h4 className="is-size-5 mb-2 has-text-weight-bold">Join Our Mailing List!</h4>
                <p className="has-text-grey-dark mb-4">Please provide us with your email, we promise not to spam you.</p>
                <NewsLatterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="section">
        <div className="container">
          <div className="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
            <div className="mr-auto mb-2">
              <Link className="is-inline-block" href="/">
                <Image className="image" src="https://bulma.io/images/bulma-logo.png" alt="" width="96" height="25" />
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
