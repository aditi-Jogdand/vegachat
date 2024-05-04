import { createSignal } from "solid-js";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log("Login form submitted");
  };

  return (
    <div class="bg-gradient-to-r from-[#304352] via-[#304352]-400 to-[#d7d2cc] min-h-screen flex flex-col md:flex-row justify-center">
      {/* Left Section */}
      <div class="w-full md:w-2/4 flex justify-center items-center">
        <div class="text-white text-center">
          <h1 class="text-4xl font-bold mb-4">Welcome back to Vegachat!</h1>
          <p class="text-lg mb-8">Log in to join our community and connect with like-minded individuals.</p>
          <span class="w-24 h-24 mx-auto mb-8">🌱💬</span>
          <p class="text-lg">Share your experiences, discover new recipes, and spread kindness.</p>
        </div>
      </div>
      
      {/* Right Section */}
      <div class="w-full md:w-3/4 flex justify-center items-center">
        <div class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-md md:w-2/3 lg:w-1/2 xl:w-2/3 p-10 space-y-4">
          <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-3xl">Log in to your account</h1>
          <form onSubmit={handleSubmit} class="space-y-4">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" name="email" id="email" class="input-field bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="input-field bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
            </div>
            <button type="submit" class="bg-gray-500 p-2 btn-primary text-white w-full">Log in</button>
            <p class="text-sm font-light text-gray-500">Don't have an account yet? <a href="\register" class="font-medium text-primary-600 hover:underline">Create one here</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
