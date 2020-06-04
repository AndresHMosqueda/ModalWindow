import React, { useEffect } from "react";
import useModal from "./customHooks/useModal";
import Modal from "./customHooks/Modal";

const SearchPage = ({ location }) => {

  const { isShowing, toggle, setIsShowing } = useModal();

  let isModalActivate = isShowing;

  useEffect(() => {

    handleClick()


  },[isModalActivate])


  const parametros = "?q=Search";
  
  // const flag = localStorage.getItem('flag');
  
  // const handleClick = () => {
  //   if (isModalActivate) {
  //     localStorage.setItem('flag', true);
  //     setIsShowing(true);
  //   } else if(!isModalActivate){
  //     return;
  //   }
  // }

   // create a click method check if a value in localStorage
   const handleClick = () => {
    const flag = localStorage.getItem('flag');
    if (!flag) {
      localStorage.setItem('flag', true);
      toggle();
    }
  }
  
  console.log('isShowing', isShowing)
  const search = window.location.search;
  console.log("SEARCH", search);


  return (
    <>
      <p>
        <strong>Location Props: </strong>
        {location.search}
      </p>

      {parametros === search ? (
        <Modal
          width={["333px", "111px"]}
          height={["555px", "444px"]}
          margin={["0px 10px 3px 5px", "1px 2px 3px 4px"]}
          padding={["0px 11px 4px 7px", "1px 2px 3px 4px"]}
          isShowing={isShowing}
          hideModal={toggle}
          contentModal={"OK Modal"}
        />
      ) : (
        <Modal
          width={["333px", "111px"]}
          height={["555px", "444px"]}
          margin={["0px 10px 3px 5px", "1px 2px 3px 4px"]}
          padding={["0px 11px 4px 7px", "1px 2px 3px 4px"]}
          isShowing={isShowing}
          hideModal={toggle}
          contentModal={"Error Modal"}
        />
      )}

      <button className="button-default" onClick={handleClick}>
        Show Modal
      </button>
      {/* <p>{togglear()}</p> */}
    </>
  );
};

export default SearchPage;
