import { test } from "vitest";
import { render } from "vitest-browser-react"
import { LikeButton } from "./like-button";

test("ボタンを表示したときのカウントが999であること", async() => {
    //描画のテスト
    await render(<LikeButton />);
});