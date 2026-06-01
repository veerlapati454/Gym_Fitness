import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

// import strengthImg from "../../assets/strength.jpg";
// import crossfitImg from "../../assets/crossfit.jpg";
// import yogaImg from "../../assets/yoga.jpg";
// import cardioImg from "../../assets/cardio.jpg";
// import trainerImg from "../../assets/trainer.jpg";
// import nutritionImg from "../../assets/nutrition.jpg";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      location: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">#1 FITNESS CENTER</span>

          <h1>
            BUILD YOUR <span>DREAM BODY</span>
          </h1>

          <p>
            Transform your body and mind with expert trainers,
            premium equipment, and personalized workout programs.
          </p>

          <div className="hero-buttons">
            <Link to="/get-started" className="primary-btn">
              Get Started
            </Link>

            <Link to="/programs" className="secondary-btn">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* FITNESS PROGRAMS */}
      <section className="section">
        <h2>Fitness Programs</h2>

        <div className="grid">

          <div className="card">
            {/* <img src={strengthImg} alt="Strength Training" /> */}
            <h3>Strength Training</h3>
            <p>
              Build muscle, increase power, and improve body composition
              with structured resistance workouts.
            </p>
          </div>

          <div className="card">
            {/* <img src={crossfitImg} alt="CrossFit" /> */}
            <h3>CrossFit Training</h3>
            <p>
              High-intensity workouts that improve endurance,
              athletic performance, and strength.
            </p>
          </div>

          <div className="card">
            {/* <img src={yogaImg} alt="Yoga" /> */}
            <h3>Yoga & Flexibility</h3>
            <p>
              Improve mobility, posture, and mental wellness
              through guided yoga sessions.
            </p>
          </div>

          <div className="card">
            {/* <img src={cardioImg} alt="Cardio" /> */}
            <h3>Cardio Fitness</h3>
            <p>
              Burn calories efficiently and improve cardiovascular
              health using modern equipment.
            </p>
          </div>

          <div className="card">
            {/* <img src={trainerImg} alt="Personal Training" /> */}
            <h3>Personal Training</h3>
            <p>
              One-on-one coaching designed to maximize your
              fitness transformation journey.
            </p>
          </div>

          <div className="card">
            {/* <img src={nutritionImg} alt="Nutrition Coaching" /> */}
            <h3>Nutrition Coaching</h3>
            <p>
              Customized meal plans and nutrition guidance
              tailored to your goals.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section alt">
        <h2>Why Choose Us</h2>

        <div className="grid">

          <div className="card">
            <h3>Certified Trainers</h3>
            <p>
              Learn from experienced professionals who create
              personalized fitness plans for every member.
            </p>
          </div>

          <div className="card">
            <h3>Modern Equipment</h3>
            <p>
              Train using the latest strength and cardio machines
              designed for maximum performance.
            </p>
          </div>

          <div className="card">
            <h3>Flexible Memberships</h3>
            <p>
              Choose affordable plans that suit your schedule,
              budget, and fitness goals.
            </p>
          </div>

          <div className="card">
            <h3>Supportive Community</h3>
            <p>
              Join a motivating environment where members help
              each other achieve success.
            </p>
          </div>

        </div>
      </section>

      {/* FACILITIES */}
      <section className="section">
        <h2>Gym Facilities</h2>

        <div className="grid">

          <div className="card">
            <h3>🏋️ Free Weight Zone</h3>
            <p>
              Professional dumbbells, barbells, squat racks,
              and strength stations.
            </p>
          </div>

          <div className="card">
            <h3>🏃 Cardio Arena</h3>
            <p>
              Treadmills, bikes, rowers, and ellipticals for
              effective cardio sessions.
            </p>
          </div>

          <div className="card">
            <h3>🚿 Locker Rooms</h3>
            <p>
              Spacious lockers, clean showers, and changing
              facilities for members.
            </p>
          </div>

          <div className="card">
            <h3>🧘 Group Classes</h3>
            <p>
              Participate in Yoga, HIIT, Zumba, and
              instructor-led training sessions.
            </p>
          </div>

          <div className="card">
            <h3>🥗 Nutrition Support</h3>
            <p>
              Personalized meal guidance and nutritional
              planning for better results.
            </p>
          </div>

          <div className="card">
            <h3>🅿️ Secure Parking</h3>
            <p>
              Convenient parking facilities available
              for all gym members.
            </p>
          </div>

        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="section alt">
        <h2>Membership Plans</h2>

        <div className="grid">

          <div className="card">
            <h3>Basic</h3>
            <h1>₹999</h1>
            <p>Access to gym equipment and locker facility.</p>
          </div>

          <div className="card featured">
            <h3>Premium</h3>
            <h1>₹1999</h1>
            <p>Personal trainer, diet plan, and group classes.</p>
          </div>

          <div className="card">
            <h3>Elite</h3>
            <h1>₹2999</h1>
            <p>All premium benefits with priority support.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact Us</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit
          </button>
        </form>

        {success && (
          <p className="success">
            Submitted Successfully ✅
          </p>
        )}
      </section>
    </>
  );
}