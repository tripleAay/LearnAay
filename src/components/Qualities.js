import React from "react";

const Qualities = () => {
  const qualities = [
    {
      icon: "🎖️", // Use appropriate icons (SVGs can replace these placeholders)
      title: "Get Achieve New Level",
      description:
        "It is a large established fact that readers will follow readable content.",
    },
    {
      icon: "💡",
      title: "Learn With Effectivity",
      description:
        "It is a large established fact that readers will follow readable content.",
    },
    {
      icon: "🎓",
      title: "Certification",
      description:
        "Showcasing dedication to excellence and impactful learning at LearnAay.",
    },
  ];

  return (
    <section className="bg-blue-600 py-12 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          Why Choose LearnAay
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#f1faee] p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4 text-[#5E3DC6]">{quality.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {quality.title}
              </h3>
              <p className="text-black text-center">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;
