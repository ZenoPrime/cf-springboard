# Springboard Style Guide

This document outlines the design system and visual identity for Springboard, a digital innovation platform that serves as a control station for startup ideas and projects.

## Brand Identity

### Vision
Springboard is designed as the ultimate **control station** for digital innovation - a collaborative workspace where ideas transform into reality through structured guidance, visual thinking, and community collaboration. Inspired by tools like FigJam, we create an environment that feels both professional and creatively empowering.

### Design Philosophy
- **Control Station Mentality**: Every interface element should feel like part of a sophisticated command center
- **Visual Thinking First**: Prioritize diagrams, visual hierarchies, and spatial relationships
- **Collaborative by Design**: Interfaces that naturally encourage sharing and co-creation
- **Purposeful Minimalism**: Clean, intentional design that amplifies rather than distracts
- **Progressive Disclosure**: Information architecture that reveals complexity gradually

### Brand Personality
- **Strategic**: Thoughtful, systematic, well-planned
- **Collaborative**: Community-driven, inclusive, supportive
- **Empowering**: Confidence-building, capability-enhancing
- **Innovative**: Forward-thinking, experimental, cutting-edge
- **Reliable**: Consistent, trustworthy, dependable

### Control Station Design Principles

**1. Dashboard Thinking**
- Information should be scannable at a glance
- Key metrics and status indicators prominently displayed
- Clear visual hierarchy with primary/secondary/tertiary information levels

**2. Workspace Flexibility**
- Modular components that can be rearranged
- Multiple view modes (grid, list, kanban, timeline)
- Customizable layouts that adapt to user workflows

