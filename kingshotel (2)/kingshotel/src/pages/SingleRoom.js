import React, { Component } from "react";
import defaultBcg from "../images/Room1.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../Context";
import { useContext } from "react";
import StyledHero from "../components/StyledHero";

function SingleRoom() {
  const { slug } = useParams();
  // rest of the component logic
  const defaultBcg = "../images/Room1.jpg";

  // componentDidMount() {}
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);
  if (!room) {
    return (
      <div className='error'>
        <h3> no such room exist...</h3>
        <Link to='/rooms' className='btn-primary'>
          {" "}
          Back to Rooms{" "}
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
  const [mainImg,...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            Back to Rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3> Details </h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3> Info </h3>
            <h6> Price: €{price} </h6>
            <h6> size: {size} SQFT </h6>
            <h6> 
              max capacity: {" "} 
                {capacity > 1 ? `${capacity} people`: ` ${capacity} person `}
            </h6>
            <h6>{pets? "pets allowed":"no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) =>{
            return <li key={index}>- {item}</li>
          })}
        </ul>
        <div className="p-4 clearfix">
          <div className="row">
            <div className="col-md-3 col-12 ml-auto">
              <Link to={`/booknow/${room.slug}`} className="btn btn-primary"> Book Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleRoom;

