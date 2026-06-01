export type BlogPost = {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "extend-health",
    category: "Longevity",
    date: "Oct 16, 2025",
    title: "5 Proven strategies to extend your health",
    excerpt:
      "Discover evidence-backed methods to not just live longer, but live healthier and more active years.",
    image: "/images/testimonials/video-woman.jpg",
    slug: "5-proven-strategies-to-extend-your-health",
  },
  {
    id: "early-screening",
    category: "Preventive",
    date: "Oct 16, 2025",
    title: "Why early screening is the key to prevention",
    excerpt:
      "Understand how proactive testing helps detect risks before they become health problems.",
    image: "/images/benefits/cell.jpg",
    slug: "why-early-screening-is-key-to-prevention",
  },
  {
    id: "nutrition-longevity",
    category: "Nutrition",
    date: "Oct 9, 2025",
    title: "How nutrition shapes your longevity trajectory",
    excerpt:
      "Learn which dietary patterns support metabolic health and sustained energy across decades.",
    image: "/images/root-cause/aging-longevity.jpg",
    slug: "nutrition-shapes-longevity-trajectory",
  },
  {
    id: "stress-recovery",
    category: "Wellness",
    date: "Oct 2, 2025",
    title: "Stress recovery habits that protect your heart",
    excerpt:
      "Explore practical routines that lower cortisol and improve cardiovascular resilience over time.",
    image: "/images/root-cause/stress.jpg",
    slug: "stress-recovery-habits-protect-heart",
  },
  {
    id: "wearable-insights",
    category: "Technology",
    date: "Sep 24, 2025",
    title: "Wearables that turn daily data into real insight",
    excerpt:
      "See how continuous monitoring helps you spot trends early and act before symptoms appear.",
    image: "/images/testimonials/photo-hair.jpg",
    slug: "wearables-turn-daily-data-into-insight",
  },
  {
    id: "sleep-performance",
    category: "Performance",
    date: "Sep 18, 2025",
    title: "Sleep science for sharper focus and recovery",
    excerpt:
      "Understand the stages of restorative sleep and how to optimize them for peak daily performance.",
    image: "/images/testimonials/omar-runners.jpg",
    slug: "sleep-science-sharper-focus-recovery",
  },
];
