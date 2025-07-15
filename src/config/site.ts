
export const siteConfig = {
  name: "GearLeads",
  brand: "gearleads",
  description: "Premium Auto Parts Lead Generation Services",
  url: "https://gearleads.com",
  email: "support@gearleads.com",
  phone: "+1 (555) 247-8963",
  address: {
    street: "1247 Industrial Drive",
    city: "Detroit",
    state: "MI",
    zip: "48201",
    country: "United States"
  },
  social: {
    facebook: "https://facebook.com/gearleads",
    twitter: "https://twitter.com/gearleads",
    instagram: "https://instagram.com/gearleads",
    linkedin: "https://linkedin.com/company/gearleads"
  },
  business: {
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    weekend: "Saturday: 9:00 AM - 4:00 PM",
    founded: "2010",
    employees: "50+",
    certifications: ["ISO 9001", "Google Partner", "Facebook Marketing Partner"]
  }
};

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { 
      name: "Leads", 
      href: "/leads",
      dropdown: [
        { name: "New Auto Parts Leads", href: "/leads/new-parts" },
        { name: "Used Auto Parts Leads", href: "/leads/used-parts" },
        { name: "OEM Parts Leads", href: "/leads/oem-parts" },
        { name: "Aftermarket Parts Leads", href: "/leads/aftermarket" },
        { name: "Performance Parts Leads", href: "/leads/performance" },
        { name: "Bulk Lead Packages", href: "/leads/bulk-packages" }
      ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  footer: [
    {
      title: "Lead Services",
      links: [
        { name: "New Auto Parts Leads", href: "/leads/new-parts" },
        { name: "Used Auto Parts Leads", href: "/leads/used-parts" },
        { name: "OEM Parts Leads", href: "/leads/oem-parts" },
        { name: "Aftermarket Parts Leads", href: "/leads/aftermarket" },
        { name: "Performance Parts Leads", href: "/leads/performance" }
      ]
    },
    {
      title: "Solutions", 
      links: [
        { name: "Lead Generation", href: "/solutions/lead-generation" },
        { name: "CRM Integration", href: "/solutions/crm" },
        { name: "Analytics Dashboard", href: "/solutions/analytics" },
        { name: "API Access", href: "/solutions/api" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" }
      ]
    },
    {
      title: "Policies",
      links: [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Return Policy", href: "/return-policy" },
        { name: "Disclaimer", href: "/disclaimer" }
      ]
    }
  ]
};
