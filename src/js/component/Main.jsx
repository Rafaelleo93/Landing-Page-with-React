import React from 'react'

const Jum = {
    title: "A Warm Welcome!",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    buttonjum: "Call to action"
}

const Jumbotron = () => {
  return (
    <div className="bg-light p-5 rounded">
        <h1>{Jum.title}</h1>
        <p> {Jum.description}</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">{Jum.buttonjum}</a>
</div>
  )
};

export default Jumbotron