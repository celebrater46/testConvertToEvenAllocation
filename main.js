"use strict";

// const novel = document.getElementById("novel");
const p = document.getElementById("even");
const testLine = "　勤務先は大手家電量販店ビックリカメラ。\n";

const removeFirstSpace = (line) => {
    if(line.substring(0, 1) === "　"){
        return line.substring(1);
    } else {
        return line;
    }
}

const convertToEvenAllocation = (line) => {
    const noFirstSpaceLine = removeFirstSpace(line);
    // console.log(noFirstSpaceLine);
    let str = "";
    let temp = noFirstSpaceLine.replace(/\n/g, "");
    console.log(temp);
    while (temp.length > 0){
        // const char = temp.substring(0, 1);
        str += '<span>' + temp.substring(0, 1) + '</span>';
        temp = temp.substring(1);
    }
    console.log(str);
    // return "　" + str;
    return "<div class='first_space'>　</div><div class='even'>" + str + "</div>";
}

// console.log(convertToEvenAllocation(testLine));
p.innerHTML = convertToEvenAllocation(testLine);
