import React from "react";
import { Link } from "gatsby";
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Icon,
  LinkList,
  LinkListItem,
} from "design-react-kit";

const Footer = ({ town }) => (
  <footer className="it-footer">
    <div className="it-footer-main">
      <Container>
        <section>
          <Row className="clearfix">
            <Col sm={12}>
              <div className="it-brand-wrapper">
                <Link to="#" className="">
                  <Icon icon="it-pa" />
                  <div className="it-brand-text">
                    <h2 className="no_toc">{town.name}</h2>
                    <h3 className="no_toc d-none d-md-block">{town.tagLine}</h3>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col lg={3} md={3} sm={6} className="pb-2">
              <h4>
                <Link to="#" title="Vai alla pagina: Amministrazione">
                  Amministrazione
                </Link>
              </h4>
              <LinkList className="footer-list clearfix">
                {[
                  "Giunta e consiglio",
                  "Aree di competenza",
                  "Dipendenti",
                  "Luoghi",
                  "Associazioni e società partecipate",
                ].map(label => (
                  <LinkListItem
                    key={label}
                    href="#"
                    title={`Vai alla pagina: ${label}`}
                  >
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
            <Col lg={3} md={3} sm={6} className="pb-2">
              <h4>
                <Link to="#" title="Vai alla pagina: Servizi">
                  Servizi
                </Link>
              </h4>
              <LinkList className="footer-list clearfix">
                {[
                  "Pagamenti",
                  "Sostegno",
                  "Domande e iscrizioni",
                  "Segnalazioni",
                  "Autorizzazioni e concessioni",
                  "Certificati e dichiarazioni",
                ].map(label => (
                  <LinkListItem
                    key={label}
                    href="#"
                    title={`Vai alla pagina: ${label}`}
                  >
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
            <Col lg={3} md={3} sm={6} className="pb-2">
              <h4>
                <Link to="#" title="Vai alla pagina: Novità">
                  Novità
                </Link>
              </h4>
              <LinkList className="footer-list clearfix">
                {["Notizie", "Eventi", "Comunicati Stampa"].map(label => (
                  <LinkListItem
                    key={label}
                    href="#"
                    title={`Vai alla pagina: ${label}`}
                  >
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <h4>
                <Link to="#" title="Vai alla pagina: Documenti">
                  Documenti
                </Link>
              </h4>
              <LinkList className="footer-list clearfix">
                {[
                  "Progetti e attività",
                  "Delibere, determine e ordinanze",
                  "Bandi",
                  "Concorsi",
                  "Albo pretorio",
                ].map(label => (
                  <LinkListItem
                    key={label}
                    href="#"
                    title={`Vai alla pagina: ${label}`}
                  >
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
          </Row>
        </section>
        <section className="py-4 border-white border-top">
          <Row>
            <Col lg={3} md={3} className="pb-2">
              <h4>
                <Link to="#" title="Vai alla pagina: Amministrazione">
                  Amministrazione trasparente
                </Link>
              </h4>
              <p>
                I dati personali pubblicati sono riutilizzabili solo alle
                condizioni previste dalla direttiva comunitaria 2003/98/CE e dal
                d.lgs. 36/2006
              </p>
            </Col>
            <Col lg={3} md={3} className="pb-2">
              <h4>
                <Link to="#" title="Vai alla pagina: Contatti">
                  Contatti
                </Link>
              </h4>
              <p>
                <strong>{town.name}</strong>
                <br />
                {town.address} Codice fiscale / P. IVA: 000000000
              </p>
              <LinkList className="footer-list clearfix">
                {[
                  "Posta Elettronica Certificata",
                  "URP - Ufficio Relazioni con il Pubblico",
                ].map(label => (
                  <LinkListItem
                    key={label}
                    href="#"
                    title={`Vai alla pagina: ${label}`}
                  >
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
            <Col lg={3} md={3} className="pb-2">
              <h4>
                <Link to="#" title="Vai alla pagina: Newsletter">
                  Newsletter
                </Link>
              </h4>
              <Form action="#" className="form-newsletter" method="post">
                <Label
                  className="text-white font-weight-semibold active"
                  htmlFor="input-newsletter"
                  style={{ transition: "none 0s ease 0s" }}
                >
                  Iscriviti per riceverla
                </Label>
                <Input
                  id="input-newsletter"
                  name="input-newsletter"
                  placeholder="mail@example.com"
                  type="email"
                />
                <Button color="primary" className="btn-icon" type="submit">
                  <Icon icon="it-mail" color="white" />
                  <span>Iscriviti</span>
                </Button>
              </Form>
            </Col>
            <Col lg={3} md={3} className="pb-2">
              <h4>
                <Link to="#" title="Vai alla pagina: Seguici su">
                  Seguici su
                </Link>
              </h4>
              <ul className="list-inline text-left social">
                <li className="list-inline-item">
                  <Link className="p-2 text-white" to="#" target="_blank">
                    <Icon
                      icon="it-designers-italia"
                      color="white"
                      size="sm"
                      className="align-top"
                    />
                    <span className="sr-only">Designers Italia</span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="p-2 text-white" to="#" target="_blank">
                    <Icon
                      icon="it-twitter"
                      color="white"
                      size="sm"
                      className="align-top"
                    />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="p-2 text-white" to="#" target="_blank">
                    <Icon
                      icon="it-medium"
                      color="white"
                      size="sm"
                      className="align-top"
                    />
                    <span className="sr-only">Medium</span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="p-2 text-white" to="#" target="_blank">
                    <Icon
                      icon="it-behance"
                      color="white"
                      size="sm"
                      className="align-top"
                    />
                    <span className="sr-only">Behance</span>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
    <div className="it-footer-small-prints clearfix">
      <Container>
        <h3 className="sr-only">Sezione Link Utili</h3>
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          <li className="list-inline-item">
            <Link to="#" title="Note Legali">
              Media policy
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" title="Note Legali">
              Note legali
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" title="Privacy-Cookies">
              Privacy policy
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" title="Mappa del sito">
              Mappa del sito
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  </footer>
);

export default Footer;
