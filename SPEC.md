# Web Toolbox - Specification

## Concept & Vision

A sleek, developer-focused web toolbox that feels like a premium command center for developers. The design emphasizes speed, efficiency, and modern aesthetics with a dark theme that reduces eye strain during long coding sessions. Every interaction should feel snappy and purposeful, conveying the message: "These tools are built by developers, for developers."

## Design Language

### Aesthetic Direction
Inspired by modern IDE interfaces and developer tools like VS Code and Linear. Dark mode primary with vibrant accent colors that pop against the dark background. Clean geometric shapes with subtle depth through shadows and gradients.

### Color Palette
- **Primary Background**: `#0a0a0f` (deep space black)
- **Secondary Background**: `#12121a` (card surfaces)
- **Tertiary Background**: `#1a1a24` (hover states)
- **Border**: `#2a2a3a` (subtle borders)
- **Primary Accent**: `#6366f1` (indigo - main actions)
- **Secondary Accent**: `#8b5cf6` (purple - highlights)
- **Tertiary Accent**: `#06b6d4` (cyan - info)
- **Success**: `#10b981` (emerald)
- **Warning**: `#f59e0b` (amber)
- **Text Primary**: `#f8fafc` (white)
- **Text Secondary**: `#94a3b8` (slate)
- **Text Muted**: `#64748b` (darker slate)

### Typography
- **Headings**: Inter (700, 600) - clean, modern sans-serif
- **Body**: Inter (400, 500) - excellent readability
- **Code/Tags**: JetBrains Mono - monospace for technical feel
- **Scale**: 14px base, 1.5 line-height for body, tighter for headings

### Spatial System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Border radius: 8px (small), 12px (medium), 16px (large), 24px (cards)
- Max content width: 1280px

### Motion Philosophy
- **Micro-interactions**: 150ms ease-out for hovers, button presses
- **Transitions**: 300ms ease-in-out for reveals, expansions
- **Stagger animations**: 50ms delay between items on load
- **Scroll reveals**: Elements fade-up as they enter viewport
- All animations respect `prefers-reduced-motion`

### Visual Assets
- Icons: Lucide React icons (consistent stroke width, modern look)
- Decorative: Subtle gradient orbs in background, grid patterns
- Category badges: Color-coded pills with subtle glow effects

## Layout & Structure

### Hero Section
- Large headline with gradient text effect
- Animated floating background orbs (subtle)
- Stats bar showing total tools, usage count
- Three feature cards with icons (Ready-to-Use, Anytime Anywhere, Privacy First)

### Tools Grid Section
- Category headers with icon and tool count
- Responsive grid: 4 columns (desktop), 2 (tablet), 1 (mobile)
- Tool cards with hover lift effect and border glow
- Each card shows: icon, name, description, category tags

### Footer
- Minimal, centered copyright
- Links to GitHub, feedback

## Features & Interactions

### Tool Cards
- **Default**: Dark surface, subtle border
- **Hover**: Lift up 4px, border glows with accent color, icon scales up slightly
- **Active**: Press down effect, brighter glow
- **Click**: Navigate to tool (simulated with alert for demo)

### Category Sections
- Collapsible on mobile
- Smooth expand/collapse animation
- Category icons pulse subtly on hover

### Search/Filter (Visual Only)
- Search bar with icon
- Category filter pills
- Real-time filtering animation

### Statistics Counter
- Animated number counting up on scroll into view
- Uses intersection observer

## Component Inventory

### Hero
- Gradient headline (text-fill-color gradient)
- Floating gradient orbs (CSS animations)
- Stats badges with icons

### Feature Card
- Icon with gradient background
- Title and description
- Hover: icon rotates or scales

### Tool Card
- States: default, hover, active
- Icon container with category-specific color
- Tool name (bold), description (muted)
- Category pills (small, colored)

### Category Header
- Icon + title + count badge
- Collapsible chevron on mobile

### Footer
- Simple centered layout
- Social links with hover effects

## Technical Approach

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React
- **Animations**: CSS transitions + Tailwind animate utilities
- **State**: React useState for any interactive features
- **Build**: Vite

## Categories & Tools

1. **Web Analysis Tools** - Website analysis utilities
2. **Text Tools** - Text manipulation and formatting
3. **Code Tools** - Code formatting and utilities
4. **Data Conversion Tools** - JSON, YAML, CSV converters
5. **Encode/Decode Tools** - Base64, URL, JWT, HTML entities
6. **Color Tools** - Color picker, converter, extractor
7. **CSS Tools** - CSS generators and builders
8. **Image Tools** - Image conversion and Base64
9. **Media Tools** - Audio/video utilities
10. **Generation Tools** - Passwords, UUIDs, hashes
11. **Validation Tools** - Input validators
12. **Network Tools** - IP, DNS utilities
13. **Calculation Tools** - Mathematical converters
14. **Date/Time Tools** - Timestamp converters

Each category contains 3-6 specific tools with icons and descriptions.
