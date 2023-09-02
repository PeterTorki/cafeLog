import 'bootstrap/dist/css/bootstrap.min.css';
import about from "../imgsComponent/about.png"

export default function AboutUs() {
  return (
    <section>
      <div class="container">
        <div class="row  align-content-center p-5">
          <div class="col-lg-5 col-12 p-2">
            <img class="img-fluid"  src={about}  alt="..." />
          </div>
          <div className="col-lg-2 col-1">

          </div>
          <div class="col-lg-5 col-12 p-2">
            <h2>About us</h2>
            <p>
            Opening a Coffee Shop is challenging work. It can certainly sound like a novel idea.
            We created an online Coffee Shop "ChillCup" to help people order using delivery
            ,They have a full managable User System: Login, Sign Up
            ,Add and Remove To Cart and also have favorites Section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
