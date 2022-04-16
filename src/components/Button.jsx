export default function Button({action,dispatch,setAction}){

    const classAssign = () => {

        if(action === '< Previous' || action === 'Next >'){return 'nav-button'}
        else return 'action-button'
    }

    const clickHandler = (e) => {
        let action = e.target.textContent;
        try{
            switch(true){
                case action === "< Previous":
                    dispatch({type:"Previous"});
                    break;
                case action === "Next >":
                    dispatch({type:"Next"});
                    break;
                case action ==="Delete":
                    dispatch({type:"Delete"});
                    break;
                case action === "Edit" || action === "New":
                    setAction(e.target.textContent);
                    break;
                default:
                    throw new Error('Button action non existent');
            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <button disabled={dispatch ? false : true} onClick={clickHandler} className={classAssign()}>{action}</button>
    )
}