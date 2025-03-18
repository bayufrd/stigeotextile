export const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .normalize("NFD") // Hilangkan aksen (é → e, ñ → n)
        .replace(/[\u0300-\u036f]/g, "") // Hapus diakritik
        .replace(/[\s]+/g, "-") // Ganti spasi dengan "-"
        .replace(/[^\w-]+/g, "") // Hapus karakter spesial kecuali "-"
        .replace(/^-+|-+$/g, ""); // Hapus "-" di awal/akhir
};