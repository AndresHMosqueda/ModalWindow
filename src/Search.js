import React from "react";
import useModal from "./customHooks/useModal";
import Modal from "./customHooks/Modal";
import Login from "./Login";

const SearchPage = ({ location }) => {
  // console.log('MATCH', match)
  const { isShowing, toggle, setIsShowing } = useModal();
  console.log("LOCATION", location);
  const search = window.location.search;
  console.log("SEARCH", search);
  const params = new URLSearchParams(search);
  console.log("PARAMS", params);
  const foo = params.get("bar");
  console.log("foo", foo);

  const parametros = "?q=AndresPerro";

  return (
    <>
      <p>
        <strong>Location Props: </strong>
        {location.search}
      </p>

      {parametros === search ? (
        // isShowing: true
        <Modal
          width={["333px", "111px"]}
          height={["555px", "444px"]}
          margin={["0px 10px 3px 5px", "1px 2px 3px 4px"]}
          padding={["0px 11px 4px 7px", "1px 2px 3px 4px"]}
          isShowing={!isShowing}
          hide={toggle}
          contentModal={"Happy Path"}
        />
      ) : (
        <Modal
          width={["333px", "111px"]}
          height={["555px", "444px"]}
          margin={["0px 10px 3px 5px", "1px 2px 3px 4px"]}
          padding={["0px 11px 4px 7px", "1px 2px 3px 4px"]}
          isShowing={!isShowing}
          hide={toggle}
          contentModal={<Login />}
        />
      )}

      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
    </>
  );
};

export default SearchPage;
