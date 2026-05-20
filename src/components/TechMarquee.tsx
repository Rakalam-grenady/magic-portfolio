"use client";

import React from "react";
import { Icon, Row } from "@once-ui-system/core";
import { IconName } from "@/resources/icons";

const icons: IconName[] = [
  "react",
  "typescript",
  "nextjs",
  "tailwind",
  "bootstrap",
  "nodejs",
  "dotnet",
  "python",
  "fastapi",
  "postgresql",
  "mysql",
  "git",
  "github",
  "gitlab",
  "jira",
  "figma",
];

function IconGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="techMarqueeGroup" aria-hidden={ariaHidden ? "true" : undefined}>
      {icons.map((name) => (
        <div key={name} className="techMarqueeItem" title={name}>
          <Icon name={name} />
        </div>
      ))}
    </div>
  );
}

export function TechMarquee() {
  return (
    <Row fillWidth horizontal="center">
      <div className="techMarquee" role="presentation">
        <div className="techMarqueeTrack">
          <IconGroup />
          <IconGroup ariaHidden />
        </div>
      </div>
    </Row>
  );
}

