import React from 'react';
import { StyledTeamCard } from './TeamCard.style';

const TeamCard = ({ imageUrl, name, position }) => {
  return (
    <StyledTeamCard>
      <img src={imageUrl} alt="" />
      <div className="textDiv">
        <p className="title1">{name}</p>
        <p className="body2">{position}</p>
      </div>
    </StyledTeamCard>
  );
};

export default TeamCard;
