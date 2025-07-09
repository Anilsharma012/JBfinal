import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Package,
  CheckCircle,
  Search,
  Filter,
  ShoppingCart,
  Star,
  Award,
  Shield,
  Phone,
  Mail,
  ArrowRight,
  Download,
  Wrench,
  Settings,
  Grid3X3,
  List,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@shared/types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("name");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setProducts(data.data);
          setFilteredProducts(data.data);
        } else {
          setProducts([]);
          setFilteredProducts([]);
        }
      } catch (error) {
        console.error("❌ Failed to fetch products:", error);
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy]);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fe47a2c8dea8b451da551bc04f83bbb06?format=webp&width=800"
                alt="JB Industries Logo"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">
                  JB Industries
                </h1>
                <p className="text-sm text-blue-600">Fastening Solution</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-blue-600 font-medium transition-colors"
              >
                Products
              </Link>
              <Link
                to="/certifications"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Certifications
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Link to="/quote">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-primary relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 to-brand-slate/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Our Product Catalog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
              Premium Quality
              <span className="block bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Fastening Solutions
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of high-quality fasteners,
              precision machined components, and custom solutions manufactured
              to the highest industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-blue hover:bg-gray-50 shadow-elevated hover-lift"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Catalog
              </Button>
              <Link to="/quote">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-blue"
                >
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-brand-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-brand-gray" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-brand-blue focus:ring-brand-blue"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Our Products ({filteredProducts.length})
            </h2>
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product._id || product.id}
                  className="group hover-lift border-gray-200 overflow-hidden bg-white shadow-professional"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant={product.inStock ? "default" : "secondary"}
                          className={`${
                            product.inStock
                              ? "bg-emerald-500 text-white border-emerald-500"
                              : "bg-gray-500 text-white border-gray-500"
                          } backdrop-blur-sm`}
                        >
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <Badge
                          variant="outline"
                          className="text-xs border-brand-blue text-brand-blue"
                        >
                          {product.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-brand-slate mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-brand-gray mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold bg-gradient-accent bg-clip-text text-transparent">
                          {formatPrice(product.price)}
                        </span>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-primary text-white hover:opacity-90 shadow-professional"
                            disabled={!product.inStock}
                          >
                            <ShoppingCart className="mr-1 h-4 w-4" />
                            Order
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <Card
                  key={product._id || product.id}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full md:w-48 h-48 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <Badge variant="outline" className="mb-2">
                              {product.category}
                            </Badge>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {product.name}
                            </h3>
                          </div>
                          <Badge
                            variant={product.inStock ? "default" : "secondary"}
                          >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600">
                            {formatPrice(product.price)}
                          </span>
                          <div className="flex gap-3">
                            <Button variant="outline">
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                            <Button
                              className="bg-blue-600 hover:bg-blue-700"
                              disabled={!product.inStock}
                            >
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Order Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-secondary relative">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-slate mb-4 font-display">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-brand-gray">
              Quality and excellence in every component
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover-lift">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-elevated">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-slate mb-2 group-hover:text-brand-blue transition-colors">
                ISO Certified
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                ISO 45001:2018 certified manufacturing processes ensuring
                highest quality standards.
              </p>
            </div>

            <div className="text-center group hover-lift">
              <div className="bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-elevated">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-slate mb-2 group-hover:text-brand-emerald transition-colors">
                Premium Materials
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                High-grade steel and stainless steel materials sourced from
                trusted suppliers.
              </p>
            </div>

            <div className="text-center group hover-lift">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-elevated">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-slate mb-2 group-hover:text-brand-blue transition-colors">
                Quality Testing
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                Rigorous quality control and testing procedures for every
                product batch.
              </p>
            </div>

            <div className="text-center group hover-lift">
              <div className="bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-elevated">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-slate mb-2 group-hover:text-brand-emerald transition-colors">
                Custom Solutions
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                Tailored fastening solutions designed to meet your specific
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-slate to-brand-blue/90"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
            Need Custom
            <span className="block bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Fastening Solutions?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our expert team is ready to help you find the perfect fastening
            solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button
                size="lg"
                className="bg-white text-brand-slate hover:bg-gray-50 shadow-elevated hover-lift font-semibold"
              >
                Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover-lift"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white rounded-full p-1 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                    alt="JB Industries Logo"
                    className="h-6 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">JB Industries</h3>
                  <p className="text-gray-400 text-sm">Fastening Solution</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading manufacturer and supplier of high-quality fastening
                solutions. ISO 45001:2018 certified for excellence in
                occupational health and safety management.
              </p>
              <p className="text-sm text-gray-500">GST: 06AGZPJ8621P1ZF</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quality"
                    className="hover:text-white transition-colors"
                  >
                    Quality Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 JB Industries. All rights reserved. | Proprietary business
              by Rajni Jain
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
