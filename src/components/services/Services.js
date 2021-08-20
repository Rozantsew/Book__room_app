import React, { Component } from "react";
import Title from "../title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Drinki",
        info: "Pierwszy drink w barze za darmo, przyjdź i baw się dobrze...",
      },
      {
        icon: <FaShuttleVan />,
        title: "Wygodny dojazd",
        info: "Wybieramy lokalizacje które pozwalają na wygodny dojazd",
      },
      {
        icon: <FaHiking />,
        title: "Wypożuczalnia sprzetu",
        info: "Najleprzy sprzęt do wynajęcia na miejscu w najleprzych cenach",
      },
      {
        icon: <FaBeer />,
        title: "Domowe Piwo",
        info: "Oferujemy najwyższej jakości piwa z naturalnych produktów",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
