import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context/context";
import StyledHero from "../components/hero/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>Takiego pokoju nie istnieje...</h3>
          <Link to="/rooms" className="btn-primary">
            Powrót do pokoi
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [...defaultImg] = images;
    const [mainImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              Powrót do pokoi
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Opis</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Informacje</h3>
              <h6>Cena : {price}zł</h6>
              <h6>Rozmiar: {size}m²</h6>
              <h6>
                pojemność :{" "}
                {capacity > 1 ? `${capacity} Osoby` : `${capacity} Osoba`}
              </h6>
              <h6>{pets ? "Pupile dozwolone" : "Pupile zabronione"}</h6>
              <h6>{breakfast && "Darmowe śniadanie"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Dodatki</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
