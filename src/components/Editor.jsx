// import { useState } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as CodeMirror } from "react-codemirror2";

import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 4px 12px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

const Editor = () => {
  return (
    <Box>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: "red",
              height: 18,
              width: 15,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 2,
              paddingBottom: 2,
            }}>
            /
          </Box>
          HTML
        </Heading>
        <CloseFullscreenIcon />
      </Header>
      {/* <ControlledEditor /> */}
    </Box>
  );
};

export default Editor;
