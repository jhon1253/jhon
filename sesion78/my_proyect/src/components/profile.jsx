function Profile({name,img,telephone,address,age}) {
  console.log(name)
    return (
      <div className="card">
      <img
      className="card-image"
        src={img}
        alt={name}
      />
      <div className="card-content">
      <h3>{name}</h3>
        <p>Telefono:{telephone}</p>
        <p>Direccion:{address}</p>
        <p>Edad:{age}</p>
        
      </div>
      </div>
      
    );
  }


  export default Profile