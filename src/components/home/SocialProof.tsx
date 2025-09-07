import React from 'react';
import { Instagram, Heart } from 'lucide-react';
import img1 from '../../assets/media/1.webp';
import img2 from '../../assets/media/2.webp';
import img3 from '../../assets/media/3.webp';
import img4 from '../../assets/media/4.webp';
import img5 from '../../assets/media/5.jpg';
import img6 from '../../assets/media/6.jpg';

const instagramPosts = [
  img1, img2, img3, img4, img5, img6
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats 
        <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-hotpink">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-hotpink">4.9</div>
              <div className="text-gray-600 flex items-center justify-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>Average Rating</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-hotpink">15K+</div>
              <div className="text-gray-600">Five Star Reviews</div>
            </div>
          </div>
        </div>
*/}
        {/* Customer Reviews 
<div className="mb-20">
  <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
    What Our Customers Say
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
    {testimonials.map((testimonial) => (
      <div
        key={testimonial.id}
        className="bg-primary-white rounded-2xl p-6 sm:p-8 shadow-sm"
      >
        <div className="flex items-center space-x-4 mb-4 sm:mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
              {testimonial.name}
            </h4>
            <div className="flex items-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
          "{testimonial.comment}"
        </p>

        <p className="text-xs sm:text-sm text-gray-500">
          Purchased: {testimonial.product}
        </p>
      </div>
    ))}
  </div>
</div>
*/}
        {/* Instagram Feed */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Instagram className="inline-block h-8 w-8 mr-3 text-accent-hotpink" />
              #LuxeTechStyle
            </h2>
            <p className="text-gray-600">
              See how our customers style their Miss Luna accessories
            </p>
          </div>

          {/* ✅ Auto-scrolling ticker */}
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll ">
              {instagramPosts.concat(instagramPosts).map((post, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-48 overflow-hidden group relative"
                >
                  <img
                    src={post}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-accent-hotpink hover:text-pink-600 font-semibold transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow @luxetech for more style inspiration</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
