import { ChangeEvent, createContext, useState } from "react";
import Button from "components/Button";
import { BlogManagementWrapper } from "./styles";
import Card from "homeworks/homework27/components/card";

export const BlogManagementContext = createContext<string>("");

function BlogManagement() {
  const [text, setText] = useState<string>("");
  const [post, setPost] = useState<string>("");

  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const createNewPost = () => {
    setPost(text);
  };

  return (
    <BlogManagementContext.Provider value={post}>
      <BlogManagementWrapper>
        <textarea value={text} onChange={onChangeText} />
        <Button name="Запостить" onClick={createNewPost} />
        {post && <Card />}
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
