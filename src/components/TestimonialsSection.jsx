import React from "react";

const testimonials = [
  {
    name: "Jimmy Bartney",
    role: "Product Manager at PickeLab",
    text: "C'est tout simplement incroyable ! Il est établi de longue date qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page.",
    avatar: "[Avatar]",
  },
  {
    name: "Natasha Romanoff",
    role: "Black Widow",
    text: "Utilisateur satisfait ici ! Contrairement à une croyance populaire, le Lorem Ipsum n'est pas simplement du texte aléatoire.",
    avatar: "[Avatar]",
  },
  {
    name: "Morikita Kazuki",
    role: "Finance Manager at Mangan",
    text: "DOWNOU est le meilleur ! Il existe de nombreuses variations de passages du Lorem Ipsum disponibles, mais la majorité ont subi une altération.",
    avatar: "[Avatar]",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Ce que disent nos <span className="text-blue-500">clients</span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center text-center max-w-sm mx-auto">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-2xl">{t.avatar}</div>
              <p className="text-gray-700 mb-4">{t.text}</p>
              <div className="font-bold text-blue-700">{t.name}</div>
              <div className="text-gray-400 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
        {/* Pagination placeholder */}
        <div className="flex justify-center mt-8 gap-2">
          <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-500">◀</button>
          <button className="w-8 h-8 rounded-full bg-blue-500 text-white">▶</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 