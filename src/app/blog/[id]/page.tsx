import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  User,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/sidebar/Sidebar";

// Mock data - in a real app, this would come from a database
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: "1",
      title: "Style Chronicles Fashion Trends and Tips",
      content: `
        <p>Fashion is more than just clothing; it's a form of self-expression that speaks volumes about who we are and how we want to be perceived by the world. In today's ever-evolving fashion landscape, staying current with trends while maintaining your personal style can be both exciting and challenging.</p>
        
        <h2>The Evolution of Modern Fashion</h2>
        <p>The fashion industry has undergone significant transformations in recent years. From sustainable fashion movements to the rise of streetwear culture, we're witnessing a democratization of style that allows individuals to express themselves more freely than ever before.</p>
        
        <p>Social media platforms have become the new runways, where influencers and everyday fashion enthusiasts showcase their unique interpretations of current trends. This shift has made fashion more accessible and inclusive, breaking down traditional barriers that once existed in the industry.</p>
        
        <h2>Building Your Personal Style</h2>
        <p>Developing a personal style is a journey of self-discovery. It's about understanding what makes you feel confident and comfortable while staying true to your personality. Here are some key principles to consider:</p>
        
        <ul>
          <li><strong>Know Your Body:</strong> Understanding your body type helps you choose clothes that flatter your figure and make you feel confident.</li>
          <li><strong>Invest in Basics:</strong> A well-curated wardrobe starts with quality basics that can be mixed and matched.</li>
          <li><strong>Experiment with Colors:</strong> Don't be afraid to step out of your comfort zone and try new color combinations.</li>
          <li><strong>Accessorize Wisely:</strong> The right accessories can transform a simple outfit into something extraordinary.</li>
        </ul>
        
        <h2>Sustainable Fashion Choices</h2>
        <p>As we become more conscious of our environmental impact, sustainable fashion has emerged as a crucial consideration. This involves making thoughtful choices about what we buy, how often we shop, and how we care for our clothes.</p>
        
        <p>Consider investing in timeless pieces that won't go out of style, supporting brands that prioritize ethical manufacturing practices, and exploring second-hand and vintage options. These choices not only benefit the environment but often result in a more unique and personal wardrobe.</p>
        
        <h2>The Future of Fashion</h2>
        <p>Looking ahead, technology continues to reshape the fashion industry. From virtual try-on experiences to AI-powered style recommendations, the way we discover, purchase, and interact with fashion is constantly evolving.</p>
        
        <p>The key to navigating this changing landscape is to remain open to new ideas while staying true to your personal aesthetic. Fashion should be fun, expressive, and ultimately, a reflection of your unique personality.</p>
      `,
      author: {
        name: "Robert Sunmary",
        avatar: "/1.png",
        bio: "Fashion journalist and style consultant with over 10 years of experience in the industry.",
      },
      publishedAt: "15 Jan, 2024",
      readTime: "8 min read",
      views: "2.5K",
      likes: 156,
      category: "Fashion",
      tags: ["Fashion", "Style", "Trends", "Lifestyle"],
      featuredImage: "/1.png",
    },
    "2": {
      id: "2",
      title: "Glow Up Guide: Radiant Skin from AM to PM",
      content: `
        <p>Achieving radiant, healthy skin is a goal that many of us strive for, but with so much information available, it can be overwhelming to know where to start. The key to glowing skin lies in understanding your skin type and developing a consistent routine that works for you.</p>
        
        <h2>Morning Skincare Routine</h2>
        <p>Your morning routine should focus on protection and preparation for the day ahead. Here's a step-by-step guide:</p>
        
        <ol>
          <li><strong>Gentle Cleanser:</strong> Start with a mild cleanser to remove any impurities from overnight.</li>
          <li><strong>Toner:</strong> Apply a balancing toner to prep your skin for the next steps.</li>
          <li><strong>Serum:</strong> Use a vitamin C serum for antioxidant protection.</li>
          <li><strong>Moisturizer:</strong> Hydrate your skin with a suitable moisturizer.</li>
          <li><strong>Sunscreen:</strong> Never skip SPF - it's your best defense against aging.</li>
        </ol>
        
        <h2>Evening Skincare Routine</h2>
        <p>Your evening routine is about repair and renewal while you sleep:</p>
        
        <p>Double cleansing is essential in the evening to remove makeup, sunscreen, and daily pollutants. Follow with treatments like retinoids or AHA/BHA acids, but introduce these gradually to avoid irritation.</p>
        
        <h2>Weekly Treatments</h2>
        <p>Incorporate weekly treatments like face masks, exfoliation, and professional treatments to boost your routine's effectiveness.</p>
      `,
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "/2.png",
        bio: "Dermatologist and skincare expert specializing in anti-aging and acne treatments.",
      },
      publishedAt: "12 Jan, 2024",
      readTime: "6 min read",
      views: "1.8K",
      likes: 89,
      category: "Beauty",
      tags: ["Beauty", "Skincare", "Health", "Wellness"],
      featuredImage: "/placeholder.svg?height=400&width=800",
    },
  };

  return posts[id as keyof typeof posts] || posts["1"];
};

