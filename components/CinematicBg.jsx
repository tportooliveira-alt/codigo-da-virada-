// Cinematic dark layer: image (with fallback) + optional looping video on top.
const { useState: useImgState, useRef: useImgRef, useEffect: useImgEffect } = React;

function CinematicBg({
  src,
  fallbackSrc,
  videoSrc,
  className = "",
  style = {},
  overlay = "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.78) 60%, rgba(0,0,0,0.95) 100%)",
}) {
  const [imgSrc, setImgSrc] = useImgState(src);
  const [loaded, setLoaded] = useImgState(false);
  const [videoOk, setVideoOk] = useImgState(false);
  const videoRef = useImgRef(null);
  const wrapperRef = useImgRef(null);

  // Some browsers refuse to autoplay videos that mount offscreen even when muted.
  // Observe the wrapper and call play()/pause() as it enters/leaves the viewport.
  useImgEffect(() => {
    if (!videoSrc) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = videoRef.current;
          if (!v) return;
          if (entry.isIntersecting) {
            const p = v.play();
            if (p && p.catch) p.catch(() => {});
          } else {
            try { v.pause(); } catch (e) {}
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(wrapper);
    return () => io.disconnect();
  }, [videoSrc]);

  return (
    <div ref={wrapperRef} className={"absolute inset-0 overflow-hidden " + className} style={style}>
      <img
        src={imgSrc}
        alt=""
        aria-hidden="true"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (fallbackSrc && imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
        }}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 700ms ease-out",
          filter: "saturate(0.85) contrast(1.05)",
        }}
      />
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            setVideoOk(true);
            const p = e.target.play();
            if (p && p.catch) p.catch(() => {});
          }}
          onError={() => setVideoOk(false)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: videoOk ? 1 : 0,
            transition: "opacity 900ms ease-out",
            filter: "saturate(0.85) contrast(1.05)",
            mixBlendMode: "screen",
          }}
        />
      )}
      <div className="absolute inset-0" style={{ background: overlay }} />
    </div>
  );
}

window.CinematicBg = CinematicBg;

// Shared CloudFront video URLs (cinematic abstract motion — reused across sections for subtle life)
window.CV_VIDEO_A = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";
window.CV_VIDEO_B = "assets/virada-capa-loop.mp4";
