import React from "react";
import Head from "next/head";

interface Props {
  keywords: string;
  title: string;
  description: string;
}

export default function Meta(props: Props) {
  const { keywords, title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/images/logo.png' />
      <meta property='og:title' content='Payfona' key='title' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <meta name="author" content="Payfona" />
      <meta name='name' content='Payfona' />
      <meta name='keywords' content={keywords} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Payfona - Empowering Your Business with Accurate Invoicing Solutions",
  keywords:
    "Invoicing, subscriptions, Small size business invoicing, Medium size business invoicing, South African Invoice",
  description:
    "Payfona is an invoice and subscription service for small and medium business",
};