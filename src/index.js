import React from "react";
import "./index.css";


const Header = (props) => {
        const headerStyle = {
                color: props.textColor,
                borderBottomLeftRadius: props.headerRadius,
                borderBottomRightRadius: props.headerRadius,
                backgroundColor: props.bgColor,
                paddingTop: props.headerHeight,
                paddingBottom: props.headerHeight,
                fontSize: props.textSize,
        };

        if (!props.headerName) {
                return <center style={headerStyle} className="center">Cool Navs</center>;
        }

        return <center style={headerStyle}className="center">{props.headerName}</center>;
};

export default Header;
