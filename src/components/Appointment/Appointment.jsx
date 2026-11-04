
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";
import "./Appointment.css";

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section className="appointment" id="appointment">
      <div className="appointment-container">

        {/* LEFT */}

        <motion.div
          className="appointment-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">
            BOOK APPOINTMENT
          </span>

          <h2>
            Schedule Your
            <span> Dental Visit</span>
          </h2>

          <p>
            Book an appointment with our experienced
            dentists and receive personalized dental
            care using the latest technology in a
            comfortable environment.
          </p>

          <div className="appointment-info">

            <div className="info-card">
              <CalendarDays size={22} />
              <div>
                <h4>Working Days</h4>
                <span>Monday - Saturday</span>
              </div>
            </div>

            <div className="info-card">
              <Clock3 size={22} />
              <div>
                <h4>Working Hours</h4>
                <span>9:00 AM - 8:00 PM</span>
              </div>
            </div>

            <div className="info-card">
              <Phone size={22} />
              <div>
                <h4>Call Us</h4>
                <span>+1 234 567 890</span>
              </div>
            </div>

            <div className="info-card">
              <Mail size={22} />
              <div>
                <h4>Email</h4>
                <span>hello@lumadental.com</span>
              </div>
            </div>

            <div className="info-card">
              <MapPin size={22} />
              <div>
                <h4>Clinic</h4>
                <span>New York, USA</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="appointment-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                minLength={2}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                pattern="[0-9+\-\s()]{7,20}"
                title="Enter a valid phone number"
                required
              />

              <input
                type="date"
                name="date"
                min={today}
                required
              />
            </div>

            <select name="treatment" defaultValue="" required>
              <option value="" disabled>
                Select Treatment
              </option>

              <option value="Teeth Whitening">
                Teeth Whitening
              </option>

              <option value="Dental Implant">
                Dental Implant
              </option>

              <option value="Smile Makeover">
                Smile Makeover
              </option>

              <option value="Orthodontics">
                Orthodontics
              </option>

              <option value="General Checkup">
                General Checkup
              </option>
            </select>

            <textarea
              name="notes"
              rows="5"
              placeholder="Additional Notes"
            />

            <button type="submit">
              Book Appointment
            </button>

            {submitted && (
              <p className="appointment-success" role="status">
                <CheckCircle size={18} />
                Your form has been submitted successfully!
              </p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Appointment;
