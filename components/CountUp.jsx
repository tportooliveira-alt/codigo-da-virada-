// CountUp: animates a number from 0 to target when scrolled into view.
const { useEffect: cuEffect, useRef: cuRef, useState: cuState } = React;

function CountUp({ to, suffix = "", duration = 1400, className = "", style = {} }) {
  const ref = cuRef(null);
  const [val, setVal] = cuState(0);
  const startedRef = cuRef(false);

  cuEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const step = (now) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {val}
      {suffix}
    </span>
  );
}

window.CountUp = CountUp;
