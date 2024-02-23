import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GoogleIcon, TwitterIcon, GitHubIcon } from "../providerIcon";
const providers = [
  {
    name: "Google",
    icon: <GoogleIcon />,
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
  },
  {
    name: "GitHub",
    icon: <GitHubIcon />,
  },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="secondary" spacing="4">
    {providers.map(({ name, icon }) => (
      <Button key={name} flexGrow={1} border={"1px #cecece solid"}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
