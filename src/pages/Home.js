import React from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import Services from "../components/services/Services";
import FeaturedRooms from "../components/featuredRooms/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luksusowe pokoje"
          subtitle="Pokoje zaczynają się od 299zł"
        >
          <Link to="/rooms" className="btn-primary">
            Sprawdź
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
