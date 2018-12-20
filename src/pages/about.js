import React from "react";
import styled from "styled-components";

import Container from "../components/container";

export default () => (
    <Container>
        <p>I am a web developer, designer and user experience consultant.</p> 

        <p><a href="https://github.com/nicholaspretorius" target="_blank">GitHub</a></p>
        
        <p>I work primarily with HTML, CSS/LESS/SASS and various flavours of JavaScript.</p>

        <p>This site is proudly built on/with:</p>
        <ul>
            <li>Gatsby + Typography Theme WordPress 2016</li>
            <li>React</li>
            <li>Git</li>
            <li>GitHub (with a little help from Surge at the start)</li>
            <li>Visual Studio Code</li>
        </ul>

        <p>Inspired by:</p>
        <ul>
            <li><a href="https://github.com/jbranchaud/til" target="_blank">https://github.com/jbranchaud/til</a></li>
        </ul>
    </Container>
);