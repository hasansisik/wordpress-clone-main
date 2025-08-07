import { Metadata } from "next"

// Static metadata generation
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Emlak Hizmetlerimiz | Konut, Arsa ve Ticari Danışmanlık",
		description: "Konut kiralama, arsa satışı, ticari yatırım ve gayrimenkul danışmanlığı hizmetlerimiz hakkında detaylı bilgi edinin.",
		keywords: "arsa danışmanlığı, konut kiralama hizmeti, ticari gayrimenkul desteği, yatırım rehberliği, emlak hizmetleri",
		openGraph: {
			title: "Profesyonel Emlak Hizmetlerimizle Tanışın",
			description: "İhtiyacınıza uygun konut, arsa ve ticari mülk hizmetleri ile uzman danışmanlık burada. Hizmet detaylarını inceleyin.",
			images: ["https://res.cloudinary.com/dbw3ozdoh/image/upload/v1751217700/pjz674stwf1uwwt34enu.png"],
		},
	}
}

export default function HizmetlerLayout({
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