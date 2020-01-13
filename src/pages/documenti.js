import React from "react";
import { Link } from "gatsby";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
  Container,
  Icon,
  Input,
  Row,
  Col,
  LinkListItem,
  LinkList,
} from "design-react-kit";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Documenti = ({ location }) => (
  <Layout location={location}>
    <SEO title="Documenti e Dati" />
    <main>
      <Container tag="section" id="briciole" className="px-4 my-4">
        <Row>
          <Col className="px-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-container">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/homepage">Home</Link>
                  <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem aria-current="page" active>
                  Documenti e Dati
                </BreadcrumbItem>
              </Breadcrumb>
            </nav>
          </Col>
        </Row>
      </Container>
      <Container tag="section" id="intro" className="px-4 my-4">
        <Row>
          <Col lg={7} className="px-lg-4 py-lg-2">
            <h1>Documenti e Dati</h1>
            <p>
              Donec in consequat nunc. Duis semper fermentum lacus, ac
              condimentum justo auctor a. Nam erat erat, porta vel pharetra in,
              ullamcorper vel turpis.
            </p>
            <div className="form-group mt-5">
              <form>
                <Input
                  id="ricerca-servizi"
                  type="search"
                  label='Cerca contenuti in "Servizi"'
                />
                <span aria-hidden="true" className="autocomplete-icon">
                  <Icon icon="it-search" size="sm" />
                </span>
              </form>
            </div>
            <div id="filtri-ricerca-amministrazione">
              <h6 className="small">Filtri</h6>
              <div className="chip chip-lg">
                <span className="chip-label">Tutto</span>
                <button>
                  <Icon icon="it-close" />
                  <span className="sr-only">Elimina label</span>
                </button>
              </div>
              <div className="ml-2 d-inline">
                <button className="btn btn-icon btn-outline-primary btn-sm align-top">
                  <Icon icon="it-plus" color="primary" />
                  <span>Aggiungi filtro</span>
                </button>
              </div>
            </div>
          </Col>
          <Col lg={{ size: 4, offset: 1 }} className="pt-5 pt-lg-2">
            <LinkList>
              {[
                "Tutti i documenti",
                "Documenti albo pretorio",
                "Modulistica",
                "Documenti funzionamento interno",
                "Normative",
                "Documenti attività politica",
                "Rapporti (tecnici)",
                "Dataset",
              ].map((label, i) => {
                if (i === 0) {
                  return (
                    <LinkListItem key={label} tag="h3" header>
                      {label}
                    </LinkListItem>
                  );
                }
                return (
                  <LinkListItem key={label} tag={Link} to="#">
                    <span>{label}</span>
                  </LinkListItem>
                );
              })}
            </LinkList>
          </Col>
        </Row>
      </Container>
      <section id="in-evidenza">
        <div className="bg-100 py-5">
          <Container className="px-4">
            <Row>
              <Col>
                <h3 className="mb-4 text-primary">In evidenza</h3>
              </Col>
            </Row>
            <Row>
              {[
                { title: "Atti", icon: "it-files", flagIcon: true },
                { title: "Atti", icon: "it-files" },
                { title: "Atti", icon: "it-files" },
                { title: "Comunicazione", icon: "it-files" },
                { title: "Dati", icon: "it-presentation" },
                { title: "Atti", icon: "it-files" },
              ].map(({ title, icon, flagIcon }, i) => (
                <Col size="12" sm={6} lg={4} key={`${title}-${i}`}>
                  <article className="card-wrapper card-space">
                    <Card noWrapper className="card-bg card-big rounded shadow">
                      <div
                        className={`flag-icon ${flagIcon ? "" : "invisible"}`}
                      ></div>
                      <div className="etichetta">
                        <Icon icon={icon} />
                        <span>{title}</span>
                      </div>
                      <CardBody>
                        <CardTitle tag="h5">
                          {i % 2
                            ? "Lorem ipsum dolor sit amet "
                            : `Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…`}
                        </CardTitle>
                        <CardText>
                          {i % 2
                            ? `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua.`
                            : `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed.`}
                        </CardText>
                        <CardReadMore
                          icon="it-arrow-right"
                          text="Leggi di più"
                          to="#"
                          tag={Link}
                        />
                      </CardBody>
                    </Card>
                  </article>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <div className="py-5">
          <Container className="px-4">
            <Row>
              <Col>
                <h3 className="mb-4">Tutti i Servizi</h3>
              </Col>
            </Row>
            <Row>
              {[{ title: "Documenti" }, { title: "Dati" }].map(({ title }) => {
                return (
                  <Col size="12" sm={6} lg={4} key={title}>
                    <Card>
                      <CardBody>
                        <CardTitle tag="h5" className="big-heading">
                          {title}
                        </CardTitle>
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </CardText>
                        <CardReadMore
                          icon="it-arrow-right"
                          text="Leggi di più"
                          to="#"
                          tag={Link}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div className="py-5">
          <Container className="px-4">
            <Row>
              <Col>
                <h3 className="mb-4">Argomenti</h3>
              </Col>
            </Row>
            <Row>
              <div className="col text-center">
                {["Cultura", "Muoversi", "Argomento di esempio"].map(label => (
                  <Link to="#" key={label}>
                    <span className="chip chip-simple chip-primary">
                      <span className="chip-label">{label}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </main>
  </Layout>
);

export default Documenti;
