let minimum=1;
let maximum=100;
let result=Math.floor(Math.random()*(maximum-minimum)+1)+minimum;
let attempts=0
let guess;
let random=true;
while(random){
    guess=window.prompt("Guess a number between 1-100")
    guess=Number(guess)
    if (isNaN(guess)){
        window.alert("please enter a valid number!")
    }
    else if(guess<minimum || guess>maximum){
        window.alert("The value is out of range !")
    }
    else{
        attempts++
        if(guess<result){
            window.alert("your value too LOW")
        }
        else if(guess>result){
            window.alert("your value is too HIGH")
        }
        else{
            window.alert(`congrats !! you have attempted in ${attempts} attempts correctly `)
        }

    }
}