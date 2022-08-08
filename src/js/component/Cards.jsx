import React from 'react'

const Card = {
    tittle : "Card Title",
    description : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description2 : "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    buttonC: "Find Out More!"


}

const Cards = () => {
  return (
    <div className="py-5">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100 text-center shadow-sm" >
      <img src="https://dummyimage.com/500x325/CCC/777" className="card-img-top"
        alt="Skyscrapers" />
      <div className="card-body">
        <h5 className="card-title"><strong>{Card.tittle}</strong></h5>
        <p className="card-text">{Card.description}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">{Card.buttonC}</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 text-center shadow-sm" >
      <img src="https://dummyimage.com/500x325/CCC/777" className="card-img-top"
        alt="Skyscrapers" />
      <div className="card-body">
        <h5 className="card-title"><strong>{Card.tittle}</strong></h5>
        <p className="card-text">{Card.description2}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">{Card.buttonC}</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 text-center shadow-sm" >
      <img src="https://dummyimage.com/500x325/CCC/777" className="card-img-top"
        alt="Skyscrapers" />
      <div className="card-body">
        <h5 className="card-title"><strong>{Card.tittle}</strong></h5>
        <p className="card-text">{Card.description}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">{Card.buttonC}</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 text-center shadow-sm" >
      <img src="https://dummyimage.com/500x325/CCC/777" className="card-img-top"
        alt="Skyscrapers" />
      <div className="card-body">
        <h5 className="card-title"><strong>{Card.tittle}</strong></h5>
        <p className="card-text">{Card.description2}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">{Card.buttonC}</a>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Cards