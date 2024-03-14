import "./page.css";
import UserSvg from "../components/UserSvg";
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
            

            <div className="block-info__preview">
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
              <p className="block-info__text">В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...</p>
            </div>

            <div className="block-info__view">
              <p className="block-info__view__text">В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание женщин (66%), а в возрасте 60-64 лет количество женщин и мужчин.</p>
              <p className="block-info__view__text">Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более высокий процент площади стенок, но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.</p>

              <img src="diagram.png" alt="" />
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
            

            
            <div className="block-info__preview">
              <div className="block-info__info">
                <UserSvg/>
                <div className="block-info__block">
                  <img className="bg_vec49" src="vec50.svg" alt="" />
                  <img className="bg_vec49" src="vec49.svg" alt="" />
                  <span>
                    <span className="bolt">Опасно </span>
                    не наличие заболевания, а обострения?
                  </span>
                </div> 
              </div>
              <p className="block-info__text">Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...</p>
            </div>

            <div className="block-info__view">
              <p className="block-info__view__text">Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов1.</p>
              <p className="block-info__view__text">В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.2 Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.</p>

              <h2 className="block-info__view__title">Пятилетняя выживаемость пациентов</h2>
              
              <div className="block-info__list">

                <div className="block-info__item">
                  <img src="img1.svg" alt="" />
                  <h3 className="">45,5%</h3>
                  <span className="first-text">пациентов с сердечной недостаточностью1</span>
                  <span className="second-text">Популяционное когортное исследование (N=385)</span>
                </div>

                <div className="block-info__item">

                  <img src="img1.svg" alt="" />
                  <h3 className="">45,5%</h3>
                  <span className="first-text">пациентов с сердечной недостаточностью1</span>
                  <div>
                    <p className="first-text2">пациен тов с серде чной недоста точн остью1</p>
                  
                  </div>
                  <span className="second-text">Популяционное когортное исследование (N=385)</span>
                

                  {/* <img src="img2.svg" alt="" /> */}
                  {/* dftghdftgy hrtyj  rtyj rtyj rty jrty  */}
                </div>

                <div className="block-info__item">
                  <img src="img3.svg" alt="" />
                  thrdtfyh rtyj rtyj rtyj 
                </div>

              </div>
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
