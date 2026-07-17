function byteCalculate() {
    var x = 0;

    if (document.getElementById("bytetype").value == "bit") {
        x = document.getElementById("byte-count").value * 8 + " bit(s)";
    } else if (document.getElementById("bytetype").value == "kilobyte") {
        x = document.getElementById("byte-count").value / (1024) + " KB";
    } else if (document.getElementById("bytetype").value == "megabyte") {
        x = document.getElementById("byte-count").value / (1024 ** 2) + " MB";
    } else if (document.getElementById("bytetype").value == "gigabyte") {
        x = document.getElementById("byte-count").value / (1024 ** 3) + " GB";
    } else {
        x = null;
    }

    console.log(x)
    document.getElementById("converted-num").innerHTML = "Converted to " + x;
}

var form = document.getElementById("byte-calc");

function handleForm(event) {
    event.preventDefault();
}

form.addEventListener("submit", handleForm);