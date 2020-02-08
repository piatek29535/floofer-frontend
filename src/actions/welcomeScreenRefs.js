import * as React from "react";

export function initializeRefs(){
    return {
        type:'INITIALIZE_REFS',
        payload:[
            {
                current:React.createRef(),
                name:"O stronie"
            },
            {
                current:React.createRef(),
                name:"Korzyści"
            },
            {
                current:React.createRef(),
                name:"Opinie"
            },
            {
                current:React.createRef(),
                name:"Skorzystaj"
            },
        ]
    }
}