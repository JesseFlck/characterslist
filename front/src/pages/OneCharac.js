import { useState, useEffect } from "react";
import axios from "axios";
let id = new URL(window.location).searchParams.get('id');


const Perso = () => {

const [perso, setPerso] = useState({});

    //const navigate = useNavigate()

    function getperso() {
        axios.get('http://localhost:3000/api/characs/' + id, {
            headers: {
                'Content-Type': 'application/json',
                //authorization: `Bearer ${parseToken.token}`
            }
        })
            .then(({ data }) => {
                setPerso(data)
            })
    }



    useEffect(() => {
        getperso();
    }, [])

    return (
        <h1>{perso.firstName}</h1>
    )



    /*return (
        <>
        <div className="charac" key={perso.id}>
           
                    <div className="characBody" key={`charac-${perso._id}`}>
                        <a href={`./perso/${perso._id}`}>
                        <div className="imgCharac">
                            <img src={perso.avatar} alt="" />
                        </div>
                        <div className='characName' >
                            <h2 className='characFirstName'>{perso.firstName}</h2>
                            <h3 className='characSecondName'>{perso.secondName}</h3>
                            <h2 className='characLastName'>{perso.lastName}</h2>
                        </div>
                        </a>
                    </div>
        </div>
    </>
    )*/


}


export default Perso;