'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

type FramerWrapperProps = {
  children: ReactNode;
  className?: string;
  key?: string | number;
  once?: boolean;
  customIndex?: number;
};

// Export as dynamic component with no SSR
export const FramerWrapper = dynamic(
  () =>
    import('framer-motion').then((mod) => {
      const { motion, AnimatePresence, easeOut } = mod;

      const FramerWrapperComponent = ({
        children,
        className,
        key,
        once = true,
        customIndex,
      }: FramerWrapperProps) => {
        const motionProps = {
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once },
          variants: {
            hidden: { opacity: 0 },
            visible: (i: number) => ({
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: i * 0.3,
                ease: easeOut,
              },
            }),
          },
        };

        return (
          <AnimatePresence>
            <motion.div
              key={key || 'framer-wrapper'}
              {...motionProps}
              custom={customIndex}
              className={className}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        );
      };

      FramerWrapperComponent.displayName = 'FramerWrapperComponent';
      return FramerWrapperComponent;
    }),
  {
    ssr: false,
    loading: () => <span className="sr-only">Loading...</span>,
  },
);
