import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import UserBox from "../user-box";

const teamMembers = [
  { src: "team-1.jpeg", name: "Joan Carter", job: "Marketing Manager" },
  { src: "team-2.jpeg", name: "Alex Johnson", job: "Lead Developer" },
  { src: "team-3.jpeg", name: "Emma Davis", job: "UI/UX Designer" },
  { src: "team-4.jpeg", name: "Michael Brown", job: "Software Engineer" },
  { src: "team-5.jpeg", name: "Emily Wilson", job: "Product Manager" },
  { src: "team-6.jpeg", name: "Sophia Miller", job: "HR Specialist" },
];

export default function TeamSwiper() {
  return (
    <Swiper
      loop
      spaceBetween={30}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {teamMembers.map((member) => (
        <SwiperSlide key={member.src}>
          <UserBox
            imgSrc={`/assets/images/team-gallery/${member.src}`}
            name={member.name}
            job={member.job}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}