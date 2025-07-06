import Image from "next/image";

const cards = [
	{
		title: "Keaslian Budaya & Tradisi",
		description:
			"Keunikan budaya, adat, serta tradisi asli dari suku Toraja seperti upacara adat rambu tuka’ dan rambu solo.    ",
		icon: "/images/desc/tradition.png",
	},
	{
		title: "Wisata Edukasi & wisata Budaya",
		description:
			"Beragam Lokasi menarik yang berpotensi menjadi objek wisata serta melalui adat yang ada dapat diperoleh edukasi budaya.",
		icon: "/images/desc/point-of-interest.png",
	},
	{
		title: "Keberlanjutan & Inovasi Desa",
		description:
			"Digitalisasi, kreatifitas, peningkatan pelayanan, serta integritas menjadi hal yang akan terus senantiasa dikembangkan.",
		icon: "/images/desc/recycle.png",
	},
	{
		title: "Pengembangan dan Budidaya Pangan",
		description:
			"Terkenal akan agriculture dan penanaman pangan padi yang menjadi konsumsi dan sumber daya utama  masyarakat.",
		icon: "/images/desc/wheat.png",
	},
];

export default function Section2() {
	return (
		<section id="section2" className="bg-[#f2f8e8] py-20 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
					{cards.map((card, index) => (
						<div key={index} className="flex flex-col items-center h-full">
							<div className="bg-[#2d3436] p-4 rounded-full mb-5">
								<Image
									src={card.icon}
									alt={card.title}
									width={40}
									height={40}
									className="invert"
								/>
							</div>
							<div className="flex flex-col flex-grow w-full">
								<h3 className="text-xl font-bold mb-3 text-center text-[#2d3436] h-16 flex items-center justify-center">
									{card.title}
								</h3>
								<p className="text-sm leading-relaxed text-justify text-gray-700">
									{card.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
