export const navigation = [
    { name: "Beranda", href: "/home" },
    { name: "Tentang", href: "/about" },
    { 
        name: "Produk", 
        href: "/products",
        children: [
            { name: 'Geotextile Woven', href: 'geotextile-woven' },
            { name: 'Geotextile Non Woven', href: 'geotextile-non-woven' },
            { name: 'Geotextile Geobag', href: 'geotextile-geobag' },
            { name: 'Geomembrane', href: 'geomembrane' }
        ]
    },
    { name: "Kontak", href: "/contact" },
];