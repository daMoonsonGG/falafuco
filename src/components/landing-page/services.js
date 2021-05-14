import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div id="services" className="services">
        <div className="services__title">
          <span>Reinventa la visibilidad digital de tu negocio</span>
        </div>
        <div className="services__group">
          <div className="services__group__service">
            <div className="services__group__service__title">
              <h3>Redes Sociales</h3>
              <i className="far fa-thumbs-up"></i>
            </div>
            <div className="services__group__service__text">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
            </div>
          </div>
          <div className="services__group__service">
            <div className="services__group__service__title">
              <h3>Sitio Web</h3>
              <i className="fas fa-globe-europe"></i>
            </div>
            <div className="services__group__service__text">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
            </div>
          </div>
          <div className="services__group__service">
            <div className="services__group__service__title">
              <h3>Imagen Digital</h3>
              <i className="fas fa-camera-retro"></i>
            </div>
            <div className="services__group__service__text">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
            </div>
          </div>
          <div className="services__group__service">
            <div className="services__group__service__title">
              <h3>Visibilidad Local</h3>
              <i className="far fa-eye"></i>
            </div>
            <div className="services__group__service__text">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
