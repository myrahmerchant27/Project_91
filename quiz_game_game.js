function send()
{
    Number_1 = document.getElementById("Number_1").value;
    Number_2 = document.getElementById("Number_2").value;
    actual_answer = parseInt(Number_1) * parseInt(Number_2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}