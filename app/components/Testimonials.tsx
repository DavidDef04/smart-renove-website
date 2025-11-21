'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Propriétaire de maison",
    content: "Service exceptionnel ! L'équipe a su concrétiser mes attentes avec professionnalisme. Les menuiseries en aluminium sont d'une qualité remarquable.",
    rating: 5,
    image: "/images/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Marie Laurent",
    role: "Gérante de commerce",
    content: "Travail soigné et respect des délais. La rénovation de notre vitrine a complètement transformé notre commerce. Je recommande vivement !",
    rating: 5,
    image: "/images/testimonial2.jpg"
  },
  {
    id: 3,
    name: "Thomas Martin",
    role: "Architecte d'intérieur",
    content: "Collaboration très professionnelle. Leur expertise en menuiserie aluminium est impressionnante. Des partenaires de confiance pour mes projets.",
    rating: 4,
    image: "/images/testimonial3.jpg"
  },
  {
    id: 4,
    name: "Sophie Leroy",
    role: "Particulier",
    content: "Installation de portes-fenêtres en aluminium. Le résultat est à la hauteur de mes attentes, avec une finition parfaite et un excellent rapport qualité-prix.",
    rating: 5,
    image: "/images/testimonial4.jpg"
  },
  {
    id: 5,
    name: "Marc Dubois",
    role: "Gérant d'hôtel",
    content: "Prestation de haute qualité pour la rénovation de nos façades vitrées. Réactivité, professionnalisme et respect du cahier des charges.",
    rating: 5,
    image: "/images/testimonial5.jpg"
  }
];

const Testimonials = () => {
  const [_, setInit] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);

  const prevSlide = () => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current && !isEnd) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--color-blue)]/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[var(--color-orange)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[var(--color-orange)] font-medium mb-4">TÉMOIGNAGES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ce Que Nos Clients <span className="bg-gradient-to-r from-[var(--color-blue)] to-blue-600 bg-clip-text text-transparent">Pensent</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-orange)] to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Découvrez les retours de nos clients satisfaits qui nous ont fait confiance pour leurs projets de menuiserie aluminium et de rénovation.
          </p>
        </div>

        {/* Slider Navigation Buttons */}
        <div className="flex justify-end mb-8">
          <div className="flex space-x-3">
            <button 
              onClick={prevSlide}
              disabled={isBeginning}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${isBeginning ? 'bg-gray-200 text-gray-400' : 'bg-white text-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-white'} shadow-md transition-all duration-300`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={isEnd}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${isEnd ? 'bg-gray-200 text-gray-400' : 'bg-white text-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-white'} shadow-md transition-all duration-300`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={false}
            onInit={() => setInit(true)}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(false)}
            className="py-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full">
                  <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Brand Logos - Infinite Scrolling */}
        <div className="mt-20 pt-12 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6">
            <h3 className="text-center text-xl font-bold text-gray-800 bg-gradient-to-r from-[var(--color-blue)] to-blue-600 bg-clip-text text-transparent">
              NOS PARTENAIRES
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-orange)] to-amber-500 mx-auto mt-2 rounded-full"></div>
          </div>
          
          <div className="relative overflow-hidden py-6">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Infinite scrolling logos */}
            <div className="flex items-center space-x-10 md:space-x-16 animate-infinite-scroll whitespace-nowrap">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="inline-flex items-center justify-center w-32 h-20 md:w-40 md:h-24 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[var(--color-orange)]/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex-shrink-0"
                >
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-[120px] max-h-[60px] md:max-w-[150px] md:max-h-[80px]">
                      <Image
                        src={`/images/partenaire${(i % 5) + 1}.jpg`}
                        alt={`Partenaire ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100px, 150px"
                        className="object-contain w-full h-full opacity-70 hover:opacity-100 transition-opacity"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={`dup-${i}`}
                  className="inline-flex items-center justify-center w-32 h-20 md:w-40 md:h-24 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[var(--color-orange)]/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex-shrink-0"
                >
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-[120px] max-h-[60px] md:max-w-[150px] md:max-h-[80px]">
                      <Image
                        src={`/images/partenaire${(i % 5) + 1}.jpg`}
                        alt={`Partenaire ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100px, 150px"
                        className="object-contain w-full h-full opacity-70 hover:opacity-100 transition-opacity"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-250px * 4));
                }
              }
              .animate-infinite-scroll {
                animation: scroll 30s linear infinite;
                display: inline-block;
              }
              .animate-infinite-scroll:hover {
                animation-play-state: paused;
              }
              @media (min-width: 768px) {
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-320px * 4)); }
                }
              }
            `}</style>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">Passez votre souris pour arrêter le défilement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
