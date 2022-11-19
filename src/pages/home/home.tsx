import React, { useState } from "react";
import { Color } from "../../components/common/colorSwatch/color";
import ColorPicker from "../../components/common/colorSwatch/colorPicker";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const [color, setSelectedColor] = useState(Color.copper);

  return (
    <div>
      <h1>TODO photo collage</h1>
      <h2>TODO modal for screening users</h2>
      <h2>Selected color {color}</h2>
      <div style={{
        width: "90%"
      }}>
        <ColorPicker
          selectedColor={color}
          onColorSelected={(color) => setSelectedColor(color)}
        />
      </div>
      <h2>Does this move</h2>
    </div>
  );
};

export default Home;
