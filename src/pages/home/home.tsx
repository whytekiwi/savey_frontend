import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import Modal from "../../components/common/modal/modal";
import TagSelector from "../../components/common/tagSelector/tagSelector";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const [tags, setSelectedTags] = useState<string[]>([]);

  const params = useParams();
  const id = params["id"];

  const handleTagToggle = (tag: string) => {
    const t = tags;
    const index = t.indexOf(tag);
    if (index > -1) {
      t.splice(index, 1);
    } else {
      t.push(tag);
    }
    setSelectedTags(t);
  };

  return (
    <div>
      <h2>Id {id}</h2>
      <TagSelector selectedTags={tags} onTagToggled={handleTagToggle} />
    </div>
  );
};

export default Home;
