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
          <img className="bg_svg" src="vec48.svg" alt="" />
          <h2 className="content__title">ХОБЛ: мифы и реальность</h2>



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
              <div className="block-info__block">
                <img className="bg_vec49" src="vec50.svg" alt="" />
                <img className="bg_vec49" src="vec49.svg" alt="" />
                <span>
                  ХОБЛ болеют 
                  <span className="bolt"> преимущественно мужчины?</span>
                </span>
              </div>
            </div>


            <p className="block-info__text">В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание</p>
            
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
        


        <div className="content">
          {/* <BackgroundSVG/> */}
          <img className="bg_svg" src="vec48.svg" alt="" />
          <h2 className="content__title">
            Терапия ХОБЛ: что в фокусе?
          </h2>
        </div>


      </div>
    </main>
  );
}
