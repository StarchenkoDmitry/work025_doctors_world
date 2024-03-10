import Image from "next/image";
import "./page.css";
import SVG1 from "../components/SVG1";
import UserSvg from "../components/UserSvg";

export default function Home() {
  return (
    <main className="main">
      <div className="main-wrapper">

        <div className="content">
          <SVG1/>

          <div className="content__inner">
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
              />

              <div className="block-info__info">
                <UserSvg/>
                <span>ХОБЛ болеют преимущественно мужчины?</span>
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
                className="block-info__checkbox-flag" 
                htmlFor="block-info__checkbox2"
              />

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
          <SVG1/>

          <div className="content__inner">
            <h2 className="title _static _z-10">
              next blokc
            </h2>
          </div>
          
        </div>
      </div>

      <div className="bg-orange-300">
        next wrapper
      </div>
    </main>
  );
}
