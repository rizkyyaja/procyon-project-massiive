import { useState } from "react";

const Hero = () => {

  const [currentCarouselContentIndex, setCurrentCarouselContentIndex] = useState(1);

  const carouselContent = {
    1: {
      'title': 'Selamat Datang Di',
      'secondTitle': 'MyParent',
      'text': 'Informasi, dan panduan untuk memahami, mendidik, serta menjalin hubungan yang sehat antara orang tua dan anak, semuanya bisa ditemukan di sini.',
      'image': 'src/assets/img/carousel-img-1.png'
    },
    2: {
      'title': 'Temukan Fitur Menarik',
      'text': 'Anda akan menemukan beragam fitur menarik yang dirancang untuk memenuhi kebutuhan orangtua modern',
      'image': 'src/assets/img/carousel-img-2.png'
    },
    3: {
      'title': 'Tips Parenting Terkini',
      'text': 'Menyediakan tips terkini dan solusi parenting yang dapat membantu Anda dalam perjalanan menjadi orangtua yang lebih baik.',      
      'image': 'src/assets/img/carousel-img-3.png'
    }
  }

  return (
    <div className="w-full h-screen max-w-screen-xl mx-auto lg:px-56 py-24 flex flex-col lg:flex-row items-center">
    <figure className="lg:w-3/5 lg:pr-8 order-1 lg:order-2 mb-4 lg:mb-0">
      <img src={carouselContent[currentCarouselContentIndex]['image']} alt="" />
    </figure>
    <div className="p-3 text-center  lg:pl-8 order-2 lg:order-1">
      <h4 className="font-bold text-4xl mb-4">
        {carouselContent[currentCarouselContentIndex]['title'] && carouselContent[currentCarouselContentIndex]['title']}{' '}
        <span className="text-[#937DC2] font-bold">
          {carouselContent[currentCarouselContentIndex]['secondTitle'] && carouselContent[currentCarouselContentIndex]['secondTitle']}
        </span>
      </h4>
      <p className="px-[10%] leading-loose text-xl">
        {carouselContent[currentCarouselContentIndex]['text'] && carouselContent[currentCarouselContentIndex]['text']}
      </p>
    </div>
    <div className="absolute bottom-0 left-0 w-full">
      <div className="flex gap-2 p-2 justify-center w-full">
        <div
          className={`p-2 ${currentCarouselContentIndex === 1 ? 'bg-black' : 'border border-black'} rounded-full`}
          onClick={() => setCurrentCarouselContentIndex(1)}
        ></div>
        <div
          className={`p-2 ${currentCarouselContentIndex === 2 ? 'bg-black' : 'border border-black'} rounded-full`}
          onClick={() => setCurrentCarouselContentIndex(2)}
        ></div>
        <div
          className={`p-2 ${currentCarouselContentIndex === 3 ? 'bg-black' : 'border border-black'} rounded-full`}
          onClick={() => setCurrentCarouselContentIndex(3)}
        ></div>
      </div>
    </div>
  </div>

  );
};

export default Hero;
