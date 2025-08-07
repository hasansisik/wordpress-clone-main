import "@/public/assets/css/vendors/bootstrap.min.css"
import "@/public/assets/css/vendors/swiper-bundle.min.css"
import "@/public/assets/css/vendors/aos.css"
import "@/public/assets/css/vendors/odometer.css"
import "@/public/assets/css/vendors/carouselTicker.css"
import "@/public/assets/css/vendors/magnific-popup.css"
import "@/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css"
import "@/public/assets/fonts/boxicons/boxicons.min.css"
import "@/public/assets/fonts/satoshi/satoshi.css"
import "@/public/assets/css/main.css"

import "@/node_modules/react-modal-video/css/modal-video.css"

import type { Metadata } from "next"
import ThemeProvider from "@/components/layout/ThemeProvider"

// Static metadata generation
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Nesrin Akyıldız | Çınarköy Emlak Danışmanı | Konut, Arsa ve Ticari Gayrimenkul",
		description: "Nesrin Akyıldız ile güvenilir emlak danışmanlığı hizmeti. Çınarköy'de arsa, konut ve ticari gayrimenkul yatırımlarında profesyonel çözümler.",
		keywords: "Nesrin Akyıldız, emlak danışmanı, Çınarköy emlak, arsa yatırımı, konut satışı, ticari gayrimenkul, emlak hizmetleri",
		openGraph: {
			title: "Nesrin Akyıldız | Çınarköy'ün Güvenilir Emlak Danışmanı",
			description: "Evinizi bulmanın ya da yatırımınızı değerlendirmenin en profesyonel yolu. Arsa, konut ve ticari emlak alanında uzman destek sizi bekliyor.",
			images: ["https://res.cloudinary.com/dbw3ozdoh/image/upload/v1751217700/pjz674stwf1uwwt34enu.png"],
		},
	}
}

export default function LogoutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			{children}
		</ThemeProvider>
	);
}
