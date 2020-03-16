class Vector {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	add(other) {
		this.x += other.x
		this.y += other.y
	}
	toString() {
		return `MV{x: ${this.x}, y: ${this.y}}`
	}
	clone() {
		return new Vector(this.x, this.y)
	}
}

module.exports = Vector
