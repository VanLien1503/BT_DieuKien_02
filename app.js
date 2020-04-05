function check() {
    let number = parseInt(document.getElementById("number").value);
    let Temperature = document.getElementById("Temperature").value;
    let ToTemperature = document.getElementById("ToTemperature").value;
    let result;
    if (Temperature == "C" && ToTemperature == "C") {
        result = number;
    } else if (Temperature == "F" && ToTemperature == "F") {
        result = number;
    } else if (Temperature == "C" && ToTemperature == "F") {
        result = number * 9 / 5 + 32;
    } else if (Temperature == "F" && ToTemperature == "C") {
        result = (number - 32) / (9 / 5)
    }
    document.getElementById("resule").value = result;
}

function ConvertMet() {
    let number = parseInt(prompt("Nhập Giá Trị Mét Cần Đổi"));
    let result = number * 3.2808;
    alert(result);

}

function ConvertFeet() {
    let number = parseInt(prompt("Nhập Giá Trị Feet Cần Đổi"));
    let result = number / 3.2808;
    alert(result);
}

function acreage() {
    let edge = parseInt(document.getElementById("a").value);
    let result = 0.5 * (2 * edge);
    document.getElementById("resuleStamgiac").innerHTML = result
}

function Shcn() {
    let numberA = parseInt(document.getElementById("canhA").value);
    let numberB = parseInt(document.getElementById("CanhB").value);
    document.getElementById("resuleShc").innerHTML = "Diện Tích Hình Chữ Nhật = " + numberA * numberB;
}

function Stgab() {
    let canhA = parseInt(document.getElementById("CanhkeA").value);
    let canhB = parseInt(document.getElementById("CanhkeB").value);
    document.getElementById("Stgab").innerHTML = "Diện Tích Tam Giác = " + 1 / 2 * (canhA * canhB);
}

function equation() {
    let inputA = parseInt(document.getElementById("inputA").value);
    let inputB = parseInt(document.getElementById("inputB").value);
    if (inputA !== 0) {
        document.getElementById("resuleEquation").innerHTML = "Phương Trình Có Nghiệm x =" + parseFloat(-inputB / inputA);
    }
}

function equation2() {
    let inputA1 = parseInt(document.getElementById("inputA1").value);
    let inputB1 = parseInt(document.getElementById("inputB1").value);
    let inputC1 = parseInt(document.getElementById("inputC1").value);
    let denta;
    let result;
    if (inputA1 === 0) {
        result = "Không Phải Phương trình Bậc 2";
    } else {
        denta = (inputB1 * inputB1) - (4 * (inputA1 * inputC1));
        if (denta < 0) {
            result = "denta = " + denta + "Phương Trình Vô Nghệm";
        } else if (denta === 0) {
            result = "denta = " + denta + "Phương Trình có Nghệm x1=x2=" + -(inputB1 / (2 * inputA1));
        } else {
            result = "x1 = " + (-inputB1 + Math.sqrt(denta)) / 2 * inputA1 + "<br>"
                + "x2 = " + (-inputB1 - Math.sqrt(denta)) / 2 * inputA1;
        }
    }
    document.getElementById("equation2").innerHTML = result;
}

function CheckN() {
    let number = parseInt(document.getElementById("checkN").value);
    let result;
    if (number > 0 && number < 120) {
        result = "Là Tuổi Của 1 Người";
    } else {
        result = "Không Phải Tuổi Của 1 người"
    }
    document.getElementById("resuleN").innerText = result;
}

function checkABC() {

    let inputA = parseInt(document.getElementById("inputCanhA").value);
    let inputB = parseInt(document.getElementById("inputCanhB").value);
    let inputC = parseInt(document.getElementById("inputCanhC").value);
    let result;
    if (inputA, inputB , inputC > 0 &&
    inputA + inputB > inputC &&
    inputB + inputC > inputA &&
    inputA + inputC > inputB) {
        result = "ABC Là Cạnh Của Tam Giác";
    } else {
        result = "ABC Không Phải Là Cạnh Của Tam giác"
    }
    document.getElementById("resuleABC").innerHTML = result;
}

function giadien() {
    let number = parseInt(document.getElementById("soDien").value);
    let result;
    let giaDien;
    let leve;
    if (number < 0) {
        alert("Nhập Lại Số Điện của bạn")
    } else {
        if (number < 50) {
            leve = "Giá Điện Cấp I";
            giaDien = 1678;
            result = number * giaDien;
        } else if (number < 100) {
            leve = "Giá Điện Cấp II";
            giaDien = 2014;
            result = number * giaDien;
        } else if (number < 150) {
            leve = "Giá Điện Cấp III";
            giaDien = 3000;
            result = number * giaDien;
        } else {
            leve = "Giá Điện Cấp IV";
            giaDien = 5000;
            result = number * giaDien;
        }
    }
    document.getElementById("resuleGiaDien").innerHTML = leve + " = " + giaDien + "vnd/1 Số"
        + "<br>"
        + " Số Tiền Cần Thanh Toán Là: " + result + " vnd";
}

function checkThue() {
    let number = parseInt(document.getElementById("numberVND").value);
    let result;
    if (number <= 0) {
        alert("Bớt chơi Và Đi Làm Kiếm Tiên Đi Ông Kễnh")
    } else if (number < 5000000) {
        result = (number / 100) * 5 + " vnd" + " (Thuế=5%) ";
    } else if (number < 10000000) {
        result = (number / 100) * 10 + " vnd" + "  (Thuế=10%)";
    } else if (number < 18000000) {
        result = (number / 100) * 15 + " vnd" + " (Thuế=15%)";
    } else if (number < 32000000) {
        result = (number / 100) * 20 + " vnd" + " (Thuế=20%)";
    } else if (number < 52000000) {
        result = (number / 100) * 25 + " vnd" + " (Thuế=25%)";
    } else if (number < 80000000) {
        result = (number / 100) * 30 + " vnd" + " (Thuế=30%)";
    } else {
        result = (number / 100) * 35 + " vnd" + " (Thuế=35%)";
    }
    document.getElementById("resuleThue").innerHTML = "Thuế Phải Chịu Của " + number + "vnd  Là" + result
}

function laisuat() {
    let laiSuat;
    let laiThang;
    let money = parseInt(document.getElementById("money").value);
    let month = document.getElementById("month").value;
    if (month == "6") {
        laiSuat = 0.8;
    } else if (month == "12") {
        laiSuat = 1.2;
    } else if (month == "24") {
        laiSuat = 1.5;
    } else if (month == "36") {
        laiSuat == 1.7;
    } else {
        laiSuat = 2;
    }
    for (let i = 1; i <= month; i++) {
        laiThang = (money * laiSuat) / 100;
        money += laiThang;
        document.write("Lãi Suất Hằng Tháng Là :" + laiSuat + "%" + "<br>" +
            "Tiền Lãi Tháng" + i + "=" + laiThang + "vnd" + "<br> " +
            "Số Tiền Sau" + i + "Tháng = " + money + "vnd" + "<br>" + "<br>")
    }
}