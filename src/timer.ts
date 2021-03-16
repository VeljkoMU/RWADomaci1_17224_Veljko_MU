import { TimerValue } from "./timerValue";


export class Timer{

    public timerValue : TimerValue;
    public timerFunction : any;
    public isStarted:boolean;
    constructor(){
        this.timerValue= new TimerValue();
        this.isStarted=false;
    }

    startTimer(contrainer:any){

        this.timerFunction= setInterval(()=>{
            this.timerValue.mili++;
            if(this.timerValue.mili==1000){
            this.timerValue.mili=0;
            this.timerValue.seconds++;
            if(this.timerValue.seconds==60){
                this.timerValue.seconds=0;
                this.timerValue.minutes++;
                
                if(this.timerValue.minutes==60){
                    this.timerValue.minutes=0;
                    this.timerValue.hours++;
                }
            }
        }
            contrainer.innerHTML=`${this.timerValue.hours}:${this.timerValue.minutes}:${this.timerValue.seconds}:${this.timerValue.mili}`;
        }, 1);

        this.isStarted=true;
            
    }

    stopTimer(){
        clearInterval(this.timerFunction);
        this.isStarted=false;
    }
}


    
