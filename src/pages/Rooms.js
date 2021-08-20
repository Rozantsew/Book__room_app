import React from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/roomsContainer/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Nasze Pokoje">
          <Link to="/" className="btn-primary">
            Powrót do strony głównej
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer></RoomsContainer>
    </>
  );
};

export default Rooms;
