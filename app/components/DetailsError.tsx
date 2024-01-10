"use client"

import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const DetailsError = (props: PropsWithChildren) => (
  <ErrorBoundary fallbackRender={() => <></>}>
    {props.children}
  </ErrorBoundary>
)