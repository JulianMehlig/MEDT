var box = document.getElementsByClassName("box");

var counter = 1;



setInterval(function ()
{
    changeBG(counter);
    counter += 1;
    if(counter>3)
    {
        counter = 1;
    }},1000);


function changeBG(counter)
{
    var color = new Array();
    color[1] = 'white';
    color[2] = 'blue';
    color[3] = 'green';

    box[0].style.backgroundColor = color[counter];
}