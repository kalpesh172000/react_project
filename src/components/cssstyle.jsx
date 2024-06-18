function Cssstyle()
{
    let date = new Date()
    let hour = date.getHours()
    let ColorGreeting = ''
    let Greeting = ''
    if(hour>=0 && hour<=12){
        ColorGreeting = 'red';
        Greeting = "good morning"
    }else if (hour>=12 && hour <= 18){
        ColorGreeting = 'yellow';
        Greeting = "good afternoon"
    }else if(hour >=19 && hour<=24){
        ColorGreeting = 'green';
        Greeting = "good evening"
    }

    let H1style = {
        color: ColorGreeting,
    }
    return(
        <h1 style={H1style}>{Greeting}</h1>
    )
}

export default Cssstyle