const Vector = require('./vector')

describe('lib-mutate/vector', () => {
	it('creates a vector', () => {
		let v = new Vector(2, 5)
		expect(v).toEqual({
			x: 2,
			y: 5,
		})
	})

	it('add two vectors', () => {
		let a = new Vector(2, 5)
		let b = new Vector(1, 3)
		a.add(b)
		expect(a).toEqual({
			x: 3,
			y: 8,
		})
	})

	it('toString returns a string', () => {
		let a = new Vector(4, -1)
		expect(a.toString()).toEqual('MV{x: 4, y: -1}')
	})

	it('clones a vector', () => {
		let a = new Vector(4, -1)
		const b = a.clone()
		expect(b).toEqual(a)
		const c = new Vector(1, 5)
		a.add(c)
		expect(b).not.toEqual(a)
	})
})
