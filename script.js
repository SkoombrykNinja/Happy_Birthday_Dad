const age = 38;
var start = 0;

function counter() {
    if (start < age - 1) {
        start++;
        document.getElementById('age').innerHTML = start + "?";
        document.getElementById('YourAgeText').innerHTML = "Are you ";
    }
    else if (start === 37) {
        document.getElementById('age').innerHTML = "38!";
        document.getElementById('YourAgeText').innerHTML = "You are ";

        document.getElementById('factorial38').innerHTML = "38! = 523022617466601111760007224100074291200000000";
    }
}
