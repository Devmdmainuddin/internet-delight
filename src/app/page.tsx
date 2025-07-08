
import {
  Search,
  Menu,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BlogCard } from "@/components/card/BlogCard";
import Sidebar from "@/components/sidebar/Sidebar";
import Hero from "@/components/Slider/Hero";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button className="lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <div className="text-2xl font-bold">ZORIK</div>
              <nav className="hidden lg:flex space-x-6">
                <a href="#" className="text-sm font-medium hover:text-blue-600">
                  GADGET
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-600">
                  LIFE STYLE
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-600">
                  FOOD
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-600">
                  TRAVEL
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-600">
                  GAMING
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-600">
                  POST FEATURES
                </a>
                <a href="#" className="text-sm font-medium hover:text-blue-600">
                  CONTACT
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-600" />
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

      {/* Hero Section */}
      <Hero />

      {/* Discover Today's Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Discover Today&apos;s</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">01</span>
              <div>
                <h3 className="font-semibold">
                  Foodie Diaries: Recipes for Every Occasion
                </h3>
                <p className="text-sm text-gray-600">
                  Explore culinary adventures
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Link href="/blog/1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Life Style</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Sort By</span>
                  <select className="border rounded px-3 py-1 text-sm">
                    <option>Recent Post</option>
                  </select>
                </div>
              </div>
            </Link>
            {/* Article Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>

            <div className="text-center mb-8">
              <Button variant="outline" className="px-6 bg-transparent">
                View all →
              </Button>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Subscribe To Get Update
              </h3>
              <p className="text-gray-600 mb-4">Latest Blog Post</p>
              <div className="flex max-w-md mx-auto">
                <Input placeholder="Enter Email" className="rounded-r-none" />
                <Button className="bg-green-500 hover:bg-green-600 rounded-l-none">
                  ✓
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Don&apos;t Worry! We Don&apos;t Spam!
              </p>
            </div>

            {/* Spot Light Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Spot Light</h3>
              <div className="flex space-x-4 mb-4">
                <Badge variant="secondary">Food</Badge>
                <Badge variant="secondary">Fashion</Badge>
                <Badge variant="secondary">Tech</Badge>
                <Badge variant="secondary">Beauty</Badge>
                <Badge variant="secondary">Gaming</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" className="px-6 bg-transparent">
                LOAD MORE →
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">ZORIK</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Welcome! Feel free to dive and match these infographics based on
              your interests and the preferences of your target audience. These
              infographics based.
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
            <div className="flex items-center space-x-2">
              <Youtube className="h-5 w-5" />
              <span>123K</span>
            </div>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white">
              LIFE STYLE
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              FASHION
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              TRAVEL
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              FOOD
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              BEAUTY
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              GAMING POST
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              TECH POST
            </a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            © Copyright 2024 Zorik Design by EGENSLAB
          </div>
        </div>
      </footer>
    </div>
  );
}
