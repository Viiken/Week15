import React, { useState } from 'react'

export const UpdateRoomForm = (props) => {
    const [name, setName] = useState(this.name);
    const [area, setArea] = useState(this.area);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area){
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else{
            console.log('invalid input')
        }
    };


    return(
        <div>
            <h4>Update Room</h4>
            <form onSubmit = {onSubmit}>
                <input
                    type = 'text'
                    placeholder = 'name'
                    onChange={(e) => setName(e.target.value)}
                    value = {name}
                    />
                    <input
                        type= 'text'
                        placeholder= 'area'
                        onChange={handleAreaInput}
                        value={area}
                    />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};