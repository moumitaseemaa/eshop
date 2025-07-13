import { Link } from "react-router-dom";
import Container from "../components/commonLayouts/Container.jsx";
import InputBox from "../components/commonLayouts/InputBox.jsx";
import PhoneIcon from "../icons/footer/PhoneIcon.jsx";
import Location from "../icons/footer/Location.jsx";
import EnvelopeIcon from "../icons/footer/EnvelopeIcon.jsx";
import Button from "../components/commonLayouts/Button.jsx";
const ContactPage = () => {
  return (
    <Container>
      <div className="mt-8 mb-20">
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002806186!2d-74.14431244705199!3d40.697284634899496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1752406237829!5m2!1sen!2sbd"
            width="100%"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Path Link */}
        <div className="flex font-['Montserrat'] font-normal text-base text-[#303030] leading-6 gap-x-7.5 mt-16 mb-12">
          <Link className="relative before:absolute before:content-[''] before:bg-[#303030] before:w-[1px] before:h-[15px] before:right-[-16px] before:top-[50%] before:-translate-y-1/2">
            Home
          </Link>
          <Link className="font-bold">Contact</Link>
        </div>
        {/* Contact Us Part */}
        <div className="flex gap-x-14">
          <div className="w-[60%]">
            <h6 className="font-['Poppins'] font-semibold text-[#303030] text-4xl leading-11.5 ">
              Contact Us
            </h6>
            <p className="mt-3 mb-4 font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
              Have any questions for us? Don’t hesitate to contact us.
            </p>
            <div className="flex flex-wrap justify-between mb-8">
              <div className="w-full">
                <InputBox
                  labelName={"Name"}
                  placeholder={"Amelia Robert Watson"}
                  required={true}
                />
              </div>
              <div className="w-[49%]">
                <InputBox
                  labelName={"Phone Number"}
                  placeholder={"+123 456 7890"}
                  type="number"
                />
              </div>
              <div className="w-[49%]">
                <InputBox
                  labelName={"Email Address"}
                  placeholder={"amelia.watson@eshop.com"}
                  required={true}
                  type="email"
                />
              </div>
              <div className="w-[100%]">
                <InputBox
                  labelName={"Message"}
                  placeholder={"Enter your message ..."}
                  required={true}
                  typeTwo="textarea"
                  height={"240px"}
                />
              </div>
            </div>
            <Button text={"Submit"} />
          </div>
          {/* Contact Information */}
          <div className="w-[40%] max-h-[500px] bg-[#F4F4F4] py-10 pl-10 pr-11 rounded-3xl">
            <h5 className="font-['Poppins']  font-semibold text-2xl leading-7.5 text-[#303030]">
              Let’s Keep in Touch!
            </h5>
            <p className="w-[468px] font-['Montserrat']  font-normal text-xl leading-7.5 text-[#616161] mt-4 mb-10">
              We would love to hear from you. Contact us for any inquiries you
              might have for us.
            </p>
            <ul className="font-['Montserrat'] font-bold text-base leading-6 text-[#303030] flex flex-col gap-3">
              <li className="relative pl-8">
                <Link
                  to={"tel:01912384567"}
                  className="absolute left-2 top-1/2 -translate-1/2 "
                >
                  <PhoneIcon />
                </Link>
                <span className="hover:text-[#FF624C] duration-300 cursor-pointer">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="relative pl-8">
                <Link
                  to={"mailto:information@eshop.com"}
                  className="absolute left-2 top-1/2 -translate-1/2 "
                >
                  <EnvelopeIcon />
                </Link>
                <span className="hover:text-[#FF624C] duration-300 cursor-pointer">
                  information@eshop.com
                </span>
              </li>
              <li className="relative pl-8">
                <Link
                  to={"https://maps.app.goo.gl/8z2YEqrA2CYrKGrs5"}
                  className="absolute left-2 top-1/2 -translate-1/2"
                >
                  <Location />
                </Link>
                <span className="hover:text-[#FF624C] duration-300 cursor-pointer">
                  123 Main Street, Anytown USA
                </span>
              </li>
            </ul>
            <h3
              className={
                "inline-block font-['Montserrat'] font-bold text-xl text-[#303030] border-b-4 border-b-[#FF624C] pb-2 mt-14"
              }
            >
              Opening Hours
            </h3>
            <ul className="font-['Montserrat'] font-normal text-base leading-6 mt-6">
              <li>
                <span className="font-bold mr-3">MON to FRI:</span>
                <span>08:00 AM - 04:00 PM</span>
              </li>
              <li>
                <span className="font-bold mr-3">SAT to SUN:</span>
                <span>09:00 AM - 03:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
