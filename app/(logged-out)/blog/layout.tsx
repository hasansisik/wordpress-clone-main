import { Metadata } from "next"

// Static metadata generation
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Emlak Bilgi Merkezi | Blog Yazıları | Nesrin Akyıldız",
		description: "Kat mülkiyeti nedir? TAKS-KAKS nasıl hesaplanır? Emlak dünyasına dair güncel ve bilgilendirici içerikler blog sayfamızda sizi bekliyor.",
		keywords: "emlak blog, gayrimenkul rehberi, yatırım bilgisi, kat mülkiyeti, emsal hesabı, gayrimenkul vergileri",
		openGraph: {
			title: "Emlak Dünyasında Bilinçli Adımlar Atın",
			description: "Gayrimenkul hakkında aradığınız tüm bilgiler burada. Uzman içeriklerle doğru yatırım kararları verin.",
			images: ["https://res.cloudinary.com/dbw3ozdoh/image/upload/v1751217700/pjz674stwf1uwwt34enu.png"],
		},
	}
}

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{children}
		</>
	)
} 