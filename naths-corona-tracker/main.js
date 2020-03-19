const arawText = document.getElementById("days");
const greetText = document.getElementById("greets");

const date = new Date();
const first = new Date('1/30/2020');
const current = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
const finalCurrent = new Date('' + current);
const oras = date.getHours();

arawText.textContent = KuninAngDays(first, finalCurrent);
greetText.textContent = GreetingsTraveler(oras);

function KuninAngDays (una, cur) {
    var times = cur.getTime() - una.getTime();
    return times / (1000 * 3600 * 24) + "";
}

function GreetingsTraveler (time) {
    if (time >= 12 && time < 18) {
        return "Magandang hapon"
    }
    else if (time >= 18 && time < 24) {
        return "Magandang gabi"
    }
    else {
        return "Magandang umaga"
    }
}
