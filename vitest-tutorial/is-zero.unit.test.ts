import {expect, test} from "vitest"
import { isZero } from "./is-zero"

test("0を渡したらtrueになること", () => {
    const result = isZero(0);
    expect(result).toBe(true);
    // toBeはマッチャーで===と同じ意味
    });