class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("NAME");
        var button = createButton("PLAY");
        var greeting = createElement('h2');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide()
            button.hide()
        })
    }
}