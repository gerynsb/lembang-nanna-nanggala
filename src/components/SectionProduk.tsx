import Image from "next/image";

const produk = [
	{
		title: "Produk Pertanian Padi",
		image: "/images/Produk/Panen.webp",
	},
	{
		title: "Pembudidayaan Ikan",
		image: "/images/Produk/Budidaya.jpeg",
	},
];

export default function SectionProduk() {
	return (
		<section id="sectionProduk" className="bg-white py-24 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-14">
					<h2 className="text-4xl font-bold text-gray-900">
						Produk Lembang Nanna
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
					{produk.map((item, index) => (
						<div key={index} className="group">
							<div className="rounded-2xl overflow-hidden shadow-lg h-80 relative">
								<Image
									src={item.image}
									alt={item.title}
									width={600}
									height={350}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
									<div className="p-6 w-full">
										<h3 className="text-xl font-bold text-white">
											{item.title}
										</h3>
									</div>
								</div>
							</div>
							<p className="mt-4 text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
								{item.title}
							</p>

						</div>
					))}
				</div>
			</div>
		</section>
	);
}
