import React from 'react';
import { Calendar, Heart, Star, Smile } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      date: "19 Juni 2024",
      title: "Awal Pertemuan",
      description: "Hari dimana semuanya dimulai. Siapa sangka pertemuan sederhana ini akan mengubah banyak hal.",
      icon: Star,
      color: "pink"
    },
    {
      date: "Juli 2024",
      title: "Tawa Pertama",
      description: "Mulai terbiasa dengan keceriaan dan tawa yang selalu kamu bawa. Hari-hari jadi lebih hidup.",
      icon: Smile,
      color: "purple"
    },
    {
      date: "Agustus 2024",
      title: "Cerita dan Berbagi",
      description: "Tempat bercerita tanpa takut dihakimi, tempat berbagi tawa yang tulus, tempat diam pun terasa cukup.",
      icon: Heart,
      color: "blue"
    },
    {
      date: "Hari ini",
      title: "Kenangan yang Terus Berlanjut",
      description: "Kisah ini mungkin belum selesai, tapi sudah cukup untuk dikenang dengan senyum.",
      icon: Calendar,
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: "bg-pink-500 border-pink-200 text-pink-600",
      purple: "bg-purple-500 border-purple-200 text-purple-600",
      blue: "bg-blue-500 border-blue-200 text-blue-600",
      yellow: "bg-yellow-500 border-yellow-200 text-yellow-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="timeline" className="py-12 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Timeline Kenangan
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">Perjalanan indah yang kita lalui bersama</p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 rounded-full"></div>

          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`relative flex items-center mb-8 sm:mb-12 ${isEven ? 'sm:justify-start' : 'sm:justify-end'}`}>
                {/* Timeline Node - Centered on mobile, positioned on desktop */}
                <div className={`${isEven ? 'sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2' : 'sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2'} z-10 mb-4 sm:mb-0 mx-auto sm:mx-0`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${getColorClasses(event.color).split(' ')[0]}`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Content Card - Full width on mobile, half width on desktop */}
                <div className={`w-full sm:w-5/12 ${isEven ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border-2 ${getColorClasses(event.color).split(' ')[1]} transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getColorClasses(event.color).split(' ')[2]} bg-opacity-10`}>
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;