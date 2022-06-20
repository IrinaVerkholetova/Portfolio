import React, { FunctionComponent } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { yellow, blue } from "@material-ui/core/colors";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none",
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(Switch);

interface IToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export const ToggleTheme: FunctionComponent<IToggleProps> = ({
  theme,
  toggleTheme,
}) => {
  const [state, setState] = React.useState({ checked: theme === "dark" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleTheme();
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <Brightness5Icon style={{ color: yellow[500], fontSize: 40 }} />
        </Grid>
        <Grid item>
          <AntSwitch
            checked={state.checked}
            onChange={handleChange}
            name="checked"
          />
        </Grid>
        <Grid item>
          <Brightness2Icon style={{ color: blue[500], fontSize: 40 }} />
        </Grid>
      </Grid>
    </Typography>
  );
};
