import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GitContext = React.createContext();

const GitProvider = ({children}) =>{
    return (
        <GitContext.Provider value ={'hi'}>{children}</
        GitContext.Provider>
    );
}
