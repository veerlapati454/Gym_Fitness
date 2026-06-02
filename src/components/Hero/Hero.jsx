import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import strengthImg from "../../assets/strength_training.webp";
import crossfitImg from "../../assets/cross_fit.webp";
import yogaImg from "../../assets/yoga.webp";
import cardioImg from "../../assets/cardio.webp";
import trainerImg from "../../assets/personal.webp";
import nutritionImg from "../../assets/nutrition.webp";
import cardio_arenaImg from "../../assets/cardio_arena.webp"
import communityImg from "../../assets/community.webp"
import certifiedImg from "../../assets/cretified.webp"
import free_weightImg from "../../assets/free_weight_zone.webp"
import group_classesImg from "../../assets/group_classes.webp"
import locker_roomsImg from "../../assets/locker_rooms.webp"
import membership_cardImg from "../../assets/membership_card.webp"
import nutrition_supportImg from "../../assets/nutrition_support.webp"
import secure_parkingImg from "../../assets/secure_parking.webp"
import modernImg from "../../assets/modern_equipment.webp"


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
            <img src={strengthImg} alt="Strength Training" />
            <h3>Strength Training</h3>
            <p>
              Build muscle, increase power, and improve body composition
              with structured resistance workouts.
            </p>
          </div>

          <div className="card">
            <img src={crossfitImg} alt="CrossFit" />
            <h3>CrossFit Training</h3>
            <p>
              High-intensity workouts that improve endurance,
              athletic performance, and strength.
            </p>
          </div>

          <div className="card">
            <img src={yogaImg} alt="Yoga" />
            <h3>Yoga & Flexibility</h3>
            <p>
              Improve mobility, posture, and mental wellness
              through guided yoga sessions.
            </p>
          </div>

          <div className="card">
            <img src={cardioImg} alt="Cardio" />
            <h3>Cardio Fitness</h3>
            <p>
              Burn calories efficiently and improve cardiovascular
              health using modern equipment.
            </p>
          </div>

          <div className="card">
            <img src={trainerImg} alt="Personal Training" />
            <h3>Personal Training</h3>
            <p>
              One-on-one coaching designed to maximize your
              fitness transformation journey.
            </p>
          </div>

          <div className="card">
            <img src={nutritionImg} alt="Nutrition Coaching" />
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
            <img src={certifiedImg} alt="Certified Trainers" />
            <h3>Certified Trainers</h3>
            <p>
              Learn from experienced professionals who create
              personalized fitness plans for every member.
            </p>
          </div>

          <div className="card">
            <img src={modernImg} alt="MemberShip" />
            <h3>Modern Equipment</h3>
            <p>
              Train using the latest strength and cardio machines
              designed for maximum performance.
            </p>
          </div>

          <div className="card">
            <img src={membership_cardImg} alt="MemberShip" />
            <h3>Flexible Memberships</h3>
            <p>
              Choose affordable plans that suit your schedule,
              budget, and fitness goals.
            </p>
          </div>

          <div className="card">
            <img src={communityImg} alt="Community support" />
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
            <img src={free_weightImg} alt="Free Weight Zone" />
            <h3>🏋️ Free Weight Zone</h3>
            <p>
              Professional dumbbells, barbells, squat racks,
              and strength stations.
            </p>
          </div>

          <div className="card">
            <img src={cardio_arenaImg} alt="Cardio Arena" />
            <h3>🏃 Cardio Arena</h3>
            <p>
              Treadmills, bikes, rowers, and ellipticals for
              effective cardio sessions.
            </p>
          </div>

          <div className="card">
            <img src={locker_roomsImg} alt="Locker Rooms" />
            <h3>🚿 Locker Rooms</h3>
            <p>
              Spacious lockers, clean showers, and changing
              facilities for members.
            </p>
          </div>

          <div className="card">
            <img src={group_classesImg} alt="Group Classes" />
            <h3>🧘 Group Classes</h3>
            <p>
              Participate in Yoga, HIIT, Zumba, and
              instructor-led training sessions.
            </p>
          </div>

          <div className="card">
            <img src={nutrition_supportImg} alt="Nutrition Support" />
            <h3>🥗 Nutrition Support</h3>
            <p>
              Personalized meal guidance and nutritional
              planning for better results.
            </p>
          </div>

          <div className="card">
            <img src={secure_parkingImg} alt="Secure Parking" />
            <h3>🅿️ Secure Parking</h3>
            <p>
              Convenient parking facilities available
              for all gym members.
            </p>
          </div>

        </div>
      </section>

     {/* MEMBERSHIP */}
   <section className="section alt membership-section">
     <h2>Membership Plans</h2>

     <div className="grid">

      {/* BASIC PLAN */}
     <div className="card membership-card">
       <h3>Basic Plan</h3>
       <h1>₹999<span>/month</span></h1>

       <ul>
        <li>✔ Full access to gym equipment</li>
        <li>✔ Locker facility</li>
        <li>✔ Free fitness assessment</li>
        <li>✔ Cardio & Strength Training Area</li>
        <li>✔ Open Gym Access (6 AM - 10 PM)</li>
       </ul>

       <p>
        Perfect for beginners looking to start their fitness journey
        with complete access to essential gym facilities.
       </p>
     </div>

    {/* PREMIUM PLAN */}
    <div className="card membership-card featured">
      <h3>Premium Plan</h3>
      <h1>₹1999<span>/month</span></h1>

      <ul>
        <li>✔ Everything in Basic Plan</li>
        <li>✔ Personal Trainer Guidance</li>
        <li>✔ Customized Diet Plan</li>
        <li>✔ Yoga & Zumba Classes</li>
        <li>✔ Monthly Progress Tracking</li>
        <li>✔ Priority Workout Assistance</li>
      </ul>

      <p>
        Ideal for members who want professional coaching,
        structured nutrition, and faster results.
      </p>
    </div>

    {/* ELITE PLAN */}
    <div className="card membership-card">
      <h3>Elite Plan</h3>
      <h1>₹2999<span>/month</span></h1>

      <ul>
        <li>✔ Everything in Premium Plan</li>
        <li>✔ Dedicated Personal Trainer</li>
        <li>✔ Advanced Body Analysis</li>
        <li>✔ VIP Locker Access</li>
        <li>✔ Exclusive Fitness Workshops</li>
        <li>✔ Flexible Workout Scheduling</li>
        <li>✔ Priority Support & Consultation</li>
      </ul>

      <p>
        Designed for serious fitness enthusiasts who want premium
        facilities, expert guidance, and maximum performance.
      </p>
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