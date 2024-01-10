"use client";

import type { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary"


export const ReposError = (props: PropsWithChildren) => (
  <ErrorBoundary fallbackRender={() => <></>}>
    {props.children}
  </ErrorBoundary>
)