import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/fonts.css";

export default ({ children }) => (
  <div id="page">
    <Head>
      <title>Magodo Cultural Day 2019</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="google-site-verification"
        content="lrr1JNH6-v1vB7LQLA-I5QUgD46GycbNLy4GN6YZMxc"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        crossOrigin="anonymous"
      />
    </Head>

    {children}

    <style jsx>{`
      #page {
        overflow-x: hidden;
      }
    `}</style>
  </div>
);
