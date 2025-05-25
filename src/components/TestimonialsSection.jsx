import React, { useState } from "react";

const testimonials = [
  {
    title: "C'est tout simplement incroyable !",
    name: "Jimmy Bartney",
    role: "Product Manager at Picko Lab",
    text: "It is a long established fact that a reader will be distracted by theada ble content of a page when looking at its layout. The point of using Lorem Ipsum is that it",
    avatar: "/images/CLIENT_1.png",
  },
  {
    title: "Utilisateur satisfait ici !",
    name: "Natasha Romanoff",
    role: "Black Widow",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
    avatar: "/images/CLIENT_2.png",
  },
  {
    title: "DOWONOU est le meilleur !",
    name: "Moritika Kazuki",
    role: "Finance Manager at Mangan",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
    avatar: "/images/CLIENT_3.png",
  },
  {
    title: "DOWONOU est superbe !",
    name: "Moritika Kazuki",
    role: "Finance Manager at Mangan",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
    avatar: "/images/CLIENT_3.png",
  }
];

const TESTIMONIALS_PER_PAGE = 3;

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / TESTIMONIALS_PER_PAGE);

  const startIdx = currentPage * TESTIMONIALS_PER_PAGE;
  const endIdx = startIdx + TESTIMONIALS_PER_PAGE;
  const visibleTestimonials = testimonials.slice(startIdx, endIdx);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

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
          {visibleTestimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl shadow p-6 flex flex-col max-w-sm w-full mx-auto">
              <div className="font-semibold text-lg mb-2 text-gray-900 text-left">{t.title}</div>
              <p className="text-gray-500 mb-6 text-left">{t.text}</p>
              <hr className="my-4" />
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-lg object-cover" />
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-gray-400 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          <button
            className="pb-1 w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center text-xl shadow hover:bg-gray-100 transition disabled:opacity-50"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            ←
          </button>
          <button
            className="pb-1 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl shadow hover:bg-blue-600 transition disabled:opacity-50"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 