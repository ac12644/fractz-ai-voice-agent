import type { ImgHTMLAttributes } from "react";

export type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {
  text?: string;
};

export default function Logo({ text, ...props }: LogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img
        src="/fractz-logo.png"
        alt="FRACTZ Logo"
        width="125"
        height="125"
        {...props}
      />
      Voice Agent Demo
    </div>
  );
}
