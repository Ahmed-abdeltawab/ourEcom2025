import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow, Parallax } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/parallax";
import img1 from "../assets/imges/Screenshot 2025-03-04 065157.png";
import img2 from "../assets/imges/Screenshot 2025-03-04 061932.png";
import img3 from "../assets/imges/Screenshot 2025-03-04 062049.png";
import img4 from "../assets/imges/Screenshot 2025-03-04 062451.png";
import img5 from "../assets/imges/Screenshot 2025-03-04 062704.png";
import { useAppSelector } from "@store/hooks";

const slides = [
  { id: 1, image: img1, title: { en: "Discover Amazing Deals", ar: "اكتشف عروض مذهلة" } },
  { id: 2, image: img2, title: { en: "Shop the Latest Trends", ar: "تسوق أحدث الصيحات" } },
  { id: 3, image: img3, title: { en: "Unmatched Quality & Prices", ar: "جودة وأسعار لا مثيل لها" } },
  { id: 4, image: img4, title: { en: "Exclusive Discounts", ar: "خصومات حصرية" } },
  { id: 5, image: img5, title: { en: "Limited Time Offers", ar: "عروض لفترة محدودة" } },
];

const Home = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const { mode } = useAppSelector((state) => state.theme);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [i18n.language]);

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">
      <Swiper
        key={key}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Parallax]}
        spaceBetween={30}
        slidesPerView={"auto"}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        parallax
        className="rounded-2xl shadow-lg overflow-hidden"
        dir={isArabic ? "rtl" : "ltr"}
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center w-auto">
            <div className="relative w-[350px] h-[250px]">
              <img
                src={slide.image}
                alt={slide.title[i18n.language as "en" | "ar"]}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                data-swiper-parallax="-50%"
              />
              <div
                className={`absolute inset-0 flex items-center justify-center rounded-2xl ${
                  mode === "dark" ? "bg-black/50" : "bg-white/50"
                }`}
                data-swiper-parallax="-30%"
              >
                <h2
                  className={`text-xl md:text-2xl font-bold text-center ${
                    mode === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {slide.title[i18n.language as "en" | "ar"]}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
