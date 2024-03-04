import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

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

  const updateComponent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        <TextField
          id="Chat_colour"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Select chatcolour for component"
        >
          <MenuItem key="None" value="">
            None
          </MenuItem>
          {ChatColors.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Button type="submit">Generate Java</Button>
    </form>
  );
};

export default ComponentGenerator;
