import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.style';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherprops }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ): <WrappedComponent {...otherprops}/>
}

export default WithSpinner;