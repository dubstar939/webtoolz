import { useState, useEffect, useRef } from 'react';
import {
  Code2, FileText, Image, Lock, Palette, Calculator,
  Network, Clock, Database, Sparkles, Zap, Shield,
  Globe, Hash, Type, GitBranch, Layers, Binary,
  QrCode, Key, Terminal, Braces, Grid3X3, Link2,
  Eye, FileCode, Target, BarChart3,
  Search, ChevronDown, ExternalLink,
  Menu, X, ArrowRight, Star, Users, Activity
} from 'lucide-react';

// GitHub Icon Component
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Unlock Icon Component
const Unlock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
  </svg>
);

// Calendar Icon Component
const Calendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

// Tool data structure
interface Tool {
  name: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

interface Category {
  name: string;
  icon: React.ReactNode;
  color: string;
  tools: Tool[];
}

// Categories with tools
const categories: Category[] = [
  {
    name: 'Web Analysis',
    icon: <Globe className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-500',
    tools: [
      { name: 'Website Status Checker', description: 'Check if a website is online or down', icon: <Activity className="w-5 h-5" />, tags: ['Network'] },
      { name: 'HTTP Headers Viewer', description: 'View all HTTP headers of any URL', icon: <Terminal className="w-5 h-5" />, tags: ['Network'] },
      { name: 'WHOIS Lookup', description: 'Get domain registration info', icon: <Search className="w-5 h-5" />, tags: ['Network'] },
    ]
  },
  {
    name: 'Text Tools',
    icon: <Type className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-500',
    tools: [
      { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text instantly', icon: <FileText className="w-5 h-5" />, tags: ['Generation'] },
      { name: 'Text Diff Checker', description: 'Compare two texts side by side', icon: <GitBranch className="w-5 h-5" />, tags: ['Comparison'] },
      { name: 'Word Counter', description: 'Count words, characters, and lines', icon: <Hash className="w-5 h-5" />, tags: ['Analysis'] },
      { name: 'Case Converter', description: 'Convert between camel, Pascal, snake case', icon: <Layers className="w-5 h-5" />, tags: ['Conversion'] },
    ]
  },
  {
    name: 'Code Tools',
    icon: <Code2 className="w-5 h-5" />,
    color: 'from-purple-500 to-fuchsia-500',
    tools: [
      { name: 'JSON Formatter', description: 'Beautify and validate JSON data', icon: <Braces className="w-5 h-5" />, tags: ['Format'] },
      { name: 'SQL Query Formatter', description: 'Format and beautify SQL queries', icon: <Database className="w-5 h-5" />, tags: ['Format'] },
      { name: 'Markdown Preview', description: 'Write and preview Markdown live', icon: <FileCode className="w-5 h-5" />, tags: ['Preview'] },
      { name: 'Cron Expression Builder', description: 'Visual cron job scheduler', icon: <Clock className="w-5 h-5" />, tags: ['Generator'] },
    ]
  },
  {
    name: 'Data Conversion',
    icon: <Layers className="w-5 h-5" />,
    color: 'from-orange-500 to-amber-500',
    tools: [
      { name: 'JSON to YAML', description: 'Convert JSON to YAML format', icon: <GitBranch className="w-5 h-5" />, tags: ['Converter'] },
      { name: 'CSV to JSON', description: 'Convert CSV data to JSON', icon: <Grid3X3 className="w-5 h-5" />, tags: ['Converter'] },
      { name: 'XML to JSON', description: 'Convert XML to JSON instantly', icon: <Code2 className="w-5 h-5" />, tags: ['Converter'] },
      { name: 'Number Base Converter', description: 'Convert between bin, oct, dec, hex', icon: <Binary className="w-5 h-5" />, tags: ['Converter'] },
    ]
  },
  {
    name: 'Encode/Decode',
    icon: <Lock className="w-5 h-5" />,
    color: 'from-rose-500 to-pink-500',
    tools: [
      { name: 'Base64 Encoder', description: 'Encode text to Base64 format', icon: <Lock className="w-5 h-5" />, tags: ['Encode'] },
      { name: 'Base64 Decoder', description: 'Decode Base64 to plain text', icon: <Unlock className="w-5 h-5" />, tags: ['Decode'] },
      { name: 'URL Encoder', description: 'Encode URL special characters', icon: <Link2 className="w-5 h-5" />, tags: ['Encode'] },
      { name: 'JWT Decoder', description: 'Decode and inspect JWT tokens', icon: <Key className="w-5 h-5" />, tags: ['Security'] },
      { name: 'HTML Entity Encoder', description: 'Encode HTML special characters', icon: <Code2 className="w-5 h-5" />, tags: ['Encode'] },
    ]
  },
  {
    name: 'Color Tools',
    icon: <Palette className="w-5 h-5" />,
    color: 'from-violet-500 to-purple-500',
    tools: [
      { name: 'Color Converter', description: 'Convert between HEX, RGB, HSL, HSV', icon: <Palette className="w-5 h-5" />, tags: ['Converter'] },
      { name: 'Color Palette Extractor', description: 'Extract colors from images', icon: <Eye className="w-5 h-5" />, tags: ['Extraction'] },
      { name: 'Contrast Checker', description: 'Check WCAG accessibility contrast', icon: <Target className="w-5 h-5" />, tags: ['Accessibility'] },
      { name: 'Color Mixer', description: 'Blend colors together', icon: <Sparkles className="w-5 h-5" />, tags: ['Generator'] },
    ]
  },
  {
    name: 'CSS Tools',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'from-cyan-500 to-blue-500',
    tools: [
      { name: 'CSS Shadow Generator', description: 'Create beautiful box shadows', icon: <Grid3X3 className="w-5 h-5" />, tags: ['Generator'] },
      { name: 'Border Radius Generator', description: 'Design rounded corners visually', icon: <Layers className="w-5 h-5" />, tags: ['Generator'] },
      { name: 'Gradient Generator', description: 'Create CSS gradients', icon: <Palette className="w-5 h-5" />, tags: ['Generator'] },
      { name: 'Flexbox Generator', description: 'Build Flexbox layouts visually', icon: <BarChart3 className="w-5 h-5" />, tags: ['Generator'] },
    ]
  },
  {
    name: 'Image Tools',
    icon: <Image className="w-5 h-5" />,
    color: 'from-green-500 to-emerald-500',
    tools: [
      { name: 'Image to Base64', description: 'Convert images to Base64 strings', icon: <Image className="w-5 h-5" />, tags: ['Converter'] },
      { name: 'Image Resizer', description: 'Resize images to any dimension', icon: <BarChart3 className="w-5 h-5" />, tags: ['Converter'] },
      { name: 'Favicon Generator', description: 'Create favicons from images', icon: <Star className="w-5 h-5" />, tags: ['Generator'] },
    ]
  },
  {
    name: 'Generation',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'from-yellow-500 to-orange-500',
    tools: [
      { name: 'UUID Generator', description: 'Generate random UUIDs v4', icon: <Hash className="w-5 h-5" />, tags: ['Generator'] },
      { name: 'Password Generator', description: 'Create secure random passwords', icon: <Key className="w-5 h-5" />, tags: ['Security'] },
      { name: 'Hash Generator', description: 'Generate MD5, SHA-1, SHA-256 hashes', icon: <Lock className="w-5 h-5" />, tags: ['Security'] },
      { name: 'QR Code Generator', description: 'Create QR codes from text', icon: <QrCode className="w-5 h-5" />, tags: ['Generator'] },
    ]
  },
  {
    name: 'Network',
    icon: <Network className="w-5 h-5" />,
    color: 'from-indigo-500 to-blue-500',
    tools: [
      { name: 'IP Address Lookup', description: 'Find your public IP address', icon: <Globe className="w-5 h-5" />, tags: ['Network'] },
      { name: 'Subnet Calculator', description: 'Calculate subnet details', icon: <Calculator className="w-5 h-5" />, tags: ['Calculator'] },
      { name: 'Port Scanner', description: 'Check if ports are open', icon: <Activity className="w-5 h-5" />, tags: ['Network'] },
    ]
  },
  {
    name: 'Calculation',
    icon: <Calculator className="w-5 h-5" />,
    color: 'from-slate-500 to-gray-500',
    tools: [
      { name: 'Percentage Calculator', description: 'Calculate percentages easily', icon: <BarChart3 className="w-5 h-5" />, tags: ['Calculator'] },
      { name: 'Age Calculator', description: 'Calculate age from birth date', icon: <Clock className="w-5 h-5" />, tags: ['Calculator'] },
      { name: 'BMI Calculator', description: 'Calculate Body Mass Index', icon: <Activity className="w-5 h-5" />, tags: ['Calculator'] },
    ]
  },
  {
    name: 'Date/Time',
    icon: <Clock className="w-5 h-5" />,
    color: 'from-teal-500 to-cyan-500',
    tools: [
      { name: 'Unix Timestamp Converter', description: 'Convert timestamps to dates', icon: <Clock className="w-5 h-5" />, tags: ['Converter'] },
      { name: 'Time Zone Converter', description: 'Convert times across zones', icon: <Globe className="w-5 h-5" />, tags: ['Converter'] },
      { name: 'Date Difference Calculator', description: 'Calculate days between dates', icon: <Calendar className="w-5 h-5" />, tags: ['Calculator'] },
    ]
  },
];

// Animated Counter Hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

// Floating Orb Component
function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '4s' }}
    />
  );
}

