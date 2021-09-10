import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3.5rem);
  font-size: 5vw;
`;

const Message = ({ message }) => {
  return <MessageWrapper>{message}</MessageWrapper>;
};

export default Message;
