import Image from "next/image";
import "./page.css";
import BackgroundSVG from "../components/BackgroundSVG";
import UserSvg from "../components/UserSvg";
import BlockFingerSVG from "../components/BlockFingerSVG";
import FingerSVG from "../components/FingerSVG";
import HeaderSVG from "../components/HeaderSVG";

export default function Home() {
  return (
    <main className="main">

      <HeaderSVG/>

      <div className="main-wrapper">

        <div className="content">

          <div className="content__inner">

            {/* <BackgroundSVG/>  */}
            {/* <img
              src="test.svg"
              className="border-fuchsia-700"
              alt=""
              height={100}
              width={100}
            /> */}
            <div style={{
              backgroundImage: "url('test.svg')"
            }}>
              dfgfdgf
            </div>

            <h2 className="content__title">
              ХОБЛ: мифы и реальность
            </h2>

            <div className="block-info">
              <input 
                className="block-info__checkbox"
                type="checkbox"
                id="block-info__checkbox1"
              />
              <label 
                className="block-info__checkbox-flag" 
                htmlFor="block-info__checkbox1"
              >
                <FingerSVG/>
              </label>
              
              
              <div className="block-info__info">
                <UserSvg/>
                <span>ХОБЛ болеют преимущественно мужчины?</span>
                <div className="bloo">
                  <span>ХОБЛ болеют преимущественно мужчины?</span>

                  {/* <svg width="297" height="116" viewBox="0 0 297 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M254.139 115.5H0V1H254.139L295 50.8145L254.139 115.5Z" fill="url(#paint0_linear_0_1)"/>
                    <path d="M0 114.5H254.139L295 50.5L254.139 1" stroke="url(#paint1_linear_0_1)" stroke-width="3"/>
                    <defs>
                      <linearGradient id="paint0_linear_0_1" x1="295" y1="50.7293" x2="2.95041e-07" y2="50.7293" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D8EFFF"/>
                        <stop offset="1" stop-color="white"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_0_1" x1="295" y1="1.00001" x2="-10.2769" y2="66.874" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#01457A"/>
                        <stop offset="0.432292" stop-color="#43A7C7"/>
                        <stop offset="0.744792" stop-color="#BCD77E"/>
                        <stop offset="1" stop-color="#BCD77E" stop-opacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg> */}

                </div>
              </div>

              <div className="block-info__text">
                <p>В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание</p>
              </div>
            </div>

            <div className="block-info">
              <input 
                className="block-info__checkbox"
                type="checkbox"
                id="block-info__checkbox2"
              />
              <label 
                className="block-info__checkbox-flag flag2" 
                htmlFor="block-info__checkbox2"
              >
                <FingerSVG/>
              </label>

              <div className="block-info__info">
                <span>ХОБЛ болеют преимущественно мужчины?</span>
              </div>

              <div className="block-info__text">
                <p>В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание</p>
              </div>
            </div>


          </div>

        </div>
        
        <div className="content">
          <BackgroundSVG/>

          <div className="content__inner">
            <h2 className="title _static _z-10">
              next blokc
            </h2>
          </div>
          
        </div>
      </div>

      {/* <div className="bg-orange-300">
        next wrapper
      </div> */}
    </main>
  );
}
