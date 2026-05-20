import { Row, SmartLink, Text } from "@once-ui-system/core";

import { person } from "@/resources";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" marginTop="32">
      <Row
        maxWidth="m"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{ direction: "column", horizontal: "center", align: "center" }}
      >
        <Text variant="body-default-s" onBackground="neutral-weak">
          <Text as="span" onBackground="neutral-strong">
            © {currentYear} {person.name}
          </Text>
          {" · "}
          Tous droits réservés.
        </Text>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          Portfolio propulsé par <SmartLink href="/">RAKALAM</SmartLink>
        </Text>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
