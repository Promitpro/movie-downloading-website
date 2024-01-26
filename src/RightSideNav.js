import React from 'react';
import Contact from './Contact';
import Latest from './Latest';
import Category from './Category';

const RightSideNav = () => {
    return (
        <section>
            <Contact></Contact>
            <Latest></Latest>
            <Category></Category>
        </section>
    );
};

export default RightSideNav;