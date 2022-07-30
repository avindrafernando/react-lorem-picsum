import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axiosMock from "axios";
import Posts from "./Posts";

jest.mock("axios");

it("Should render the Posts component", async () => {
  // Arrange
  const returnData = [
    {
      author: "John Doe",
      author_url: "https://unsplash.com/@johndoe",
      filename: "0000_yC-Yzbqy7PY.jpeg",
      format: "jpeg",
      height: 3744,
      id: 0,
      post_url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      width: 5616,
    },
    {
      author: "Jane Doe",
      author_url: "https://unsplash.com/@janedoe",
      filename: "0100_pwaaqfoMibI.jpeg",
      format: "jpeg",
      height: 1656,
      id: 1,
      post_url: "https://unsplash.com/photos/pwaaqfoMibI",
      width: 2500,
    },
  ];

  axiosMock.get.mockResolvedValueOnce({ data: returnData });

  // Act
  render(<Posts />);

  // const [cardNodeForJohnDoe, cardNodeForJaneDoe] = await waitFor(() => [
  //   screen.getByTitle("John Doe"),
  //   screen.getByTitle("Jane Doe"),
  // ]);

  const cardNodeForJohnDoe = await screen.findByTitle("John Doe");
  const cardNodeForJaneDoe = await screen.findByTitle("Jane Doe");

  // Assert
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith("https://picsum.photos/list");

  expect(cardNodeForJohnDoe).toHaveStyle(
    "backgroundImage: 'url(\"https://picsum.photos/250/375?image=0\")'"
  );
  expect(cardNodeForJaneDoe).toHaveStyle(
    "backgroundImage: 'url(\"https://picsum.photos/250/375?image=1\")'"
  );
});
