"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({ value, suffix = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (inView) setStart(true);
  }, [inView]);

  return (
    <span ref={ref}>
      {start ? <CountUp end={value} duration={1.15} suffix={suffix} /> : `0${suffix}`}
    </span>
  );
}
