function a()
{
    // some random code...
    b();
    // some more random code...
}

function b()
{
    console.log("running b();");
    return;
}

a();