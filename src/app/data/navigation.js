export const navigation = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { 
        name: "Products", 
        href: "/products",
        children: [
            { name: 'Geotextile Woven', href: '/products/woven' },
            { name: 'Geotextile Non Woven', href: '/products/non-woven' },
            { name: 'Geotextile Geobag', href: '/products/geobag' },
            { name: 'Geomembrane', href: '/products/geomembrane' }
        ]
    },
    { name: "Contact", href: "/contact" },
];