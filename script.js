function gameBoard()
{
    const root = document.getElementById("root");
    const result = document.createElement("div");
    const choice = document.createElement("div");
    result.id = "result";
    choice.id = "choice";
    root.appendChild(result);
    root.appendChild(choice);

    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorBtn = document.createElement("button");
    rockBtn.className = "btn";
    paperBtn.className = "btn";
    scissorBtn.className = "btn";
    rockBtn.innerHTML = "rock";
    paperBtn.innerHTML = "paper";
    scissorBtn.innerHTML = "scissor";
    rockBtn.addEventListener("click", (event) => 
    {
        playRound(event, comChoice, userChoice, winner);
    });
    paperBtn.addEventListener("click", (event) => 
    {
        playRound(event, comChoice, userChoice, winner);
    });
    scissorBtn.addEventListener("click", (event) => 
    {
        playRound(event, comChoice, userChoice, winner);
    });
    choice.appendChild(rockBtn);
    choice.appendChild(paperBtn);
    choice.appendChild(scissorBtn);

    const comChoice = document.createElement("div");
    const userChoice = document.createElement("div");
    const winner = document.createElement("div");
    result.appendChild(comChoice);
    result.appendChild(userChoice);
    result.appendChild(winner);
};

function getComChoice()
{
    const randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0)
    {
        return "rock";
    }
    else if(randomNum === 1)
    {
        return "paper";
    }
    else if(randomNum === 2)
    {
        return "scissor";
    };
};

function getUserChoice(event)
{
    if(event.target.innerHTML === "rock")
    {
        return "rock";
    }
    else if(event.target.innerHTML === "paper")
    {
        return "paper";        
    }
    else if(event.target.innerHTML === "scissor")
    {
        return "scissor";
    };
};

function playRound(event, comElement, userElement, winner)
{
    const comChoice = getComChoice();
    const userChoice = getUserChoice(event);

    comElement.innerHTML = `computer chose ${comChoice}`;
    userElement.innerHTML = `you chose ${userChoice}`;
    
    if(comChoice === "rock" && userChoice === "scissor" ||
    comChoice === "paper" && userChoice === "rock" ||
    comChoice === "scissor" && userChoice === "paper")
    {
        winner.innerHTML = "computer wins";
    }
    else if(comChoice === "scissor" && userChoice === "rock" ||
    comChoice === "rock" && userChoice === "paper" ||
    comChoice === "paper" && userChoice === "scissor")
    {
        winner.innerHTML = "users wins";
    }
    else
    {
        winner.innerHTML = "draw";
    }
};

gameBoard();