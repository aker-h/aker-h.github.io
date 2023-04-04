import React from 'react';

const Colon = (p: Props): JSX.Element => { return <div className='colon-outer'><div className='colon-inner'><div className='colon-upper'></div><div className='colon-lower'></div></div></div> };
const Glass = (p: Props): JSX.Element => { return <div className='glass'></div> };
const Highlight = (p: Props): JSX.Element => { return <div className='highlight'></div> };
const Highlight_ = (p: Props): JSX.Element => { return <div className='highlight _'></div> };
const Shadow = (p: Props): JSX.Element => { return <div className='shadow'></div> };
const Space = (p: Props): JSX.Element => { return <div className='space'></div> };

const Other = {
    Colon: Colon,
    Glass: Glass,
    Highlight: Highlight,
    Highlight_: Highlight_,
    Shadow: Shadow,
    Space: Space
};

export default Other;

interface Props {};