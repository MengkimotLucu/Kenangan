import React from 'react';
import { Mail, Heart, Star } from 'lucide-react';

const MessageSection = () => {
  const messageParagraphs = [
    "Terima kasih, Anggun.",
    "Sejak awal 19 Juni 2024 hingga hari ini, kamu telah menjadi bagian yang tidak pernah aku sangka akan begitu berarti. Hari-hari yang dulu mungkin terasa biasa, kini terasa lebih hidup sejak kamu datang—dengan caramu sendiri, yang tidak pernah berlebihan, tapi selalu pas.",
    "Kamu hadir bukan sebagai keramaian, tapi sebagai ketenangan. Di antara segala hiruk-pikuk hidup, kamu menjadi jeda yang menyenangkan. Tempat bercerita tanpa takut dihakimi, tempat berbagi tawa yang tulus, tempat diam pun terasa cukup.",
    "Terkadang, aku berpikir… Bagaimana bisa seseorang yang awalnya hanya nama di layar, kini menjadi salah satu alasan mengapa aku bisa tersenyum lebih sering? Kita mungkin tidak selalu sempurna dalam mengekspresikan, atau dalam menjaga waktu, tapi aku yakin, rasa yang ada tidak pernah setengah.",
    "Terima kasih untuk segala hal kecil yang kamu lakukan—yang mungkin kamu anggap sepele, tapi sangat berarti bagiku. Terima kasih karena tetap tinggal saat kamu bisa saja pergi. Terima kasih karena menjadi tempat pulang, meski tidak pernah meminta.",
    "Jika waktu mengizinkan kita berjalan lebih jauh, aku harap kita tidak hanya saling menemukan, tapi juga saling menjaga. Dan jika suatu hari kita harus berjalan pada arah yang berbeda, aku hanya ingin kamu tahu satu hal: Kamu pernah membuat bagian hidupku jauh lebih baik hanya dengan menjadi kamu.",
    "Semoga apapun yang kamu jalani ke depan, kamu tetap diberkahi dengan hal-hal yang indah. Dan bila sesekali kamu merasa lelah, semoga ada suara di dalam hatimu yang selalu mengingatkan, bahwa kamu pernah dicintai dengan tulus.",
    "Jaga dirimu baik-baik, Anggun. Kisah ini mungkin belum selesai, tapi sudah cukup untuk dikenang dengan senyum."
  ];

  return (
    <section id="message" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-pink-500 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Pesan Untukmu
            </h2>
          </div>
          <p className="text-xl text-gray-600">Kata-kata yang ingin kusampaikan</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-300/10 to-purple-300/10 rounded-full -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-purple-300/10 to-blue-300/10 rounded-full translate-x-18 translate-y-18"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <Star className="w-6 h-6 text-pink-400 mr-2" />
              <Heart className="w-8 h-8 text-pink-500" />
              <Star className="w-6 h-6 text-pink-400 ml-2" />
            </div>
            
            <div className="space-y-6">
              {messageParagraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {index === 0 ? (
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-pink-600 mb-8">
                      {paragraph}
                    </h3>
                  ) : (
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl font-semibold text-gray-600 italic">
                Dengan cinta dan kenangan indah ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;