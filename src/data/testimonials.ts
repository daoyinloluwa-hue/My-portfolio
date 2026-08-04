export interface Testimonial {
  initials: string;
  from: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    initials: "FA",
    from: "Founder, AfriReuse",
    text: `"Working with Oyin was a refreshing experience. She quickly understood our vision of making community reuse simple and accessible, then translated it into an intuitive product that felt welcoming from the first interaction."`,
  },
  {
    initials: "FC",
    from: "Founder, Cammy",
    text: `"Oyin transformed a complex order management workflow into a dashboard that feels effortless to use. She has a strong eye for information hierarchy and user experience, making even data-heavy interfaces clean and intuitive."`,
  },
  {
    initials: "FG",
    from: "Founder, Grabby",
    text: `"From inventory management to customer relationships, our platform had many moving parts. Oyin approached every challenge thoughtfully, creating a seamless experience without sacrificing functionality."`,
  },
  {
    initials: "Fi",
    from: "Founder, iexplore",
    text: `"Oyin understood that our product wasn't just about finding places — it was about helping people feel confident and excited. She crafted an experience that feels modern, intuitive, and engaging while keeping user trust at the center."`,
  },
];
