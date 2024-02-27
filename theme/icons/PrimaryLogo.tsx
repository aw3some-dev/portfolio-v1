import Image from 'next/image';
import logo from '/monogram.png';

export default function PrimaryLogo({ style }: { style?: object }) {
  return (
    <Image
      src={'/monogram.png'}
      alt={'MS Logo'}
      width={38}
      height={76}
      style={{
        margin: '0 auto',
        ...style
      }}
      priority
    />
  );
}
