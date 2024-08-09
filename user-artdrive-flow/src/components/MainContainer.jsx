import React from 'react';

const MainContainer = (props) => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-full">
                {props.children}
            </div>
        </div>
    );
};

export default MainContainer;
