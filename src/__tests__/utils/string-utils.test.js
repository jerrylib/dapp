import { short } from "@/utils/string-utils";

test("short call", () => {
  const str = short("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  expect(str).toBe("0xf39F...2266");
});
