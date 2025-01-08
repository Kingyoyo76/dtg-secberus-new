'use client';

import { Button } from "./button";
import { ButtonProps } from "./button";

export function ClientButton(props: ButtonProps) {
  return <Button {...props} />;
}
