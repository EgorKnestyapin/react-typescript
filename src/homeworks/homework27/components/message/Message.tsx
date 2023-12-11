import { useContext } from "react";
import { BlogManagementContext } from "homeworks/homework27/components/blogManagement/BlogManagement";
import { MessageWrapper } from "./styles";

function Message() {
  const message = useContext(BlogManagementContext);
  return <MessageWrapper>{message}</MessageWrapper>;
}

export default Message;
