// document.getElementById("count-el").innerText;
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let total = 0
let totalEl = document.getElementById("total-el")

function increment() {
    count++
    countEl.innerText = count

}

function save() {
    let countStr = " " + count + " - "
    saveEl.textContent += countStr
    total += count
    totalEl.textContent = "Total person: " + total
    count = 0
    console.log(total)
}