const getRelatedPosts = () => [
  {
    id: "3",
    title: "Wellness Nourishing Mind, Body, and Soul Trends",
    image: "/1.png",
    category: "Health",
    author: "Dr. Michael Chen",
    publishedAt: "10 Jan, 2024",
  },
  {
    id: "4",
    title: "Speed Run Secrets: Achieving Record Times",
    image: "/2.png",
    category: "Gaming",
    author: "Alex Rodriguez",
    publishedAt: "08 Jan, 2024",
  },
  {
    id: "5",
    title: "Digital Digest Weekly Tech Updates",
    image: "/3.png",
    category: "Tech",
    author: "Jennifer Kim",
    publishedAt: "05 Jan, 2024",
  },
];

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const post = getBlogPost(params.id);
  const relatedPosts = getRelatedPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold">
                ZORIK
              </Link>
              <nav className="hidden lg:flex space-x-6">
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  GADGET
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  LIFE STYLE
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  FOOD
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  TRAVEL
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  GAMING
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  POST FEATURES
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  CONTACT
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                SUBSCRIBE
              </Button>
              <div className="flex space-x-2">
                <Facebook className="h-4 w-4 text-gray-600" />
                <Twitter className="h-4 w-4 text-gray-600" />
                <Instagram className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link
          href="/"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

 <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
           <div className="mb-6">
                  <Badge
                    className={`mb-4 ${
                      post.category === "Fashion"
                        ? "bg-teal-500"
                        : post.category === "Beauty"
                        ? "bg-pink-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {post.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {post.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishedAt}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>{post.views} views</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2 bg-transparent"
                      >
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2 bg-transparent"
                      >
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Featured Image */}
                <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src={post.featuredImage || "/1.png"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Article Content */}

                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-3">
                    <div
                      className="prose prose-lg max-w-none mb-12"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Author Bio */}
                    <Card className="p-6 mb-8">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src={post.author.avatar || "/placeholder.svg"}
                            alt={post.author.name}
                          />
                          <AvatarFallback>
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2">
                            About {post.author.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {post.author.bio}
                          </p>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Follow
                            </Button>
                            <Button variant="outline" size="sm">
                              <Twitter className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Instagram className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Comments Section */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <MessageCircle className="h-6 w-6 mr-2" />
                        Comments (12)
                      </h3>

                      {/* Comment Form */}
                      <Card className="p-6 mb-6">
                        <h4 className="font-semibold mb-4">Leave a Comment</h4>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <Input placeholder="Your Name" />
                            <Input placeholder="Your Email" type="email" />
                          </div>
                          <Textarea
                            placeholder="Write your comment here..."
                            rows={4}
                          />
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Post Comment
                          </Button>
                        </div>
                      </Card>

                      {/* Sample Comments */}
                      <div className="space-y-6">
                        <div className="flex space-x-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold">John Doe</span>
                              <span className="text-sm text-gray-500">
                                2 hours ago
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">
                              Great article! I&apos;ve been struggling with my
                              skincare routine and this really helped clarify
                              things for me.
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600"
                            >
                              Reply
                            </Button>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold">
                                Sarah Miller
                              </span>
                              <span className="text-sm text-gray-500">
                                5 hours ago
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">
                              Love the sustainable fashion tips! It&apos;s so
                              important to be mindful of our choices.
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600"
                            >
                              Reply
                            </Button>
                          </div>
                        </div>

                        <div className="flex space-x-4 ml-12">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>RS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold text-sm">
                                Robert Sunmary
                              </span>
                              <Badge variant="secondary" className="text-xs">
                                Author
                              </Badge>
                              <span className="text-sm text-gray-500">
                                3 hours ago
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm">
                              Thank you Sarah! Sustainability is definitely a
                              key focus in modern fashion.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <Button variant="outline">Load More Comments</Button>
                      </div>
                    </div>
                  </div>

                </div>
          </div>
           {/* Sidebar */}
           <Sidebar />
           
        </div>
  </div>

   

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">ZORIK</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Welcome! Feel free to dive and match these infographics based on
              your interests and the preferences of your target audience.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <Facebook className="h-5 w-5" />
              <span>123K</span>
            </div>
            <div className="flex items-center space-x-2">
              <Twitter className="h-5 w-5" />
              <span>234K</span>
            </div>
            <div className="flex items-center space-x-2">
              <Instagram className="h-5 w-5" />
              <span>123K</span>
            </div>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <Link href="#" className="text-gray-400 hover:text-white">
              LIFE STYLE
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              FASHION
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              TRAVEL
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              FOOD
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              BEAUTY
            </Link>
          </div>

          <div className="text-center text-gray-400 text-sm">
            © Copyright 2024 Zorik Design by EGENSLAB
          </div>
        </div>
      </footer>
    </div>
  );
}
