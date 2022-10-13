
       let numberInput = document.querySelector("#number");
       let inputValue = document.querySelector("#inputValue");


       document.body.addEventListener("keydown", (e) => {
        if(e.key == "Enter") GuessNumber();
       })

       inputValue.addEventListener("click", GuessNumber);
       
       let randomValue = Math.floor(Math.random() * 101);
       current = 0;

       function GuessNumber() {
        current++;
        input = numberInput.value;
        if(input == "") {
            alert("Enter value");
        }
        else if(input < randomValue) {
            alert("Enter bigger value");
        }

        else if(input > randomValue) {
            alert("Enter smaller value");
        }

        else  if(input == randomValue) {
            
            let div = document.createElement("div");
            div.innerText = `Right! Number of attemps: ${current}`;
            div.classList.add("Right");
            document.body.append(div);
            current = 0;
            numberInput.value = "";
            randomValue = Math.floor(Math.random() * 101);
            let newTrial = document.createElement("button");
            document.body.prepend(newTrial);
            newTrial.classList.add("OK");
            newTrial.innerText = "Try one more time";
            newTrial.addEventListener("click", GuessNumber2);

            function GuessNumber2() {
                div.remove();
                newTrial.remove();
                GuessNumber();
            }
        }
        else {
            alert("Number required!");
        }
        numberInput.value = "";
       }


    function createCircle() {
    const section = document.querySelector('section')
    const circleEl = document.createElement('span')
    let size = Math.random() * 60;
    let duration = Math.random() * 10;
    circleEl.style.width = 20 + size+'px';
    circleEl.style.height = 20 + size+'px';
    circleEl.style.left = Math.random() * innerWidth + "px";
    section.appendChild(circleEl);
    setTimeout(() => {
        circleEl.remove()
    }, 4000)
}    
setInterval(createCircle, 50)    

       

