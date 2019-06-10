import React, { Component } from 'react';
import styled from 'styled-components';

const SkillList = styled.ul`
  padding: 4px 10px 0 0;
  margin: 0;
`;

const colorMap = {css: "#1A237E", html: "#8C9EFF"};

const Skill = styled.li`
  padding: 4px 6px;
  margin: 4px;
  display: inline-block;
  color: #8C9EFF;
  font-weight: bold;
  
  &:hover {
    color: #3F51B5;
  }
`;

function Skills(props) {
  const skills = props.skills;
  const skillItems = skills.map((skill) =>
    <Skill name={ skill }>{ skill }</Skill>
  );

  return (
    <SkillList>
      { skillItems }
    </SkillList>
  )
};

export default Skills;