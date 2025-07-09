import { Product, ProductFormData, DashboardStats } from "@shared/types";

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    // 🛡️ Error handling
    if (!res.ok) {
      let message = "API request failed";
      try {
        const error = await res.json();
        message = error.message || message;
      } catch {}
      throw new Error(message);
    }

    const text = await res.text();
    const json = text ? JSON.parse(text) : {};
    return json.data;
  }

  async getProducts(): Promise<Product[]> {
    return await this.request<Product[]>("/products");
  }

  async getProduct(id: string): Promise<Product> {
    return await this.request<Product>(`/products/${id}`);
  }

  async createProduct(productData: ProductFormData): Promise<Product> {
    return await this.request<Product>("/products", {
      method: "POST",
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(
    id: string,
    productData: Partial<ProductFormData>,
  ): Promise<Product> {
    return await this.request<Product>(`/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(productData),
    });
  }

  async deleteProduct(id: string): Promise<void> {
    await this.request<void>(`/products/${id}`, {
      method: "DELETE",
    });
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return await this.request<Product[]>(`/products/category/${category}`);
  }

  async getProductStats(): Promise<DashboardStats> {
    try {
      return await this.request<DashboardStats>("/products/stats");
    } catch {
      return {
        totalProducts: 0,
        inStockProducts: 0,
        outOfStockProducts: 0,
        totalRevenue: 0,
      };
    }
  }
}

export const apiService = new ApiService();
