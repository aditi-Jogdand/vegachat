import { createSignal } from 'solid-js';
// import FullScreenEmojiComponent from './root/bg';
// import Navbar from './root/nav';

const Services = () => {
  const [services] = createSignal([
    {
      title: "Personalized Nutrition Plans",
      description: "Our team of nutrition experts will work with you to create personalized nutrition plans tailored to your unique dietary needs and health goals. Say goodbye to one-size-fits-all diets and hello to a customized approach to nutrition that works for you.",
      icon: "🥦"
    },
    {
      title: "Virtual Cooking Classes",
      description: "Join us for virtual cooking classes led by renowned chefs and cooking experts, where you'll learn how to prepare delicious plant-based meals that are as nutritious as they are tasty. From beginner basics to advanced techniques, there's always something new to discover in the kitchen.",
      icon: "👩‍🍳"
    },
    {
      title: "Fitness Workshops",
      description: "Get moving with our fitness workshops and exercise routines designed specifically for vegans and plant-based enthusiasts. Whether you're a seasoned athlete or just starting out, our workshops will help you achieve your fitness goals and feel your best inside and out.",
      icon: "🏋️‍♂️"
    },
    {
      title: "Sustainable Living Tips",
      description: "Explore our collection of sustainable living tips and resources, where you'll find everything you need to live a more eco-friendly and ethical lifestyle. From reducing waste to making conscious consumer choices, together we can make a positive impact on the planet.",
      icon: "🌱"
    },
    {
      title: "Mindfulness and Meditation Sessions",
      description: "Take a moment to pause and reconnect with our mindfulness and meditation sessions. Join us as we explore practices to calm the mind, reduce stress, and foster inner peace in our fast-paced world.",
      icon: "🧘"
    },
    {
      title: "Community Events",
      description: "Be part of our vibrant community by attending our community events, including meetups, webinars, and panel discussions featuring guest speakers, activists, and influencers in the vegan and sustainability space. Connect with like-minded individuals, share ideas, and be inspired to make a difference.",
      icon: "🌍"
    }
    ,{
        title:"Recipe Development Services",
        description:"Elevate your culinary creations with our professional recipe development services. Whether you're an individual, restaurant, or food brand, our team of culinary experts is here to bring your vision to life with innovative and mouthwatering plant-based dishes. Let us help you unlock the full potential of your menu and delight your customers with unforgettable flavors.",
        icon:"🍽️"
    },
    {
        title:"Health and Wellness Consultations",
        description:"Take charge of your health and well-being with our personalized health and wellness consultations. Our certified professionals provide personalized guidance and support to address your specific health concerns and empower you to make informed lifestyle choices. Together, we'll embark on a journey towards optimal health and vitality.",
        icon:"💪"
    },
    {
        title:"Meal Planning Tools",
        description:"Simplify your meal planning process with our intuitive meal planning tools and resources. From customizable meal plans to grocery shopping lists, our tools help you streamline your culinary routines and make healthier choices effortlessly. Say goodbye to mealtime stress and hello to a more organized, nourishing lifestyle.",
        icon:"📅"
    },{
        title:"Exclusive Discounts and Offers",
        description:"Unlock exclusive discounts and offers from our curated selection of vegan-friendly brands and businesses. As a valued member of our community, you'll enjoy access to special promotions and deals, making it easier than ever to explore new products and services while supporting ethical and sustainable practices.",
        icon:"💰"
    }
  ]);


  return (
    <>
      {/* <div class='h-20'></div> */}
      
      <div class="py-12 bg-green-400">
      <div class="py-12 px-4 sm:px-6">
        <h1 class="text-3xl font-extrabold text-gray-900 mb-8 text-center">Discover Our Services</h1>
        <h2 class="text-center bg-green-200 mb-14 rounded border-green-800 border-2 p-6 ">We aren't just a social media platform; we are the future. Let's communicate, share knowledge, and spread kindness through words and works.</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pr-8">
          {services().map(service => (
            <li class="flex flex-col bg-white rounded-md shadow-md "
            //  style="box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
            style="box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;"
             >
              <div class="p-6 flex items-center">
                <span class="text-4xl rounded-full bg-gray-300 w-14 h-14 flex items-center justify-center border-gray-400 border-4 hover:grayscale">{service.icon}</span>
                <h2 class="text-xl font-bold text-gray-800 dark:text-800 ml-4">{service.title}</h2>
              </div>
              <p class="text-gray-600 dark:text-gray-600 px-6 pb-4">{service.description}</p>
              <div class="flex justify-center mb-6">
                <button class="text-white bg-teal-900 border-4 border-double border-sky-500 hover:text-green-500 rounded-md drop-shadow-2xl hover:bg-white p-2"><a href="#">Know More</a></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div class="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">

      </div>
    </div>

    </>
  );
};

export default Services;