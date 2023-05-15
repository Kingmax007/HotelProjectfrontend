import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed soluta, eligendi minus amet nisi quibusdam impedit repellat vel quae quasi possimus ipsa exercitationem pariatur voluptatem eum quidem accusamus quam.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed soluta, eligendi minus amet nisi quibusdam impedit repellat vel quae quasi possimus ipsa exercitationem pariatur voluptatem eum quidem accusamus quam.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed soluta, eligendi minus amet nisi quibusdam impedit repellat vel quae quasi possimus ipsa exercitationem pariatur voluptatem eum quidem accusamus quam.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed soluta, eligendi minus amet nisi quibusdam impedit repellat vel quae quasi possimus ipsa exercitationem pariatur voluptatem eum quidem accusamus quam.",
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
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
