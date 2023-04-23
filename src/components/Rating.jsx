import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({rating, onClick, style}) => {
    let ret = [];
    for(let index=0; index<5;index++) {
        ret.push(
            <span key={index} onClick={()=>onClick(index)} style={style}>
                {
                    rating > index?(
                        <AiFillStar fontSize="15px"/>
                    ):(
                        <AiOutlineStar fontSize="15px" />
                    )
                }
            </span>
        )
    };
    return (<>{ret}</>);  
};

export default Rating;
