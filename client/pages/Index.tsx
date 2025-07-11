import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Award,
  Factory,
  Shield,
  CheckCircle,
  Users,
  Calendar,
  ArrowRight,
  Menu,
  X,
  Download,
  ExternalLink,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      image:
        "https://images.pexels.com/photos/5506052/pexels-photo-5506052.jpeg",
      title: "Automotive Parts & Components",
      subtitle: "High-Quality Fastening Solutions for Automotive Industry",
    },
    {
      image:
        "https://images.pexels.com/photos/2326876/pexels-photo-2326876.jpeg",
      title: "Marine & Shipping Solutions",
      subtitle: "Durable Fasteners for Maritime Applications",
    },
    {
      image:
        "https://images.pexels.com/photos/9716229/pexels-photo-9716229.jpeg",
      title: "Heavy Duty Vehicles",
      subtitle: "Industrial Grade Fastening Systems",
    },
    {
      image:
        "https://images.pexels.com/photos/9242907/pexels-photo-9242907.jpeg",
      title: "Industrial Manufacturing",
      subtitle: "Precision Fasteners for Industrial Equipment",
    },
    {
      image:
        "https://images.pexels.com/photos/17156135/pexels-photo-17156135.jpeg",
      title: "Automotive Excellence",
      subtitle: "Premium Quality Components for Automotive Sector",
    },
    {
      image:
        "https://images.pexels.com/photos/12330258/pexels-photo-12330258.jpeg",
      title: "Performance Vehicles",
      subtitle: "High-Performance Fastening Solutions",
    },
    {
      image:
        "https://images.pexels.com/photos/5008306/pexels-photo-5008306.jpeg",
      title: "Luxury Automotive",
      subtitle: "Premium Fasteners for Luxury Vehicles",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handleDownloadCatalog = () => {
    // Create a temporary link to download catalog
    const link = document.createElement("a");
    link.href =
      "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F7b58337c241a4b4089328bb5b65fb59d?format=webp&width=800";
    link.download = "JB-Industries-Product-Catalog.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCertificate = () => {
    // Open certificate in new tab
    window.open("/certifications", "_blank");
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
                <h1 className="text-2xl font-bold text-gray-900">
                  JB Industries
                </h1>
                <p className="text-xl text-blue-600">Fastening Solution</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
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
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
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

            <div className="flex items-center space-x-4">
              <Link to="/quote">
                <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white">
                  Get Quote
                </Button>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <Link
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/products"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/certifications"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Banner Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* JB Industries Watermark */}
                <div className="absolute top-4 right-4 opacity-20">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                    alt="JB Industries Watermark"
                    className="h-16 w-auto filter invert"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {banner.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                      {banner.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/products">
                        <Button
                          size="lg"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          View Products <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-gray-900"
                        onClick={handleDownloadCatalog}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Catalog
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Company Banner */}
      <section className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white font-medium">
            Your Trusted Partner for Industrial Fastening Solutions Since 2019
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Factory className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  About JB Industries
                </h3>
                <p className="text-gray-600 mb-4">
                  Established as a leading manufacturer and supplier of
                  high-quality fastening solutions. Operating from our modern
                  facility in Rohtak, Haryana, we serve industries across India.
                </p>
                <p className="text-sm text-gray-500">
                  Proprietorship by Rajni Jain
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quality Management
                </h3>
                <p className="text-gray-600 mb-4">
                  ISO 45001:2018 certified for Occupational Health and Safety
                  Management Systems, ensuring the highest standards in our
                  manufacturing processes.
                </p>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Certified
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Expertise
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized in manufacturing precision fasteners and machined
                  components with focus on high tensile and stainless steel
                  materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services & Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fastening solutions designed for industrial
              applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Manufacturing Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      High Tensile Steel Fasteners
                    </h4>
                    <p className="text-gray-600">
                      Premium grade fasteners designed for heavy-duty
                      applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Stainless Steel Components
                    </h4>
                    <p className="text-gray-600">
                      Corrosion-resistant solutions for demanding environments
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Machined Components
                    </h4>
                    <p className="text-gray-600">
                      Precision-engineered parts to exact specifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Custom Solutions
                    </h4>
                    <p className="text-gray-600">
                      Tailored fastening solutions for specific requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2Fbe103cd509794847bb8d30812a672ee6"
                alt="JB Industries Product Range"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2Ffcc5e27aaf9f49e0a1bee7fcb024a277"
                alt="JB Industries Specialized Products"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Quality
            </h2>
            <p className="text-xl text-gray-600">
              Committed to the highest standards of quality and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F467a32e8f6aa4e6f97dfca13b16564e3?format=webp&width=800"
                  alt="ISO 45001:2018 Certification & Quality Standards"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        ISO 45001:2018
                      </h3>
                      <p className="text-gray-600">
                        Occupational Health and Safety Management Systems
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Certificate No:</strong> 22UO11BV
                    </p>
                    <p>
                      <strong>Valid From:</strong> 30/01/2025 Until 22/11/2025
                    </p>
                    <p>
                      <strong>Certified by:</strong> Royal Impact Certification
                      Ltd.
                    </p>
                    <p>
                      <strong>Scope:</strong> Manufacturing & Supply of High
                      Tensile & Stainless Steel Fasteners & Machined Components
                    </p>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">
                      Current & Valid
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div
                className="cursor-pointer group"
                onClick={handleViewCertificate}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2Fdc4511c749e540a3876a64aed480aee3"
                  alt="ISO 45001:2018 Certificate"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg border group-hover:shadow-xl transition-shadow duration-300"
                />
                <p className="mt-4 text-sm text-blue-600 hover:text-blue-800 transition-colors cursor-pointer flex items-center justify-center">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Click to view full certificate details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Trusted Partners
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve top-tier companies across various industries with
              our premium fastening solutions.
            </p>
          </div>

          {/* Horizontal Scrollable Company Logos */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="overflow-x-auto">
              {/* <div className="flex space-x-8 items-center justify-start min-w-max pb-4">

                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                image:

                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      MAHINDRA
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LGB</span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      SANSERA
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      FASTENAL
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      BOSSARD
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">REYHER</span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      C&S ELECTRIC
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">WÜRTH</span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      VIZAG STEEL
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      JACKSON
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SAIL</span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-green-800 to-green-900 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      INDO FARM
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-red-800 to-red-900 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">L&T</span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-purple-800 to-purple-900 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      TEXMO IND.
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 bg-gradient-to-r from-indigo-800 to-indigo-900 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      HELICAL TECH
                    </span>
                  </div>
                </div>
              </div> */}

              <div className="flex space-x-8 items-center justify-start min-w-max pb-4">
                {/* FRICK */}
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 rounded flex items-center justify-center">
                    <img
                      src="image/m.webp"
                      alt="FRICK Logo"
                      className="h-full object-contain"
                    />
                  </div>
                </div>

                {/* MAHINDRA */}
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 rounded flex items-center justify-center">
                    <img
                      src="image/f.png"
                      alt="Mahindra Logo"
                      className="h-full object-contain"
                    />
                  </div>
                </div>

                {/* LGB */}
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 rounded flex items-center justify-center">
                    <img
                      src="image/b.png"
                      alt="LGB Logo"
                      className="h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 rounded flex items-center justify-center">
                    <img
                      src="image/ff.png"
                      alt="LGB Logo"
                      className="h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 rounded flex items-center justify-center">
                    <img
                      src="image/l.png"
                      alt="LGB Logo"
                      className="h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 rounded flex items-center justify-center">
                    <img
                      src="image/s.jpg"
                      alt="LGB Logo"
                      className="h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 rounded flex items-center justify-center">
                    <img
                      src="image/ss.jfif"
                      alt="LGB Logo"
                      className="h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 rounded flex items-center justify-center">
                    <img
                      src="image/mm.png"
                      alt="LGB Logo"
                      className="h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-24 h-16 rounded flex items-center justify-center">
                    <img
                      src="image/ll.jfif"
                      alt="LGB Logo"
                      className="h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                ← Scroll horizontally to view all partners →
              </p>
              <p className="text-sm text-gray-600 font-medium mt-2">
                Trusted by Leading Companies: Frick • Mahindra • LGB • Sansera •
                Fastenal • Bossard • Reyher • C&S Electric • Würth • Vizag Steel
                • Jackson • SAIL • Indo Farm • L&T • Texmo Industries • Helical
                Technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stock & Warehousing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stock & Warehousing
            </h2>
            <p className="text-xl text-gray-600">
              300 Ton Material of Standard Sizes always in our Stock to serve
              our customers On Time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F94d7e106b69749978fa87c8796dfc513?format=webp&width=800"
              alt="JB Industries Stock & Warehousing Facilities"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Extensive Inventory Management
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      300 Ton Capacity
                    </h4>
                    <p className="text-gray-600">
                      Massive inventory of standard sizes always ready for
                      immediate delivery
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      On-Time Delivery
                    </h4>
                    <p className="text-gray-600">
                      Strategic stock management ensures prompt customer service
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quality Storage
                    </h4>
                    <p className="text-gray-600">
                      Modern warehousing facilities maintaining product
                      integrity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Serving renowned companies across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F6ade181f2ec44eb583f3d4ded7e07d29?format=webp&width=800"
              alt="Our Valued Clients - Page 1"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F47176efd797644b58054c04654c9e6e2?format=webp&width=800"
              alt="Our Industry Partners - Page 2"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              We are proud to serve leading companies across automotive,
              electronics, heavy machinery, wind power, thermal power, metro &
              railways, and electrical sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F99ae306a06994212a8004a55516855b7?format=webp&width=800"
              alt="Thank You for Your Trust - JB Industries Greetings"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Thank You for Your Trust
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Together we are moving forwards, building stronger partnerships
              and delivering excellence in every fastening solution.
            </p>
            <Link to="/about">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to discuss your fastening requirements?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Our Location
                    </h4>
                    <p className="text-gray-600">
                      Plot no. 107, Gaddi Khedi Road
                      <br />
                      HSIIDC Industrial Area
                      <br />
                      Rohtak, Haryana 124001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">Available on request</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@jbindustries.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Business Hours
                </h4>
                <p className="text-gray-600 text-sm">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Inquiry about fasteners"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Quote Widget */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Quick Quote?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get instant pricing for standard fasteners or request a custom
              quote for specialized requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Quick Quote Card */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Standard Products
                </h3>
                <p className="text-gray-600">
                  Get instant quotes for our standard fastener range
                </p>
              </div>
              <Link to="/contact">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Custom Quote Card */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Factory className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Custom Manufacturing
                </h3>
                <p className="text-gray-600">
                  Specialized components made to your specifications
                </p>
              </div>
              <Link to="/contact">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Info for Urgent Requests */}
          <div className="mt-12 text-center">
            <p className="text-blue-100 mb-4">
              <strong>Urgent Requirements?</strong> Call us directly for
              immediate assistance
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-semibold">+91-1262-277721</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="font-semibold">jkindustries09@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-12 font-semibold">
                <div className="bg-white rounded-full p-2 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                    alt="JB Industries Logo"
                    className="h-12 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    JB Industries
                  </h3>
                  <p className="text-white text-sm">Fastening Solution</p>
                </div>
              </div>
              <p className="text-white mb-4">
                Leading manufacturer and supplier of high-quality fastening
                solutions. ISO certified for excellence in quality management.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3 text-white">
                <div className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <p className="text-sm">
                      <a
                        href="tel:+911262277721"
                        className="hover:text-white transition-colors"
                      >
                        +91-1262-277721
                      </a>
                    </p>
                    <p className="text-sm">
                      <a
                        href="tel:+919876543210"
                        className="hover:text-white transition-colors"
                      >
                        +91-9876543210
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <p className="text-sm">sales@jbindustries.com</p>
                    <p className="text-sm">info@jbindustries.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                  <div>
                    <p className="text-sm">Plot no. 107, Gaddi Khedi Road</p>
                    <p className="text-sm">HSIIDC Industrial Area</p>
                    <p className="text-sm">Rohtak, Haryana 124001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-white">
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
                    to="/products"
                    className="hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certifications"
                    className="hover:text-white transition-colors"
                  >
                    Certifications
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
                <li>
                  <Link
                    to="/quote"
                    className="hover:text-white transition-colors"
                  >
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-white text-sm">
              © 2024 JB Industries. All rights reserved. | Proprietary business
              by Rajni Jain
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
