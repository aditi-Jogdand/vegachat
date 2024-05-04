import { createSignal } from "solid-js";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div class="bg-gradient-to-r from-[#304352] via-[#304352]-400 to-[#d7d2cc] min-h-screen flex flex-col md:flex-row justify-center">
      {/* Left Section */}
      <div class="w-full md:w-2/4 flex justify-center items-center">
        <div class="text-white text-center">
          <h1 class="text-4xl font-bold mb-4">Welcome to Vegachat!</h1>
          <p class="text-lg mb-8">Join our community of passionate vegans and activists.</p>
          <span class="w-24 h-24 mx-auto mb-8">🌍💚</span>
          <p class="text-lg">Connect with like-minded individuals, share your journey, and discover new recipes.</p>
        </div>
      </div>
      
      {/* Right Section */}
      <div class="w-full md:w-3/4 flex justify-center items-center">
        <div class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-md md:w-2/3 lg:w-1/2 xl:w-2/3 p-10 space-y-4">
          <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-3xl">Create an account</h1>
          <form onSubmit={handleSubmit} class="space-y-4">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" name="email" id="email" class="input-field bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="input-field bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
              <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="input-field  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required=""/>
            </div>
            <div class="flex items-start">
              <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 " required=""/>
              <label for="terms" class="ml-3 text-sm font-light text-gray-500">I accept the <a class="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
            </div>
            <button type="submit" class="bg-gray-500 p-2 btn-primary text-white w-full">Create an account</button>
            <p class="text-sm font-light text-gray-500">Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline">Login here</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
