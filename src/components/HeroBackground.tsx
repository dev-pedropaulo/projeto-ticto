export function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#030712] overflow-hidden">
      {/* Blur orb 1 - top right area */}
      <div
        className="absolute rounded-full opacity-85"
        style={{
          left: "61.8%",
          top: "68.1%",
          width: "25.2%",
          height: "22.5%",
          background: "#5BBED9",
          filter: "blur(120px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blur orb 2 - mid right path approximation */}
      <div
        className="absolute rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-85"
        style={{
          left: "49.3%",
          top: "83.3%",
          width: "94.5%",
          height: "81.0%",
          background: "#5BBED9",
          filter: "blur(120px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blur orb 3 - upper right */}
      <div
        className="absolute rounded-full opacity-85"
        style={{
          left: "79.6%",
          top: "56.4%",
          width: "25.2%",
          height: "22.3%",
          background: "#5BBED9",
          filter: "blur(120px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blur orb 4 - left mid */}
      <div
        className="absolute rounded-full opacity-85"
        style={{
          left: "1.9%",
          top: "35.1%",
          width: "17.8%",
          height: "18.7%",
          background: "#5BBED9",
          filter: "blur(125px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blur orb 5 - left upper path approximation */}
      <div
        className="absolute rounded-[30%_70%_60%_40%/50%_40%_60%_50%] opacity-85"
        style={{
          left: "-5.1%",
          top: "22.2%",
          width: "82.8%",
          height: "86.0%",
          background: "#5BBED9",
          filter: "blur(125px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Blur orb 6 - left lower-mid */}
      <div
        className="absolute rounded-full opacity-85"
        style={{
          left: "16.8%",
          top: "41.2%",
          width: "17.8%",
          height: "18.6%",
          background: "#5BBED9",
          filter: "blur(125px)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
