import React from "react";
import Header from "./navigation/Header";
import LoginHero from "./auth/LoginHero";
import QuickAccessGrid from "./dashboard/QuickAccessGrid";

interface HomePageProps {
  onLogin?: (email: string, password: string) => void;
  onRegister?: () => void;
  isLoading?: boolean;
  error?: string;
}

const HomePage = ({
  onLogin = () => {},
  onRegister = () => {},
  isLoading = false,
  error = "",
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <LoginHero
          onLogin={onLogin}
          onRegister={onRegister}
          isLoading={isLoading}
          error={error}
        />

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Quick Access Services
            </h2>
            <QuickAccessGrid />
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Medical Center?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
                <p className="text-gray-600">
                  Access to top healthcare professionals and specialists
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Modern Facilities
                </h3>
                <p className="text-gray-600">
                  State-of-the-art medical equipment and comfortable
                  environments
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Patient-Centered</h3>
                <p className="text-gray-600">
                  Personalized care plans tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Emergency: 911</p>
              <p>Main Line: (555) 123-4567</p>
              <p>Email: info@medicalcenter.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Find a Doctor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Patient Portal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p>123 Medical Center Drive</p>
              <p>Healthcare City, HC 12345</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Medical Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
