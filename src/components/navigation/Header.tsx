import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, Phone, User } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
  logoUrl?: string;
  phoneNumber?: string;
}

const Header = ({
  onMenuClick = () => {},
  logoUrl = "/vite.svg",
  phoneNumber = "(555) 123-4567",
}: HeaderProps) => {
  return (
    <header className="sticky top-0 w-full h-20 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logoUrl}
            alt="Medical Center Logo"
            className="h-10 w-auto"
          />
          <span className="ml-2 text-xl font-semibold text-gray-900 hidden sm:inline">
            Medical Center
          </span>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 text-gray-700 hover:text-blue-600"
                href="/services"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 text-gray-700 hover:text-blue-600"
                href="/locations"
              >
                Locations
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 text-gray-700 hover:text-blue-600"
                href="/doctors"
              >
                Find a Doctor
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact & Login */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-gray-700">
            <Phone className="h-4 w-4" />
            <span className="text-sm">{phoneNumber}</span>
          </div>
          <Button
            variant="outline"
            className="hidden sm:flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            Patient Portal
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
