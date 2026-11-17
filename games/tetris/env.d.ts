/// <reference types="@sadsha-gamebox/nes-sandbox/types" />

declare module '*.data' {
  const data: Uint8Array;
  export default data;
}

declare module 'qoijs' {
  const qoi: any;
  export default qoi;
}
