import React from "react";

function AddNextOil(props) {
  function addAnotherOil(props) {
    // setOilNumber(value => value + 1);
    return (
      <>
        <div>
          <label htmlFor={"oilName " + "oilNumber"}>{"Oil " + "oilNumber"}</label>
          <input id={"oilName " + "oilNumber"} defaultValue="" type="text" className="oilName" autoComplete="off" />
        </div>
      </>
      //   <div>
      //     <button onClick={addAnotherOil}>Add Another Oil</button>
      //   </div>
      // </>
    );
  }

  return (
    <>
      <div>
        <label htmlFor={"oilName " + "oilNumber5"}>{"Oil " + "oilNumber5"}</label>
        <input id={"oilName " + "oilNumber5"} defaultValue="" type="text" className="oilName" autoComplete="off" />
      </div>
    </>
  );
}

export default AddNextOil;
