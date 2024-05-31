import Layout from "../components/Layout";
import Image from "next/image";

export default function Invitation() {
  return (
    <Layout>
      <div className="mx-4 lg:mx-0 animate__animated animate__fadeIn">
        <div className="flex flex-col">
          <div className="flex">
            <div className="m-auto block items-center justify-center text-center mt-8 lg:mt-32 max-w-2xl">
              <p className="handwriting mb-8 text-center text-4xl lg:text-6xl ">
                Bismillahirrahmanirrahim
              </p>
              <video
                src="/prewedding/videos/prewedding.mp4"
                controls
                autoPlay
              />
              <p className="mt-8 mb-2">
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </p>
              <p>
                Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
                menyelenggarakan khitanan putra kami:
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center my-8">
            <div className="flex flex-col mx-8 max-w-xs justify-center items-center text-center">
              <div>
                <Image
                  src="/images/siska.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">
                  Azlan
                </p>
              </div>
            </div>
            <div className="flex flex-col mx-8 mt-8 md:mt-0 max-w-xs justify-center items-center text-center">
              <div>
                <Image
                  src="/images/denny.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">
                  Arjuna
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col justify-center items-center my-8 max-w-4xl mx-auto">
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Save the Date
          </p>
          <p className="mb-4 text-center">
            Khitanan putra kami Insya Allah akan dilaksanakan pada:
          </p>
          <div className="flex flex-col mb-8 p-8 border border-solid border-gray-300 shadow-md rounded-md justify-center text-center">
            <p>Waktu  : Sabtu, 6 Juli 2024</p>
            <p>Tempat : Jl. Lindung 1, RT.004/RW.009
                        Jatiraden, Kec. Jatisampurna,
                        Kota Bks, Jawa Barat 17433
          </div>
          <p className="text-center my-8 md:my-4 md:max-w-xl lg:max-w-3xl">
            Semoga setelah melakukan khitan, putra kami dapat menjadi anak yang saleh
            berbakti kepada kedua orang tua, agama, masyarakat, bangsa, dan negara.
            Amin ya Rabbal’alamin.
          </p>
          <p className="text-center mb-8 md:max-w-xl lg:max-w-3xl">
            Doa restu Bapak/Ibu/Saudara/i merupakan suatu kehormatan dan
            kebahagiaan bagi kami.
          </p>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col max-w-5xl mx-auto my-8 md:max-w-xl lg:max-w-3xl">
          <blockquote className="text-center">
            Rasulullah Saw bersabda: “Sunah kebersihan/kesucian ada lima, yaitu :
            berkhitan, memotong kuku, merapikan kumis, mencabut bulu ketiak,
            dan mencukur bulu kemaluan"
          </blockquote>
          <p className="text-center my-4">(H.R. Bukhari dan Muslim).</p>
        </div>
        <div className="flex flex-col text-center max-w-5xl mx-auto my-8">
          <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p className="mt-4">Kami yang berbahagia,</p>
          <p>Kel. Bapak Muwardi & Ibu Sami</p>
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Azlan & Arjuna
          </p>
        </div>
      </div>
    </Layout>
  );
}
