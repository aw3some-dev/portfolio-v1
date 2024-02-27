import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from '@/styles/Home.module.scss';
import PrimaryLogo from '@/theme/icons/PrimaryLogo';
import CenteredFlexContainer from '@/components/UI/CenteredFlexContainer';
import useAnalytics from '@/hooks/use-analytics';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useAnalytics({
    pathname: '/',
    pageTitle: 'Michael Sofayo - Home Page'
  });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Michael Sofayo - Senior Front-end & Full-stack Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <title>Michael Sofayo - Senior Front-end & Full-stack Engineer</title>
      </Head>
      <main className={`${inter.className}`}>
        <Box
          aria-label="home-content"
          sx={{ ml: { xs: 0, sm: 0 } }}
          px={{ xs: 3, md: 8 }}>
          <CenteredFlexContainer
            minHeight="100vh"
            width="100%"
            maxWidth={900}
            mx="auto">
            <PrimaryLogo />

            <Typography variant="h3" my={4}>
              Hi there, I&apos;m Michael Sofayo!
            </Typography>

            <Typography variant="body2" align="center" fontSize="1rem">
              My website is still pretty much laying its bricks right now. If
              you&apos;d like to reach out to me, please email{' '}
              <a href="mailto:olumidesofayo@yahoo.co.uk">
                olumidesofayo@yahoo.co.uk
              </a>{' '}
            </Typography>
          </CenteredFlexContainer>
        </Box>
      </main>
    </>
  );
}
