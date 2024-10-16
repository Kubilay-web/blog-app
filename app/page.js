"use client";

import BlogList from "@/components/BlogList/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .ptnew-0 {\n            padding-left: 0rem !important;\n            padding-right: 0rem !important;\n        }\n\n        .ptnew-1 {\n            padding-left: 1rem !important;\n            padding-right: 1rem !important;\n        }\n    ",
          }}
        />
        <div className="se-pre-con" />
        <div className="container">
          <div className="row ptnew">
            <div className="col-lg-8 col-md-7 col-sm-12 align-self-center ptnew2">
              <a className="navbar-brand" href="/" title="Home">
                <div className="hidden">
                  <img
                    className="pera-logo component state2 state1-to-state2"
                    src="/home/images/PM-2023logo-tr.svg"
                    alt="Pera Müzesi Logo"
                  />
                </div>
              </a>
            </div>
            {/*header rightside*/}
            <div className="col-lg-4 col-md-5 d-none d-md-block align-self-center">
              <div className="float-right ">
                <a
                  className="float-left langField"
                  href="https://www.peramuseum.org/"
                  style={{ margin: "2px 0 0 0" }}
                >
                  <img
                    src="/home/images/iconLang.png"
                    style={{ width: "25px", margin: "4px 0 0 0" }}
                  />
                </a>
                <div className="searchbar float-left">
                  <input
                    className="search_input txtSrch1"
                    id="srchBox"
                    type="text"
                    name="txtSrch1"
                    placeholder="Arama..."
                  />
                  <a
                    href="#"
                    id="btnSrchDesktop"
                    className="search_icon btnSrch"
                  >
                    <img
                      src="/home/images/iconSearch.png"
                      style={{ width: "25px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="ml-auto mb-3 navbar navbar-expand-lg navbar-light bg-white border-top border-bottom border-dark sticky-top navbarheight ptnew-0">
            <div
              className="container m-0 p-0   d-lg-none"
              style={{ width: "85%" }}
              id="mobilMenuTopRow"
            >
              <a
                className="navbar-brand  d-lg-none font-weight-bolder mobileSearchHideField"
                style={{ width: "40%" }}
                href="#"
              >
                MENÜ
              </a>
              <div
                className="mobileSearchField input-group d-none"
                style={{ width: "60%" }}
              >
                <input
                  type="text"
                  name="txtSrch2"
                  id="srchBoxMobile"
                  className="form-control border border-secondary border-right-0 txtSrch2"
                  placeholder="Arama ..."
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-white border border-secondary border-left-0">
                    <i className="fa fa-angle-right fa-lg" />
                  </span>
                </div>
              </div>
              <div
                className="pull-right mr-0 pr-4 d-md-none  border-right border-dark"
                id="mobile-search-language"
              >
                <a
                  className="mobileSearchHideField"
                  href="https://www.peramuseum.org/"
                >
                  <img src="/home/images/en_img.svg" alt className="imgnew" />
                </a>
                <a className="linkSearch btnSrch" id="btnSrchMobile" href="#">
                  <img src="/home/images/search.svg" alt className="imgnew" />
                </a>
              </div>
            </div>
            <div
              className="navbar-toggler hamburger hamburger--elastic-r ml-auto"
              id="mobilMenuButton"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </div>
            <div className="collapse navbar-collapse" id="navbarsExample09">
              <ul className="navbar-nav mr-auto justify-content-between w-100 text-uppercase">
                <li className="nav-item dropdown position-static">
                  <a
                    className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={1}
                  >
                    ZİYARET
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/home/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/ziyaret"
                    >
                      ZİYARETİNİZİ PLANLAYIN
                    </a>
                    {/*<a class="dropdown-item dropdown-menuitem" href="#">PERA MÜZESİ DOSTLUK PROGRAMI</a>*/}
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-muzesi-hakkinda"
                    >
                      HAKKIMIZDA
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="https://artshop.peramuzesi.org.tr"
                      target="_out"
                    >
                      ARTSHOP
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/home/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <li className="nav-item dropdown  position-static">
                  <a
                    className="nav-link font-weight-bolder nav-link22 nav-linkbolder"
                    href="/Ajanda"
                  >
                    AJANDA
                  </a>
                </li>
                <li className="nav-item dropdown  position-static menuDropdownTopli menuDropdownTopli">
                  <a
                    className="nav-link dropdown-toggle font-weight-bolder nav-link22 nav-linkbolder"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={2}
                  >
                    SANAT
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/home/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/sergi"
                    >
                      GÜNCEL SERGİLER
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/koleksiyon"
                    >
                      KOLEKSİYONLAR
                    </a>
                    <a
                      id="Projects"
                      className="dropdown-item dropdown-menuitem"
                      href="/projeler/1"
                    >
                      PROJELER
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/sergi/dijital-sergiler"
                    >
                      DİJİTAL SERGİLER
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/sergi/gecmis-yillar"
                    >
                      GEÇMİŞ SERGİLER
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/home/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <span className="bol d-none d-lg-block  bg-dark" />
                <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
                  <a
                    className="nav-link dropdown-toggle nav-linklighter"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={3}
                  >
                    PERA ÖĞRENME
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/home/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-ogrenme"
                    >
                      GÜNCEL PROGRAMLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-ogrenme/gecmis-programlar"
                    >
                      GEÇMİŞ PROGRAMLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-ogrenme-hakkinda"
                    >
                      PERA ÖĞRENME HAKKINDA
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/home/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
                  <a
                    className="nav-link dropdown-toggle nav-linklighter"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={4}
                  >
                    PERA FİLM
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/home/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a className="dropdown-item dropdown-menuitem" href="/film">
                      GÜNCEL PROGRAMLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/film/gecmis-programlar"
                    >
                      GEÇMİŞ PROGRAMLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/pera-film-hakkinda"
                    >
                      PERA FİLM HAKKINDA
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/home/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <li className="nav-item dropdown  position-static menuDropdownTopli nav-linkmedium">
                  <a
                    className="nav-link dropdown-toggle nav-linklighter"
                    href="/yayinlar"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bc={5}
                  >
                    YAYINLAR
                    <img
                      style={{ display: "none" }}
                      className="d-lg-none d-md-none topImg"
                      src="/home/images/leftArrow.svg"
                      alt="sol"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <hr className="mt-0 pt-0 d-md-none d-sm-block" />
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar"
                    >
                      TÜM YAYINLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/2"
                    >
                      SÜRELİ SERGİ KATALOGLARI
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/3"
                    >
                      KOLEKSİYON KATALOGLARI
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/14"
                    >
                      SEMPOZYUM DİZİSİ
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/15"
                    >
                      KÜÇÜK KİTAPLAR DİZİSİ
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/13"
                    >
                      DİJİTAL YAYINLAR
                    </a>
                    <a
                      className="dropdown-item dropdown-menuitem"
                      href="/yayinlar/20"
                    >
                      SUNA VE İNAN KIRAÇ VAKFI YAYINLARI
                    </a>
                    <img
                      className="d-none d-lg-none subImg float-right ml-auto mb-3"
                      style={{ "margin-top": "-40px" }}
                      src="/home/images/xButton.svg"
                      alt="kapat"
                    />
                    <div className="w-100new" />
                  </div>
                </li>
                <li className="nav-item  position-static nav-linkmedium">
                  <a className="nav-link nav-linklighter" href="/Blog">
                    KEŞFET!
                  </a>
                </li>
                <span className="bol  d-none d-lg-block bg-dark" />
              </ul>
              <div
                className="topMenuRight text-right"
                style={{ margin: "0 -16px 0 0" }}
              >
                <a
                  className="pl-2 menu-logo-not-scrolled"
                  href="/"
                  title="Anasayfa"
                >
                  <img
                    className="img-fluid2"
                    src="/home/images/PM-2023logo-tr.svg"
                    alt="Pera Müzesi Logo"
                  />
                </a>
                {/*@todo: replace with company social media details*/}
                <p className="menu-dates-not-scrolled">
                  <span className="todaydate">16 Ekim Çarşamba</span>
                  <br />
                  <span className="todaynote">
                    Ziyaret Saatleri: 10.00 - 19.00 <br /> Bugün öğrencilere
                    ücretsiz.
                  </span>
                </p>
              </div>
            </div>
          </nav>
        </div>
        {/*
    TEST
    */}
        <div
          className="nav-zemin d-none"
          style={{
            "z-index": "1029",
            "background-color": "white",
            width: "100%",
            top: "0",
            position: "fixed",
          }}
        />
        {/*
    <div class="nav-zemin2 d-none" id="uzunzemin" style="z-index: 2; background-color:white;width: 100%;top: 0;position:  fixed;"></div>
  */}
        {/* END TEST */}
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\n    #carouselExampleIndicators .owl-stage-outer {\n        z-index: 2;\n    }\n\n    #carouselExampleIndicators .owl-nav {\n        justify-content: space-between;\n        width: 100%;\n        top: 0;\n        height: 100%;\n        position: absolute;\n        display: flex;\n        z-index: 1;\n    }\n\n        #carouselExampleIndicators .owl-nav button {\n            padding: 0 20px !important;\n            outline: none;\n        }\n\n            #carouselExampleIndicators .owl-nav button.owl-prev {\n                position: relative;\n                left: -70px;\n            }\n\n            #carouselExampleIndicators .owl-nav button.owl-next {\n                position: relative;\n                right: -70px;\n            }\n\n    #carouselExampleIndicators .owl-dots {\n        position: absolute;\n        width: 100%;\n        bottom: 20px;\n        z-index: 2;\n        display: flex;\n        column-gap: 3px;\n        justify-content: center;\n    }\n\n        #carouselExampleIndicators .owl-dots .owl-dot {\n            width: 30px;\n            height: 3px;\n            background: #fff;\n            opacity: .5;\n            transition: opacity .6s ease;\n            cursor: pointer;\n            outline: none;\n        }\n\n            #carouselExampleIndicators .owl-dots .owl-dot.active {\n                opacity: 1;\n            }\n",
          }}
        />
        <style
          media="screen and (max-width:414px)"
          dangerouslySetInnerHTML={{
            __html:
              "\n    .showdesktop {\n        display: none !important;\n    }\n\n    .showmobile {\n        display: block !important;\n    }\n\n    #carouselExampleIndicators .owl-dots .owl-dot {\n        width: 10px;\n    }\n",
          }}
        />
        <style
          media="screen and (min-width:415px)"
          dangerouslySetInnerHTML={{
            __html:
              "\n    .showdesktop {\n        display: block !important;\n    }\n\n    .showmobile {\n        display: none !important;\n    }\n",
          }}
        />
        <div className="container first-row">
          {/*deneme*/}
          <div className="row">
            <div className="col-md-12">
              <div id="carouselExampleIndicators" className>
                <div className="home-slider owl-carousel">
                  <div className="item">
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/hesaplar-ve-tesadufler/1304"
                      target="_self"
                    >
                      <img
                        className=" w-100 showdesktop"
                        src="/home/images/hesaplar-tr.jpg"
                      />
                    </a>
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/hesaplar-ve-tesadufler/1304"
                      target="_self"
                    >
                      <img
                        className=" w-100 showmobile"
                        src="/home/images/1hesaplar-mobile-tr.jpg"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/vera-molnar%E2%80%99in-izinde/1306"
                      target="_self"
                    >
                      <img
                        className=" w-100 showdesktop"
                        src="/home/images/vera-molnar-izinde-tr.jpg"
                      />
                    </a>
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/vera-molnar%E2%80%99in-izinde/1306"
                      target="_self"
                    >
                      <img
                        className=" w-100 showmobile"
                        src="/home/images/mobile-vera-molnarin-izinde-tr.jpg"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      href="https://www.peramuzesi.org.tr/film-program/korkunun-yuzleri/3533"
                      target="_self"
                    >
                      <img
                        className=" w-100 showdesktop"
                        src="/home/images/faces-of-fear-banner-tr.jpg"
                      />
                    </a>
                    <a
                      href="https://www.peramuzesi.org.tr/film-program/korkunun-yuzleri/3533"
                      target="_self"
                    >
                      <img
                        className=" w-100 showmobile"
                        src="/home/images/faces-of-fearmobile-tr.jpg"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      href="https://www.peramuzesi.org.tr/pera-ogrenme/program/tahayyulden-olasiliga/4397"
                      target="_self"
                    >
                      <img
                        className=" w-100 showdesktop"
                        src="/home/images/tahayyulden-olasiliga-sm-02.jpg"
                      />
                    </a>
                    <a
                      href="https://www.peramuzesi.org.tr/pera-ogrenme/program/tahayyulden-olasiliga/4397"
                      target="_self"
                    >
                      <img
                        className=" w-100 showmobile"
                        src="/home/images/tahayyulden-olasiliga-sm-04.jpg"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      href="https://www.peramuzesi.org.tr/pera-ogrenme/program/rastlantinin-duzeni/4395"
                      target="_self"
                    >
                      <img
                        className=" w-100 showdesktop"
                        src="/home/images/rastlantini-duzeni-banner-tr.jpg"
                      />
                    </a>
                    <a
                      href="https://www.peramuzesi.org.tr/pera-ogrenme/program/rastlantinin-duzeni/4395"
                      target="_self"
                    >
                      <img
                        className=" w-100 showmobile"
                        src="/home/images/rastlantins%CC%A7n-du%CC%88zeni-post.jpg"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/kesisen-dunyalar/77"
                      target="_self"
                    >
                      <img
                        className=" w-100 showdesktop"
                        src="/home/images/Web-11.jpg"
                      />
                    </a>
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/kesisen-dunyalar/77"
                      target="_self"
                    >
                      <img
                        className=" w-100 showmobile"
                        src="/home/images/Web-13.jpg"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/osman-hamdi-bey/194"
                      target="_self"
                    >
                      <img
                        className=" w-100 showdesktop"
                        src="/home/images/OHBWeb-15.jpg"
                      />
                    </a>
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/osman-hamdi-bey/194"
                      target="_self"
                    >
                      <img
                        className=" w-100 showmobile"
                        src="/home/images/OHHBMWeb-17.jpg"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/kahve-molasi/160"
                      target="_self"
                    >
                      <img
                        className=" w-100 showdesktop"
                        src="/home/images/Web-02.jpg"
                      />
                    </a>
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/kahve-molasi/160"
                      target="_self"
                    >
                      <img
                        className=" w-100 showmobile"
                        src="/home/images/Web-04.jpg"
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/agirlik-ve-olcu-sanati/1271"
                      target="_self"
                    >
                      <img
                        className=" w-100 showdesktop"
                        src="/home/images/avs-banner-tr.jpg"
                      />
                    </a>
                    <a
                      href="https://www.peramuzesi.org.tr/sergi/agirlik-ve-olcu-sanati/1271"
                      target="_self"
                    >
                      <img
                        className=" w-100 showmobile"
                        src="/home/images/avs-mobile-tr.jpg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3" style={{ height: "1px" }} />
          <div className="row mt-3">
            {/* <div className="col-lg-4 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/pera-ogrenme/atolye/tablom-cicek-aciyor/5830"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/tablom-cicek-aciyor-hp%20%281%29.jpg"
                    alt="Tablom Çiçek Açıyor <br>19 Ekim 2024 / 10.30"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      Tablom Çiçek Açıyor <br />
                      19 Ekim 2024 / 10.30
                    </h3>
                    <p className="card-text">
                      Hesaplar ve Tesadüfler sergisini rehberli tur eşliğinde
                      gezen çocuklar, sergideki rengarenk eserlerden ilhamla
                      keçeli kalemle boyadıkları kahve filtrelerini ıslatıyor ve
                      farklı renklerin birleşimiyle tesadüfi desenler
                      oluşturuyor. Kuruduktan sonra birbirinden farklı çiçeklere
                      dönüşen filtreleri kartonlara yapıştırıyor.{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div> */}
            {/* <div className="col-lg-4 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/pera-ogrenme/atolye/degisken-ve-oznel-sans-faktoru-ile-hikaye-yazimi/5854"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
             
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/sans-faktoru-hp-copy.jpg"
                    alt="<Değişken ve Öznel <br> Şans Faktörü ile Hikâye Yazımı <br> 1 Kasım 2024 / 19.00"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      <span>
                        Değişken ve Öznel <br /> Şans Faktörü ile Hikâye Yazımı
                      </span>{" "}
                      <br />
                      <span>1 Kasım 2024 / 19.00</span>
                    </h3>

                    <p className="card-text">
                      Bir hikâye bize sunulan seçimlere göre mi şekillenir yoksa
                      hikâye anlatıcısının da bir söz payı var mıdır? Vera
                      Molnár'ın algoritma ve matematiğin entegrasyonunu içinde
                      barındıran sanat pratiğini temeline alan atölyede
                      katılımcılar kendilerine dağıtılan kartlardan birer hikâye
                      kurmaya çalışıyor. Katılımcılar tamamen şans eseri
                      sıralanan kartlara müdahale ederek özgün hikayelerini
                      kurmayı deniyorlar.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                    
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div> */}
            {/* <div className="col-lg-4 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/pera-ogrenme/atolye/gorselden-isitsele-muzikli-kolektif-kompozisyon/5853"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
        
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/muzikli-kolektif-1-hp.jpg"
                    alt="Görselden İşitsele: Müzikli Kolektif Kompozisyon <br> 18 Ekim 2024 / 19.00"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      Görselden İşitsele: Müzikli Kolektif Kompozisyon <br /> 18
                      Ekim 2024 / 19.00
                    </h3>
                    <p className="card-text">
                      Müzik terapisti Danny D. Kora yürütücülüğünde gerçekleşen
                      atölyede, aktif katılımı merkeze alarak müzikal bir keşfe
                      çıkılıyor. Katılımcılar; şarkı yazımı ve müzikal iletişim
                      gibi teknikleri kullanıyor; Vera Molnár, Maurer ve
                      Rákóczy'nin çalışmalarından ilham alarak yer
                      değiştirebilen şekiller aracılığıyla bir müzik
                      kompozisyonu oluşturuyor.{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div> */}
            <BlogList />
            <div className="col-lg-8 col-md-12 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/etkinlik/yazar-editor-sohbetleri-kursad-kiziltug-ile-guney-cegin/6461"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/yazar-editor-sohbetleri-ekim%20%281%29.jpg"
                    alt="Yazar-Editör Sohbetleri <br> Kürşad Kızıltuğ ile Güney Çeğin <br> 24 Ekim 2024 / 18.00"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      Yazar-Editör Sohbetleri <br /> Kürşad Kızıltuğ ile Güney
                      Çeğin <br /> 24 Ekim 2024 / 18.00
                    </h3>
                    <p className="card-text">
                      Pera Müzesi ve Atlas Publishing Lab iş birliğiyle
                      düzenlenen Yazar-Editör Sohbetleri’nin Ekim ayı konukları
                      editörler Kürşad Kızıltuğ ve Güney Çeğin. Konuşmacılar,
                      yakın dönemde Livera Yayınları’ndan çıkan “Anarşist
                      Tahayyül” kitap dizisinin çıkış fikri ve hazırladıkları
                      seçkinin detaylarıyla birlikte Türkiye yayıncılığında
                      anarşist literatürün tarihi üzerine sohbet edecek.{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/film/gunah-tohumu/4671/3533"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/Carrie-hp.jpg"
                    alt="Pera Film <br> Günah Tohumu <br>  19 Ekim 2024 / 17.00"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      Pera Film <br /> Günah Tohumu <br /> 19 Ekim 2024 / 17.00
                    </h3>
                    <p className="card-text">
                      Stephen King’in ünlü romanından, usta yönetmen Brian De
                      Palma tarafından sinemaya uyarlanan bu korku klasiği;
                      ergenlik, zorbalık ve dışlanmanın yarattığı tahribatları
                      irdeleyen karanlık bir büyüme hikâyesini takip ediyor.İki
                      dalda Oscar Ödülü’ne aday gösterilen Günah Tohumu’nda içe
                      kapanık ve utangaç bir genç olan Carrie White’ın başından
                      geçen sıradışı olaylara tanıklık ederiz.{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-8 col-md-12 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/film/pesimdeki-seytan/4670/3533"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/it-follows--1-.jpg"
                    alt="Pera Film <br> Peşimdeki Şeytan <br> 18 Ekim 2024 / 19.00"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      Pera Film <br /> Peşimdeki Şeytan <br /> 18 Ekim 2024 /
                      19.00
                    </h3>
                    <p className="card-text">
                      Jay Height, sıradan bir hayat süren 19 yaşında bir genç
                      kadındır. Yeni tanıştığı Hugh ile yaşadığı romantik bir
                      buluşma, korkunç bir kâbusa dönüşür. Hugh, Jay'e, cinsel
                      ilişki yoluyla lanet bulaştırmıştır. Jay’i adım adım takip
                      edip ona yaklaşmaya çalışan doğaüstü bir varlık, eğer
                      Jay'e ulaşırsa, genç kadının hayatını sonlandıracaktır.
                      Jay’in tek kurtuluş yolu, laneti bir başkasına
                      geçirmektir.{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/blog/istanbul-oncesi-sonrasi/1605"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/istanbul-b-a-hp.jpg"
                    alt="İstanbul: Öncesi & Sonrası"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      İstanbul: Öncesi &amp; Sonrası
                    </h3>
                    <p className="card-text">
                      Suna ve İnan Kıraç Vakfı Fotoğraf Koleksiyonu’ndan
                      seçtiğimiz, 1850’lerden 1980’lere tarihlenen İstanbul
                      fotoğraflarındaki manzara ve mekanları, bu yerlerin
                      günümüzdeki görünümleriyle birlikte sunuyoruz! İstanbul’un
                      geçtiğimiz 170 yıldaki değişimiyle farklı duygu ve
                      düşüncelere kapılacaksınız.{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/etkinlik/ustalarin-izinde-artin-garabet-minasyan-ve-david-ohannesyan/6453"
                target="_blank"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/ustalarin-izinde-st-3.jpg"
                    alt="Ustaların İzinde <br> Artin & Garabet Minasyan ve David Ohannesyan <br> 18 Ekim 2024 / 18.30"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      Ustaların İzinde <br /> Artin &amp; Garabet Minasyan ve
                      David Ohannesyan <br /> 18 Ekim 2024 / 18.30
                    </h3>
                    <p className="card-text">
                      Pera Müzesi, Kahve Molası sergisi kapsamında Ustaların
                      İzinde başlıklı rehberli sergi turu serisi düzenliyor.
                      Serinin üçüncü turunda, Kütahyalı Ermeni ustaların çini ve
                      seramik zanaatına katkıları ele alınıyor. Artin ve Garabet
                      Minasyan kardeşler ile David Ohannesyan’ın üretimleri
                      teknik ve bezeme açısından koleksiyondaki eserlerle
                      karşılaştırmalı olarak inceleniyor.{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/etkinlik/roma-donemi-anadolusunda-seyahat/6455"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/roma-doneminde-gorsel.jpg"
                    alt="Roma Dönemi Anadolusunda Seyahat <br> 25 Ekim 2024 / 11.00"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      Roma Dönemi Anadolusunda Seyahat <br /> 25 Ekim 2024 /
                      11.00
                    </h3>
                    <p className="card-text">
                      Antik Çağ’da, tıpkı günümüzde olduğu gibi, insanlar farklı
                      sebeplerle sürekli hareket hâlindeydi; yeni fırsatlar,
                      ticaret ya da keşif amacıyla seyahat ediyorlardı. Bu
                      yolculukların gerçekleşebilmesi için güvenilir taşıtlar,
                      dayanıklı binek hayvanları ve sağlam yollar ile güvenli
                      limanlar gibi hayati altyapı unsurlarına ihtiyaç vardı.
                      Elbette, bu altyapının sağlamlığı ve güzergahların
                      güvenliği, her yolculuğun kaderini belirleyen kilit
                      unsurlar arasında yer almaktaydı.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-12 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/etkinlik/324-constantinus%E2%80%99un-secimi-ve-yeni-roma%E2%80%99nin-kurulusu/6451"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/324-banner-tr.jpg"
                  />
                  <div className="card-body">
                    <h3 className="card-title" />
                    <p className="card-text"> </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/yayin/hesaplar-ve-tesadufler/3276"
                target="_blank"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/0002216_hesaplar-ve-tesadufler_1000.jpeg"
                    alt="Hesaplar ve Tesadüfler"
                  />
                  <div className="card-body">
                    <h3 className="card-title">Hesaplar ve Tesadüfler</h3>
                    <p className="card-text">
                      Sergiye eşlik eden yayında Kinga Rózsa Hamvai’nin küratör
                      metninin yanı sıra Kerem Ozan Bayraktar’ın başlığını Vera
                      Molnár’ın sözlerinden alan “Düzeni seviyorum ama ona
                      katlanamıyorum” adlı metni, Molnár’ın pratiğini algoritma
                      sanatının tarihsel arka planıyla beraber ele alıyor.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/yayin/ters-yuz-p%C7%9Dr%C9%90/1276"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/ters-yuz-artshop.jpg"
                    alt="Ters Yüz PƎRⱯ <br> Mekânlar ve Metinlerde Denemeler"
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      Ters Yüz PƎRⱯ <br /> Mekânlar ve Metinlerde Denemeler
                    </h3>
                    <p className="card-text">
                      Sergiye eşlik eden yayında, küratörler Prof. Aslı Serbest,
                      Prof. Mona Mahall ve Yelta Köm’ün serginin kavramsal
                      çerçevesini ele aldığı ortak yazısının yanı sıra Begüm
                      Özden Fırat ve Çisel Karacebe, Mary Louise Pratt, Birte
                      Kleine-Benne, Isabel Vila-Cabanes’in makaleleri yer
                      alıyor.{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a
                href="https://www.peramuzesi.org.tr/yayin/gelecek-hatiralari/1273"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/gelecek-hatiralari-anasayfa.jpg"
                    alt="Gelecek Hatıraları"
                  />
                  <div className="card-body">
                    <h3 className="card-title">Gelecek Hatıraları</h3>
                    <p className="card-text">
                      Gelecek Hatıraları sergisi, Suna ve İnan Kıraç Vakfı
                      Kütahya Çini ve Seramikleri Koleksiyonu’ndan yola çıkarak
                      arşive gelecek-yönelimli bir bakış açışıyla yaklaşıyor.
                      Sergiye eşlik eden yayında, küratör Ulya Soley’in kaleme
                      aldığı kapsamlı metnin yanı sıra Glenn Adamson’ın
                      "Yarınlar Ülkesinde Seramik” başlıklı, seramiklerin
                      kökenlerine dair bilgilere ışık tutan metni yer alıyor.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-12 col-md-6">
              <a
                href="https://artshop.peramuzesi.org.tr/"
                target="_self"
                className="no-link"
              >
                <div className="card mb-4 border-0">
                  {/*shadow-sm eklenince güzel duruyor*/}
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    src="/home/images/0000724_artshop-05.jpeg"
                  />
                  <div className="card-body">
                    <h3 className="card-title" />
                    <p className="card-text"> </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted" />
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary d-sm-block d-md-none"
                        >
                          Göster
                        </button>
                        {/*<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="col-md-12 mt-3"
            style={{ margin: "0 0 40px 0" }}
          ></div>
        </div>
        <div className="cookie-bar">
          <img src="/home/images/close2.png" className="cookie-close" />
          Web sitemizi kullanarak çerezlere izin vermektesiniz. Ayrıntılı bilgi
          için <a href="/cerez-politikasi">çerez politikamızı</a>{" "}
          inceleyebilirsiniz.
        </div>
        <div className="footer-background pb-lg-3">
          <div className="container">
            <div className="row" style={{ height: "30px" }} />
            <div className="row">
              <div className="col-lg-3 col-md-12" style={{ color: "#b5b5b5" }}>
                <div className="row">
                  <div className="col-lg-12 mb-3 col-md-6">
                    <div className="footer-left-section">
                      <h5 className="font-weight-bold mb-3 pt-3">
                        ZİYARET SAATLERİ
                      </h5>
                      <p>Salı - Cumartesi 10.00 - 19.00</p>
                      <p>Cuma 10.00 - 22.00</p>
                      <p>Pazar 12.00 - 18.00</p>
                      <p>Müze Pazartesi</p>
                      <p>günü kapalıdır.</p>
                      {/*<h6 class="pt-3">Uzun Cuma</h6>
                          <p>18:00 - 22:00 arası ücretsiz olarak</p>
                          <p>ziyaret edilebilir.</p>*/}
                      <h5 className="pt-3">Genç Çarşamba</h5>
                      <p>Çarşamba günleri öğrenciler müzeyi</p>
                      <p>ücretsiz ziyaret edebilir.</p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 m-0">
                    <div className="footer-left-section">
                      <h5 className="font-weight-bold mb-3">GİRİŞ ÜCRETLERİ</h5>
                      <p>Tam: 200 TL</p>
                      <p>İndirimli: 100 TL</p>
                      <p>Grup: 150 TL (toplu 10 bilet ve üstü)</p>
                    </div>
                  </div>
                  <div className="vl h-100 d-none d-lg-block bg-secondary" />
                </div>
                <hr className="d-lg-none d-block" />
              </div>

              <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 right-text-footer plnew">
                <div className="row align-items-center mt-lg-5 mt-2">
                  {/*<div class="col-md-7 col-sm-8 col-xs-12 col-lg-8  d-flex justify-content-center order-2 order-md-first">*/}
                  <div className="col-md-7 col-sm-8 col-xs-12 col-lg-7  d-flex order-2 order-md-first social-margin-right">
                    <ul className="social-network social-circle pt-2 plnew3">
                      <li>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/PeraMuzesi.Museum"
                          className="icoFacebook"
                          title="Facebook"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://twitter.com/PeraMuzesi"
                          className="icoTwitter"
                          title="Twitter"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/peramuzesi/"
                          className="icoInstagram"
                          title="Instagram"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.youtube.com/user/PeraMuzesi"
                          className="icoYoutube"
                          title="Youtube"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://open.spotify.com/user/peram%C3%BCzesi"
                          className="icoRss"
                          title="Spotify"
                          rel="noreferrer nofollow"
                        >
                          <i className="fa fa-spotify " />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://artsandculture.google.com/partner/pera-museum?hl=tr"
                          className="icoGoogleArtsCulture"
                          title="Google Arts & Culture"
                          rel="noreferrer nofollow"
                        >
                          <i
                            className="fa fa-university"
                            style={{ margin: "0 0 0 2px" }}
                          />
                        </a>
                      </li>
                      {/* <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li> */}
                    </ul>
                  </div>
                  <div className="col-md-5 col-sm-4 col-xs-12 col-lg-5 float-left order-1 plnew2">
                    <form action="/e-bulten-kayit" method="post">
                      <input
                        name="__RequestVerificationToken"
                        type="hidden"
                        defaultValue="IQVv8lAn_wd0Y-ZdM2Ky7cGziw40LRH3T_b2Oq-U-LE11KpxPO8iXnIvMwjhb7UNu3tplW4pdi7gicDQvuKudAbbS1aJNfVF0F8sp72eKgw1"
                      />{" "}
                      <h2
                        className="font-weight-bold"
                        style={{ "font-size": "14px", color: "#333333" }}
                      >
                        E-BÜLTENE ÜYE OLMAK İSTİYORUM
                      </h2>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="E-Posta Adresiniz"
                          aria-label="E-Posta Adresiniz"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary bg-danger px-4"
                            type="submit"
                          >
                            <i className="font-weight-bold text-white fa fa-angle-right fa-lg" />
                          </button>
                        </div>
                      </div>
                    </form>{" "}
                  </div>
                </div>
                <hr />
                <div className="altmenu row justify-content-between pt-sm-1 pt-lg-5 pt-md-2 mt-lg-2 mt-5">
                  <div className="col-md-3 col-6">
                    <h5>
                      <a href="/pera-muzesi-hakkinda">Hakkımızda</a>
                    </h5>
                    <h5>
                      <a href="/basin-bultenleri">Basın</a>
                    </h5>
                  </div>
                  <div className="col-md-3 col-6">
                    <h5>
                      <a href="/ziyaret">İletişim</a>
                    </h5>
                    <h5>
                      <a href="/icerik/engelli-ziyaretciler/1532">
                        {" "}
                        Engelli Ziyaretçiler
                      </a>
                    </h5>
                  </div>
                  <div className="col-md-3 col-6">
                    <h5>
                      <a href="/icerik/acik-pozisyonlar/1531">
                        {" "}
                        Açık Pozisyonlar
                      </a>
                    </h5>
                    <h5>
                      <a href="/faq"> Sıkça Sorulan Sorular</a>
                    </h5>
                  </div>
                  <div className="col-md-3 col-6">
                    <h5>
                      <a href="/mekan-kiralama">Mekan Kiralama</a>
                    </h5>
                    <h5>
                      <a href="/kvkk">KVKK</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row pt-lg-2">
              <div
                className="col-lg-3 col-12"
                style={{ "margin-top": "40px", "margin-bottom": "40px" }}
              >
                <a
                  href="https://www.sunaveinankiracvakfi.org.tr/"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="float-left pr-2"
                    src="/home/images/svikv-tr-logo.svg"
                    height={40}
                    alt="Suna ve İnan Kıraç Vakfı Logo"
                  />
                </a>
                {/*<div class="vl h-100 d-none d-lg-block bg-secondary"></div>*/}
              </div>
              <div
                className="col-lg-4 col-12 plnew4"
                style={{
                  "margin-top": "40px",
                  "margin-bottom": "40px",
                  "padding-left": "60px",
                }}
              >
                <a
                  href="https://www.iae.org.tr/"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="float-left pr-2"
                    src="/home/images/iae-tr-logo.svg"
                    height={40}
                    alt="İstanbul Araştırmaları Enstitüsü Logo"
                  />
                </a>
                <hr className="d-md-none d-sm-block dpn" />
              </div>
              <div
                className="col-lg-5 col-12 w-100  h-100 d-flex justify-content-md-end justify-content-first pt-2"
                style={{ "margin-top": "40px", "margin-bottom": "40px" }}
              >
                <p
                  style={{
                    "font-size": "13px",
                    color: "#333333",
                    "font-weight": "500",
                  }}
                >
                  © 2024 Tüm Hakları Saklıdır |{" "}
                  <a className="no-link" href="/kullanim-kosullari">
                    Kullanım Koşulları
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
        {/*Required JavaScript Libraries */}
      </div>
    </div>
  );
}
