import React from 'react';

export const DefaultOptions = {
    ui: {
        leftPanel: false,
        topHeader: false,
    },
};

const OptionsContext = React.createContext({
    options: DefaultOptions,
    set: {},
});

export default OptionsContext;