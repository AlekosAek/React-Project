import "../Components/css/HomePage.css"

function HomePage() {
  return (
    <>
      <section className="landing-page">
        <article className="heroImage" >
          <img className="myHero" src="src\assets\heroImage.jpg" alt="heroImage" />
        </article>
        <h2>Services </h2>
        <article className="main-section">
          <article className="first-text-img" >
            <img src="src\assets\enilikes.jpg" alt="" />
            <h3>Individual Psychotherapy for Adults</h3>
            <p>Individual psychotherapy is a unique journey, a dynamic experience of self-discovery,
             which will give you the answers you are seeking.</p>
            <a href="#" target="_blank">Learn more</a>
          </article>
          <article className="second-text-img" >
            <img src="src\assets\aniligi.jpg" alt="Service Image" />
            <h3>Individual Psychotherapy for Adults            </h3>
            <p >ΤIndividual Psychotherapy for Adults
            Individual psychotherapy is a unique journey, a dynamic experience of self-discovery, which will give you the answers you are seeking.</p>
            <a href="#" target="_blank">Learn more            </a>
          </article>
          <article className="third-text-img" >
            <img src="src\assets\simvouleftiki.jpg" alt="Service Image" />
            <h3>Parent Counseling
            </h3>
            <p >The family is a dynamic system with a life course. Its members communicate, bond with ties of love, and perform specific roles.</p>
            <a href="#" target="_blank">Learn more
            </a>
          </article>
          <article className="fourth-text-img" >
            <img src="src\assets\diadiktio.jpg " alt="Service Image" />
            <h3>Online Psychotherapy
            </h3>
            <p >Online psychotherapy is a recognized and accepted method of therapeutic approach. It can be just as effective as in-person psychotherapy and follows the same rules for confidentiality and privacy.</p>
            <a href="#" target="_blank">Learn more</a>
          </article>
        </article>
      </section>
    </>
  );
}

export default HomePage;