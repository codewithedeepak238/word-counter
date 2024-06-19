import { createContext, useContext, useReducer } from "react"
import { InfoReducer } from "../reducers/InfoReducer";

const initialInfo = {
    first_name:'',
    last_name:'',
    email:'',
    phone:'',
    address:'',
    dob:'',
    fresher:'',
    parent_name:'',
    parent_phone:'',
    parent_email:'',
    high_degree:'',
    high_degree_cls:'',
    high_degree_branch:'',
    high_degree_college:'',
    high_degree_percent:'',
    high_degree_year:'',
    plus_two_percent:'',
    high_school_perecent:'',
    current_employer:'',
    job_title:'',
    ctc:'',
    experience:'',
    linkedin:'',
    github:'',
    hacker_rank:''
}

const InfoContext = createContext(initialInfo);

export const InfoProvider = ({children})=>{

    const [state, dispatch] = useReducer(InfoReducer, initialInfo)

    function basicDetail(detail){
        const updatedInfo = {...state, detail};
        dispatch({
            type:'BASIC_DETAIL',
            payload:{
                detail: detail
            }
        })
    }

    const value={
        dispatch,
        initialInfo,
    }

    return(
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}

export const useInfo = ()=>useContext(InfoContext)