import type { Metadata } from 'next'

import DetailPage from "@/Views/Pages/BlogDetail";

export const metadata: Metadata = {
  title: 'Detail page',
  description: 'This is Detail page',
}

const BlogList = () => {
  return (
   <DetailPage />
  );
};

export default BlogList;
