const cookie = {
    name: "Chocolate Chip",
    type: "Cookie",
    isFree: true,
    "+isAvailable": true,
    eatCookie: function () {
        console.log("Yum! Eating the cookie " + this.name);
    }
}
//console.log(cookie);
//cookie.eatCookie();


class Cookie {
    constructor(name, type, cost, isFree) {
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.isFree = isFree;
    }
    eatCookie() {
        console.log("Yum! Eating the cookie " + this.name);
    }


}
const myCookie = new Cookie("chocolateChip", "cookie", 2.11, false);
//console.log(myCookie);
//console.log(myCookie["name"]);
myCookie.eatCookie();