"use client";
import React from "react";
import TeamSwiper from "./components/swiper";

export default function OurTeam() {
  return (
    <section id="team" className="py-10">
      <div className="text-center flex-center flex-col gap-y-3 p-5">
        
        <h1 className="text-5xl text-black font-semibold">
          Meet our beautiful Team
        </h1>

        <p className="text-center w-full md:w-1/2 font-semibold text-gray-500">
          Our philosophy is simple: hire great people and give them the resources and support to do their best work.
        </p>

      </div>

      <div className="bg-gray-900 p-16">
        <TeamSwiper />
      </div>
      
    </section>
  );
}
