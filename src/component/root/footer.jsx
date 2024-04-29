const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 class="text-xl font-semibold mb-4">Stay Connected</h2>
            <p>Follow us on social media to stay updated on the latest news, events, and community highlights.</p>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
                style="fill:#000000;">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path></g></g>
                </svg>
              </a>
              <a href="#" class="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
                style="fill:#000000;">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path></g></g>
                </svg>
              </a>
              <a href="#" class="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,255.99609,255.99609"
                style="fill:#000000;">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M19.98,5.69c-1.68,-1.34 -4.08,-1.71 -5.12,-1.82h-0.04c-0.16,0 -0.31,0.09 -0.36,0.24c-0.09,0.23 0.05,0.48 0.28,0.52c1.17,0.24 2.52,0.66 3.75,1.43c0.25,0.15 0.31,0.49 0.11,0.72c-0.16,0.18 -0.43,0.2 -0.64,0.08c-2.4,-1.48 -5.38,-1.56 -5.96,-1.56c-0.58,0 -3.56,0.08 -5.96,1.56c-0.21,0.12 -0.48,0.1 -0.64,-0.08c-0.2,-0.23 -0.14,-0.57 0.11,-0.72c1.23,-0.77 2.58,-1.19 3.75,-1.43c0.23,-0.04 0.37,-0.29 0.28,-0.52c-0.05,-0.15 -0.2,-0.24 -0.36,-0.24h-0.04c-1.04,0.11 -3.44,0.48 -5.12,1.82c-0.98,0.91 -2.93,6.14 -3.02,10.77c0,0.31 0.08,0.62 0.26,0.87c1.17,1.65 3.71,2.64 5.63,2.78c0.29,0.02 0.57,-0.11 0.74,-0.35c0.01,0 0.01,-0.01 0.02,-0.02c0.35,-0.48 0.14,-1.16 -0.42,-1.37c-1.6,-0.59 -2.42,-1.29 -2.47,-1.34c-0.2,-0.18 -0.22,-0.48 -0.05,-0.68c0.18,-0.2 0.48,-0.22 0.68,-0.04c0.03,0.02 2.25,1.91 6.61,1.91c4.36,0 6.58,-1.89 6.61,-1.91c0.2,-0.18 0.5,-0.16 0.68,0.04c0.17,0.2 0.15,0.5 -0.05,0.68c-0.05,0.05 -0.87,0.75 -2.47,1.34c-0.56,0.21 -0.77,0.89 -0.42,1.37c0.01,0.01 0.01,0.02 0.02,0.02c0.17,0.24 0.45,0.37 0.74,0.35c1.92,-0.14 4.46,-1.13 5.63,-2.78c0.18,-0.25 0.26,-0.56 0.26,-0.87c-0.09,-4.63 -2.04,-9.86 -3.02,-10.77zM8.89,14.87c-0.92,0 -1.67,-0.86 -1.67,-1.91c0,-1.06 0.75,-1.92 1.67,-1.92c0.93,0 1.67,0.86 1.67,1.92c0,1.05 -0.74,1.91 -1.67,1.91zM15.11,14.87c-0.93,0 -1.67,-0.86 -1.67,-1.91c0,-1.06 0.74,-1.92 1.67,-1.92c0.92,0 1.67,0.86 1.67,1.92c0,1.05 -0.75,1.91 -1.67,1.91z"></path></g></g>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-4">Quick Links</h2>
            <ul class="space-y-2">
              <li><a href="/about" class="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/contact" class="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p>Stay updated on the latest news, events, and special offers by subscribing to our newsletter.</p>
            <form class="mt-4 flex">
              <input type="email" class="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring focus:ring-gray-500" placeholder="Enter your email address" />
              <button type="submit" class="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-gray-700 transition duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <hr class="mt-8 border-t border-gray-700"/>
        <p class="text-center text-gray-300 mt-4">&copy; 2024 Vegachat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
