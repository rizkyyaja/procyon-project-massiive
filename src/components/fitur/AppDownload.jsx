export const AppDownload = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row bg-neutralPink my-5 p-5 md:flex-row'>
    <div className='flex flex-col sm:order-2 order-2 md:order-1 lg:order-1 items-center text-center lg:text-start lg:items-start w-full md:w-3/4 lg:w-3/4 text-neutralBlack'>
  
      <h1 className="container px-6 sm:px-10 md:px-16 lg:px-32 text-3xl md:text-4xl lg:text-6xl font-bold text-justify mt-6 sm:mt-12 md:mt-20 lg:mt-60">
        Ayo Unduh
      </h1>
      
      <h1 className="container px-6 sm:px-10 md:px-16 lg:px-32 text-3xl md:text-4xl lg:text-6xl font-bold  text-justify mt-4 sm:mt-6 md:mt-10 lg:mt-10">
        Aplikasi Myparent
      </h1>
      
      <h1 className="container px-6 sm:px-10 md:px-16 lg:px-32 text-3xl md:text-4xl lg:text-6xl font-bold  text-justify mt-4 sm:mt-6 md:mt-10 lg:mt-10">
        Sekarang Juga.
      </h1>
  
      <div className="container px-6 sm:px-10 md:px-16 lg:px-32 mt-6 sm:mt-10 md:mt-12 lg:mt-16 item-start">
        <img className="max-w-[300px] animate-goyang" src="src/assets/img/playstore.png" alt="" />
      </div>
  
      <div className="bottom-0 sm:order-3 w-full lg:w-full mt-6 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col">
        <img className="w-full max-w-[200px] mx-auto" src="src/assets/img/gambarsepuluh.png" alt="" />
      </div>
    </div>
  
    <div className='mt-6 sm:order-1 md:order-2 lg:order-2 order-1 flex flex-col sm:mt-12 md:mt-16 lg:mt-20 mb-6 w-full md:mb-0 animate-goyang lg:w-1/4 md:w-1/4'>
      <div className="mx-auto text-center w-2/6 sm:w-3/6 md:w-1/2">
        <img className="w-full" src="src/assets/img/applogin2.png" alt="" />
      </div>
    </div>

  </div>
  );
};
