export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content?: string;
  image: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedDate: string;
  readTime: string;
  featured?: boolean;
  slug?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description?: string;
  color?: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: 'technology',
    name: 'Technology',
    description: 'Latest tech trends and innovations',
    color: 'blue'
  },
  {
    id: 'design',
    name: 'Design',
    description: 'UI/UX design insights and best practices',
    color: 'purple'
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Business strategies and growth insights',
    color: 'green'
  },
  {
    id: 'development',
    name: 'Development',
    description: 'Software development tutorials and tips',
    color: 'orange'
  },
  {
    id: 'ai-ml',
    name: 'AI & ML',
    description: 'Artificial Intelligence and Machine Learning',
    color: 'red'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Web Development: Transforming Digital Experiences',
    description: 'Exploring how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences and personalized content delivery.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    category: 'ai-ml',
    tags: ['AI', 'Web Development', 'Machine Learning', 'Automation'],
    author: {
      name: 'Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      bio: 'Senior AI Developer at G1 Technologies'
    },
    publishedDate: '2024-01-20',
    readTime: '8 min read',
    featured: true,
    slug: 'future-of-ai-web-development'
  },
  {
    id: '2',
    title: 'Building Scalable Cloud Architecture: Best Practices for Modern Applications',
    description: 'A comprehensive guide to designing and implementing scalable cloud infrastructure that grows with your business needs while maintaining performance and security.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    category: 'technology',
    tags: ['Cloud Computing', 'Architecture', 'DevOps', 'Scalability'],
    author: {
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
      bio: 'Cloud Solutions Architect'
    },
    publishedDate: '2024-01-18',
    readTime: '12 min read',
    featured: false,
    slug: 'scalable-cloud-architecture-best-practices'
  },
  {
    id: '3',
    title: 'Modern UI/UX Design Principles: Creating Intuitive Digital Experiences',
    description: 'Discover the fundamental principles of modern UI/UX design that create engaging, accessible, and user-friendly digital experiences across all platforms.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    category: 'design',
    tags: ['UI/UX', 'Design Systems', 'User Experience', 'Accessibility'],
    author: {
      name: 'Arjun Patel',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      bio: 'Lead UX Designer'
    },
    publishedDate: '2024-01-16',
    readTime: '10 min read',
    featured: false,
    slug: 'modern-ui-ux-design-principles'
  },
  {
    id: '4',
    title: 'Digital Transformation Strategies for Small and Medium Businesses',
    description: 'Practical strategies and actionable insights for SMBs looking to embrace digital transformation and compete effectively in the digital marketplace.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'business',
    tags: ['Digital Transformation', 'SMB', 'Strategy', 'Growth'],
    author: {
      name: 'Sneha Gupta',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      bio: 'Business Strategy Consultant'
    },
    publishedDate: '2024-01-14',
    readTime: '15 min read',
    featured: false,
    slug: 'digital-transformation-strategies-smb'
  },
  {
    id: '5',
    title: 'Next.js 15 Deep Dive: Advanced Features and Performance Optimizations',
    description: 'Explore the latest features in Next.js 15, including advanced server components, improved performance optimizations, and new development tools.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    category: 'development',
    tags: ['Next.js', 'React', 'Web Development', 'Performance'],
    author: {
      name: 'Vikram Singh',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      bio: 'Full Stack Developer'
    },
    publishedDate: '2024-01-12',
    readTime: '14 min read',
    featured: false,
    slug: 'nextjs-15-deep-dive-features'
  },
  {
    id: '6',
    title: 'Cybersecurity Best Practices for Modern Web Applications',
    description: 'Essential security measures and best practices to protect your web applications from common vulnerabilities and emerging cyber threats.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    category: 'technology',
    tags: ['Cybersecurity', 'Web Security', 'Best Practices', 'Privacy'],
    author: {
      name: 'Anita Reddy',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
      bio: 'Cybersecurity Specialist'
    },
    publishedDate: '2024-01-10',
    readTime: '11 min read',
    featured: false,
    slug: 'cybersecurity-best-practices-web-apps'
  },
  {
    id: '7',
    title: 'Mobile-First Development: Building Responsive Applications for All Devices',
    description: 'Learn how to implement mobile-first development strategies that ensure your applications provide excellent user experiences across all device types.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    category: 'development',
    tags: ['Mobile Development', 'Responsive Design', 'Progressive Web Apps'],
    author: {
      name: 'Rohit Agarwal',
      avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop',
      bio: 'Mobile Development Expert'
    },
    publishedDate: '2024-01-08',
    readTime: '9 min read',
    featured: false,
    slug: 'mobile-first-development-responsive-apps'
  },
  {
    id: '8',
    title: 'The Rise of Edge Computing: Transforming Data Processing and User Experience',
    description: 'Understanding how edge computing is revolutionizing data processing, reducing latency, and enabling new possibilities for real-time applications.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
    category: 'technology',
    tags: ['Edge Computing', 'Data Processing', 'Performance', 'Innovation'],
    author: {
      name: 'Deepak Menon',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop',
      bio: 'Solutions Architect'
    },
    publishedDate: '2024-01-06',
    readTime: '13 min read',
    featured: false,
    slug: 'rise-of-edge-computing'
  }
];

// Utility functions for blog data
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
};

export const getPostsByCategory = (categoryId: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === categoryId);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentPostId: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostById(currentPostId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => 
      post.id !== currentPostId && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const searchPosts = (query: string): BlogPost[] => {
  const searchQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery) ||
    post.description.toLowerCase().includes(searchQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
    post.author.name.toLowerCase().includes(searchQuery)
  );
};

export const getTotalPages = (postsPerPage: number = 6): number => {
  return Math.ceil(blogPosts.length / postsPerPage);
};

export const getPaginatedPosts = (page: number = 1, postsPerPage: number = 6): BlogPost[] => {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return blogPosts.slice(startIndex, endIndex);
};