**3. Collaborative Indicators**
- Real-time collaboration cues (who's online, recent activity)
- Clear ownership and contribution attribution
- Seamless handoff between individual and team work

**4. Progressive Enhancement**
- Core functionality works without advanced features
- Power user features available but not overwhelming
- Graceful degradation across devices and contexts

---

## Color System

### Primary Colors

\`\`\`css
/* Brand Primary */
--primary-green: #00C896;     /* Main brand color */
--primary-dark: #000000;      /* Text and UI elements */
--primary-light: #FFFFFF;     /* Backgrounds and contrast */

/* Background System */
--background-primary: #F9F5F0;    /* Main background - warm cream */
--background-secondary: #FFFFFF;   /* Card backgrounds */
--background-tertiary: #F5F5F5;    /* Subtle sections */
\`\`\`

### Vibrant Card Colors

\`\`\`css
/* Inspired by creative design tools */
--card-coral: #FF7A7A;       /* Warm, friendly */
--card-orange: #FF9F51;      /* Energetic, creative */
--card-yellow: #FFCC00;      /* Optimistic, bright */
--card-green: #4CAF50;       /* Growth, success */
--card-blue: #5B7FFF;        /* Trust, technology */
--card-purple: #B57FFF;      /* Innovation, creativity */
\`\`\`

### Semantic Colors

\`\`\`css
/* Status Colors */
--success: #4CAF50;
--warning: #FF9F51;
--error: #FF7A7A;
--info: #5B7FFF;

/* Text Colors */
--text-primary: #000000;      /* Main content */
--text-secondary: #666666;    /* Supporting text */
--text-muted: #999999;        /* Subtle text */
--text-inverse: #FFFFFF;      /* On dark backgrounds */
\`\`\`

### Usage Guidelines

**Primary Green (#00C896)**
- Logo and brand elements
- Primary CTAs and buttons
- Active states and highlights
- Progress indicators

**Vibrant Cards**
- Project idea cards (rotating colors)
- Feature highlights
- Interactive elements
- Accent decorations

**Background System**
- Use warm cream (#F9F5F0) for main backgrounds
- White for content cards and modals
- Subtle gray for secondary sections

---

## Typography

### Font Stack

\`\`\`css
/* Primary Font - Inter */
font-family: 'Inter', system-ui, -apple-system, sans-serif;
/* Usage: Body text, UI elements, general content */

/* Display Font - Poppins */
font-family: 'Poppins', system-ui, sans-serif;
/* Usage: Headings, hero text, brand elements */

/* Monospace - PT Mono */
font-family: 'PT Mono', 'Courier New', monospace;
/* Usage: Code, tags, technical elements */
\`\`\`

### Typography Scale

\`\`\`css
/* Headings */
.text-6xl { font-size: 3.75rem; line-height: 1; }      /* Hero titles */
.text-5xl { font-size: 3rem; line-height: 1; }        /* Page titles */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* Section titles */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* Card titles */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }   /* Subsections */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; } /* Large text */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* Emphasized text */
.text-base { font-size: 1rem; line-height: 1.5rem; }  /* Body text */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* Small text */
.text-xs { font-size: 0.75rem; line-height: 1rem; }   /* Captions */
\`\`\`

### Typography Usage

**Hero Text**
\`\`\`css
.hero-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 3.75rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
  background: linear-gradient(to right, #000, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
\`\`\`

**Body Text**
\`\`\`css
.body-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: #333333;
}
\`\`\`

**Tags and Labels**
\`\`\`css
.tag {
  font-family: 'PT Mono', monospace;
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
\`\`\`

---

## Spacing & Layout

### Spacing Scale

\`\`\`css
/* Spacing System (based on 4px grid) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
\`\`\`

### Layout Principles

**Container Widths**
\`\`\`css
.container-sm { max-width: 640px; }   /* Small content */
.container-md { max-width: 768px; }   /* Medium content */
.container-lg { max-width: 1024px; }  /* Large content */
.container-xl { max-width: 1280px; }  /* Extra large content */
.container-2xl { max-width: 1536px; } /* Full width sections */
\`\`\`

**Grid System**
- Use CSS Grid for complex layouts
- Flexbox for component-level layouts
- 12-column grid for responsive design
- Consistent gutters (24px on desktop, 16px on mobile)

---

## Components

### Cards

**Base Card Style**
\`\`\`css
.card {
  background: white;
  border-radius: 1.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.15);
}
\`\`\`

**Vibrant Cards**
\`\`\`css
.card-vibrant {
  color: #000000;
  font-weight: 600;
  transform: rotate(-2deg);
  transition: transform 0.3s ease;
}

.card-vibrant:hover {
  transform: rotate(0deg) translateY(-5px);
}

/* Color variants */
.card-coral { background-color: #FF7A7A; }
.card-orange { background-color: #FF9F51; }
.card-yellow { background-color: #FFCC00; }
.card-green { background-color: #4CAF50; }
.card-blue { background-color: #5B7FFF; color: #FFFFFF; }
.card-purple { background-color: #B57FFF; color: #FFFFFF; }
\`\`\`

### Buttons

**Primary Button**
\`\`\`css
.btn-primary {
  background: #00C896;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #00B085;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 200, 150, 0.3);
}
\`\`\`

**Secondary Button**
\`\`\`css
.btn-secondary {
  background: transparent;
  color: #333333;
  border: 2px solid #E5E5E5;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: #00C896;
  color: #00C896;
  transform: translateY(-1px);
}
\`\`\`

### Navigation

**Floating Navigation**
\`\`\`css
.floating-nav {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
\`\`\`

### Tags and Badges

**Category Tags**
\`\`\`css
.tag {
  font-family: 'PT Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  display: inline-block;
}

.tag-defi { color: #FF7A7A; border-color: #FF7A7A; }
.tag-gaming { color: #4CAF50; border-color: #4CAF50; }
.tag-social { color: #5B7FFF; border-color: #5B7FFF; }
\`\`\`

---

## Animations & Interactions

### Micro-animations

**Hover Effects**
\`\`\`css
/* Card hover */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.15);
}

/* Button hover */
.btn-hover {
  transition: all 0.2s ease;
}

.btn-hover:hover {
  transform: translateY(-1px);
}
\`\`\`

**Floating Animation**
\`\`\`css
@keyframes float {
  0% { transform: translateY(0px) rotate(var(--rotation)); }
  50% { transform: translateY(-10px) rotate(var(--rotation)); }
  100% { transform: translateY(0px) rotate(var(--rotation)); }
}

.float {
  animation: float 6s ease-in-out infinite;
  will-change: transform;
}
\`\`\`

**Loading States**
\`\`\`css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
\`\`\`

### Page Transitions

**Fade In**
\`\`\`css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\`

**Stagger Animation**
\`\`\`css
.stagger-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s ease forwards;
}

.stagger-item:nth-child(1) { animation-delay: 0.1s; }
.stagger-item:nth-child(2) { animation-delay: 0.2s; }
.stagger-item:nth-child(3) { animation-delay: 0.3s; }
\`\`\`

---

## Accessibility

### Color Contrast

**WCAG AA Compliance**
- Text on white: minimum 4.5:1 ratio
- Large text: minimum 3:1 ratio
- Interactive elements: minimum 3:1 ratio

**Color Combinations**
\`\`\`css
/* High contrast combinations */
.text-primary { color: #000000; } /* 21:1 on white */
.text-secondary { color: #666666; } /* 7:1 on white */
.text-muted { color: #999999; } /* 4.5:1 on white */

/* Brand color accessibility */
.bg-primary { background: #00C896; color: #000000; } /* 5.2:1 */
.bg-primary-dark { background: #00A076; color: #FFFFFF; } /* 4.8:1 */
\`\`\`

### Focus States

\`\`\`css
.focus-visible {
  outline: 2px solid #00C896;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Custom focus for buttons */
.btn:focus-visible {
  outline: 2px solid #00C896;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 200, 150, 0.2);
}
\`\`\`

### Screen Reader Support

\`\`\`css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
\`\`\`

---

## Implementation Guidelines

### CSS Custom Properties

\`\`\`css
:root {
  /* Colors */
  --color-primary: #00C896;
  --color-background: #F9F5F0;
  --color-text: #000000;
  
  /* Spacing */
  --space-unit: 0.25rem;
  --space-xs: calc(var(--space-unit) * 1);
  --space-sm: calc(var(--space-unit) * 2);
  --space-md: calc(var(--space-unit) * 4);
  --space-lg: calc(var(--space-unit) * 6);
  --space-xl: calc(var(--space-unit) * 8);
  
  /* Typography */
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-display: 'Poppins', system-ui, sans-serif;
  --font-mono: 'PT Mono', monospace;
  
  /* Borders */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 1rem;
  --border-radius-xl: 1.25rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
\`\`\`

### Component Architecture

**Base Component Structure**
\`\`\`tsx
// components/ui/card.tsx
interface CardProps {
  variant?: 'default' | 'vibrant' | 'outlined';
  color?: 'coral' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';
  className?: string;
  children: React.ReactNode;
}

export function Card({ variant = 'default', color, className, children }: CardProps) {
  return (
    <div 
      className={cn(
        'card',
        variant === 'vibrant' && 'card-vibrant',
        color && `card-${color}`,
        className
      )}
    >
      {children}
    </div>
  );
}
\`\`\`

### Responsive Design

**Breakpoints**
\`\`\`css
/* Mobile First Approach */
.responsive-element {
  /* Mobile (default) */
  font-size: 1rem;
  padding: 1rem;
}

@media (min-width: 640px) {
  /* Tablet */
  .responsive-element {
    font-size: 1.125rem;
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  /* Desktop */
  .responsive-element {
    font-size: 1.25rem;
    padding: 2rem;
  }
}
\`\`\`

### Performance Considerations

**Optimized Animations**
\`\`\`css
/* Use transform and opacity for smooth animations */
.optimized-animation {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force hardware acceleration */
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .optimized-animation {
    animation: none;
    transition: none;
  }
}
\`\`\`

---

## Brand Voice & Tone

### Writing Style
- **Friendly and approachable**: Use conversational language
- **Clear and concise**: Avoid jargon, explain technical terms
- **Encouraging**: Motivate builders to start their projects
- **Professional**: Maintain credibility and trust

### Content Guidelines
- Use active voice
- Keep sentences short and scannable
- Include clear calls-to-action
- Provide helpful context and examples

### Microcopy Examples
\`\`\`
// Button text
"Explore Ideas" (not "Click Here")
"Get Started" (not "Submit")
"Learn More" (not "Read More")

// Error messages
"Oops! Something went wrong. Please try again." (friendly)
"Please enter a valid email address." (helpful)

// Success messages
"Idea submitted successfully! We'll review it soon." (encouraging)
"Welcome to Springboard! Let's build something amazing." (motivating)
\`\`\`

---

This style guide serves as the single source of truth for all design decisions on the Springboard platform. It should be referenced by designers, developers, and content creators to ensure consistency across all touchpoints.

For questions or suggestions about this style guide, please refer to the project documentation or reach out to the design team.
