import React from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import topoleo1 from '../../assets/topoleo1.jpg';
import topoleo2 from '../../assets/topoleo2.jpg';
import topoleo3 from '../../assets/topoleo3.jpg';
import topoleo5 from '../../assets/topoleo5.jpg';

const ServicosPage = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center h-100">
        <div className="col-md-6">
          <div className="titulo">
            <h2>Servicos</h2>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Topografia
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="textobullet" id="scrolltopoleo">
                      <ul>
                        <li>Levantamentos topográficos de terrenos</li>
                        <li>Levantamentos Arquitetónicos</li>
                        <li>Nivelamento de alta precisão</li>
                        <li>Cálculos de áreas e volumes</li>
                        <li>Georreferenciação (GPS)</li>
                        <li>Apoio Cartografia</li>
                        <li>
                          Cadastro Predial – Retificação de Áreas de Terrenos
                        </li>
                        <li>Implantação e Monitorização de Edifícios</li>
                        <li>Acompanhamento de Obra</li>
                        <li>Fiscalização de Obras</li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Arquitetura
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className="textobullet" id="scrolltopoleo">
                      <ul>
                        <li>Levantamentos topográficos de terrenos</li>
                        <li>Levantamentos Arquitetónicos</li>
                        <li>Nivelamento de alta precisão</li>
                        <li>Cálculos de áreas e volumes</li>
                        <li>Georreferenciação (GPS)</li>
                        <li>Apoio Cartografia</li>
                        <li>
                          Cadastro Predial – Retificação de Áreas de Terrenos
                        </li>
                        <li>Implantação e Monitorização de Edifícios</li>
                        <li>Acompanhamento de Obra</li>
                        <li>Fiscalização de Obras</li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Engenharia
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div className="textobullet" id="scrolltopoleo">
                      <ul>
                        <li>Projeto de Estabilidade</li>
                        <li>Projeto de Contenção Periférica;</li>
                        <li>Estudo de Comportamento Térmico</li>
                        <li>Estudo de Comportamento Acústico</li>
                        <li>Projeto de Abastecimento de Água</li>
                        <li>Projeto de Drenagem de Águas Residuais</li>
                        <li>Projeto de Drenagem de Águas Pluviais</li>
                        <li>Projeto de Abastecimento de Gás</li>
                        <li>Projeto de Segurança Contra Incêndios</li>
                        <li>Projeto das Instalações Elétricas</li>
                        <li>Projeto ITED</li>
                        <li>Projeto AVAC</li>
                        <li>Certificação energética</li>
                        <li>Direção técnica de obra</li>
                        <li>Direção de fiscalização de obra</li>
                        <li>Coordenação de Segurança</li>
                        <li>Planos de Segurança e Saúde – PSS</li>
                        <li>
                          Desenvolvimento de Planos de Segurança e Saúde – DPSS
                        </li>
                        <li>
                          Implementação de Planos de Segurança e Saúde – IPSS
                        </li>
                        <li>Segurança e Higiene no Trabalho</li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Consultoria
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <div className="textobullet" id="scrolltopoleo">
                      <ul>
                        <li>Gestão de Obras</li>
                        <li>Caderno de Encargos</li>
                        <li>Medições</li>
                        <li>Orçamentos</li>
                        <li>Revisão de Projetos</li>
                        <li>Análise de Propostas</li>
                        <li>
                          Levantamento e relatório de anomalias em edifícios
                        </li>
                        <li>Produção de relatórios e recomendações técnicas</li>
                        <li>
                          Verificação da concordância com as normas e
                          regulamentos
                        </li>
                        <li>Pareceres técnicos</li>
                        <li>Avaliações Imobiliárias</li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
        <div className="col-md-6">
          <div className="imagem">
            <Carousel>
              <div>
                <img src={topoleo1} alt="topoleo1" />
              </div>
              <div>
                <img src={topoleo2} alt="topoleo2" />
              </div>
              <div>
                <img src={topoleo3} alt="topoleo3" />
              </div>
              <div>
                <img src={topoleo5} alt="topoleo5" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicosPage;
