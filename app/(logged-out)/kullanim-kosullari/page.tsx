import { Metadata } from "next";

// Static metadata generation
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Kullanım Koşulları | Nesrin Akyıldız Emlak",
		description: "Web sitemizi kullanım koşulları ve yasal şartlar hakkında bilgi edinin.",
		keywords: "kullanım koşulları, yasal şartlar, emlak hizmet şartları, web sitesi kullanımı",
		openGraph: {
			title: "Kullanım Koşulları | Nesrin Akyıldız",
			description: "Web sitemizi kullanırken uymanız gereken koşullar ve yasal şartlar.",
			images: ["https://res.cloudinary.com/dbw3ozdoh/image/upload/v1751217700/pjz674stwf1uwwt34enu.png"],
		},
	}
}

export default function TermsConditionsPage() {
	return (
		<div className="container mx-auto px-4 py-16 md:py-24">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">Kullanım Koşulları</h1>
				<p className="text-gray-600 mb-12">
					Bu kullanım koşulları, Nesrin Akyıldız Emlak Danışmanlığı web sitesini kullanırken 
					uymanız gereken kuralları ve yasal şartları belirler.
				</p>
				
				<div className="prose prose-gray max-w-none">
					<h2>Genel Kurallar</h2>
					<p>
						Web sitemizi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız:
					</p>
					<ul>
						<li>Siteyi yasal amaçlar için kullanacağınızı</li>
						<li>Başkalarının haklarına saygı göstereceğinizi</li>
						<li>Site güvenliğini tehlikeye atmayacağınızı</li>
						<li>Telif haklarına uyacağınızı</li>
					</ul>

					<h2>Hizmet Kullanımı</h2>
					<p>
						Emlak danışmanlığı hizmetlerimizden yararlanırken:
					</p>
					<ul>
						<li>Doğru ve güncel bilgi sağlamanız gerekir</li>
						<li>Randevularınıza zamanında gelmeniz beklenir</li>
						<li>Hizmet bedellerini zamanında ödemeniz gerekir</li>
						<li>Gizlilik kurallarına uymanız zorunludur</li>
					</ul>

					<h2>Fikri Mülkiyet</h2>
					<p>
						Web sitemizdeki tüm içerik, tasarım ve yazılım Nesrin Akyıldız Emlak Danışmanlığı'na aittir. 
						Bu içeriklerin izinsiz kullanımı yasaktır.
					</p>

					<h2>Sorumluluk Sınırları</h2>
					<p>
						Web sitemizde sunulan bilgiler genel bilgilendirme amaçlıdır. 
						Emlak yatırım kararları alırken profesyonel danışmanlık almanız önerilir.
					</p>

					<h2>Gizlilik</h2>
					<p>
						Kişisel verilerinizin korunması için gizlilik politikamızı incelemenizi öneririz.
					</p>

					<h2>Değişiklikler</h2>
					<p>
						Bu kullanım koşulları zaman zaman güncellenebilir. 
						Önemli değişiklikler olduğunda sizi bilgilendireceğiz.
					</p>

					<h2>İletişim</h2>
					<p>
						Kullanım koşullarıyla ilgili sorularınız için bizimle iletişime geçebilirsiniz.
					</p>

					<p className="text-sm text-gray-500 mt-8">
						Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
					</p>
				</div>
			</div>
		</div>
	);
} 