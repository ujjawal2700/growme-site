export interface BlogPost {
  id: number;
  slug: string;
  cat: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
  content: string;
}

export const postsData: BlogPost[] = [
  { 
    id: 1,
    slug: 'scaling-business-software',
    cat: 'GUIDE', 
    title: 'How to Scale Your Business with Custom Software', 
    desc: 'Why generic tools hold you back and how a custom platform can become your biggest competitive advantage.', 
    author: 'AV', 
    date: 'Apr 02',
    image: '/business_scaling_software_1775472844685.png',
    featured: true,
    content: `
      <h2>The Digital Ceiling</h2>
      <p>Every growing business eventually hits the "digital ceiling." This is the point where off-the-shelf software solutions (SaaS) stop being helpful and start becoming a bottleneck. You find yourself changing your internal processes to fit the software's limitations, rather than the other way around.</p>
      
      <h2>Why Custom Beats Generic</h2>
      <p>Custom software is designed around your unique workflows. It eliminates the friction of switching between multiple disconnected platforms and provides a single, unified source of truth for your data.</p>
      
      <blockquote>
        "The most successful companies don't just use technology; they build proprietary systems that become their moat."
      </blockquote>

      <h2>Scalability by Design</h2>
      <p>When we build custom platforms at GrowMe, we architect them for 10x growth. Whether you are handling 100 leads or 100,000, your system should remain fast, reliable, and secure. We focus on modular architecture and cloud-native services that scale automatically with your demand.</p>
    `
  },
  { 
    id: 2,
    slug: 'premium-digital-presence',
    cat: 'STRATEGY', 
    title: 'The Importance of a High-End Digital Presence', 
    desc: 'First impressions matter. Why businesses are investing in premium design to build trust with high-value clients.', 
    author: 'JV', 
    date: 'Mar 28',
    image: '/premium_digital_presence_1775472862576.png',
    content: `
        <h2>Trust is the New Currency</h2>
        <p>In a digital-first world, your website is your storefront, your office, and your brand ambassador all rolled into one. High-value clients make split-second decisions based on the perceived quality of your presence.</p>
        
        <h2>The Psychology of Premium UI</h2>
        <p>Clean lines, intentional white space, and subtle micro-interactions signal attention to detail. If your digital presence is meticulous, clients assume your service will be too.</p>
        
        <h2>Beyond Aesthetics</h2>
        <p>A high-end presence isn't just about "looking pretty." It's about performance, accessibility, and clear messaging. It's about leading the user through a frictionless journey that culminates in a conversion.</p>
    `
  },
  { 
    id: 3,
    slug: 'nextjs-performance-tech',
    cat: 'TECH', 
    title: 'Why We Use Next.js for Every Client Project', 
    desc: 'Speed, stability, and future-proofing. A simple breakdown of the technologies we use to grow your business.', 
    author: 'ER', 
    date: 'Mar 21',
    image: '/nextjs_performance_code_1775472913961.png',
    content: `
        <h2>Speed is a Feature</h2>
        <p>A one-second delay in page load time can lead to a 7% reduction in conversions. Next.js allows us to deliver ultra-fast, server-rendered pages that rank better on Google and provide a snap-to-reality experience for users.</p>

        <h2>Future-Proofing</h2>
        <p>Technology moves fast. By using Next.js and the React ecosystem, we ensure our clients' platforms are easy to maintain, scale, and update as new capabilities emerge.</p>
    `
  },
  { 
    id: 4,
    slug: 'human-centered-ux-design',
    cat: 'DESIGN', 
    title: 'Human-Centered Design: Making Tech Reachable', 
    desc: 'Moving away from complex technical interfaces and towards simple, intuitive user experiences that just work.', 
    author: 'JV', 
    date: 'Mar 15',
    image: '/human_centered_design_ux_1775472931082.png',
    content: `
        <h2>User First, Tech Second</h2>
        <p>Too many companies build for the possibilities of the technology rather than the needs of the user. Human-centered design flips this script, starting with empathy for the person using the tool.</p>
    `
  },
  { 
    id: 5,
    slug: 'ai-automation-business-efficiency',
    cat: 'AI', 
    title: 'How Automation Can Save Your Business 20+ Hours', 
    desc: 'Simple ways to use AI and custom scripts to handle repetitive tasks while you focus on growth.', 
    author: 'ER', 
    date: 'Mar 10',
    image: '/ai_automation_efficiency_1775472882049.png',
    content: `
        <h2>Automate the Boring Stuff</h2>
        <p>Your team's creativity is your most valuable asset. Don't waste it on copy-pasting data or manual email follow-ups. AI and custom integrations can handle these repetitive tasks with 100% accuracy.</p>
    `
  },
  { 
    id: 6,
    slug: 'building-brand-trust-marketing',
    cat: 'MARKETING', 
    title: 'Building Brand Trust in a Digital-First World', 
    desc: 'Focus on quality, consistency, and clean communication to turn visitors into loyal, long-term partners.', 
    author: 'ML', 
    date: 'Feb 28',
    image: '/brand_trust_marketing_1775472947879.png',
    content: `
        <h2>Authenticity at Scale</h2>
        <p>In an age of AI-generated noise, being human is a competitive advantage. Clean marketing focuses on clear communication, real social proof, and high-quality content that actually solves problems.</p>
    `
  }
];
