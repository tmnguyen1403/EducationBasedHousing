// let d = new Date("03/12/2020")
// console.log(d.toLocaleString())
// console.log(d.toDateString())
// console.log(d.toLocaleString().split(",")[0])
// console.log(d.getMonth())
// console.log(d.getDay())
// console.log("New Date:", new Date(d - new Date(0) + 2*24*3600*1000))

let state = {
	events: {
		1: "b",
	}
}
console.log(state)

let new_state = {
	events: {
		...state.events,
		2: "c",
	}
}
console.log(new_state)
