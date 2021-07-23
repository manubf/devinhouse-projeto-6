import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MenuContainer } from "./MenuContainer";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const handleClose = jest.fn();
const renderComponent = () =>
  render(<MenuContainer open={true} onClose={handleClose} />);

describe("MenuContainer Component", () => {
  it("Deve renderizar o menu Home", () => {
    renderComponent();

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("Deve renderizar clicar no menu", () => {
    renderComponent();
    const menu = screen.getByTestId("menuItem");
    userEvent.click(menu);
    expect(handleClose).toBeCalled();
  });
});
