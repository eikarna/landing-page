import type { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex flex-wrap">
    {props.children}

    <style jsx>
      {`
        .footer-icon-list :global(a:not(:last-child)) {
        }

        .footer-icon-list :global(a) {
          @apply text-gray-500;
        }

        .footer-icon-list :global(a:hover) {
          @apply text-gray-700;
        }

        .footer-icon-list :global(svg) {
          @apply fill-current w-5 h-5;
          margin: 0rem 1rem 0rem;
        }
      `}
    </style>
  </div>
);

export { FooterIconList };
