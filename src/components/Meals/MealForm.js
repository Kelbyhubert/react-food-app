import React , {useState , useRef} from 'react'
import Input from '../UI/Input'
import styled from "./MealForm.module.css"

const MealForm = (props) => {

    const [valid, setValid] = useState(true)
    const inputValueRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const inputValue = inputValueRef.current.value;

        if(+inputValue < 1 || +inputValue > 5 || +inputValue.trim() === 0){
            setValid(false);
            return;
        }


        setValid(true);
        props.addToCard(+inputValue);

    }

    return (
        <form className={styled.form} onSubmit={submitHandler}>
            <Input 
                ref={inputValueRef}
                label="Total"
                input={{
                    id: "Total_" + props.id,
                    type: 'number',
                    min: "0",
                    max: "5",
                    step: '1',
                    defaultValue: "0"
                }}
            />
            <button> add </button>
            {!valid && <p>please add 1 to 5</p>}
        </form>
    )
}

export default MealForm
