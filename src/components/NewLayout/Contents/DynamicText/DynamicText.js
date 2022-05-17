import { Typography } from '@material-ui/core';
import React, {useState} from 'react';
import './DyanmicText.css'

const DynamicText = ({dataText}) => {

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const DeletingSpeed = 100;
    const TypingSpeed = 200;
    const [speed, setSpeed] = useState(TypingSpeed);
    

        const handleType = () =>{
            const i = loopNum % dataText.length;
            const fullText = dataText[i];

            isDeleting ? setText(fullText.substr(0, text.length -1)) : setText(fullText.substr(0, text.length +1));
            isDeleting ? setSpeed(DeletingSpeed): setSpeed(TypingSpeed);

            if(!isDeleting && text === fullText){
                setTimeout(() =>{
                    setIsDeleting(true);
                }, 1000)
            }else if (isDeleting && text === ''){
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        }
        setTimeout(handleType, speed);
        

    return (
        <div>
            <Typography variant="h6">
                <span>I have experience working with </span>
            </Typography>
            <Typography variant="h3" color="secondary">
                <b>: {text}</b><span id="cursor"></span>
            </Typography>
            
        </div>
    )
}


export default DynamicText;
