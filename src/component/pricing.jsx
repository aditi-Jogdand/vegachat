import Nav from "./root/nav";
import Footerr from "./root/footer";

function Pricing(){
    return (
    <>
    <Nav/>
      <div class="py-12 bg-gray-100">
        <div class="py-12 px-4 sm:px-6">
          <h1 class="text-3xl font-extrabold text-gray-900 mb-8 text-center">Explore Our Premium Plans</h1>
          <p class="text-center text-gray-800 dark:text-gray-800 mb-8">At our social media platform, your safety and satisfaction are our top priorities. That's why we offer premium plans tailored to enhance your experience and keep you connected in a safe and secure environment.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-md shadow-md p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">Premium Plan 1</h3>
              <p class="text-gray-600 dark:text-gray-600">Unlock exclusive features and personalized assistance with our Premium Plan 1. Stay connected, stay informed, and stay safe with our advanced bot technology.</p>
              <div class="flex justify-center mt-6">
                <button style="" class="text-white bg-teal-900 border-4 border-double border-sky-500 hover:text-green-500 rounded-md drop-shadow-2xl hover:bg-white p-2">Subscribe Now</button>
              </div>
            </div>
            <div class="bg-white rounded-md shadow-md p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">Premium Plan 2</h3>
              <p class="text-gray-600 dark:text-gray-600">Experience the ultimate level of convenience and customization with our Premium Plan 2. Get access to advanced tools and personalized support to enhance your social media journey.</p>
              <div class="flex justify-center mt-6">
                <button class="text-white bg-teal-900 border-4 border-double border-sky-500 hover:text-green-500 rounded-md drop-shadow-2xl hover:bg-white p-2">Subscribe Now</button>
              </div>
            </div>
            <div class="bg-white rounded-md shadow-md p-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">Premium Plan 3</h3>
              <p class="text-gray-600 dark:text-gray-600">Unlock the full potential of our platform with Premium Plan 3. Enjoy exclusive benefits, priority support, and advanced features designed to elevate your social media experience.</p>
              <div class="flex justify-center mt-6">
                <button class="text-white bg-teal-900 border-4 border-double border-sky-500 hover:text-green-500 rounded-md drop-shadow-2xl hover:bg-white p-2">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerr/>
      </>
    );
  };
  
  export default Pricing;
  