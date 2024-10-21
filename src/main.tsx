import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from './router';
import './index.css';
import { BooksProvider } from './BooksContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BooksProvider>
    <RouterProvider router={router} />
    </BooksProvider>
  </StrictMode>
);
