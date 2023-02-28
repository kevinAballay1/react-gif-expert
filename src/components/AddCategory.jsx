import { useState } from "react"

export const AddCategory = ({ onNewCategory}) => {
    const [inputValue, setInputValue] = useState('') ;
    const handleInputChange = ({target}) =>{
        setInputValue(target.value)
    }   
    const handleSubmit = (event) =>{
        event.preventDefault();
        const clearedValue = inputValue.trim();
        if (clearedValue.length<1) return;
        onNewCategory(clearedValue);
        setInputValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type= "text"
                placeholder= "Type new Category"
                onChange= {handleInputChange}
                value= {inputValue}
            />
        </form>
    )
}
