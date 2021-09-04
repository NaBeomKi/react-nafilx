import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 5vw;
`;

const Message = ({ message }) => {
  return <MessageWrapper>{message}</MessageWrapper>;
};

export default Message;
