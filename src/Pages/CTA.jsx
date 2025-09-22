export default function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-gradient-to-r from-[#ecdeb6] via-[#B38F2C] to-[#6E4B16] text-white py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to Transform Your Business?
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-10 text-gray-100 max-w-3xl mx-auto">
          Join hundreds of businesses already growing with us. Get started today and
          take your brand to the next level with our solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#6E4B16] transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10"></div>
    </section>
  );
}
