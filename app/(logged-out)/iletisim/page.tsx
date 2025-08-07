import Contact1 from "@/components/sections/Contact1"
import Link from "next/link"
import { Metadata } from "next"

// Static metadata generation
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "İletişim | Nesrin Akyıldız Emlak Danışmanlığı",
		description: "Sorularınız mı var? Hemen iletişim formunu doldurun ya da doğrudan bize ulaşın. Çınarköy'de güvenilir emlak danışmanı bir telefon uzağınızda.",
		keywords: "emlak iletişim, danışmanlık formu, emlakçıya ulaş, gayrimenkul danışmanı iletişim",
		openGraph: {
			title: "Bize Ulaşın | Nesrin Akyıldız",
			description: "Size en kısa sürede dönüş yapalım. İletişim formu veya telefonla profesyonel destek alın.",
			images: ["https://res.cloudinary.com/dbw3ozdoh/image/upload/v1751217700/pjz674stwf1uwwt34enu.png"],
		},
	}
}

export default function PageContact2() {
	return (
		<>
			<Contact1 />
		</>
	)
}