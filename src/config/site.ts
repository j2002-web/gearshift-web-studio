
export const siteConfig = {
  name: "AutoElite Parts",
  brand: "autoeliteparts",
  description: "Premium Automotive Parts & Drivetrain Solutions",
  url: "https://autoeliteparts.com",
  email: "support@autoeliteparts.site",
  phone: "+1 (555) 247-8963",
  address: {
    street: "1247 Industrial Drive",
    city: "Detroit",
    state: "MI",
    zip: "48201",
    country: "United States"
  },
  social: {
    facebook: "https://facebook.com/autoeliteparts",
    twitter: "https://twitter.com/autoeliteparts",
    instagram: "https://instagram.com/autoeliteparts",
    linkedin: "https://linkedin.com/company/autoeliteparts"
  },
  business: {
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    weekend: "Saturday: 9:00 AM - 4:00 PM",
    founded: "2010",
    employees: "50+",
    certifications: ["ISO 9001", "QS-9000", "TS 16949"]
  }
};

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { 
      name: "Products", 
      href: "/products",
      dropdown: [
        { name: "Drivetrains", href: "/products/drivetrains" },
        { name: "Transmissions", href: "/products/transmissions" },
        { name: "Axles & Differentials", href: "/products/axles" },
        { name: "CV Joints", href: "/products/cv-joints" },
        { name: "Drive Shafts", href: "/products/drive-shafts" }
      ]
    },
    { 
      name: "Services", 
      href: "/services",
      dropdown: [
        { name: "Installation", href: "/services/installation" },
        { name: "Repair", href: "/services/repair" },
        { name: "Maintenance", href: "/services/maintenance" },
        { name: "Consultation", href: "/services/consultation" }
      ]
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  footer: [
    {
      title: "Products",
      links: [
        { name: "Drivetrains", href: "/products/drivetrains" },
        { name: "Transmissions", href: "/products/transmissions" },
        { name: "Axles & Differentials", href: "/products/axles" },
        { name: "CV Joints", href: "/products/cv-joints" }
      ]
    },
    {
      title: "Services", 
      links: [
        { name: "Installation", href: "/services/installation" },
        { name: "Repair", href: "/services/repair" },
        { name: "Maintenance", href: "/services/maintenance" },
        { name: "Consultation", href: "/services/consultation" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" }
      ]
    },
    {
      title: "Policies",
      links: [
        { name: "Return Policy", href: "/return-policy" },
        { name: "Shipping Policy", href: "/shipping-policy" },
        { name: "Disclaimer", href: "/disclaimer" }
      ]
    }
  ]
};
