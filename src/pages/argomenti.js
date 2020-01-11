import React from "react";
import { Link } from "gatsby";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardTitle,
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

const Argomenti = ({ location }) => (
  <Layout location={location}>
    <SEO title="Lista Argomenti" />
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
                  Lista Argomenti
                </BreadcrumbItem>
              </Breadcrumb>
            </nav>
          </Col>
        </Row>
      </Container>
      <Container tag="section" id="intro" className="px-4 my-4">
        <Row>
          <Col lg={7} className="px-lg-4 py-lg-2">
            <h1>Argomenti</h1>
            <p>
              Gli argomenti rispondono a un'esigenza di organizzazione dei
              contenuti del sito istituzionale per temi e rappresentano le
              principali categorie di contenuti, informazioni e documenti
              specifici.
            </p>
            <div className="form-group mt-5">
              <form>
                <Input
                  id="ricerca-servizi"
                  type="search"
                  label="Cerca argomenti"
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
            <LinkList className="footer-list clearfix">
              {[
                "Più consultati",
                "Muoversi",
                "La città che cambia",
                "Cultura",
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
        <div className="section section-muted section-inset-shadow">
          <div className="section-content">
            <Row>
              <Col>
                <h3 className="mb-4">In evidenza</h3>
              </Col>
            </Row>
            <Row className="mt-lg-4">
              <Col>
                <div class="it-grid-list-wrapper it-image-label-grid it-masonry">
                  <div class="card-columns">
                    {[
                      { title: "Cultura", height: 488 },
                      { title: "Lavorare", height: 184 },
                      { title: "Spazi verdi", height: 264 },
                      { title: "Partecipare", height: 144 },
                      { title: "Muoversi", height: 264 },
                      { title: "Sport", height: 184 },
                      { title: "Famiglia", height: 488 },
                    ].map(({ title, height }) => (
                      <Col xs={12} key={title}>
                        <div class="it-grid-item-wrapper it-grid-item-overlay">
                          <Link to="#">
                            <div className="img-responsive-wrapper">
                              <div className="img-responsive">
                                <div className="img-wrapper">
                                  <img
                                    src={`https://picsum.photos/376/${height}`}
                                    alt="Alternative description"
                                    title="Image Title"
                                  />
                                </div>
                              </div>
                            </div>
                            <span class="it-griditem-text-wrapper">
                              <h3>{title}</h3>
                            </span>
                          </Link>
                        </div>
                      </Col>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-lg-4">
              <Col>
                <nav
                  className="pagination-wrapper justify-content-center"
                  aria-label="Esempio di navigazione della pagina"
                >
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        <Icon icon="it-chevron-left" />
                        <span className="sr-only">Pagina precedente</span>
                      </Link>
                    </li>
                    {[1, 2, 3].map((page, i) => {
                      const aria = !i ? { "aria-current": "page" } : {};
                      return (
                        <li className="page-item">
                          <Link className="page-link" to="#" {...aria}>
                            {page}
                          </Link>
                        </li>
                      );
                    })}
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        <span className="sr-only">Pagina successiva</span>
                        <Icon icon="it-chevron-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section>
        <div className="section">
          <div className="section-content">
            <Row>
              <Col>
                <h3 className="mb-4">Tutti gli argomenti</h3>
              </Col>
            </Row>
            <Row className="mt-lg-4">
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
                {[
                  "Agevolazioni per la casa",
                  "Animali",
                  "Anziani",
                  "Assistenza e inclusione",
                  "Associazioni",
                  "Bambini e ragazzi",
                  "Cantieri e progetti",
                  "Comune",
                  "Comunicare con il Comune",
                ].map(title => (
                  <Card
                    noWrapper
                    teaser
                    className="rounded shadow align-items-center"
                  >
                    <Icon icon="it-help-circle" />
                    <CardBody>
                      <CardTitle tag="h5">
                        <Link to="#">{title}</Link>
                      </CardTitle>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Row>
            <Row className="mt-lg-4">
              <Col>
                <nav
                  className="pagination-wrapper justify-content-center"
                  aria-label="Esempio di navigazione della pagina"
                >
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        <Icon icon="it-chevron-left" />
                        <span className="sr-only">Pagina precedente</span>
                      </Link>
                    </li>
                    {[1, 2, 3, 4, 5].map((page, i) => {
                      const aria = !i ? { "aria-current": "page" } : {};
                      return (
                        <li className="page-item">
                          <Link className="page-link" to="#" {...aria}>
                            {page}
                          </Link>
                        </li>
                      );
                    })}
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        <span className="sr-only">Pagina successiva</span>
                        <Icon icon="it-chevron-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Argomenti;
