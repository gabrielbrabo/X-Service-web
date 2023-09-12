import React from 'react';
import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingIcon = styled.div`
    height: 100%;
    width:100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(10,23,59,0.6);
    
    .icon {
        font-size:50px;
        animation: icon-spin infinite 0.6s linear;
    }

    @keyframes icon-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
`;

function Loading () {
    return (
        <LoadingIcon>
          <AiOutlineLoading3Quarters className='icon'/>
        </LoadingIcon>
    )
}

export default Loading