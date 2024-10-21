import "../Components/css/HomePage.css";
import { useState } from "react";

function HomePage() {
  const [showMoreFirst, setShowMoreFirst] = useState(false);
  const [showMoreSecond, setShowMoreSecond] = useState(false);
  const [showMoreThird, setShowMoreThird] = useState(false);
  const [showMoreFourth, setShowMoreFourth] = useState(false);

  return (
    <>
      <section className="landing-page">
        <article className="heroImage">
          <img className="myHero" src="src/assets/heroImage.jpg" alt="heroImage" />
        </article>

        <h2>Services</h2>

        <article className="main-section">
          <article className="first-text-img">
            {/* Image and content for the hoverable div */}
            <div
              className="hoverableDiv"
              onMouseEnter={() => setShowMoreFirst(true)}
            >
              <img src="src/assets/enilikes.jpg" alt="Service" />

              {/* Conditionally render the paragraph based on the showMore state */}
              {showMoreFirst && (
                <p className="myDetails">
                  <h3>Individual Psychotherapy for Adults</h3>

                  Individual psychotherapy is a unique journey, a dynamic experience of self-discovery,
                  which will give you the answers you are seeking.

                  <a className="learnButton" href="#" target="_blank">Learn more</a>
                </p>
              )}
            </div>

          </article>

          <article className="second-text-img">
            <div
              className="hoverableDiv"
              onMouseEnter={() => setShowMoreSecond(true)}
            >
              {showMoreSecond &&(
                <p className="myDetails">
                  <h3>Individual Psychotherapy for Adults</h3>

                  The journey from childhood to adulthood is characterized as a transitional period during which you,
                  as adolescents, are called to mentally cope with the significant changes that arise from it.
                  <a className="learnButton" href="#" target="_blank">Learn more</a>
                </p>
                  )}
              <img src="src/assets/aniligi.jpg" alt="Service Image" />

            </div>
          </article>

          <article className="third-text-img">
          <div
              className="hoverableDiv"
              onMouseEnter={() => setShowMoreThird(true)}
            >
              <img src="src/assets/enilikes.jpg" alt="Service" />

              {/* Conditionally render the paragraph based on the showMore state */}
              {showMoreThird && (
                <p className="myDetails">
                  <h3>Parent Counseling</h3>
                  The family is a dynamic system with a life course. Its members communicate, bond with ties of love,
                    and perform specific roles.

                  <a className="learnButton" href="#" target="_blank">Learn more</a>
                </p>
              )}
            </div>
          </article>

          <article className="fourth-text-img">
          <div
              className="hoverableDiv"
              onMouseEnter={() => setShowMoreFourth(true)}
            >
              {showMoreFourth &&(
                <p className="myDetails">
                  <h3>Online Psychotherapy</h3>
                  Online psychotherapy is a recognized and accepted method of therapeutic approach. It can be just
                  as effective as in-person psychotherapy and follows the same rules for confidentiality and privacy.
                  <a className="learnButton" href="#" target="_blank">Learn more</a>
                </p>
                  )}
              <img src="src/assets/aniligi.jpg" alt="Service Image" />

            </div>

          </article>
        </article>
      </section>
    </>
  );
}

export default HomePage;
