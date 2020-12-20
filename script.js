function rpsIF(x, y)
{
    if (x == "rock")
    {
        if (y == "paper")
        {
            return "paper beats rock"
        }
        else if (y == "scissors")
        {
            return "rock beats scissors"
        }
        else if (y == "rock")
        {
            return "rock ties rock"
        }
        else 
        {
            return "invalid input"
        }
    }
    else if (x == "paper")
    {
        if (y == "rock")
        {
            return "paper beats rock"
        }
        else if (y == "scissors")
        {
            return "scissors beats paper"
        }
        else if (y == "paper")
        {
            return "paper ties paper"
        }
        else 
        {
            return "invalid input"
        }
    }
    else if (x == "scissors")
    {
        if (y == "paper")
        {
            return "scissors beats paper"
        }
        else if (y == "rock")
        {
            return "rock beats scissors"
        }
        else if (y == "scissors")
        {
            return "scissors ties scissors"
        }
        else 
        {
            return "invalid input"
        }
    }
}

function rpsSwitch(x, y)
{
    
}

function fib(x)
{
    if (x == 1 || x == 0)
    {
        return 1;
    }
    else 
    {
        return fib(x-2) + fib(x-1)
    }
}

function reverse(x)
{
    if (x === "")
    {
        return ""
    }
    return reverse(x.slice(1)) + x[0]
    
}

console.log(reverse("hanna"))
