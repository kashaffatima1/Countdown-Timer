import inquirer from "inquirer";
import{differenceInSeconds} from "date-Fns";

const response = await inquirer.prompt({
        name: "userInput",
        type: "number",
        message: "Please enter the amount of second",
        validate: (input)=>{
             const safeInput = input || 0;
            if(isNaN(safeInput)){
                return "You must provide a valid numeric value"
            } else if (safeInput > 60){
                return "Second must be in 60"
            } else {
                return true;
            }
        }
    }
    );

let input = response.userInput;

function Starttime(value: number) {
    const inttime = new Date().setSeconds(new Date().getSeconds() + value);
    const interveraltime = new Date(inttime);
    setInterval((()=>{
        const currenttime = new Date()
        const timediff = differenceInSeconds(interveraltime,  currenttime);

    if(timediff <= 0){
        console.log("Time has expired:");
        process.exit()
    }
    const min = Math.floor((timediff%(3600*24))/3600)
    const sec = Math.floor(timediff%60)
    console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    
    }),1000)
}

Starttime(input)