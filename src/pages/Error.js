import React from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner title="Strona 404" subtitle="Strona której szukasz nie istnieje">
        <Link to="/" className="btn-primary">
          Powrót do strony głównej
        </Link>
      </Banner>
    </Hero>
  );
}
