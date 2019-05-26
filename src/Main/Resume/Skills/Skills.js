import React, { Component } from 'react';
import styled from 'styled-components';

const SkillList = styled.ul`
  padding: 0 10px 0 0;
  margin: 0;
`;

const Skill = styled.li`
  padding: 6px 12px;
  margin: 0 4px 0 0;
  background-color: #3F51B5;
  display: inline-block;
  color: white;
  border-radius: 3px;
`;

function Skills(props) {
  const skills = props.skills;
  const skillItems = skills.map((skill) =>
    <Skill>{ skill }</Skill>
  );

  return (
    <SkillList>
      { skillItems }
    </SkillList>
  )
};

export default Skills;