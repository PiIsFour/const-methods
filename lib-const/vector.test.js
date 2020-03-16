const Vector = require('./vector')

describe('lib-const/vector', () => {
	it('creates a vector', () => {
		const v = new Vector(2, 5)
		expect(v).toEqual({
			x: 2,
			y: 5,
		})
	})

	it('add two vectors', () => {
		const a = new Vector(2, 5)
		const b = new Vector(1, 3)
		const c = a.add(b)
		expect(c).toEqual({
			x: 3,
			y: 8,
		})
	})

	it('toString returns a string', () => {
		const a = new Vector(4, -1)
		expect(a.toString()).toEqual('CV{x: 4, y: -1}')
	})
})
