import React, { memo } from "react";
import styled from "styled-components";

const MessageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
  font-size: 5vw;
`;

const Message = memo(({ message }) => {
  return <MessageWrapper>{message}</MessageWrapper>;
});

export default Message;
