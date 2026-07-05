import type { Metadata } from "next"
import Script from "next/script"
import localFont from "next/font/local"
import { IBM_Plex_Sans_Arabic } from "next/font/google"
import { SITE } from "@/lib/site"
import "./globals.css"

const display = localFont({
	src: "../../lang/aligarh-arabic-free-personal-use.medium.otf",
	variable: "--font-display",
	display: "swap"
})

const ui = IBM_Plex_Sans_Arabic({
	subsets: ["arabic"],
	weight: ["400", "500", "700"],
	variable: "--font-ui",
	display: "swap"
})

export const metadata: Metadata = {
	title: SITE.productName + " | " + SITE.brand,
	description:
		"تألّقي بإطلالة راقية — فستان سهرة وردي فاخر بتصميم كاب أنيق. خصم 15% لفترة محدودة مع دفع آمن عبر منصة سلة."
}

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="ar" dir="rtl" className={display.variable + " " + ui.variable}>
			<body>
				{props.children}
				{/* TikTok Pixel — fires PageView; button clicks fire InitiateCheckout */}
				<Script id="tiktok-pixel" strategy="afterInteractive">
					{`!function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${SITE.tiktokPixelId}');ttq.page();}(window, document, 'ttq');`}
				</Script>
			</body>
		</html>
	)
}
