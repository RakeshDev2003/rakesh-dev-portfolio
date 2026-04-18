"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsCarousel({ items }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3200, disableOnInteraction: false }}
      speed={420}
      pagination={{ clickable: true }}
      spaceBetween={24}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
    >
      {items.map((testimonial) => (
        <SwiperSlide key={testimonial.name} className="h-auto pb-12">
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
