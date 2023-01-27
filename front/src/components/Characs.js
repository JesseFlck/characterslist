import { useState, useEffect } from "react";
import axios from "axios"



const Charac = () => {

    const [charac, setCharac] = useState([]);

    // Récup de tous les persos

    function getcharacs() {
        axios.get("http://localhost:3000/api/characs/", {
            headers: {
                'Content-Type': 'application/json',
                //authorization: `Bearer ${parseToken.token}`
            }
        })
            .then(({ data }) => {
                setCharac(data)
            })
    }



    useEffect(() => {
        getcharacs();
    }, [])



    return (
        <>
        <div className="charac" key={charac._id}>
            {charac.map(element => {
                //const del = <FontAwesomeIcon icon={faTrash} />
                //const edit = <FontAwesomeIcon icon={faEdit} />
                const color = element.color
                
                return (
                    <a href={`./${element.firstName}`}>
                        <div className="characBody" key={`charac-${element._id}`}>
                            <div className="imgCharac">
                                <img src={element.avatar} alt="" />
                            </div>
                            <div className='characName' style={{color}}>
                                <h2 className='characFirstName'>{element.firstName}</h2>
                                <h3 className='characSecondName'>{element.secondName}</h3>
                                <h2 className='characLastName'>{element.lastName}</h2>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    </>
    )

}


export default Charac;