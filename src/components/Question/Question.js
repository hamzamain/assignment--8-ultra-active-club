import React from "react";

const Question = () => {
  return (
    <div className="flex p-20 gap-8">
      <div className="q-1">
        <h5 className="font-bold text-xl mb-3">How dose React work?</h5>
        <p>
          React work with function called component. it's render the code and
          make 2 dom. Actual DOM and Virtual DOM. Actual DOM show in website and
          vartual DOM stay behind. Whenever any change happend react make
          another vartual DOM with changes and compire with old one. and update
          only change to website and rest remain same.
        </p>
      </div>
      <div className="q-2">
        <h5 className="font-bold text-xl mb-3">props vs State?</h5>
        <p>
          1.Props are peramiter and state are hook. 2.props are read-only, so
          cannot be change or modified. state are change able.
        </p>
      </div>
      <div className="q-3">
        <h5 className="font-bold text-xl mb-3">
          Rest use of useEffect other then load data?
        </h5>
        <p>
          Tempore sapiente architecto saepe pariatur voluptatem? Incidunt esse
          neque animi. praesentium illo tempora vitae repellat adipisci
          blanditiis cumque aperiam, sunt ipsa dolorem ea. Dicta veniam sint
          molestias sunt perspiciatis recusandae.
        </p>
      </div>
    </div>
  );
};

export default Question;
