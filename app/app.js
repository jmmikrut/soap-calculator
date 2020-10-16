import "./styles/main.scss";
import React, { useState, useEffect, useRef, createElement } from "react";
import ReactDOM from "react-dom";

function OurApp() {
  const [pets, setPets] = useState([
    { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
    { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
    { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
    { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
    { name: "Paws", species: "dog", age: "6", id: 789789789 }
  ]);

  return (
    <>
      <OurHeader />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map(pet => (
          <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} />
        ))}
      </ul>
      <Footer />
    </>
  );
}

function AddPetForm(props) {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.setPets(prev => prev.concat({ name, species, age, id: Date.now() }));
    setName("");
    setSpecies("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="species" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  );
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);

  function increaseLikeHandler() {
    setLikeCount(function (prev) {
      return prev + 1;
    });
  }

  function decreaseLikeHandler() {
    setLikeCount(prev => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    });
  }

  return (
    <>
      <button onClick={increaseLikeHandler}>Increase likes</button>
      <button onClick={decreaseLikeHandler}>Decrease likes</button>
      <h2>This page has been liked {likeCount} times.</h2>
    </>
  );
}

function Pet(props) {
  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old.
    </li>
  );
}

function Footer() {
  return <small>Copyright Footer Text</small>;
}

function TimeArea() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString());

  setTimeout(function () {
    setTheTime(new Date().toLocaleString());
  }, 1000);

  return <p>The current time is {theTime}.</p>;
}

function OurHeader() {
  return <h1 className="special">Our Amazing App Header</h1>;
}

ReactDOM.render(<OurApp />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}

// ReactDOM.render(<OurApp />, document.querySelector("#app"))

//   const [recipeName, setRecipeName] = useState(0);
//   const [recipeSource, setRecipeSource] = useState(0);
//   const [lyeConcentration, setLyeConcentration] = useState();
//   const [lyeUnits, setLyeUnits] = useState("percentage");
//   const [oilName, setOilName] = useState(0);
//   const [oilNumber, setOilNumber] = useState(1);

//   const [pets, setPets] = useState([
//     { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
//     { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
//     { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
//     { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
//     { name: "Paws", species: "dog", age: "6", id: 789789789 }
//   ]);

//   function calculateLye(max) {
//     return Math.floor(Math.random() * (max + 1));
//   }

//   function AddAnotherOil() {
//     setOilNumber(value => value + 1);
//     function fredOil() {
//       function NewAddition() {
//         return (
//           <>
//             <div id={"oilName " + oilNumber}>
//               <label htmlFor={"oilName " + oilNumber}>{"Oil " + oilNumber}</label>
//               <input id={"oilName " + oilNumber} defaultValue="" type="text" className="oilName" autoComplete="off" />
//             </div>
//             <div id={"oilist" + oilnumber}></div>
//           </>
//         );
//       }

//       ReactDOM.render(React.createElement(NewAddition), document.querySelector("#oilList"));
//     }

//     return (
//       <>
//         <div>
//           <button onClick={fredOil}>Add Another Oil</button>
//         </div>
//       </>
//     );
//   }

//   function pickLyeUnits(e) {
//     setLyeConcentration(e.target.value);
//     ReactDOM.render(<App />, document.getElementById("app"));
//     return;
//   }

//   function AddPetForm(props) {
//     const [name, setName] = useState();
//     const [species, setSpecies] = useState();
//     const [age, setAge] = useState();

//     function handleSubmit(e) {
//       e.preventDefault();
//       props.setPets(prev => prev.concat({ name, species, age, id: Date.now() }));
//       setName("");
//       setSpecies("");
//       setAge("");
//     }
//   }

//   function Pet(props) {
//     return (
//       <li>
//         {props.name} is a {props.species} and is {props.age} years old.
//       </li>
//     );
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit} action="" className="our-form">
//         <div>
//           <label htmlFor="recipeName">Recipe Name</label>
//           <input id="recipeName" type="text" />
//         </div>
//         <div>
//           <label htmlFor="recipeSource">Created By</label>
//           <input id="recipeSource" type="text" />
//         </div>
//         <div>Choose how to display the Lye Concentration</div>
//         <div onChange={pickLyeUnits}>
//           <input type="radio" id="lyePercentage" name="lyeUnits" value="33.33%" />
//           Percentage
//           <input type="radio" id="lyeRatio" name="lyeUnits" value="2:1" />
//           Ratio
//         </div>
//         <div>
//           <label htmlFor="lyeConcentration">Lye Concentration</label>
//           <input id="lyeConcentration" defaultValue={lyeConcentration} type="text" className="lyeConcentration" autoComplete="off" />
//         </div>
//         <AddPetForm setPets={setPets} />
//         <ul>
//           {pets.map(pet => (
//             <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} />
//           ))}
//         </ul>
//         <div>
//           <label htmlFor={"oilName " + oilNumber}>{"Oil " + oilNumber}</label>
//           <input id={"oilName " + oilNumber} defaultValue="" type="text" className="oilName" autoComplete="off" />
//         </div>
//         <div id="oilList"></div>
//         <AddAnotherOil />
//       </form>
//     </>
//   );
// }
