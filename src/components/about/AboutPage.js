import React from 'react';
import sobre from '../../assets/sobre-nos.jpg';
// import { Link } from 'react-router-dom';

const AboutPage = () => (
  <div className="container-fluid">
    <div className="row align-items-center h-100">
      <div className="col-md-6">
        <div className="titulo">
          <h2>Sobre Nós</h2>
        </div>
        <div className="texto" id="scrolltopoleo">
          <p>
            Fundada em 2004 a TOPOLEO –Topografia, Engenharia e Arquitectura Lda
            é uma empresa dedicada ao estudo e execução de projetos de
            topografia, arquitetura e engenharia.
          </p>
          <p>
            Envolvemo-nos intensamente nos nossos projetos desde as ideias
            iniciais até ao licenciamento, projeto de execução e acompanhamento
            de obra e encaramos cada projeto como uma oportunidade, trabalhando
            para superar as expectativas, necessidades e imaginário dos nossos
            clientes.
          </p>
          <p>
            De uma forma participativa, aberta e sempre numa forte proximidade
            com os nossos clientes, os nossos projetos resultam do somatório das
            experiências e conhecimento de todos os intervenientes. Tendo como
            objetivo a melhoria contínua das suas competências, a empresa
            TOPOLEO aposta na formação e qualificação dos membros que integra,
            enquanto empresa, através da formação contínua e experiência
            adquirida ao longo do tempo.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="imagem align-middle justify-content-center align-self-center">
          <img src={sobre} alt="sobre a topoleo" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
