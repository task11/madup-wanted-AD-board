import React from 'react';

import { AiOutlineBell } from '@react-icons/all-files/ai/AiOutlineBell';
import { AiOutlineSetting } from '@react-icons/all-files/ai/AiOutlineSetting';
import defaultProfile from '../../assets/image/defaultProfile.jpeg';
import {
  StyledAvatar,
  StyledHeaderContainer,
  StyledUserInfo
} from './HeaderContainer.style';

import Typography from '../Typography/Typography';

const username = 'κΉμ ν';

export default function HeaderContainer() {
  return (
    <StyledHeaderContainer>
      <StyledUserInfo>
        <StyledAvatar src={defaultProfile} alt='user-profile' />
        <Typography size='lg' variant='default'>
          {username}λ
        </Typography>
      </StyledUserInfo>
      <AiOutlineSetting size='22px' />
      <AiOutlineBell size='22px' />
    </StyledHeaderContainer>
  );
}
