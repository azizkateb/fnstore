# FN Boutique — Landing Page (Next.js)

صفحة هبوط فستان السهرة — مبنية بنظام تصميم ModestWear (فاخر/تحريري) مع Next.js 14 + Tailwind + Framer Motion، عربي RTL بالكامل.

## التشغيل

```bash
npm install
npm run dev
# http://localhost:3000
```

## قبل النشر — عدّل ملف واحد فقط

كل ثوابت المشروع في `src/lib/site.ts`:

- `sallaProductUrl` — رابط المنتج النهائي في سلة
- `tiktokPixelId` — معرّف TikTok Pixel من حساب العميل (Ads Manager ← Events ← Web)
- الأسعار والنصوص

## البنية

```text
src/
├─ app/            # layout (خطوط + Pixel) و page (تركيب الأقسام)
├─ lib/            # site.ts (الثوابت) · motion.ts (توكنز الحركة) · pixel.ts
├─ hooks/          # useHideOnScroll (سلوك النافبار)
└─ components/
   ├─ ui/          # Reveal · Button · CircleCta · SectionTitle
   ├─ layout/      # Navbar · Footer · StickyCta
   └─ sections/    # Hero · Marquee · Features · Gallery · Offer · Faq
```

## نظام الحركة

- توكنز موحّدة في `lib/motion.ts` (مدد، منحنيات، ستاجر) — مطابقة لمخطط ModestWear.
- `Reveal` = fade-up عند 20% ظهور، مرة واحدة.
- Hero: تسلسل دخول مُزمّن (eyebrow ← عنوان ← سعر ← CTA) + Ken Burns.
- Navbar: يختفي عند النزول ويظهر عند الصعود.
- Footer: وردمارك عملاق يصعد من قناع قص.

## النشر

ارفع المشروع على GitHub ثم استورده في Vercel — بدون أي إعداد إضافي.
