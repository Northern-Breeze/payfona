import * as React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Navbar from "../Navbar";
import Meta from "../Meta";
import Footer from "../Footer/Footer";

type Props = {
    children: React.ReactNode
}

export default function Layout(props: Props) {
    const { children } = props;
    return (
        <>
            <Meta />
            <Navbar />
            <>{children}</>
            <GoogleAnalytics trackPageViews />
            <Footer />
        </>
    );
}