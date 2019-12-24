// const squre = function (x) {
//     return x * x
// }

// const squre = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(squre(2))

const event = {
    name: 'Birthday Party',
    guestList: ['Jason', 'Andrew', 'Katie'],
    printGuestList () {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()