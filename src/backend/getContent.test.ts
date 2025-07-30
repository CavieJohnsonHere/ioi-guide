import { describe, it, expect } from "bun:test";
import getContent from "./getContent";

const testHashes = [
  {
    FileName: "__test_content.md",
    Hash: "1222ff5f98f05d0c0b2c02b604c903ca18917030e9563876f93119557fe8b915",
  },
];

describe("getContent function with provided test file", () => {
  it("returns 200 and the correct hash when one matching file is found", async () => {
    const result = getContent("__test_content", testHashes);
    expect(result.status).toBe(200);
    const text = await result.text();
    expect(text).toBe(
      "1222ff5f98f05d0c0b2c02b604c903ca18917030e9563876f93119557fe8b915"
    );
  });

  it("returns 404 when the page is not found", async () => {
    const result = getContent("__test_thiscontentsucks", testHashes);
    expect(result.status).toBe(404);
    const text = await result.text();
    expect(text).toBe("Content not found");
  });
});
