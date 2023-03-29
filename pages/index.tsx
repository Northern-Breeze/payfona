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
    </div>
  )
}
