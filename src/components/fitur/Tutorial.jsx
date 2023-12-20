export const Tutorial = () => {
  return (
    <div
      className="h-fit py-24 lg:px-38"
      style={{
        backgroundImage: 'url("src/assets/img/video-bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center mb-20">
        <h4 className="text-5xl font-bold mt-20 mb-3">Video Education</h4>
      </div>

      <div className="flex max-lg:flex-wrap justify-center items-center gap-8 p-4 py-24">
        <div className="grid lg:w-1/2">
            <h4 className="text-center text-6xl font-bold mb-8 ">Testimonials</h4>
            <p className="text-justify leading-loose lg:px-10 md:px-20 px-10 xl:px-2 text-2xl">Video education ini adalah untuk memudahkan orang tua memahami apa saja yang harus si lakukan saat menjaga anak anak, dengan adanya video education ini semoga bisa membantu para orang tua untuk mendidik anak anaknya serta meningkatkan potensi anak sejak dini.</p>
        </div>

        <div className="flex justify-end  lg:w-1/2">
            <iframe
                title="YouTube Video"
                height="315"
                src="https://www.youtube.com/embed/3i8mv4aX3ZA"
                frameBorder="0"
                allowFullScreen
                className="w-screen md:w-[560px]"
            ></iframe>
        </div>
      </div>
    </div>
  );
};
