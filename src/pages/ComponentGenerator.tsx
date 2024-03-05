import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { createRef } from "react";

const ComponentGenerator = () => {
  const ChatColors = [
    "Aqua",
    "Black",
    "Blue",
    "Dark_Aqua",
    "Dark_Blue",
    "Dark_Gray",
    "Dark_Green",
    "Dark_Purple",
    "Dark_Red",
    "Gold",
    "Gray",
    "Green",
    "Light_Purple",
    "Magic",
    "Red",
    "White",
    "Yellow",
  ] as const;
  type ChatColor = (typeof ChatColors)[number];

  type BaseComponent = {
    value: string;
    colour: ChatColor;
  };
  const ref = createRef();

  const updateComponent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Submitted \n" + ref.current);
  };

  return (
    <form onSubmit={updateComponent}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Input multiline={true} inputRef={ref} />
      </Box>
      <Button type="submit">Generate Java</Button>
    </form>
  );
};

export default ComponentGenerator;
