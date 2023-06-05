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

function gameBoard()
{
    const root = document.getElementById("root");
    const result = document.createElement("div");
    const choice = document.createElement("div");
    result.id = "result";
    choice.id = "choice";
    root.appendChild(result);
    root.appendChild(choice);

    const rockBtn = document.createElement("div");
    const paperBtn = document.createElement("button");
    const scissorBtn = document.createElement("button");
    rockBtn.className = "btn";
    paperBtn.className = "btn";
    scissorBtn.className = "btn";
    choice.appendChild(rockBtn);
    choice.appendChild(paperBtn);
    choice.appendChild(scissorBtn);

    const comChoice = document.createElement("div");
    const userChoice = document.createElement("div");
    result.appendChild(comChoice);
    result.appendChild(userChoice);
};

gameBoard();