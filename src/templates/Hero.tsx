import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/eikarna">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://github.com/eikarna?tab=repositories">
            My Projects
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Hello World!\nMy Name is '}
            <span className="text-primary-500">Adnan</span>
          </>
        }
        description="I'm passionate about cybersecurity and dedicated to helping individuals and businesses stay secure online. With expertise in AI, Machine Learning, SysAdmin, and Programming, I provide comprehensive solutions tailored to your digital protection needs."
        button={
          <Link href="https://">
            <Button xl>Support Me!</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
