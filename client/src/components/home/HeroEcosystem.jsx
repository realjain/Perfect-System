import { motion } from "framer-motion";

const products = [
  {
    name: "CCTV",
    image: "/cctv-image.jpg",
    x: "50%",
    y: "8%",
  },
  {
    name: "EPABX",
    image: "/epbax.png",
    x: "82%",
    y: "25%",
  },
  {
    name: "Server",
    image: "/network.png",
    x: "82%",
    y: "75%",
  },
  {
    name: "UPS",
    image: "/inverter.webp",
    x: "50%",
    y: "92%",
  },
  {
    name: "Fire Alarm",
    image: "/fire-system.webp",
    x: "18%",
    y: "75%",
  },
  {
    name: "Solar",
    image: "/solar.webp",
    x: "18%",
    y: "25%",
  },
];

export default function HeroEcosystem() {
  return (
    <div className="relative w-[700px] h-[700px] flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-100 blur-[140px]" />

      {/* SVG Connections */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 700 700"
      >
        {[
          [350, 350, 350, 70],
          [350, 350, 580, 180],
          [350, 350, 580, 520],
          [350, 350, 350, 630],
          [350, 350, 120, 520],
          [350, 350, 120, 180],
        ].map((line, index) => (
          <line
            key={index}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            stroke="#10b981"
            strokeWidth="2"
            opacity="0.25"
          />
        ))}
      </svg>

      {/* Center Hub */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          z-30
          w-52
          h-52
          rounded-full
          bg-white
          border
          border-emerald-200
          shadow-[0_0_80px_rgba(16,185,129,0.25)]
          flex
          items-center
          justify-center
        "
      >
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900">
            PERFECT
          </h2>

          <p className="font-black tracking-widest text-emerald-600">
            SYSTEM
          </p>

          <p className="text-xs mt-2 text-slate-500 uppercase">
            Connected Ecosystem
          </p>
        </div>
      </motion.div>

      {/* Products */}
      {products.map((product, index) => (
        <motion.div
          key={product.name}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            delay: index * 0.2,
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute z-20"
          style={{
            left: product.x,
            top: product.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="group flex flex-col items-center">

            <div
              className="
                w-32
                h-32
                flex
                items-center
                justify-center
                transition-all
                duration-300
                group-hover:scale-110
              "
            >
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-full
                  object-contain
                  drop-shadow-[0_25px_30px_rgba(0,0,0,0.15)]
                "
              />
            </div>

            <span
              className="
                mt-2
                px-3
                py-1
                rounded-full
                bg-white
                shadow
                text-xs
                font-bold
              "
            >
              {product.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}