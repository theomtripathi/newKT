import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The quiz opened up so many conversations for us! 🥰",
    author: "Priya & Ravi"
  },
  {
    quote: "It's fun and actually helpful. Definitely recommend! 🎉",
    author: "Meera"
  },
  {
    quote: "We learned so much about each other. Game changer! ✨",
    author: "Alex & Sam"
  },
  {
    quote: "This quiz transformed how we communicate!",
    author: "Karthik & Ananya"
},
{
    quote: "Simple yet incredibly insightful. Loved it!",
    author: "Ishaan & Maya"
},
{
    quote: "The insights were eye-opening! 🌟",
    author: "Riya & Veer"
}
 
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
          Loved by Couples Everywhere 🌍
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Quote className="w-8 h-8 text-amber-500 mb-4" />
              <p className="text-lg text-slate-600 mb-4">{testimonial.quote}</p>
              <p className="font-semibold text-blue-900">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}