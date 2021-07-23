import { render, screen, waitFor } from "@testing-library/react";

import { MessageAlert } from "./MessageAlert";

const onClose = jest.fn();

const renderComponent = (props) =>
  render(
    <MessageAlert
      openMessage={true}
      setOpenMessage={onClose}
      message="teste"
      {...props}
    />
  );

describe("MessageAlert Component", () => {
  it("Deve renderizar a mensagem de Alerta", () => {
    renderComponent();

    expect(screen.getByText("teste")).toBeInTheDocument();
  });

  it("Deve renderizar a mensagem de Alerta com severity", () => {
    renderComponent({ severity: "error" });

    expect(screen.getByText("teste")).toBeInTheDocument();
  });

  it("Deve chamar função onClose ", async () => {
    jest.useFakeTimers();
    renderComponent();
    await waitFor(() => expect(onClose).toBeCalled());
  });
});