// Hero Section
function Hero() {
  const { count: toolCount, ref: toolRef } = useCountUp(74);
  const { count: usageCount, ref: usageRef } = useCountUp(1500000, 3000);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingOrb className="w-[600px] h-[600px] bg-indigo-600 top-[-200px] left-[-200px]" delay={0} />
        <FloatingOrb className="w-[500px] h-[500px] bg-purple-600 top-[50%] right-[-150px]" delay={1} />
        <FloatingOrb className="w-[400px] h-[400px] bg-cyan-600 bottom-[-100px] left-[20%]" delay={2} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-slate-300">74 Free Tools for Developers</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">All the web tools you need,</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            in one place
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Encoding, conversion, generation, validation — everything you need for development, 
          beautifully crafted and ready to use.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div ref={toolRef} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">{toolCount}</div>
              <div className="text-sm text-slate-400">Online Tools</div>
            </div>
          </div>
          
          <div ref={usageRef} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">{formatNumber(usageCount)}</div>
              <div className="text-sm text-slate-400">Total Uses</div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Ready-to-Use"
            description="70+ tools for encoding, conversion, generation, and validation — all in one place."
            gradient="from-amber-500 to-orange-500"
            delay={0}
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Anytime, Anywhere"
            description="Open in any browser on PC or mobile. No sign-up, no downloads required."
            gradient="from-emerald-500 to-cyan-500"
            delay={1}
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Privacy First"
            description="Most processing happens in your browser. Your data stays safe and secure."
            gradient="from-purple-500 to-pink-500"
            delay={2}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ 
  icon, 
  title, 
  description, 
  gradient,
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  gradient: string;
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

// Tool Card Component
function ToolCard({ tool, color, index }: { tool: Tool; color: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative p-5 rounded-2xl bg-[#12121a] border border-[#2a2a3a] transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 30}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={`shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
          {tool.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">
            {tool.name}
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">{tool.description}</p>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 ml-15">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-slate-500 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
    </div>
  );
}

// Category Section Component
function CategorySection({ category, index }: { category: Category; index: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full mb-6 group"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
            {category.icon}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-slate-500">{category.tools.length} tools</p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Tools Grid */}
      <div
        className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {category.tools.map((tool, toolIndex) => (
          <ToolCard
            key={tool.name}
            tool={tool}
            color={category.color}
            index={toolIndex}
          />
        ))}
      </div>
    </section>
  );
}

// Main App Component
export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredCategories = categories.map(category => ({
    ...category,
    tools: category.tools.filter(tool =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.tools.length > 0);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center bg-indigo-600 rounded-lg text-white font-bold text-xs">939</div>
              <span className="text-xl font-bold">939PRO Studios</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#tools" className="text-slate-400 hover:text-white transition-colors">Tools</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Categories</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">About</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#tools"
                className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors flex items-center gap-2"
              >
                Browse Tools
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#12121a] border-t border-white/5">
            <div className="px-4 py-4 space-y-3">
              <a href="#tools" className="block px-4 py-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">Tools</a>
              <a href="#" className="block px-4 py-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">Categories</a>
              <a href="#" className="block px-4 py-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">About</a>
              <a href="#tools" className="block px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium text-center">
                Browse Tools
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Search Section */}
      <section id="tools" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#12121a] border border-[#2a2a3a] text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4 text-slate-500" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-center mt-4 text-slate-500">
                Found {filteredCategories.reduce((acc, cat) => acc + cat.tools.length, 0)} tools matching "{searchQuery}"
              </p>
            )}
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <CategorySection key={category.name} category={category} index={index} />
              ))
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No tools found</h3>
                <p className="text-slate-400">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-indigo-950/20 to-[#0a0a0f]" />
          <FloatingOrb className="w-[400px] h-[400px] bg-indigo-600 top-0 left-1/2 -translate-x-1/2" delay={0} />
        </div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to boost your workflow?
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Start using our free tools today. No sign-up required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#tools"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Explore All Tools
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-lg text-white font-bold text-xs">939</div>
              <span className="font-semibold">939PRO Studios</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Feedback
              </a>
            </div>
            
            <p className="text-sm text-slate-500">
              © 2024 Web Toolbox. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
