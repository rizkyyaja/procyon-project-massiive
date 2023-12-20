import { useState } from "react";

export const TimKami = () => {

  const [currentCarouselContentIndex, setCurrentCarouselContentIndex] = useState(1);

  const carouselContent = {
    1: {   
        'title': 'Hastler',
        'title1': 'Scrum Master & Hacker',
        'title2': 'Scrum Master & Hacker',
        'title3': 'Hipster',
        'title4': 'Hipster',
        'title5': 'Hipster',

        'name': 'Nurafia',
        'name1': 'Amalia Hasanah',
        'name2': 'Evina Ningsih',
        'name3': 'Anisa Angreny',
        'name4': 'Salsabila Zandini',
        'name5': 'Risasti Dwi Ardini',

        'image': 'src/assets/img/nurafia.png',
        'image1': 'src/assets/img/amel.png',
        'image2': 'src/assets/img/vina.png',
        'image3': 'src/assets/img/nisa.png',
        'image4': 'src/assets/img/salsa.png',
        'image5': 'src/assets/img/risasti.png'
      },
    2: {   
        'title': 'Hipster',
        'title1': 'Hacker',
        'title2': 'Hacker',
        'title3': 'Hacker',
        'title4': 'Hacker',
        'title5': 'Hipster',
        

        'name': 'Ladzdzah Hanan Na afi Mufidz',
        'name1': 'Chrisyedo Ananta',
        'name2': 'Diva Rizky Alfitrah',
        'name3': 'Jogy Gunawan',
        'name4': 'M. Bima',
        'name5': 'Evina Ningsih',
        

        'image': 'src/assets/img/nurafia.png',
        'image1': 'src/assets/img/chris.png',
        'image2': 'src/assets/img/ky.png',
        'image3': 'src/assets/img/jogy.png',
        'image4': 'src/assets/img/salsa.png',
        'image5': 'src/assets/img/vina.png',
        
      },
    
      
  }

  return (
    <div className='bg-white min-h-screen'>

<h1 className='text-neutralUngu font-bold text-5xl text-center mt-10 '>Tim <span className="text-black">Kami</span> </h1>

        <div>
        <div className="mt-32 md:flex lg:flex xl:flex 2xl:flex justify-center items-center w-full sm:px-10">
          <div className="border rounded-lg shadow-lg shadow-purple-700 p-10 lg:w-80 xl:w-80 2xl:w-80 w-full h-96 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10 sm:mt-4 sm:flex sm:flex-col sm:items-center sm:justify-center">
            <p className='text-purple-700 font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['title']}</p>
            <p className='text-black font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['name']}</p>
           
            <figure>
              <img className="mt-10 " src={carouselContent[currentCarouselContentIndex]['image']} alt="" />
            </figure>        
          </div>

          <div className="border rounded-lg shadow-lg shadow-purple-700 p-10 lg:w-80 xl:w-80 2xl:w-80 w-full h-96 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10 sm:mt-4  sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p className='text-purple-700 font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['title1']}</p>
           <p className='text-black font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['name1']}</p>
           
          <figure>
          <img className="mt-10" src={carouselContent[currentCarouselContentIndex]['image1']} alt="" />
        </figure>
          </div>

          <div className="border rounded-lg shadow-lg shadow-purple-700 p-10 lg:w-80 xl:w-80 2xl:w-80 w-full h-96 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10 sm:mt-4  sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p className='text-purple-700 font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['title2']}</p>
           <p className='text-black font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['name2']}</p>
           
          <figure>
          <img className="mt-5 py-8" src={carouselContent[currentCarouselContentIndex]['image2']} alt="" />
        </figure>
          </div>

        </div>

        <div className="mt-10 md:flex lg:flex xl:flex 2xl:flex justify-center items-center w-full sm:px-10">
        <div className="border rounded-lg shadow-lg shadow-purple-700 p-10 lg:w-80 xl:w-80 2xl:w-80 w-full h-96 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10 sm:mt-4  sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p className='text-purple-700 font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['title3']}</p>
           <p className='text-black font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['name3']}</p>
           
          <figure>
          <img className="mt-10" src={carouselContent[currentCarouselContentIndex]['image3']} alt="" />
        </figure>
          </div>

        <div className="border rounded-lg shadow-lg shadow-purple-700 p-10 lg:w-80 xl:w-80 2xl:w-80 w-full h-96 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10 sm:mt-4  sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p className='text-purple-700 font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['title4']}</p>
           <p className='text-black font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['name4']}</p>
           
          <figure>
          <img className="mt-10" src={carouselContent[currentCarouselContentIndex]['image4']} alt="" />
        </figure>
          </div>

        <div className="border rounded-lg shadow-lg shadow-purple-700 p-10 lg:w-80 xl:w-80 2xl:w-80 w-full h-96 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10 sm:mt-4  sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p className='text-purple-700 font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['title5']}</p>
           <p className='text-black font-semibold text-2xl'>{carouselContent[currentCarouselContentIndex]['name5']}</p>
           
          <figure>
          <img className="mt-10" src={carouselContent[currentCarouselContentIndex]['image5']} alt="" />
        </figure>
          </div>
        </div>

        <div className="mt-10 bottom-0 left-0 w-full">
        <div className="flex gap-2 p-2 justify-center w-full relative">
          <div className={`p-2 ${currentCarouselContentIndex === 1 ? 'bg-black' : 'border border-black'} rounded-full`} onClick={() => setCurrentCarouselContentIndex(1)}></div>
          <div className={`p-2 ${currentCarouselContentIndex === 2 ? 'bg-black' : 'border border-black'} rounded-full`} onClick={() => setCurrentCarouselContentIndex(2)}></div>
          
        </div>
      </div>

        </div>

    </div>
  );
};

// export default Hero;