function ext() {
    
    var numberInput = document.getElementById("number").value;


    const units = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco"];
    var number = parseInt(numberInput);

    var label = document.getElementById("ext")
    label.innerHTML = units[number];

    console.log(number);
}