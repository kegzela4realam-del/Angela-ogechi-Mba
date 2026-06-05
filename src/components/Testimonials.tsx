import { Quote, Sparkles, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

interface TestimonialsProps {
  isDarkMode: boolean;
}

export default function Testimonials({ isDarkMode }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className={`py-24 px-6 lg:px-8 border-t ${
        isDarkMode ? "bg-stone-950 border-white/5" : "bg-white border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 animate-fadeIn">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-gold-400 mb-2 flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
            Empathetic Voices
            <span className="w-6 h-[1px] bg-emerald-600 dark:bg-gold-400" />
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Words of <span className="text-gradient-gold italic font-normal">Appreciation & Trust</span>
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-stone-400" : "text-stone-600"}`}>
            Honest feedback from research leaders, e-commerce partners, and beloved custom-fit waist bead clients. Read about Angela's rigorous technical accuracy and empowering artistic touch.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-6 md:p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 hover:shadow-xl ${
                isDarkMode
                  ? "bg-stone-900/30 border-white/5 hover:border-gold-400/20 shadow-md"
                  : "bg-stone-50/70 border-stone-200 hover:border-gold-500/25 shadow-sm"
              }`}
            >
              {/* Star Rating & Quote Block decoration */}
              <div>
                <div className="flex items-center gap-1.5 mb-5 select-none">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400 shrink-0" />
                  ))}
                </div>

                <Quote className="absolute top-6 right-8 w-10 h-10 text-gold-400/10 rotate-180 pointer-events-none" />

                <p className={`text-xs md:text-sm leading-relaxed font-sans italic relative z-10 ${
                  isDarkMode ? "text-stone-300" : "text-stone-600"
                }`}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-dashed border-stone-500/15">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold-400/30 bg-stone-900 shrink-0 select-none">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className={`text-sm font-serif font-bold ${isDarkMode ? "text-stone-100" : "text-stone-950"}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-[10px] font-mono tracking-wide ${isDarkMode ? "text-stone-500" : "text-stone-500"}`}>
                    {testimonial.role} • <span className="text-emerald-500 font-semibold">{testimonial.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
