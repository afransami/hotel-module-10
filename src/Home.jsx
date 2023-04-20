import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          className="bg-cover rounded h-64 w-full"
          src="/public/hotel2.jpg"
          alt=""
        />
        <div>
          <h1 className="text-3xl absolute text-white top-20 left-1/3">
            <span className="">Your Luxury on the way</span>
          </h1>
        </div>
      </div>

      <div className="flex justify-between container mx-auto mt-10">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="card-title py-2">
              Standard Family Suit!
              <div className="badge badge-warning">LUXURY</div>
            </h2>
          <figure>
            <img className="rounded-lg"
              src="/public/room1.jpg"
              alt="Room"
            />
          </figure>
          <div className="card-body shadow-2xl">
            
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="badge badge-warning py-3 font-semibold hover:bg-orange-500">Book Now</button>              
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="card-title py-2">
            Standard Single Suit!
              <div className="badge badge-warning">LUXURY</div>
            </h2>
          <figure>
            <img className="rounded-lg"
              src="/public/room3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body shadow-2xl">
            
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="badge badge-warning py-3 font-semibold hover:bg-orange-500">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="card-title py-2">
            Standard Double Suit!
              <div className="badge badge-warning">LUXURY</div>
            </h2>
          <figure>
            <img className="rounded-lg"
              src="/public/room2.jpg"
              alt="room"
            />
          </figure>
          <div className="card-body shadow-2xl">
            
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="badge badge-warning py-3 font-semibold hover:bg-orange-500">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
