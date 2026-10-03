import type { CSSProperties } from "react";

import Effects from "./Effects";
import Navigation from "@/components/Navigation";

import {
  personal,
  heroStats,
  heroProjects,
  projects,
  experience,
  stack,
  languages,
} from "@/lib/data";

const v = (o: Record<string, string | number>) =>
  o as CSSProperties;

const orbDots: Array<[number, number]> = [
  [0, 96],
  [36, 112],
  [72, 96],
  [108, 112],
  [144, 96],
  [180, 112],
  [216, 96],
  [252, 112],
  [288, 96],
  [324, 112],
];

const eqBars = [
  "40%",
  "78%",
  "55%",
  "95%",
  "30%",
  "70%",
  "50%",
  "88%",
  "42%",
  "65%",
  "35%",
  "80%",
];

const sfCells = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
];

export default function Home() {
  return (
    <>
      <div className="page-hero">

        <Navigation />

        <header className="hero">
          <div className="w">
            <div className="hg">
              <div>
                <p className="k mb-[22px]">
                  <b>●</b> {personal.role} — {personal.location}
                </p>

                <h1>
                  <span>{personal.firstName}</span>
                  <span className="o">{personal.lastName}</span>
                </h1>

                <p className="pos">
                  {personal.description}
                </p>

                <div className="cta">
                  <a className="bt p" href="#work">
                    Ver projetos
                  </a>

                  <a
                    className="bt"
                    href={personal.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    className="bt"
                    href={personal.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>

                  <a className="bt" href="#contact">
                    Contacto
                  </a>
                </div>
              </div>

              <div className="art" id="art">
                <div className="stage" id="stage">
                  <div className="profile">
                    <img
                      src={personal.photo}
                      alt={personal.name}
                      className="profile-image"
                    />

                    <div className="profile-overlay" />

                    <div className="profile-label">
                      <span className="status-dot" />
                      {personal.role}
                    </div>
                  </div>

                  <span className="tag tag-lithe">
                    <i>●</i> Lithe PHP
                  </span>

                  <span className="tag tag-bando">
                    <i>●</i> Bando CMS
                  </span>

                  <span className="tag tag-baza">
                    <i>●</i> Baza
                  </span>

                  <span className="tag tag-rialse">
                    <i>●</i> Rialse
                  </span>
                </div>
              </div>
            </div>

            <div className="hs">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  {stat.value}
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>

      <main id="top">
        {/* HERO */}


        {/* PROJECTS */}
        <section id="work">
          <div className="w">
            <div className="sh">
              <h2>
                Projetos
                <br />
                <em>selecionados</em>
              </h2>

              <p className="k">
                Projetos reais
                <br />
                e produtos construídos
              </p>
            </div>

            {projects.map((project, index) => {
              if (index > 4) return null;

              return (
                <article
                  key={project.name}
                  className={`pj ${index % 2 === 0 ? "l" : "r"
                    } rv`}
                >
                  <div className="art2">
                    {project.artwork === "lithe" && (
                      <>
                        <div className="lithe-code">
                          <div className="code-line">
                            <span className="fn">get</span>
                            <span className="muted">(</span>
                            <span className="str">'/users/:id'</span>
                            <span className="muted">, </span>
                            <span className="kw">function</span>
                            <span className="muted"> (</span>
                            <span className="var">$req</span>
                            <span className="muted">, </span>
                            <span className="var">$res</span>
                            <span className="muted">) {"{"}</span>
                          </div>

                          <div className="code-line indent">
                            <span className="var">$id</span>
                            <span className="op"> = </span>
                            <span className="var">$req</span>
                            <span className="muted">-&gt;</span>
                            <span className="method">param</span>
                            <span className="muted">(</span>
                            <span className="str">'id'</span>
                            <span className="muted">);</span>
                          </div>

                          <div className="code-line indent">
                            <span className="var">$user</span>
                            <span className="op"> = </span>
                            <span className="type">User</span>
                            <span className="muted">::</span>
                            <span className="method">find</span>
                            <span className="muted">(</span>
                            <span className="var">$id</span>
                            <span className="muted">);</span>
                          </div>

                          <div className="code-line blank" />

                          <div className="code-line indent">
                            <span className="kw">if</span>
                            <span className="muted"> (!</span>
                            <span className="var">$user</span>
                            <span className="muted">) {"{"}</span>
                          </div>

                          <div className="code-line indent-2">
                            <span className="kw">throw</span>{" "}
                            <span className="type">HttpException</span>
                            <span className="muted">(</span>
                            <span className="num">404</span>
                            <span className="muted">, </span>
                            <span className="str">'Page not found.'</span>
                            <span className="muted">);</span>
                          </div>

                          <div className="code-line indent">
                            <span className="muted">{"}"}</span>
                          </div>

                          <div className="code-line blank" />

                          <div className="code-line indent">
                            <span className="kw">return</span>{" "}
                            <span className="var">$res</span>
                            <span className="muted">-&gt;</span>
                            <span className="method">view</span>
                            <span className="muted">(</span>
                            <span className="str">'profile'</span>
                            <span className="muted">, </span>
                            <span className="fn">compact</span>
                            <span className="muted">(</span>
                            <span className="str">'user'</span>
                            <span className="muted">));</span>
                          </div>

                          <div className="code-line">
                            <span className="muted">{"});"}</span>
                          </div>
                        </div>

                        <span className="cmd">
                          <b>$</b> composer require lithephp/lithephp
                        </span>

                        <span className="k">
                          Ecossistema modular
                        </span>
                      </>
                    )}

                    {project.artwork === "bando" && (
                      <>
                        <div className="bando-code">
                          <div className="code-line">
                            <span className="kw">import</span>{" "}
                            <span className="muted">{"{"} </span>
                            <span className="fn">defineCollection</span>
                            <span className="muted">, </span>
                            <span className="fn">text</span>
                            <span className="muted">, </span>
                            <span className="fn">image</span>
                            <span className="muted">, </span>
                            <span className="fn">richText</span>
                            <span className="muted">{"} "}</span>
                            <span className="kw">from</span>{" "}
                            <span className="str">'bando-cms'</span>
                          </div>

                          <div className="code-line blank" />

                          <div className="code-line">
                            <span className="kw">export const</span>{" "}
                            <span className="var">post</span>
                            <span className="op"> = </span>
                            <span className="fn">defineCollection</span>
                            <span className="muted">({"{"}</span>
                          </div>

                          <div className="code-line indent">
                            <span className="key">name</span>
                            <span className="muted">: </span>
                            <span className="str">'posts'</span>
                            <span className="muted">,</span>
                          </div>

                          <div className="code-line indent">
                            <span className="key">fields</span>
                            <span className="muted">: {"{"}</span>
                          </div>

                          <div className="code-line indent-2">
                            <span className="key">title</span>
                            <span className="muted">: </span>
                            <span className="fn">text</span>
                            <span className="muted">({"{"} </span>
                            <span className="key">required</span>
                            <span className="muted">: </span>
                            <span className="bool">true</span>
                            <span className="muted"> {"}"})</span>
                            <span className="muted">,</span>
                          </div>

                          <div className="code-line indent-2">
                            <span className="key">cover</span>
                            <span className="muted">: </span>
                            <span className="fn">image</span>
                            <span className="muted">(),</span>
                          </div>

                          <div className="code-line indent-2">
                            <span className="key">body</span>
                            <span className="muted">: </span>
                            <span className="fn">richText</span>
                            <span className="muted">(),</span>
                          </div>

                          <div className="code-line indent-2">
                            <span className="key">published</span>
                            <span className="muted">: </span>
                            <span className="fn">boolean</span>
                            <span className="muted">(),</span>
                          </div>

                          <div className="code-line indent">
                            <span className="muted">{"}"}</span>
                          </div>

                          <div className="code-line">
                            <span className="muted">{"});"}</span>
                          </div>
                        </div>

                        <span className="cmd">
                          <b>$</b> npm i bando-cms
                        </span>

                        <span className="k">
                          TypeScript · Collections · Studio
                        </span>
                      </>
                    )}


                    {project.artwork === "baza" && (
                      <div className="relative h-full w-full overflow-hidden">
                        <img
                          src="/projects/baza.png"
                          alt="Interface da aplicação Baza"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    )}

                    {project.artwork === "bvf" && (
                      <div className="relative h-full w-full overflow-hidden">
                        <img
                          src="/projects/bvf.png"
                          alt="Interface da Bad Vibes Forever"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    )}

                    {project.artwork === "rialse" && (
                      <div className="relative h-full w-full overflow-hidden">
                        <img
                          src="/projects/rialse.png"
                          alt="Interface da Rialse"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="pn">
                    <span className="k">
                      <b>{project.number}</b> — {project.type}
                    </span>

                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    {project.stats && (
                      <div className="st">
                        {project.stats.map((stat) => (
                          <div key={stat.label}>
                            {stat.value}
                            <span>{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {project.technologies && (
                      <div className="ch">
                        {project.technologies.map(
                          (technology) => (
                            <span key={technology}>
                              {technology}
                            </span>
                          ),
                        )}
                      </div>
                    )}

                    {project.links && (
                      <div className="ln">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}

            {/* PROJECTS 06 / 07 */}
            <div className="mg mt-[clamp(16px,2.5vw,32px)]">
              {projects.slice(5).map((project) => (
                <div
                  key={project.name}
                  className="mn rv"
                >
                  <span className="k">
                    <b>{project.number}</b> — {project.type}
                  </span>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  {project.links && (
                    <div className="ln">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="w rv">
            <p className="k">
              <b>●</b> Sobre
            </p>

            <p className="stmt">
              Full-stack, da arquitetura e backend às
              interfaces, bases de dados e APIs.{" "}
              <span>
                Produtos construídos do zero e levados
                para produção.
              </span>
            </p>

            <p className="sub">
              {personal.about}
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="w">
            <div className="sh">
              <h2>
                O meu
                <br />
                <em>percurso</em>
              </h2>
            </div>

            <div className="ex-list">
              {experience.map((item) => (
                <div
                  className="ex rv"
                  key={`${item.company}-${item.title}`}
                >
                  <div>
                    <span className="k">
                      {item.period}
                    </span>

                    <h3>{item.title}</h3>

                    <span className="k">
                      <b>{item.company}</b> ·{" "}
                      {item.location}
                    </span>
                  </div>

                  <div>
                    <p>{item.description}</p>

                    {item.technologies && (
                      <div className="ch">
                        {item.technologies.map(
                          (technology) => (
                            <span key={technology}>
                              {technology}
                            </span>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack">
          <div className="w">
            <div className="sh">
              <h2>
                A minha
                <br />
                <em>stack</em>
              </h2>
            </div>

            <div className="sk rv">
              {stack.map((item) => (
                <div key={item.number}>
                  <span className="k">
                    <b>{item.number}</b> {item.name}
                  </span>

                  <p>{item.description}</p>
                </div>
              ))}

              <div>
                <span className="k">
                  <b>08</b> Idiomas
                </span>

                <p>
                  {languages
                    .map((language) => `${language.name} — ${language.level}`)
                    .join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="ct">
          <div className="w">
            <p className="k">
              <b>●</b> Aberto a conversas
            </p>

            <h2 className="mt-4">
              Do código.
              <br />
              <em>À produção.</em>
            </h2>

            <a
              className="big"
              href={`mailto:${personal.email}`}
            >
              {personal.email}
            </a>

            <div className="ln mt-6">
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href={personal.links.baza}
                target="_blank"
                rel="noopener noreferrer"
              >
                Baza
              </a>

              <a
                href={personal.links.lithe}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lithe
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="w">
          <span className="k">
            © 2026 {personal.name}
          </span>

          <span className="k">
            {personal.location}
          </span>
        </div>
      </footer>

      <Effects />
    </>
  );
}