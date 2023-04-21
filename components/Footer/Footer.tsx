import React from "react";
import Image from "next/image";
import Link from "next/link";
import format from "date-fns/format";

export default function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
          <div className="logo-container mr-auto mb-2">
            <Link className="is-inline-block" href="/">
              <Image
                className="image"
                src="/images/payfona.png"
                alt=""
                width="96"
                height="25"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-5" style={{ borderTop: "1px solid #dee2e6" }}></div>
      <div className="container">
        <div className="is-flex-tablet is-justify-content-between is-align-items-center">
          <p>All rights reserved © Payfona {format(new Date(), "yyyy")}</p>
          <div className="py-2 is-hidden-tablet"></div>
          <div className="ml-auto"></div>
        </div>
      </div>
    </footer>
  );
}
