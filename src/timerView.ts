import {Timer} from "./timer";

export class TimerView{

    private timer : Timer;

    constructor(){
        this.timer= new Timer();

        this.draw();
    }

    draw(){
        let timerDisplay=document.createElement("h1");
        let startbtn=document.createElement("button");
        let stopbtn=document.createElement("button");

        startbtn.innerHTML="Start Timer";
        stopbtn.innerHTML="Stop Timer";
        
        document.body.appendChild(timerDisplay);
        document.body.appendChild(startbtn);
        document.body.appendChild(stopbtn);

        startbtn.onclick = (ev)=>{
            if(this.timer.isStarted)
                return;
            this.timer.startTimer(timerDisplay);
        }

        stopbtn.onclick = (ev)=>{
            if(!this.timer.isStarted)
                return;
            this.timer.stopTimer();
        }
    }
}