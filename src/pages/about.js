import React from "react";
import styled from "styled-components";

import Container from "../components/container";

export default () => (
    <Container>
        <p>I am a front-end web developer.</p>
        
        <p>Currently learning:</p>
        <ul>
            <li>Node.js &amp; Express</li>
            <li>Azure</li>
        </ul>

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
            <li>https://github.com/jbranchaud/til</li>
        </ul>
    </Container>
);