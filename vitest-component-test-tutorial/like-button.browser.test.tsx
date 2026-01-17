import { expect,test } from "vitest";
import { render } from "vitest-browser-react"
import { LikeButton } from "./like-button";

test("ボタンを表示したときのカウントが999であること", async() => {
    const {getByRole} = await render(<LikeButton />);
    const button = getByRole("button");
    await expect.element(button).toHaveTextContent(/^999$/);
});

test("ボタンをクリックしたときのカウントが1000になること", async () => {
    const { getByRole, container } = await render(<LikeButton />);
    const button = getByRole("button");
    await button.click();
    expect(container).toMatchSnapshot();
});