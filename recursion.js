let total = 0;

function recursion(n)
{
    n += 1;
    total += 1;

    if(total < 3)
        recursion(n);
    console.log("n = " + n + " total = " + total);
}

recursion(0);