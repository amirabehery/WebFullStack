var fname = document.getElementById("fName")
var lname = document.getElementById("lName")
var stdId = document.getElementById("stdId")

var submitbtn = document.getElementById("submitbtn")
var tableBody = document.querySelector("tbody")
// console.log(fname)
// console.log(lname)
// console.log(stdId)

function addRow() {
    var students = localStorage.getItem("students")
    students = JSON.parse(students)
    students = students[students.length - 1]
    console.log(students.first_name)
    var trow = document.createElement("tr")
    var trow1 = document.createElement("td")
    trow1.textContent = students.first_name
    var trow2 = document.createElement("td")
    trow2.textContent = students.last_name
    var trow3 = document.createElement("td")
    trow3.textContent = students.student_Id
    var ebtn = document.createElement("button")
    ebtn.textContent = "Edit"
    ebtn.classList.add("editbtn")
    var dbtn = document.createElement("button")
    dbtn.textContent = "Delete"
    dbtn.setAttribute("class", "delbtn")
    var trow4 = document.createElement("td")
    trow4.appendChild(ebtn)
    trow4.appendChild(dbtn)
    trow.appendChild(trow1)
    trow.appendChild(trow2)
    trow.appendChild(trow3)
    trow.appendChild(trow4)
    tableBody.appendChild(trow)
}

var ebtns = document.querySelectorAll(".editbtn")

ebtns.forEach((ebtn) => {
    ebtn.addEventListener("click", () => {
        var start = ebtn.parentElement.parentElement.firstElementChild
        fname.value = start.innerHTML
        lname.value = start.nextElementSibling.innerHTML
        stdId.value = start.nextElementSibling.nextElementSibling.innerHTML
        // console.log()
        console.log(fname.innerText)
    })
})

var dbtns = document.querySelectorAll(".delbtn")

dbtns.forEach((dbtn) => {
    dbtn.addEventListener("click", () => {
        var row = dbtn.parentElement.parentElement
        row.parentElement.removeChild(row)

        // console.log(fname.innerText)
    })
})


submitbtn.addEventListener("click", (e) => {
    e.preventDefault()
    var students = localStorage.getItem("students")
    // console.log(students)
    if (students == null) {
        // console.log("students not found")
        var students = []
        // console.log(students)
    }
    else {
        students = JSON.parse(students)
        // console.log("students found")
    }
    if (fname.value != "" && lname.value != "" && stdId.value != "") {
        //before pushing may i'll check on name pattern and id 
        //display red errors
        students.push({
            "first_name": fname.value,
            "last_name": lname.value,
            "student_Id": stdId.value
        })
        fname.value = ""
        lname.value = ""
        stdId.value = ""
        localStorage.setItem("students", JSON.stringify(students))
    }
    addRow()
})
