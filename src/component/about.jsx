
const About = () => {
    return (<>
<div class="h-full bg-gradient-to-br from-green-200 to-blue-200">
        <div class="h-20">
        </div>
        <div class="bg-gradient-to-br from-green-200 to-blue-200 py-12">
      <div class="max-w-4xl mx-auto px-6">
        <h1 class="text-4xl font-semibold text-center text-gray-900 mb-8">
          Welcome to Vegachat
        </h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg text-gray-800 leading-relaxed mb-6">
              At Vegachat, we're on a mission to create a kinder and more
              compassionate world. Our platform is more than just a social media
              site—it's a community of like-minded individuals dedicated to
              spreading kindness, advocating for animal rights, and promoting
              sustainable living.
            </p>
            <p class="text-lg text-gray-800 leading-relaxed mb-6">
              Safety and trust are at the core of everything we do. We've built
              Vegachat with your security in mind, ensuring that you can engage
              with confidence and peace of mind. Join us in fostering
              connections, sharing stories, and making a positive impact in the
              world.
            </p>
          </div>
          <div class="flex justify-center">
            <img
              src="../src/images/3rabbits.png" 
              class="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
</div>
        </>
    );
};

export default About;
