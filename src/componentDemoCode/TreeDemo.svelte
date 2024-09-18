<script>
 
import { Tree } from 'svaria-toolkit'

const tree = {
		label: 'Wine',
		children: [
			{
				label: 'Red',
				children: [
					{ label: 'California', link: "https://en.wikipedia.org/wiki/California_wine", labelId:"california"},
					{
						label: 'Bordeaux', link: 'https://en.wikipedia.org/wiki/Bordeaux',
						children: [{ label: 'Cab Franc', onClick:cabfranc }, { label: 'Merlot', link:"https://en.wikipedia.org/wiki/Merlot" }, { label: 'Malbec', labelId:"malbec" }],
						arrowId: 'bordeauxArrow'
					},
					{ label: 'Rioja', onClick:rioja }
				]
			},
			{
				label: 'White',
				children: [{ label: 'Burgundy', onClick: burgundy }, { label: 'Champagne', link:"https://en.wikipedia.org/wiki/Champagne" }, { label: 'Piedmont', link: "https://en.wikipedia.org/wiki/Piedmont" }],
				labelId: "white",
				arrowId: 'whiteArrow'
			}
		]
	};

	function burgundy () {
		console.log('Burgundy clicked')
	}

	function rioja () {
		console.log('rioja clicked')
	}

	function cabfranc () {
		console.log('cab franc clicked')
	}

</script>


<Tree
	{tree}
	liClassName="text-sm px-5"
	arrowClass="text-red-900"
	labelClass="text-gray-800"
	arrows={['▼', '►']}
	liId='li'
/>

