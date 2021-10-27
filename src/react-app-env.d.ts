/// <reference types="react-scripts" />
declare module "*.svg" {
  const content: React.ReactNode;
  export { ReactComponent };
}