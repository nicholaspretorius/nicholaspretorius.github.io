import React from "react";
import styled from "styled-components";

import Container from "../components/container";

export default () => (
    <Container>
        <h5>Nows.</h5> 
        <ul>
            <li>Building: <a href="https://github.com/nicholaspretorius/itemly" target="_blank">Itemly</a>: A rudimentary Todo API.</li>
            <li>Learning: Nest.js, Typescript, Angular</li>
            <li>Watching (Course): Angular Core Deep Dive by Angular Univesity</li>
            <li>Reading: Born to Run by Christopher McDougall</li>
            <li>Listening (Audiobook): A Clash of Kings by George R.R. Martin</li>
            <li>Listening (Music): Zola Blood - Infinite Games</li>
            <li>Watching (Series): Ozark. Season 2</li>
        </ul>

        <h5>Then:09/12</h5>
        <ul>
            <li>Learning: Node.js, Typescript, Azure</li>
            <li>Reading: The Lean Startup by Eric Ries</li>
            <li>Listening (Audiobook): In the Plex by Steven Levy</li>
            <li>Listening (Music): The Glitch Mob</li>
            <li>Watching (Series): Mad Men. Season 3</li>
            <li>Watching (Course): The Complete Typescript Course by Angular University</li>
        </ul>
    </Container>
);