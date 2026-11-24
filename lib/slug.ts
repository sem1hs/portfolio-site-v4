const map: Record<string, string> = { â: "a", ı: "i", ş: "s", ğ: "g", ü: "u", ö: "o", ç: "c", İ: "i" };

// "Spring Boot" -> "spring-boot", "Bizim Hikâye" -> "bizim-hikaye"
export const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[âışğüöçİ]/g, (ch) => map[ch] ?? ch)
    .replace(/ /g, "-");
