import { createSignal } from "solid-js";
import Nav from "./root/nav";
import Footerr from "./root/footer";

const Contact = () => {
  const [formData, setFormData] = createSignal({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData(), [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or display a success message
    console.log("Form submitted:", formData());
  };

  return (
    <>
    <Nav/>
    <div class="bg-white dark:bg-gray-800 py-5">

      <div class="mt-16 text-center bg-gradient-to-r from-[#2b8ec0] to-[#5cad44] py-12 px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          Let's connect
        </h2>
        <p class="mt-4 text-lg text-white py-5">
          Have something to say? let's have a small talk with our team✍️🌍
        </p>
        <form class="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            class="block w-full border-gray-300 rounded-md shadow-sm mb-4 p-2"
            value={formData().name}
            onInput={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            class="block w-full border-gray-300 rounded-md shadow-sm mb-4 p-2"
            value={formData().email}
            onInput={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            class="block w-full border-gray-300 rounded-md shadow-sm mb-4 p-2 resize-none"
            rows="5"
            value={formData().message}
            onInput={handleChange}
          ></textarea>
          <button type="submit" class="bg-white text-green-500 py-2 px-6 rounded-full shadow-md hover:bg-blue-300 hover:text-white transition duration-300 ease-in-out border-l-4 border-b-4 border-blue-400 hover:border-blue-300">Send Message</button>
        </form>
      </div>
    </div>
    <Footerr/>
    </>
  );
};

export default Contact;