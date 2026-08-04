import type { SyntheticEvent } from "react";

export function onImgError(e: SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.style.display = "none";
}
