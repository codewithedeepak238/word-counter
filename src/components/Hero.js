import { useEffect, useState } from "react"

export const Hero = () => {
    const [text, setText] = useState("");
    let [char, setChar] = useState(0);
    let [words, setWords] = useState(0);
    let [display, setDisplay] = useState("");
    function charCount(){
        let newArr = text.split(" ");
        let enter = text.split("\n");
        let count = 0;
        let newCount = 0;
        newArr.map((ele)=>{
            if(ele!==""){
                count++;
            }
        })
        enter.map((ele)=>{
            if(ele!==""){
                newCount++;
            }
        });
        if(newCount>0) newCount--;
        setChar(()=>count+newCount);
    }
    function wordCount(){
        let newArr = text.split("");
        let enter = text.split("\n");
        console.log(newArr);
        console.log(enter);
        let count = 0;
        newArr.map((ele)=>{
            if(ele!==" " && ele!=="\n"){
                count++;
            }
        });
        setWords(count);
    } 
    useEffect(()=>{
        charCount();
        wordCount();
    }, [text]);

    function upperCase(){
        const newText = text.toUpperCase();
        document.getElementById("inputext").value = newText;
    }
    function lowerCase(){
        const newText = text.toLowerCase();
        document.getElementById("inputext").value = newText;
    }
    function clearText(){
        document.getElementById("inputext").value = "";
    }

    return (
        <div className="flex items-center justify-center">
            <div className="mt-[8%]">
                <h2 className="text-4xl font-[500]">TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h2>
                <p className="text-2xl font-[500] mt-[3%]">Enter Your Text Here:</p>
                <textarea onChange={(e)=>setText(e.target.value)} name="inputext" id="inputext" className="w-[100%] rounded-[5px] mt-[2%] p-[1%]"></textarea>
                <div className="mt-[2%]">
                    <button onClick={upperCase} className="mr-[1%] bg-blue-400 p-[7px] text-l rounded-[4px] text-white">Convert Uppercase</button>
                    <button onClick={lowerCase} className="mr-[1%] bg-blue-400 p-[7px] text-l rounded-[4px] text-white">Convert Lowercase</button>
                    <button onClick={clearText} className="mr-[1%] bg-red-400 p-[7px] text-l rounded-[4px] text-white">Clear Text</button>
                    <button className="mr-[1%] bg-green-700 p-[7px] text-l rounded-[4px] text-white">Copy To Clipboard</button>
                    <button className="mr-[1%] bg-blue-400 p-[7px] text-l rounded-[4px] text-white">Remove Extra Spaces</button>
                </div>
                <div className="mt-[5%]">
                    <p className="text-4xl font-[500]">Summary Of Your Text</p>
                    <p className="mt-[10px]">Number of words: {words}</p>
                    <p className="mt-[5px]">Number of characters: {char}</p>
                    <p className="mt-[5px]">Reading Time:</p>
                </div>
            </div>
        </div>
    )
}
