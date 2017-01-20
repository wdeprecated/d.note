import React from 'react';
import style from './Main.scss'

import { Navigator, Note, Messenger } from 'components'

const Main = () => {
    return (
        <main className="main">
            <Navigator/>
            <Note/>
            <Messenger/>
        </main>
    );
};

export default Main;