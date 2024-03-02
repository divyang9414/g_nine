import React, { useState } from "react"
import "./jewellery.css";
import img1 from "../../assets/images/JG-1901-1969.jpg"
import img2 from "../../assets/images/JG-1901-1976.jpg"
import img3 from "../../assets/images/JG-1901-1973.jpg"
import img4 from "../../assets/images/JG-1901-1967.jpg"
import img5 from "../../assets/images/JG-1901-3095.jpg"
import img6 from "../../assets/images/JG-1901-3082.jpg"
import img7 from "../../assets/images/JG-2005-02321.jpg"
import img8 from "../../assets/images/JG-1902-3253.jpg"
import img9 from "../../assets/images/JGS-2011-03406.jpg"
import img10 from "../../assets/images/JG-1902-3248.jpg"
import img11 from "../../assets/images/JGS-2002-01324.jpg"
import img12 from "../../assets/images/JGS-2106-01381.jpg"
import img13 from "../../assets/images/JG-1903-3568.jpg"
import img14 from "../../assets/images/JG-1911-00707.jpg"
import img15 from "../../assets/images/JG-1911-00926.jpg"
import img16 from "../../assets/images/JG-1911-00759.jpg"
import img17 from "../../assets/images/JG-1901-3070.jpg"
import img18 from "../../assets/images/JG-1901-2053.jpg"
import img19 from "../../assets/images/JG-1901-3106.jpg"

const data = [
	{
		id: 1,
		name: "Queen Beauty",
		category: "rings",
		image: img1,
		price: 25585,
	},
	{
		id: 2,
		name: "Flower Pattels",
		category: "rings",
		image: img2,
		price: 35191,
	},
	{
		id: 3,
		name: "Elegant Center",
		category: "rings",
		image: img3,
		price: 63380,
	},
	{
		id: 4,
		name: "Floral Touch",
		category: "rings",
		image: img4,
		price: 24607,
	},
	{
		id: 5,
		name: "Hazzy Light",
		category: "bracelet",
		image: img5,
		price: 124820,
	},
	{
		id: 6,
		name: "Mordern Bridal",
		category: "bracelet",
		image: img6,
		price: 119155,
	},
	{
		id: 7,
		name: "Moon Star",
		category: "pendants",
		image: img7,
		price: 15888,
	},
	{
		id: 8,
		name: "Leaf Love",
		category: "pendants",
		image: img8,
		price: 21381,
	},
	{
		id: 9,
		name: "Leaf Love",
		category: "pendants",
		image: img9,
		price: 25154,
	},
	{
		id: 10,
		name: "Sweet Heart",
		category: "pendants",
		image: img10,
		price: 22516,
	},
	{
		id: 11,
		name: "Bangle Ring - Bridal Touch",
		category: "pohcha",
		image: img11,
		price: 76384,
	},
	{
		id: 12,
		name: "Bangle Ring - Party Wear",
		category: "pohcha",
		image: img12,
		price: 344240,
	},
	{
		id: 13,
		name: "Celebration Wibe",
		category: "bangles",
		image: img13,
		price: 307837,
	},
	{
		id: 14,
		name: "Daily Wear",
		category: "bangles",
		image: img14,
		price: 339887,
	},
	{
		id: 15,
		name: "Kristal Forever",
		category: "bangles",
		image: img15,
		price: 476189,
	},
	{
		id: 16,
		name: "Bridal Elegance",
		category: "bangles",
		image: img16,
		price: 222993,
	},
	{
		id: 17,
		name: "Beauty Insides",
		category: "rings",
		image: img17,
		price: 13426,
	},
	{
		id: 18,
		name: "Grow & Grab",
		category: "rings",
		image: img18,
		price: 43368,
	},
	{
		id: 19,
		name: "Fuzzy Flowers",
		category: "bracelet",
		image: img19,
		price: 163050,
	},
]

const KrishnaRaj = () => {
	const [jewellery, setjewellery] = useState(data)

	const filterType = (category) => {
		if (category === "All") {
			setjewellery(data)
		} else {
			const filteredjewellery = data.filter((item) => item.category === category)
			setjewellery(filteredjewellery)
		}
	}

	const filterPrice1 = (price) => {
		if (price === "All") {
			setjewellery(data)
		} else {
			const [min, max] = price.split("-").map(Number)
			const filteredjewellery = data.filter((item) => {
				const itemPrice = item.price
				return itemPrice >= min && itemPrice <= max
			})
			setjewellery(filteredjewellery)
		}
	}

	const filterPrice = (min, max) => {
		const filteredjewellery = data.filter((item) => {
			const itemPrice = typeof item.price === "string" ? parseInt(item.price, 5) : item.price
			return itemPrice >= min && itemPrice <= max
		})
		setjewellery(filteredjewellery)
	}

	const filterName = (name) => {
		const filteredjewellery = data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
		setjewellery(filteredjewellery)
	}

	return (
		<>
			<section className="bckgrnd">
				<div className="container">
					<h1 className="heading mb-5">KrishnaRaj &nbsp;Jewellers</h1>
					<div className="filters mb-5">
						<div className="filter">
							<p>Filter by Category</p>
							<div className="filter-options">
								<button className="btn btn-secondary" onClick={() => setjewellery(data)}>All</button>
								<button className="btn btn-secondary" onClick={() => filterType("rings")}>Rings</button>
								<button className="btn btn-secondary" onClick={() => filterType("pendants")}>Pendants</button>
								<button className="btn btn-secondary" onClick={() => filterType("bangles")}>Bangles</button>
								<button className="btn btn-secondary" onClick={() => filterType("bracelet")}>Bracelet</button>
								<button className="btn btn-secondary" onClick={() => filterType("pohcha")}>Pohcha</button>
							</div>
						</div>
						<div className="filter">
							<p className="text-center">Search Name</p>
							<input
								onChange={(e) => {
									filterName(e.target.value);
								}}
								type="text"
								id="name"
								name="name"
								className="search-input"
							/>
						</div>
						<div className="filter">
							<p>Filter Price</p>
							<div className="filter-options">
								<button className="btn btn-secondary" onClick={() => filterPrice1("All")}>All</button>
								<button className="btn btn-secondary" onClick={() => filterPrice1("0-15000")}>5,000-15,000</button>
								<button className="btn btn-secondary" onClick={() => filterPrice1("15000-50000")}>15,000-50,000</button>
								<button className="btn btn-secondary" onClick={() => filterPrice1("50000-100000")}>50,000-1,00,000</button>
								<button className="btn btn-secondary" onClick={() => filterPrice1("100000-250000")}>1,00,000-2,50,000</button>
								<button className="btn btn-secondary" onClick={() => filterPrice1("250000-500000")}>2,50,000-5,00,000</button>
							</div>
						</div>
					</div>

					<div className="d-flex flex-wrap">
						{jewellery.map((item, index) => (
							<div key={index} className="card mb-3 mx-2 overflow-hidden">
								<img src={item.image} alt={item.name} />
								<div className="card-body food-details">
									<p>{item.name}</p>
									<p>{item.price.toLocaleString('en-IN')}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default KrishnaRaj