
import "../Components/css/Footer.css"

function Footer() {
  return (
    <footer>
      <section className="myFooter" >
        <div className="myFooterLogo">
          <img className="myFooterLogo" src="src\assets\LogoMy.jpg" alt="" />
        </div>
        <div className="firstRow">
          <h2>SERVICES</h2>
          <ul>
            <li>
            Individual Psychotherapy for Adults
            </li>
            <li>
            Individual Psychotherapy for Adolescents
            </li>
            <li>
            Parent Counseling
            </li>
            <li>
            Psychotherapy            </li>
          </ul>
        </div>
        <div className="secondRow" >
          <h2>CONTACT US
          </h2>
          <ul>
            <li>
              ella.psy@gmail.com            </li>
            <li>
              0046916133
            </li>
            <li>
              Sjösaväg, Bandalen
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;