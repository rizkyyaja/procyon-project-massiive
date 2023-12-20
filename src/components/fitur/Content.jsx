export const Content = () => {
  return (
    <div
      className="h-fit px-8 lg:px-24"
      style={{
        backgroundImage: 'url("src/assets/img/content-bg.png")',
        backgroundPosition: "center -60px",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
      }}
    >
      <div className="flex justify-center py-24 mb-24">
        <div className="grid text-center">
          <h4 className="text-2xl font-bold mb-4">
            Monitoring Daily Activities
          </h4>
          <p className="leading-loose text-2xl">
            Memantau aktivitas harian bayi adalah proses penting untuk
            memastikan kesejahteraan dan perkembangannya. mencatat interaksi
            sosial, seperti waktu bermain, tertawa, atau ekspresi emosional
            lainnya.
          </p>
        </div>
      </div>

      <div className="flex justify-center py-24">
        <div className="grid md:w-[80%] bg-white p-8 rounded-[20px]">
          <div className="flex items-center mb-8">
            <h4 className="text-3xl font-bold w-2/5 text-center">
              Today Progres
            </h4>

            <div className="flex justify-start rounded-[20px] w-full bg-[#C4C4C4] shadow-[4px_4px_0px_2px_gray]">
              <div className="bg-[#FCC5C0] w-[50%] text-center p-4 rounded-[20px]">
                <span className="text-2xl font-bold">30%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4">
            {/* items */}
            <div className="flex relative items-center bg-[#FCC5C0] rounded-full ps-4 shadow-2xl max-md:w-full md:w-[46%] shadow-[4px_4px_0px_2px_gray]">
              <img className="max-lg:hidden" src="src/assets/icons/bacabuku.png" alt="" />
              <h4 className="max-lg:p-4 text-xl font-bold ms-8">Belajar Baca</h4>
              <div className="max-lg:hidden flex items-center h-full bg-white px-8 ms-6 rounded-full absolute right-0">
                <img src="src/assets/icons/check.png" alt="" />
              </div>
            </div>

            {/* items */}
            <div className="flex relative items-center bg-[#FCC5C0] rounded-full ps-4 shadow-2xl max-md:w-full md:w-[46%] shadow-[4px_4px_0px_2px_gray]">
              <img className="max-lg:hidden" src="src/assets/icons/menyanyi.png" alt="" />
              <h4 className="max-lg:p-4 text-xl font-bold ms-8">Menyanyi Bersama</h4>
              <div className="max-lg:hidden flex items-center h-full bg-white px-8 ms-6 rounded-full absolute right-0">
                <img src="src/assets/icons/check.png" alt="" />
              </div>
            </div>

            {/* items */}
            <div className="flex relative items-center bg-[#FCC5C0] rounded-full ps-4 shadow-2xl max-md:w-full md:w-[46%] shadow-[4px_4px_0px_2px_gray]">
              <img className="max-lg:hidden" src="src/assets/icons/motorik.png" alt="" />
              <h4 className="max-lg:p-4 text-xl font-bold ms-8">Melatih Motorik Anak</h4>
              <div className="max-lg:hidden flex items-center h-full bg-white px-8 ms-6 rounded-full absolute right-0">
                <img src="src/assets/icons/check.png" alt="" />
              </div>
            </div>

            {/* items */}
            <div className="flex relative items-center bg-[#FCC5C0] rounded-full ps-4 shadow-2xl max-md:w-full md:w-[46%] shadow-[4px_4px_0px_2px_gray]">
              <img className="max-lg:hidden" src="src/assets/icons/makan.png" alt="" />
              <h4 className="max-lg:p-4 text-xl font-bold ms-8">Melatih Makan Sendiri</h4>
              <div className="max-lg:hidden flex items-center h-full bg-white px-8 ms-6 rounded-full absolute right-0">
                <img src="src/assets/icons/check.png" alt="" />
              </div>
            </div>

            {/* items */}
            <div className="flex relative items-center bg-[#FCC5C0] rounded-full ps-4 shadow-2xl max-md:w-full md:w-[46%] shadow-[4px_4px_0px_2px_gray]">
              <img className="max-lg:hidden" src="src/assets/icons/bicara.png" alt="" />
              <h4 className="max-lg:p-4 text-xl font-bold ms-8">Belajar Berbicara</h4>
              <div className="max-lg:hidden flex items-center h-full bg-white px-8 ms-6 rounded-full absolute right-0">
                <img src="src/assets/icons/check.png" alt="" />
              </div>
            </div>

            {/* items */}
            <div className="flex relative items-center bg-[#FCC5C0] rounded-full ps-4 shadow-2xl max-md:w-full md:w-[46%] shadow-[4px_4px_0px_2px_gray]">
              <img className="max-lg:hidden" src="src/assets/icons/bermain.png" alt="" />
              <h4 className="max-lg:p-4 text-xl font-bold ms-8">Bermain Playdough</h4>
              <div className="max-lg:hidden flex items-center h-full bg-white px-8 ms-6 rounded-full absolute right-0">
                <img src="src/assets/icons/check.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
