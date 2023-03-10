interface ErrorMessageProps {
    message:string
}

const ErrorMessage = (props:ErrorMessageProps)=>{
    return <div style={{color:"red", margin:"40px 0px 10px 0px"}}>{props.message}</div>
}

export default ErrorMessage