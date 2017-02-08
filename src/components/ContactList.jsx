/*
While each React component is really just a Javascript object, 
writing tree-structures that way gets tedious. React encourages the 
use of a syntactic-sugar called JSX, which lets you write the tree in an HTML-like syntax:

How does that look? Well, it generally is a javascript function that returns HTML

note: Some people's first impression of React.js is that it seems messy to mix Javascript and HTML in this way.
 */

import React from 'react'

const ContactList = () => 
    <ul>
        <li>Mike</li>
        <li>Alice</li>
        <li>Bob</li>       
    </ul>

export default ContactList