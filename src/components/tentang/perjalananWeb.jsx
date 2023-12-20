// import gambarsatu from '../assets/img/gambarsatu.jpg';

export const PerjalananWeb = () => {
    return (
      <>
        <div className="py-24 text-center">
          <div className="">
            <h4 className="text-5xl font-bold text-neutralUngu">Perjalanan menciptakan</h4>
            <h4 className="text-5xl font-bold">Web/App ini</h4>
          </div>
        
        <div className='flex items-center justify-center flex-wrap lg:gap-10 xl:gap-10 2xl:gap-10 pb-5 lg:pb-0'>
            <div className='mt-10 w-full lg:w-1/5 md:w-1/2 xl:w-1/5 2xl:w-1/5 md:order-1 sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <img className='md:transform lg:transform xl:transform 2xl:transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer'
            src="src/assets/img/gambarsatu.jpg" alt="" />
            </div>
            <div className='mt-10 w-full lg:w-1/5  md:w-1/2 xl:w-1/5 2xl:w-1/5 md:order-3 sm:flex sm:flex-col sm:items-center sm:justify-center'>
              <img className='md:transform lg:transform xl:transform 2xl:transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer'
            src="src/assets/img/gambardua.jpg" alt="" />
              <img className='mt-4transform transition-transform duration-300 sm:mt-9 hover:scale-110 rounded-md cursor-pointer'
            src="src/assets/img/gambartiga.jpg" alt="" />
            </div>
            <div className='mt-10 w-full lg:w-1/6 md:w-1/3 xl:w-1/6 2xl:w-1/6 md:order-2 sm:flex sm:flex-col sm:items-center sm:justify-center'>
              <img className='md:transform lg:transform xl:transform 2xl:transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer'
            src="src/assets/img/gambarempat.jpg" alt="" />
            </div>
            
        </div>

          
        </div>

        <hr className='border-t-4' />
      </>
    )
  }