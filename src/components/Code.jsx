import Editor from "./Editor";

import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

const Code = () => {
  return (
    <Container>
      <Editor heading="HTML" icon="/" color="#FF3C41" />
      <Editor heading="Css" icon="*" color="#0EBEFF" />
      <Editor heading="Js" icon="{}" color="#FCD000" />
    </Container>
  );
};

export default Code;
