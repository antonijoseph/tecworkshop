import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

const NavBar = ({ data }) => {
  const childPageWrapper = useRef(null);
  const history = useHistory();

  const showChildPages = (item, action) => {
    console.log("In here 1",item);
    if (item.CHILD_PAGES && item.CHILD_PAGES.length > 0) {
      console.log("In here 2 ", action);
      if (childPageWrapper && childPageWrapper.current)
        console.log("In here 3 ", action);
        action === "over"
          ? childPageWrapper.current.classList.add("active")
          : childPageWrapper.current.classList.remove("active");
    } 
  };

  const renderChildPages = (childPages) => {
    let childPageList = [];

    childPages.forEach((child, index) => {
      childPageList.push(
        <span key={index} onClick={(event) => handleClick(event, child)}>
          {child.NAME}
        </span>
      );
    });

    return childPageList;
  };

  const renderMenu = () => {
    let navList = [];
    data.forEach((item, index) => {
      navList.push(
        <div
          className="nav-links"
          key={index}
          onMouseOver={() => showChildPages(item, "over")}
          onMouseOut={() => showChildPages(item, "out")}
        >
          <span onClick={(event) => handleClick(event, item)}>
            {item.NAME}
          </span>
          {item.CHILD_PAGES && item.CHILD_PAGES.length > 0 ? (
            <div ref={childPageWrapper} className="child-page-link-wrapper">
              {renderChildPages(item.CHILD_PAGES)}
            </div>
          ) : null}
        </div>
      );
    });
    return navList;
  };

  const handleClick = (event, item) => {
    event.preventDefault();
    console.log("In here ");
    
    document.body.classList.remove("overlay-active");
    let mobilemenu = document.getElementsByClassName("mobile-menu")[0];
    mobilemenu.classList.remove('active');
    if(item.NAME !== 'Work')
      history.push(item.LINK);

  };
  
  
  return <div className="nav-wrapper">{renderMenu()}</div>;
};

export default React.memo(NavBar);
