export const Footer = () => {
  return (
    <div className="h-fit py-8 px-8 lg:px-24 bg-[#937DC2] text-white">
      <div className="flex max-lg:gap-12 max-lg:flex-wrap justify-between items-center">
        <div className="grid">
          <div className="flex items-center gap-4">
            <img src="src/assets/img/logo.png" alt="" />
            <h3 className="font-bold text-2xl">MyParent</h3>
          </div>
          <p>
            Langkah pertama membentuk Generasi Cerdas dan Berkarakter dengan
            Keceriaan!
          </p>
        </div>

        <div className="grid gap-3 h-fit max-lg:w-full">
          <a href="" className="font-bold">
            Tim Kami
          </a>
          <a href="" className="font-bold">
            Kontak Kami
          </a>
        </div>

        <div className="grid gap-2 max-lg:w-full">
          <h4 className="font-bold lg:ps-4">Unduh Aplikasi</h4>
          <div className="flex justify-start text-white">
            <a
              href=""
              className="flex items-center gap-4 px-6 py-2 bg-[#C689C6] rounded-2xl font-bold text-xl"
            >
              <span>
                <img src="src/assets/icons/playstore.png" alt="" />
              </span>
              <div className="grid h-fit">
                <p className="text-sm">Get it On</p>
                <span className="text-md">Play Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="p-[1px] bg-white mt-10 mb-4"></div>

      <div className="text-center">
        <p>Copyright @ 2023. All Rights Reserved</p>
      </div>
    </div>
  );
};
