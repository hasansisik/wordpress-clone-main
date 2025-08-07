import { Metadata } from "next";
import Cta3 from "@/components/sections/Cta3";

// Static metadata generation
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Nesrin Akyıldız Kimdir? | Emlak Danışmanınızla Tanışın",
		description: "Nesrin Akyıldız, İstanbul'da bireysel ve kurumsal gayrimenkul danışmanlığı hizmeti sunan deneyimli bir emlak profesyonelidir.",
		keywords: "Nesrin Akyıldız kimdir, emlak danışmanı özgeçmiş, deneyimli emlakçı, İstanbul emlak uzmanı",
		openGraph: {
			title: "Nesrin Akyıldız ile Tanışın",
			description: "Yalnızca emlak değil, yaşam alanları yaratmayı amaçlayan bir danışmanlık anlayışıyla tanışın. Detaylar \"Hakkımda\" sayfasında.",
			images: ["https://res.cloudinary.com/dbw3ozdoh/image/upload/v1751217700/pjz674stwf1uwwt34enu.png"],
		},
	}
}

export default function PageAbout3() {
	return (
		<>
			{/*CTA 1*/}
			<Cta3 />
		</>
	);
}
