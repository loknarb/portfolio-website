import React from 'react';
import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPropsResult } from 'next/types';
import remarkHtml from 'remark-html';
import { remark } from 'remark';

interface PrivacyPolicyProps {
  contentHtml: string;
}

export const getStaticProps: GetStaticProps<PrivacyPolicyProps> = async (): Promise<
  GetStaticPropsResult<PrivacyPolicyProps>
> => {
  const fullPath = path.join(process.cwd(), 'public', 'privacy_policy.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(remarkHtml).process(fileContents);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
    },
  };
};
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ contentHtml }) => {
  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
};
export default PrivacyPolicy;
