import Head from 'next/head';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Article, Anchor, IconButtonLink } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title> Facile UI - React components library </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Facile UI is a React components library, built in top of React, using typescript and tailwind css, it offers a rich feature of
          highly customizable components"
        />
      </Head>
      <main className="p-9 max-mobile:p-0 w-full h-auto m-auto flex flex-col items-center justify-start">
        <Article className="w-full laptop:w-[50%] tabletXL:w-[80%]">
          <h1 className="text-4xl font-bold text-center">
            Speed up your development process using highly customizable react
            components.
          </h1>
          <br />
          <p className="text-[20px] leading-9 text-justify">
            Facile UI is a components library, built in top of React, using
            typescript and tailwind css. Its main purpose is to speed up
            development process by providing templates for common components,
            all of which can be customized to project requirements. <br />
          </p>
          <div className="w-fit flex items-center justify-center flex-col h-auto gap-3 m-auto mt-10">
            <Anchor
              className="px-8 !w-full font-semibold"
              href="/get-started"
              variant="primary"
            >
              Get started
            </Anchor>
            <Anchor
              className="px-8 font-semibold"
              href="/components"
              variant="primary-dark"
            >
              Components overview
            </Anchor>
          </div>
          <p className="text-[18px] leading-8 m-auto mt-10">
            Reach out on linkedin if you have any comments or suggestions. Also,
            if you want to collaborate or get a closer look on how the
            components work you can overview the project repositorie.
          </p>
          <div className="w-fit flex items-center justify-center gap-3 m-auto mt-6">
            <IconButtonLink
              href="https://github.com/Amaury-Vasquez/facile-ui"
              target="_blank"
              Icon={FaGithub}
              className="h-12 w-12"
            />
            <IconButtonLink
              href="https://www.linkedin.com/in/amaury-vasquez-9a1b3a240/"
              target="_blank"
              Icon={FaLinkedin}
              iconColor="#0a66c2"
              className="h-12 w-12"
            />
          </div>
          <p className="text-[16px] leading-9 text-center mt-6">
            Created and mantained by{' '}
            <Anchor
              className="text-[16px] italic semibold"
              href="https://github.com/Amaury-Vasquez"
            >
              @amvasdev
            </Anchor>
          </p>
        </Article>
      </main>
    </>
  );
}
