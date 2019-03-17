import React from 'react';

export const DefaultOptions = {
    ui: {
        leftPanel: false,
        showHeader: false,
    },
};

const OptionsContext = React.createContext({
    options: DefaultOptions,
    set: {},
});

export default OptionsContext;