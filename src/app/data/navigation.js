export const navigation = [
    { name: "Beranda", href: "/home" },
    { name: "Tentang", href: "/about" },
    { 
        name: "Produk", 
        href: "/products",  // Link to Products section (as a placeholder)
        children: [
            { name: 'Geotextile Woven', href: '#geotextile-woven' },  // Match category names in products
            { name: 'Geotextile Non Woven', href: '#geotextile-non-woven' },
            { name: 'Geotextile Geobag', href: '#geotextile-geobag' },
            { name: 'Geomembrane', href: '#geomembrane' }
        ]
    },
    { name: "Kontak", href: "/contact" },
];
