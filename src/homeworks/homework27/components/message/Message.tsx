import { useContext } from "react";
import { BlogManagementContext } from "../blogManagement/BlogManagement";
import { MessageWrapper } from "./styles";

function Message() {
  const message = useContext(BlogManagementContext);
  return <MessageWrapper>{message}</MessageWrapper>;
}

export default Message;
