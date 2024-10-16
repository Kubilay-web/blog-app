import { assets, blog_data } from "@/Assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = ({ title, description, category, image, id }) => {
  return (
    <div className="col-lg-4 col-md-6">
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
              <span>{title}</span>
              <br />
              <span>1 Kasım 2024 / 19.00</span>
            </h3>

            <p className="card-text">{description}</p>
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
    </div>
  );
};

export default page;
