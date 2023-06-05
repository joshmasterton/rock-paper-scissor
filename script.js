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