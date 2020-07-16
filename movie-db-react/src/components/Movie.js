import React, { Component } from 'react';
import styled from "styled-components";

const H1 = styled.h1`
  font-family: 36px Arial, sans-serif;
  font-weight: normal;
  line-height: 110%;
  margin: 0px;
  color: #fff;
  padding-bottom: 3px;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const span = styled.span`
  & .year {
    color: silver;
    font-family: Arial;
    font-size: 25px;
  }
`;


const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

export default class Movie extends Component {
  render() {
    return (
      <Article className="container">
        <div></div>
        <div>
          <H1>
            Title<span className="year">2000</span>
          </H1>
        </div>

        <div></div>
      </Article>
    );
  }
}
