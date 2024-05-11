import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="My Team/Organizations"
    description="My Team/Organizations that always support me <3"
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://nevolution.team"
              target="_blank"
            >
              <Image
                src="/assets/images/nevo.png"
                alt="Nevolution Team"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://nixiga.github.io"
              target="_blank"
            >
              <Image
                src="/assets/images/nixiga.png"
                alt="Nixiga Team"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://">
              <Image
                src="/assets/images/fli.jpeg"
                alt="Forum Linux Indonesia"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
