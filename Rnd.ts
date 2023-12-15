
namespace WebfeedExampleServer
{
	/** */
	export function randomReset(seed: number)
	{
		inc = seed * 100000;
	}
	
	/** */
	export function random(max: number)
	{
		return calculateHash(++inc) % max;
	}
	
	
	let inc = 1;
	
	/**
	 * Hash calculation function adapted from:
	 * https://stackoverflow.com/a/52171480/133737
	 */
	export function calculateHash(value: { toString(): string; }, seed = 0)
	{
		const val = value.toString();
		let h1 = 0xDEADBEEF ^ seed;
		let h2 = 0X41C6CE57 ^ seed;
		
		for (let i = 0; i < val.length; i++)
		{
			let ch = val.charCodeAt(i);
			h1 = Math.imul(h1 ^ ch, 2654435761);
			h2 = Math.imul(h2 ^ ch, 1597334677);
		}
		
		h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
		h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
		return 4294967296 * (2097151 & h2) + (h1 >>> 0);
	}
}
