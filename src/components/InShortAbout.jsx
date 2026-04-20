import { Link } from "react-router";

export default function InShortAbout() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
      
      <div className="rounded-2xl border border-gray-300/30 backdrop-blur-md bg-white/5 p-6 lg:p-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-teal-200 drop-shadow-[0_0_10px_#00f7ff]">
          At a Glance
        </h2>

        {/* Paragraph */}
        <p className="text-sm md:text-lg lg:text-xl leading-relaxed font-medium italic text-justify 
                      bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 
                      bg-clip-text text-transparent drop-shadow-md space-y-2">
          
          Aspiring Full Stack Developer with hands-on experience building responsive and scalable web applications.<br />

          Skilled in developing intuitive user interfaces and robust backend systems for real-world use cases.<br />

          Familiar with implementing secure authentication, database management, and efficient API design.<br />

          Focused on writing clean, maintainable code while continuously adapting to modern development practices.
        
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            to="/aboutMe"
            className="inline-block px-6 py-2.5 rounded-full backdrop-blur-xl bg-white/10
                       text-white font-semibold hover:bg-white/20 hover:scale-105 
                       transition-transform duration-200"
          >
            More About Me
          </Link>
        </div>

      </div>
    </section>
  );
}