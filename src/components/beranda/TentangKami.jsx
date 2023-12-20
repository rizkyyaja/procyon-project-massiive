export const TentangKami = () => {
  return (
    <>
      <div className="py-24 text-center">
  <div className="">
    <h4 className="text-5xl font-bold">Tentang Kami</h4>
  </div>

  <div className="relative mt-24 flex flex-col items-center lg:flex-row lg:items-start lg:justify-center p-8">
    <div className="h-[28rem] w-[28rem] lg:w-[32rem] lg:h-[42rem] bg-cover bg-center" style={{ 
      backgroundImage: 'url(src/assets/img/myparent-logo.png)',
    }}>
    </div>

    <div className="w-full lg:w-1/4"></div>
    
    <div className="text-2xl mt-4 lg:absolute lg:translate-x-56 lg:translate-y-12 px-4 py-10 lg:p-16 w-full lg:w-1/3 bg-white rounded-2xl shadow-[4px_8px_40px_2px_#C689C6] lg:h-[45rem]">
      <p>Sebagai tim yang penuh dedikasi di balik layar situs parenting ini, memulai perjalanan kami dengan semangat yang tinggi untuk menyediakan informasi dan dukungan terbaik bagi para orangtua dalam perjalanan membesarkan anak. Tujuan kami adalah menjadi mitra setia para orangtua dengan menyajikan aplikasi yang bermanfaat, terpercaya, dan inspiratif. Kami berharap dapat memberikan kontribusi positif dalam membangun keluarga yang bahagia dan sehat.</p>
    </div>
  </div>
</div>


    </>
  )
}