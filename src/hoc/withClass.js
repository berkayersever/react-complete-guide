import React from 'react';

const withClass = (WrappedComponent, className) => {    // {...props} Spread Operator
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;