export const VisiMisi = () => {
    return (
      <>
        <div className="bg-neutralPink min-h-screen p-4">
            <div>
            <h1 className='text-neutralPink font-bold text-3xl text-center '>.</h1>
            <h1 className='text-neutralPink font-bold text-3xl text-center '>.</h1>
            <h1 className='text-neutralBlack font-bold text-4xl text-center'>Visi & Misi</h1>
            </div>

            <figure className="mr-40">
          <img src="src/assets/img/gambartujuh.png" alt="" />
        </figure>

        <div className="px-8 md:flex lg:flex xl:flex 2xl:flex flex-row items-center mx-auto justify-center mt-[-140px]">
          <div className="border rounded-lg shadow-slate-500 p-10  mt-10 w-full lg:w-1/3 flex justify-center  bg-white shadow-[4pt_8pt_0pt_2pt_gray] text-black  md:me-8  lg:scale-100 xl:scale-100 2xl:scale-100 text-2xl ">
          <h1 className="text-neutralBlack font-bold text-4xl text-center">Visi</h1>
            <p className="mt-14">
              Menjadikan Web dan Aplikasi sebagai sarana sumber ilmu bagi ibu dalam mempersiapkan dari awal kehamilan sampai menemani proses pertumbuhan bayi dengan cara yang menyenangkan.
            </p>
          </div>
          <div className="border rounded-lg  shadow-slate-500 p-10 mt-10 w-full lg:w-1/3 bg-white shadow-[4px_8px_0px_2px_gray] text-black lg:scale-100 xl:scale-100 2xl:scale-100 text-2xl">
            <h1 className="text-neutralBlack font-bold text-4xl text-center">Misi</h1>
            <p className="mt-5">
            Mengembangkan aplikasi yang intuitif dan berguna bagi orangtua, membantu mereka dalam mendidik dan merawat anak-anak mereka.
            </p>
            <p className="mt-5"> Menciptakan platform web yang kaya konten, memberikan panduan dan informasi yang handal seputar parenting dan perkembangan anak.</p>
        
            <figure className=" -right-40 -bottom-60 w-52">
              <img src="src/assets/img/gambartujuh.png" alt="" />
            </figure>
        
          </div>
          
    </div>

        </div>
        <hr className='border-t-4' />
      </>
    )
  }