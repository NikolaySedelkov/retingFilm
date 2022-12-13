function Input({func}){

    const search = () =>{
        let x = document.querySelector('input[name="group1"]:checked');
        if(x)
            func(parseInt(x.value))
        else
            func(null);
    }

    const reset = ()=>{
        document.getElementById("myForm").reset();
    }
    return (
        <form id="myForm">
            <fieldset id="group1">
            {
                Array.from(Array(5).keys()).map(radio=>
                    <span key={radio}>
                        <input name="group1" type="radio" value={radio+1} id={"r-"+radio}/>
                        <label htmlFor={"r-"+radio}>{radio+1}</label>
                    </span>
                )
            }
            </fieldset>
            <button onClick={reset} type="button">Очистить</button>
            <button onClick={search} type="button">Найти</button>
        </form>
    )
}

export default Input;