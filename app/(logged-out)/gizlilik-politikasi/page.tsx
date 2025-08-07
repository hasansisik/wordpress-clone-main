import { Metadata } from "next";

// Static metadata generation
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Gizlilik Politikası | Nesrin Akyıldız Emlak",
		description: "Gizlilik politikamız ve kişisel verilerinizin korunması hakkında bilgi edinin.",
		keywords: "gizlilik politikası, kişisel veri koruması, KVKK, emlak gizlilik",
		openGraph: {
			title: "Gizlilik Politikası | Nesrin Akyıldız",
			description: "Kişisel verilerinizin güvenliği bizim için önemlidir. Gizlilik politikamızı inceleyin.",
			images: ["https://res.cloudinary.com/dbw3ozdoh/image/upload/v1751217700/pjz674stwf1uwwt34enu.png"],
		},
	}
}

export default function PrivacyPolicyPage() {
	return (
		<div className="container mx-auto px-4 py-16 md:py-24">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">Gizlilik Politikası</h1>
				<p className="text-gray-600 mb-12">
					Bu gizlilik politikası, Nesrin Akyıldız Emlak Danışmanlığı olarak kişisel verilerinizi nasıl topladığımızı, 
					kullandığımızı ve koruduğumuzu açıklar.
				</p>
				
				<div className="prose prose-gray max-w-none">
					<h2>Kişisel Verilerin Toplanması</h2>
					<p>
						Web sitemizi ziyaret ettiğinizde, iletişim formlarını doldurduğunuzda veya hizmetlerimizden yararlandığınızda 
						bazı kişisel bilgilerinizi toplayabiliriz. Bu bilgiler şunları içerebilir:
					</p>
					<ul>
						<li>Ad ve soyad</li>
						<li>E-posta adresi</li>
						<li>Telefon numarası</li>
						<li>Adres bilgileri</li>
						<li>Emlak tercihleri</li>
					</ul>

					<h2>Kişisel Verilerin Kullanımı</h2>
					<p>
						Topladığımız kişisel verileri aşağıdaki amaçlarla kullanırız:
					</p>
					<ul>
						<li>Size emlak danışmanlığı hizmeti sunmak</li>
						<li>İletişim kurmak ve bilgi vermek</li>
						<li>Hizmet kalitemizi artırmak</li>
						<li>Yasal yükümlülüklerimizi yerine getirmek</li>
					</ul>

					<h2>Kişisel Verilerin Korunması</h2>
					<p>
						Kişisel verilerinizin güvenliği bizim için çok önemlidir. Bu nedenle:
					</p>
					<ul>
						<li>Verilerinizi güvenli sunucularda saklarız</li>
						<li>Şifreleme teknolojileri kullanırız</li>
						<li>Erişimi sınırlı tutarız</li>
						<li>Düzenli güvenlik denetimleri yaparız</li>
					</ul>

					<h2>Çerezler</h2>
					<p>
						Web sitemizde çerezler kullanıyoruz. Bu çerezler, site deneyiminizi iyileştirmek ve 
						analitik veriler toplamak için kullanılır.
					</p>

					<h2>Üçüncü Taraf Hizmetler</h2>
					<p>
						Hizmetlerimizi sunmak için üçüncü taraf hizmet sağlayıcıları kullanabiliriz. 
						Bu sağlayıcılar kendi gizlilik politikalarına tabidir.
					</p>

					<h2>Haklarınız</h2>
					<p>
						Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
					</p>
					<ul>
						<li>Verilerinize erişim hakkı</li>
						<li>Düzeltme hakkı</li>
						<li>Silme hakkı</li>
						<li>İşlemeye itiraz hakkı</li>
						<li>Veri taşınabilirliği hakkı</li>
					</ul>

					<h2>İletişim</h2>
					<p>
						Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz.
					</p>

					<h2>Politika Güncellemeleri</h2>
					<p>
						Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler olduğunda 
						sizi bilgilendireceğiz.
					</p>

					<p className="text-sm text-gray-500 mt-8">
						Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
					</p>
				</div>
			</div>
		</div>
	);
}