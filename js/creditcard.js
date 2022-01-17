function visa()
{
    myDivObj = document.getElementById("visa")
    let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;

    if(myDivObjBgColor == 'rgb(232, 232, 232)')
    {
        document.getElementById("visa").style.backgroundColor='rgb(102, 178, 255)';
        document.getElementById("master").style.backgroundColor='rgb(232, 232, 232)';
    }else{
        document.getElementById("visa").style.backgroundColor='rgb(232, 232, 232)';
        document.getElementById("master").style.backgroundColor='rgb(232, 232, 232)';
    }
}

function master()
{
    myDivObj = document.getElementById("master")
    let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;

    if(myDivObjBgColor == 'rgb(232, 232, 232)')
    {
        document.getElementById("master").style.backgroundColor='rgb(102, 178, 255)';
        document.getElementById("visa").style.backgroundColor='rgb(232, 232, 232)';
    }else{
        document.getElementById("master").style.backgroundColor='rgb(232, 232, 232)';
        document.getElementById("visa").style.backgroundColor='rgb(232, 232, 232)';
    }
}