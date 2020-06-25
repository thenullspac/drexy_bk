import React from 'react';


function Devform(){
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
  
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    return(
        <form onSubmit={handleAddDev}>
        <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input 
         name="github_username" 
         id="github_username" 
         required
         value={github_username}
         onChange={e => setGithubUsername(e.target.value)}
         />
        </div> 

        <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input 
         name="techs"
         id="techs" 
         required
         value={techs}
         onChange={e => setTechs(e.target.value)}
         />
        </div>

        <div className="input-group">

        <div className="input-block">
        <label htmlFor="Latitude">Latitude</label>
        <input type="number"
         name="Latitude" 
         id="Latitude"
         required 
         value={latitude}
         onChange={e => setLatitude(e.target.value)}
        />
        </div>

        <div className="input-block">
        <label htmlFor="Longitude">Longitude</label>
        <input type="number" 
        name="Longitude" 
        id="Longitude" 
        required 
        value={longitude}
        onChange={e => setLongitude(e.target.value)}
        />
        </div>

        </div>

        <button type="submit">Salvar</button>
      </form>
    )
}

export default Devform;