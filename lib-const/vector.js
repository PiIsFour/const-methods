class Vector {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	add(other) {
		return new Vector(this.x + other.x, this.y + other.y)
	}
	toString() {
		return `CV{x: ${this.x}, y: ${this.y}}`
	}
}

module.exports = Vector
