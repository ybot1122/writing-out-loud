import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page.tsx";
import Post from "./routes/post.tsx";

type PageParams = {
  params: { postId: string };
};

export async function loader({ params }: PageParams) {
  const postId = params.postId;
  return { postId };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "posts/:postId",
        // @ts-expect-error loader types
        loader: loader,
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
