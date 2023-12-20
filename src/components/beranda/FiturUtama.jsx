export const FiturUtama = () => {
  return (
    <>
     <div className="grid py-36 bg-light">
  <div className="text-center">
    <h4 className="text-4xl font-bold mb-4">Fitur Utama di <span className="text-[#937DC2]">MyParent</span></h4>
    <p className="text-2xl">Gunakan Fitur Untuk Mempermudah Merawat Bayi Anda</p>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-14 lg:px-8 p-8"> {/* Remove lg:flex-row */}
    <div className="w-full md:w-1/2 lg:w-2/6 flex flex-col justify-center items-center text-start p-8 rounded-xl shadow-[4px_8px_40px_2px_#C689C6] mx-2"> {/* Menambahkan mx-2 untuk margin horizontal */}
      <img src="src/assets/icons/note.png" alt="" className="mb-4 w-14" />
      <h4 className="font-bold py-2">Catatan Aktivitas Bayi</h4>
      <p>Satu tempat untuk melihat semua kemajuan dan kegembiraan yang dibawa oleh si kecil dalam perjalanan pertumbuhannya</p>
    </div>

    <div className="w-full md:w-1/2 lg:w-2/6 flex flex-col justify-center items-center text-start p-8 rounded-xl shadow-[4px_8px_40px_2px_#C689C6] mx-2"> {/* Menambahkan mx-2 untuk margin horizontal */}
      <img src="src/assets/img/catatan.png" alt="" className="mb-4 w-14" />
      <h4 className="font-bold py-2">Daily Activities</h4>
      <p>Satu tempat untuk melihat semua kemajuan dan kegembiraan yang dibawa oleh si kecil dalam perjalanan pertumbuhannya</p>
    </div>

    <div className="w-full md:w-1/2 lg:w-2/6 flex flex-col justify-center items-center text-start p-8 rounded-xl shadow-[4px_8px_40px_2px_#C689C6] mx-2"> {/* Menambahkan mx-2 untuk margin horizontal */}
      <img src="src/assets/img/camera.png" alt="" className="mb-4 w-14" />
      <h4 className="font-bold py-2">Video Parenting</h4>
      <p>Satu tempat untuk melihat semua kemajuan dan kegembiraan yang dibawa oleh si kecil dalam perjalanan pertumbuhannya</p>
    </div>
  </div>
</div>


    </>
  )
}