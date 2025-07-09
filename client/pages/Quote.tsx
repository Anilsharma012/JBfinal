import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Send,
  FileText,
  Clock,
  Phone,
  Mail,
  MapPin,
  Package,
} from "lucide-react";

export default function Quote() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    productType: "",
    specifications: "",
    quantity: "",
    diameter: "",
    length: "",
    material: "",
    surfaceFinish: "",
    deliveryLocation: "",
    requiredDate: "",
    additionalRequirements: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create email body with form data
    const emailBody = `
New Quote Request from ${formData.companyName}

COMPANY INFORMATION:
Company Name: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

PRODUCT REQUIREMENTS:
Product Type: ${formData.productType}
Quantity: ${formData.quantity}
Diameter/Size: ${formData.diameter}
Length: ${formData.length}
Material: ${formData.material}
Surface Finish: ${formData.surfaceFinish}
Specifications: ${formData.specifications}

DELIVERY INFORMATION:
Delivery Location: ${formData.deliveryLocation}
Required Date: ${formData.requiredDate}
Additional Requirements: ${formData.additionalRequirements}

This enquiry was submitted through the JB Industries website.
    `;

    // Create mailto link
    const mailtoLink = `mailto:jkindustries09@gmail.com?subject=Quote Request from ${formData.companyName}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert(
      "Thank you for your quote request! Your email client will open with the quote details. We'll respond within 24-48 hours.",
    );

    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
      productType: "",
      specifications: "",
      quantity: "",
      diameter: "",
      length: "",
      material: "",
      surfaceFinish: "",
      deliveryLocation: "",
      requiredDate: "",
      additionalRequirements: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fe47a2c8dea8b451da551bc04f83bbb06?format=webp&width=800"
                alt="JB Industries Logo"
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  JB Industries
                </h1>
                <p className="text-xs text-gray-500">Fastening Solution</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Products
              </Link>
              <Link
                to="/certifications"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Certifications
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/quote"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/products"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/certifications"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/quote"
                  className="block mx-3 mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get a customized quote for your fastening requirements. Our team
              will provide competitive pricing and expert recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Clock className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-gray-700">24-48 Hour Response</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <FileText className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-gray-700">Detailed Specifications</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Send className="h-4 w-4 text-orange-600 mr-2" />
                <span className="text-gray-700">Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Custom Quote Today
              </h2>
              <p className="text-gray-600">
                Fill out the form below and our experts will provide you with a
                detailed quote within 24-48 hours
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Company Information
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactPerson"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Product Requirements */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 rounded-full p-3 mr-4">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Product Requirements
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="productType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Product Type *
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    required
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Product Type</option>
                    <option value="bolts">Bolts</option>
                    <option value="screws">Screws</option>
                    <option value="nuts">Nuts</option>
                    <option value="washers">Washers</option>
                    <option value="threaded-rods">Threaded Rods</option>
                    <option value="custom-fasteners">Custom Fasteners</option>
                    <option value="machined-components">
                      Machined Components
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Quantity Required *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    required
                    placeholder="e.g., 1000 pieces"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="diameter"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Diameter/Size
                  </label>
                  <input
                    type="text"
                    id="diameter"
                    name="diameter"
                    placeholder="e.g., M10, 1/4 inch"
                    value={formData.diameter}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="length"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Length
                  </label>
                  <input
                    type="text"
                    id="length"
                    name="length"
                    placeholder="e.g., 50mm, 2 inches"
                    value={formData.length}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="material"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Material
                  </label>
                  <select
                    id="material"
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Material</option>
                    <option value="carbon-steel">Carbon Steel</option>
                    <option value="stainless-steel-304">
                      Stainless Steel 304
                    </option>
                    <option value="stainless-steel-316">
                      Stainless Steel 316
                    </option>
                    <option value="alloy-steel">Alloy Steel</option>
                    <option value="brass">Brass</option>
                    <option value="aluminum">Aluminum</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="surfaceFinish"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Surface Finish
                  </label>
                  <select
                    id="surfaceFinish"
                    name="surfaceFinish"
                    value={formData.surfaceFinish}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Surface Finish</option>
                    <option value="zinc-plating-blue">
                      Zinc Plating (Blue)
                    </option>
                    <option value="zinc-plating-white">
                      Zinc Plating (White)
                    </option>
                    <option value="zinc-plating-green">
                      Zinc Plating (Green)
                    </option>
                    <option value="zinc-plating-black">
                      Zinc Plating (Black)
                    </option>
                    <option value="nickel-plating">Nickel Plating</option>
                    <option value="passivated">Passivated</option>
                    <option value="plain">Plain</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="specifications"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Detailed Specifications
                  </label>
                  <textarea
                    id="specifications"
                    name="specifications"
                    rows={4}
                    placeholder="Please provide detailed specifications, standards (ISO, DIN, ANSI), tolerances, or any special requirements..."
                    value={formData.specifications}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="bg-orange-600 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Delivery Information
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="deliveryLocation"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Delivery Location *
                  </label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    required
                    placeholder="City, State, Country"
                    value={formData.deliveryLocation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="requiredDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Required Delivery Date
                  </label>
                  <input
                    type="date"
                    id="requiredDate"
                    name="requiredDate"
                    value={formData.requiredDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="additionalRequirements"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Requirements
                  </label>
                  <textarea
                    id="additionalRequirements"
                    name="additionalRequirements"
                    rows={3}
                    placeholder="Any additional requirements, packaging specifications, testing requirements, certifications needed, etc."
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-lg">
              <button
                type="submit"
                className="bg-white text-blue-600 px-12 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors flex items-center mx-auto text-lg shadow-lg"
              >
                <Send className="h-6 w-6 mr-3" />
                Submit Quote Request
              </button>
              <p className="text-blue-100 mt-4 font-medium">
                ✓ Our team will review your requirements and respond within
                24-48 hours
              </p>
              <p className="text-blue-200 text-sm mt-2">
                📧 Email will be sent to: jkindustries09@gmail.com
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-300">
              Contact our team directly for urgent requirements or technical
              support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91-1262-277721</p>
              <p className="text-sm text-gray-400">Mon-Fri 9:00 AM - 6:00 PM</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">info@jbindustries.com</p>
              <p className="text-sm text-gray-400">Response within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">Rohtak, Haryana 124001</p>
              <p className="text-sm text-gray-400">Factory & Office Location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                  alt="JB Industries Logo"
                  className="h-7 w-auto"
                />
                <div className="ml-3">
                  <h3 className="text-lg font-bold">JB Industries</h3>
                  <p className="text-gray-400 text-sm">Fastening Solution</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Leading manufacturer of high-quality fastening solutions with
                ISO certifications and commitment to excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quote"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Get Quote
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Business Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Info</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <strong>Legal Name:</strong> Rajni Jain
                </li>
                <li>
                  <strong>Trade Name:</strong> JB Industries
                </li>
                <li>
                  <strong>GST:</strong> 06AGZPJ8621P1ZF
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-blue-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-blue-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
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
