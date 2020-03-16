{ //mutate
	const Vector = require('./lib-mutate/vector')
	let myPos = new Vector(0, 1)
	console.log(`I started here: ${myPos}`)
	myPos.add(new Vector(4, 1))
	console.log(`I moved here: ${myPos}`)
	let treasure = myPos
	console.log(`remember the treasure I found here: ${treasure}`)
	myPos.add(new Vector(4, 1))
	console.log(`I moved here: ${myPos}`)
	console.log(`just looked up where I found the treasure: ${treasure}`)
}
{ //const
	console.log('\ndoing it const now\n')
	const Vector = require('./lib-const/vector')
	let myPos = new Vector(0, 1)
	console.log(`I started here: ${myPos}`)
	myPos = myPos.add(new Vector(4, 1))
	console.log(`I moved here: ${myPos}`)
	const treasure = myPos
	console.log(`remember the treasure I found here: ${treasure}`)
	myPos = myPos.add(new Vector(4, 1))
	console.log(`I moved here: ${myPos}`)
	console.log(`just looked up where I found the treasure: ${treasure}`)
}
{ //mutate but fixed it
	console.log('\nmutation can also work\n')
	const Vector = require('./lib-mutate/vector')
	let myPos = new Vector(0, 1)
	console.log(`I started here: ${myPos}`)
	myPos.add(new Vector(4, 1))
	console.log(`I moved here: ${myPos}`)
	let treasure = myPos.clone()
	console.log(`remember the treasure I found here: ${treasure}`)
	myPos.add(new Vector(4, 1))
	console.log(`I moved here: ${myPos}`)
	console.log(`just looked up where I found the treasure: ${treasure}`)
}
