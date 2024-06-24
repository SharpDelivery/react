import { useState } from "react";
function Home(){
    const [name, setName] = useState('Marion')
    function handleClick(){
        setName('Luigi');
    }
    return(
        <div className="Home">
            <div className="welcome">
                <h1>
                    <p style={{
                        color:"GrayText",
                        fontFamily: "times new roman",
                        backgroundColor: "chocolate",
                        height: '400px',
                        width: '800px',
                        textAlign:"center"
                    }}>Welcome to Nita's Creamy. Your home of quality Parfait. We make quality parfait that satisfies your taste bud</p>
                </h1>
                <p style={{
                    backgroundColor:'red',
                    color: "whitesmoke",
                    width:'50px'
                }}>{name}</p>
            </div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Home;