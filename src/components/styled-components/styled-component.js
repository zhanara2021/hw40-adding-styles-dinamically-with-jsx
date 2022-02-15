import React from "react";
import Button from "../UI/Button/Button";
import './styled-component.css'

const StyledComponent = () => {
    return (
        <div class= "components">
            <h1 class="components-heading">Heading</h1>
    
            <p>
                
            Lorem ipsum dolor sit amet,<br/>
            consectetur adipiscing elit. <br/>
            Suspendisse sed quam ac quam cursus<br/>
            tempus. Aenean nec convallis urna.
            
            </p>
    
            <Button class="components-btn"></Button>
        </div>
    );

};


export default StyledComponent;